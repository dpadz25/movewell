// MoveWell session mode: guided exercise flow, set logging, timers, celebration
(function () {

  // ---------- gentle beep ----------
  let audioCtx = null;
  function beep(freq, dur, when) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const t = audioCtx.currentTime + (when || 0);
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.25));
      o.connect(g); g.connect(audioCtx.destination);
      o.start(t); o.stop(t + (dur || 0.25) + 0.05);
    } catch (e) { /* sound is optional */ }
  }
  App.chime = function () { beep(660, 0.2); beep(880, 0.3, 0.18); };
  App.tickBeep = function () { beep(520, 0.12); };

  // ---------- session lifecycle ----------
  App.startSession = function (rid) {
    const r = this.state.routines.find(x => x.id === rid);
    if (!r || r.items.length === 0) { this.toast("Add some exercises to this routine first"); return; }
    this.closeModal();
    this._sess = {
      routineId: r.id, routineName: r.name,
      start: Date.now(), idx: 0,
      items: r.items.map(it => ({ ...it, logged: [], skipped: false }))
    };
    document.getElementById("session").classList.add("open");
    clearInterval(this._sessClockT);
    this._sessClockT = setInterval(() => {
      const el = document.getElementById("session-clock");
      if (el && this._sess) el.textContent = this.fmtClock(Math.floor((Date.now() - this._sess.start) / 1000));
    }, 1000);
    this.renderSessionStep();
  };

  App.exitSession = function () {
    this.confirm("Leave this session?", "Progress in this session will not be saved.", () => {
      this.teardownSession();
    }, "Leave");
  };
  App.teardownSession = function () {
    clearInterval(this._sessClockT);
    this.stopHoldTimer();
    this._sess = null;
    document.getElementById("session").classList.remove("open");
    document.getElementById("rest-overlay").classList.remove("open");
    this.refresh();
  };

  // ---------- previous performance ----------
  App.lastPerformance = function (exId) {
    for (let i = this.state.logs.length - 1; i >= 0; i--) {
      const item = this.state.logs[i].items.find(x => x.exId === exId && x.sets && x.sets.length);
      if (item) return { date: this.state.logs[i].date, sets: item.sets };
    }
    return null;
  };

  // ---------- step rendering ----------
  App.renderSessionStep = function () {
    const s = this._sess;
    if (!s) return;
    const it = s.items[s.idx];
    const ex = this.ex(it.exId);
    const t = this.typeMeta(ex.type);
    const total = s.items.length;
    const isTimed = it.timeSec > 0 || (it.hold > 0 && (!it.reps || it.reps <= 1));
    const timerTarget = it.timeSec > 0 ? it.timeSec : it.hold;
    const targetSets = it.sets * (it.perSide ? 2 : 1);
    const done = it.logged.length;
    const prev = this.lastPerformance(it.exId);
    const displayName = it.variant || ex.name;
    // superset context
    const gMembers = it.groupId ? s.items.map((x, j) => ({ x, j })).filter(o => o.x.groupId === it.groupId) : null;
    const gPos = gMembers ? gMembers.findIndex(o => o.j === s.idx) : -1;
    const partnerNames = gMembers ? gMembers.filter(o => o.j !== s.idx).map(o => this.esc(o.x.variant || (this.ex(o.x.exId) || {}).name)).join(" + ") : "";
    const nxt = s.items[s.idx + 1];
    const canLinkNext = !it.groupId && nxt && !nxt.groupId;
    const variantNote = it.variant ? (ex.variations.find(v => v.name === it.variant) || {}).note : "";
    const yt = "https://www.youtube.com/results?search_query=" + encodeURIComponent(displayName + " exercise how to");

    document.getElementById("session-progress-text").textContent = "Exercise " + (s.idx + 1) + " of " + total;
    document.getElementById("session-progressbar-fill").style.width = ((s.idx) / total * 100) + "%";

    let loggerHtml = "";
    if (isTimed) {
      loggerHtml = `
        <div class="set-log-card">
          <div class="set-log-title"><span>Timer: ${done} of ${targetSets} done</span></div>
          <div class="hold-timer" id="hold-timer">
            <div class="hold-timer-display" id="hold-display">${this.fmtClock(timerTarget)}</div>
            <div class="hold-timer-sub">${it.timeSec > 0 ? "keep going until the chime" : "hold the position until the chime"}${it.perSide ? " · alternate sides each round" : ""}</div>
            <div class="btn-row">
              <button class="btn big grad" id="hold-start">${this.icon("play")} Start Timer</button>
            </div>
            <button class="btn secondary small" id="hold-manual" style="margin-top:0.7rem">${this.icon("check")} Mark one done without timer</button>
          </div>
          <div id="sets-done">${this.setsDoneHtml(it)}</div>
        </div>`;
    } else {
      loggerHtml = `
        <div class="set-log-card">
          <div class="set-log-title"><span>Log your sets: ${done} of ${targetSets} done</span></div>
          ${prev ? `<div class="prev-hint">Last time: ${prev.sets.map(x => (x.reps || "") + (x.weight ? "×" + x.weight + "lb" : "")).filter(Boolean).join(", ") || prev.sets.length + " sets"} · ${this.fmtDate(prev.date)}</div>` : ""}
          <div class="stepper-row">
            <div class="stepper-label">Reps</div>
            <div class="stepper"><button id="rep-minus">${this.icon("minus")}</button><span class="stepper-val" id="rep-val">${it.reps || 10}</span><button id="rep-plus">${this.icon("plus")}</button></div>
          </div>
          <div class="stepper-row">
            <div class="stepper-label">Weight (lbs)<br><span style="font-size:0.72rem;color:var(--muted2);font-weight:400">tap the number to type it</span></div>
            <div class="stepper"><button id="wt-minus">${this.icon("minus")}</button><input type="number" inputmode="decimal" min="0" class="stepper-input" id="wt-val" value="${this._lastWeight && this._lastWeight[it.exId] || 0}"><button id="wt-plus">${this.icon("plus")}</button></div>
          </div>
          <button class="btn big grad" id="log-set">${this.icon("check")} Log Set ${done + 1}${it.perSide ? (done % 2 === 0 ? " (first side)" : " (other side)") : ""}</button>
          <div id="sets-done">${this.setsDoneHtml(it)}</div>
        </div>`;
    }

    document.getElementById("session-body").innerHTML = `
      <span class="tag ${t.color} session-ex-type">${t.name}</span>
      ${gMembers ? `<span class="tag purple session-ex-type">${this.icon("link")} Superset ${gPos + 1} of ${gMembers.length}</span>` : ""}
      <div class="session-ex-name">${this.esc(displayName)}</div>
      ${it.variant ? `<div style="font-size:0.85rem;color:var(--muted);margin:-0.1rem 0 0.3rem">Variation of ${this.esc(ex.name)}${variantNote ? ". " + this.esc(variantNote) : ""}</div>` : ""}
      <div class="session-ex-dose">Goal: ${this.doseText(it)}</div>
      ${gMembers ? `<div class="ss-session-note">${this.icon("link")}<span>Alternates with <strong>${partnerNames}</strong>. No rest between partners, rest after each round.</span></div>` : ""}
      ${canLinkNext ? `<button class="ss-link-inline" id="sess-ss-link">${this.icon("link")} Superset with next: ${this.esc(nxt.variant || (this.ex(nxt.exId) || {}).name)}</button>` : ""}
      ${(ex.variations && ex.variations.length) ? `
      <div class="filter-wrap" style="margin-bottom:0.7rem"><div class="filter-bar" style="padding-bottom:0.2rem" id="sess-variants">
        <button class="chip small-chip ${!it.variant ? "on" : ""}" data-v="">${this.esc(ex.name)}</button>
        ${ex.variations.map(v => `<button class="chip small-chip ${it.variant === v.name ? "on" : ""}" data-v="${this.esc(v.name)}">${this.esc(v.name)}</button>`).join("")}
      </div></div>` : ""}
      <button class="session-howto-toggle" id="howto-toggle"><span style="display:inline-flex;align-items:center;gap:0.45rem">${this.icon("book")} Show me how to do it</span><span id="howto-chev" style="display:inline-flex">${this.icon("chevD")}</span></button>
      <div class="session-howto" id="howto">
        <div class="sess-muscles">${this.icon("person")}<span><strong>Muscles targeted:</strong> ${this.muscleDetail(ex.muscles)}</span></div>
        <a class="video-link" href="${yt}" target="_blank" rel="noopener">${this.icon("video")} Watch a video demonstration</a>
        <ol class="exd-steps">${ex.howTo.map(x => `<li>${this.esc(x)}</li>`).join("")}</ol>
        ${ex.tips && ex.tips.length ? `<div class="exd-tip" style="margin-top:0.6rem">${this.icon("bulb")}<span>${this.esc(ex.tips[0])}</span></div>` : ""}
        ${ex.caution ? `<div class="exd-caution" style="margin-top:0.5rem">${this.icon("alert")}<span>${this.esc(ex.caution)}</span></div>` : ""}
        ${ex.variations && ex.variations.length ? `<div style="margin-top:0.6rem">${ex.variations.map(v => `<div class="exd-variation"><strong>${this.esc(v.name)}</strong><span>${this.esc(v.note)}</span></div>`).join("")}</div>` : ""}
      </div>
      ${loggerHtml}
    `;

    document.getElementById("session-nav").innerHTML = `
      <button class="btn secondary" id="sess-back" ${s.idx === 0 ? "disabled" : ""}>${this.icon("arrowLeft")} Back</button>
      <button class="btn secondary" id="sess-skip">Skip</button>
      <button class="btn grad" id="sess-next">${s.idx === total - 1 ? `Finish ${this.icon("party")}` : `Next ${this.icon("arrowRight")}`}</button>
    `;

    // bindings
    const body = document.getElementById("session-body");
    const variantBar = body.querySelector("#sess-variants");
    if (variantBar) {
      this.bindFilterFades(body);
      variantBar.querySelectorAll(".chip").forEach(ch => ch.onclick = () => {
        it.variant = ch.dataset.v || "";
        if (!it.variant) delete it.variant;
        // persist the choice back to the routine itself
        const routine = this.state.routines.find(x => x.id === s.routineId);
        if (routine && routine.items[s.idx] && routine.items[s.idx].exId === it.exId) {
          if (it.variant) routine.items[s.idx].variant = it.variant;
          else delete routine.items[s.idx].variant;
          this.save();
        }
        this.stopHoldTimer();
        this.renderSessionStep();
      });
    }
    const ssLink = body.querySelector("#sess-ss-link");
    if (ssLink) ssLink.onclick = () => {
      const gid = this.uid();
      it.groupId = gid; nxt.groupId = gid;
      // persist the pairing back to the routine itself
      const routine = this.state.routines.find(x => x.id === s.routineId);
      if (routine && routine.items[s.idx] && routine.items[s.idx].exId === it.exId &&
        routine.items[s.idx + 1] && routine.items[s.idx + 1].exId === nxt.exId) {
        routine.items[s.idx].groupId = gid;
        routine.items[s.idx + 1].groupId = gid;
        this.save();
      }
      this.renderSessionStep();
      this.toast("Superset linked. You'll alternate between the two.");
    };
    body.querySelector("#howto-toggle").onclick = () => {
      const h = body.querySelector("#howto");
      h.classList.toggle("open");
      body.querySelector("#howto-chev").innerHTML = h.classList.contains("open") ? this.icon("chevU") : this.icon("chevD");
    };

    if (isTimed) {
      body.querySelector("#hold-start").onclick = () => this.startHoldTimer(timerTarget, it);
      body.querySelector("#hold-manual").onclick = () => this.logTimedSet(it, timerTarget, true);
    } else {
      const repVal = body.querySelector("#rep-val"), wtVal = body.querySelector("#wt-val");
      body.querySelector("#rep-minus").onclick = () => repVal.textContent = Math.max(1, Number(repVal.textContent) - 1);
      body.querySelector("#rep-plus").onclick = () => repVal.textContent = Number(repVal.textContent) + 1;
      body.querySelector("#wt-minus").onclick = () => wtVal.value = Math.max(0, (Number(wtVal.value) || 0) - ((Number(wtVal.value) || 0) > 20 ? 5 : 1));
      body.querySelector("#wt-plus").onclick = () => wtVal.value = (Number(wtVal.value) || 0) + ((Number(wtVal.value) || 0) >= 20 ? 5 : 1);
      body.querySelector("#log-set").onclick = () => {
        const reps = Number(repVal.textContent), weight = Number(wtVal.value) || 0;
        it.logged.push({ reps, weight: weight || 0 });
        this._lastWeight = this._lastWeight || {};
        this._lastWeight[it.exId] = weight;
        this.afterSetLogged(it);
      };
    }

    document.getElementById("sess-back").onclick = () => { if (s.idx > 0) { this.stopHoldTimer(); s.idx--; this.renderSessionStep(); } };
    document.getElementById("sess-skip").onclick = () => { it.skipped = it.logged.length === 0; this.advance(); };
    document.getElementById("sess-next").onclick = () => this.advance();
  };

  App.setsDoneHtml = function (it) {
    if (!it.logged.length) return "";
    return it.logged.map((x, i) => `
      <div class="set-done-row"><span class="set-check">${App.icon("check")}</span>
        <span>Set ${i + 1}${it.perSide ? (i % 2 === 0 ? " · first side" : " · other side") : ""}:
        ${x.sec ? this.fmtDur(x.sec) : (x.reps + " reps" + (x.weight ? " × " + x.weight + " lbs" : ""))}</span>
      </div>`).join("");
  };

  App.afterSetLogged = function (it) {
    const targetSets = it.sets * (it.perSide ? 2 : 1);
    this.chime();
    it.skipped = false;
    if (it.groupId) return this.supersetNext(it);
    if (it.logged.length >= targetSets) {
      this.toast("Exercise complete!");
      this.advance();
    } else {
      this.openRest(60);
    }
  };

  // superset flow: after a set, hop to the next unfinished partner with no rest.
  // when the round wraps back to the start of the group, rest first.
  App.supersetNext = function (it) {
    const s = this._sess;
    const target = x => x.sets * (x.perSide ? 2 : 1);
    const members = s.items.map((x, i) => ({ x, i })).filter(o => o.x.groupId === it.groupId);
    const remaining = members.filter(o => !o.x.skipped && o.x.logged.length < target(o.x));
    if (!remaining.length) {
      this.toast("Superset complete!");
      s.idx = members[members.length - 1].i;
      this.advance();
      return;
    }
    const curPos = members.findIndex(o => o.i === s.idx);
    let next = remaining[0];
    for (let k = 1; k <= members.length; k++) {
      const o = members[(curPos + k) % members.length];
      if (o.x.logged.length < target(o.x)) { next = o; break; }
    }
    const wrapped = next.i <= s.idx;
    s.idx = next.i;
    if (wrapped) {
      this.openRest(60);
    } else {
      this.renderSessionStep();
      this.toast("Next up: " + (next.x.variant || (this.ex(next.x.exId) || {}).name));
    }
  };

  App.advance = function () {
    const s = this._sess;
    this.stopHoldTimer();
    document.getElementById("rest-overlay").classList.remove("open");
    clearInterval(this._restT);
    if (s.idx >= s.items.length - 1) this.finishSession();
    else { s.idx++; this.renderSessionStep(); }
  };

  // ---------- hold / timed set timer ----------
  App.startHoldTimer = function (target, it) {
    this.stopHoldTimer();
    const holdEl = document.getElementById("hold-timer");
    const disp = document.getElementById("hold-display");
    const startBtn = document.getElementById("hold-start");
    let remaining = target;
    holdEl.classList.add("running");
    startBtn.innerHTML = App.icon("pause") + " Pause";
    disp.textContent = this.fmtClock(remaining);
    let paused = false;
    startBtn.onclick = () => {
      paused = !paused;
      startBtn.innerHTML = paused ? App.icon("play") + " Resume" : App.icon("pause") + " Pause";
    };
    this._holdT = setInterval(() => {
      if (paused) return;
      remaining--;
      if (remaining <= 3 && remaining > 0) this.tickBeep();
      if (remaining <= 0) {
        this.stopHoldTimer();
        this.logTimedSet(it, target, false);
        return;
      }
      const d = document.getElementById("hold-display");
      if (d) d.textContent = this.fmtClock(remaining);
    }, 1000);
  };
  App.stopHoldTimer = function () { clearInterval(this._holdT); this._holdT = null; };

  App.logTimedSet = function (it, sec, manual) {
    it.logged.push({ sec });
    const targetSets = it.sets * (it.perSide ? 2 : 1);
    if (!manual) this.chime();
    it.skipped = false;
    if (it.groupId) return this.supersetNext(it);
    if (it.logged.length >= targetSets) {
      this.toast("Exercise complete!");
      this.advance();
    } else {
      this.renderSessionStep();
      this.toast("Nice! " + (targetSets - it.logged.length) + " to go");
    }
  };

  // ---------- rest timer ----------
  App.openRest = function (sec) {
    const ov = document.getElementById("rest-overlay");
    ov.classList.add("open");
    let remaining = sec;
    const disp = document.getElementById("rest-display");
    disp.textContent = this.fmtClock(remaining);
    clearInterval(this._restT);
    this._restT = setInterval(() => {
      remaining--;
      if (remaining <= 3 && remaining > 0) this.tickBeep();
      if (remaining <= 0) {
        clearInterval(this._restT);
        this.chime();
        ov.classList.remove("open");
        this.renderSessionStep();
        return;
      }
      disp.textContent = this.fmtClock(remaining);
    }, 1000);
    ov.querySelectorAll("[data-rest]").forEach(b => b.onclick = () => { remaining = Number(b.dataset.rest); disp.textContent = this.fmtClock(remaining); });
    document.getElementById("rest-skip").onclick = () => {
      clearInterval(this._restT);
      ov.classList.remove("open");
      this.renderSessionStep();
    };
  };

  // ---------- finish + celebration ----------
  App.finishSession = function () {
    const s = this._sess;
    clearInterval(this._sessClockT);
    this.stopHoldTimer();
    const durationSec = Math.floor((Date.now() - s.start) / 1000);
    const doneItems = s.items.filter(i => i.logged.length > 0);
    const totalSets = s.items.reduce((a, i) => a + i.logged.length, 0);

    this._pendingLog = {
      id: this.uid(), date: new Date().toISOString(),
      routineId: s.routineId, routineName: s.routineName,
      durationSec, exercisesDone: doneItems.length, setsDone: totalSets,
      items: s.items.map(i => ({ exId: i.exId, name: i.variant || (this.ex(i.exId) || {}).name || i.exId, sets: i.logged, skipped: i.skipped })),
      feel: null, pain: null, note: ""
    };

    document.getElementById("session").classList.remove("open");
    const cel = document.getElementById("celebrate");
    cel.classList.add("open");
    this.launchConfetti();

    const name = this.state.profile.name;
    document.getElementById("celebrate-card").innerHTML = `
      <span class="celebrate-emoji">${this.icon("party")}</span>
      <div class="celebrate-title">Wonderful${name ? ", " + this.esc(name) : ""}!</div>
      <div class="celebrate-sub">You completed <strong>${this.esc(s.routineName)}</strong>.<br>Every session is a deposit in your progress.</div>
      <div class="celebrate-stats">
        <div class="celebrate-stat"><div class="celebrate-stat-num">${doneItems.length}</div><div class="celebrate-stat-label">Exercises</div></div>
        <div class="celebrate-stat"><div class="celebrate-stat-num">${totalSets}</div><div class="celebrate-stat-label">Sets</div></div>
        <div class="celebrate-stat"><div class="celebrate-stat-num">${this.fmtClock(durationSec)}</div><div class="celebrate-stat-label">Time</div></div>
      </div>
      <div class="feel-title">How do you feel now?</div>
      <div class="feel-btns" id="cel-feel">
        ${[1, 2, 3, 4, 5].map(i => `<button class="feel-btn" data-f="${i}">${this.icon("face" + i)}</button>`).join("")}
      </div>
      <div class="feel-title" style="font-size:0.9rem">Pain level right now (0 = none)</div>
      <div class="pain-scale" id="cel-pain">${Array.from({ length: 11 }, (_, i) => `<button class="pain-num" data-p="${i}">${i}</button>`).join("")}</div>
      <div class="pain-scale-labels"><span>No pain</span><span>Worst</span></div>
      <input type="text" id="cel-note" placeholder="Optional note about today" style="margin-bottom:0.9rem">
      <button class="btn big grad" id="cel-save">${this.icon("check")} Save & Done</button>
    `;
    const card = document.getElementById("celebrate-card");
    card.querySelectorAll("#cel-feel .feel-btn").forEach(b => b.onclick = () => {
      card.querySelectorAll("#cel-feel .feel-btn").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      this._pendingLog.feel = Number(b.dataset.f);
    });
    card.querySelectorAll("#cel-pain .pain-num").forEach(b => b.onclick = () => {
      card.querySelectorAll("#cel-pain .pain-num").forEach(x => { x.classList.remove("on"); x.style.background = ""; });
      b.classList.add("on");
      const p = Number(b.dataset.p);
      b.style.background = p <= 3 ? "var(--accent)" : p <= 6 ? "var(--yellow)" : "var(--red)";
      this._pendingLog.pain = p;
    });
    card.querySelector("#cel-save").onclick = () => {
      this._pendingLog.note = card.querySelector("#cel-note").value.trim();
      this.state.logs.push(this._pendingLog);
      this.save();
      this._pendingLog = null;
      document.getElementById("celebrate").classList.remove("open");
      this.stopConfetti();
      this._sess = null;
      this.showPage("home");
      this.toast("Session saved. See you next time!");
    };
    this.chime();
    setTimeout(() => this.chime(), 400);
  };

  // ---------- confetti ----------
  App.launchConfetti = function () {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const colors = ["#557a4d", "#3d7a72", "#a1762c", "#b3663a", "#4a6c9a", "#a84a45", "#84cc16"];
    const parts = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.5,
      w: 6 + Math.random() * 7, h: 8 + Math.random() * 8,
      vy: 1.6 + Math.random() * 2.6, vx: -1.2 + Math.random() * 2.4,
      rot: Math.random() * Math.PI, vr: -0.1 + Math.random() * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    const start = Date.now();
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.forEach(p => {
        p.y += p.vy; p.x += p.vx + Math.sin(p.y / 40); p.rot += p.vr;
        if (p.y > canvas.height + 20 && Date.now() - start < 6000) { p.y = -20; p.x = Math.random() * canvas.width; }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (Date.now() - start < 9000) this._confettiT = requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    draw();
  };
  App.stopConfetti = function () { cancelAnimationFrame(this._confettiT); };

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("session-exit").onclick = () => App.exitSession();
  });
})();
