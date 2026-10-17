// MoveWell session mode: guided exercise flow, set logging, timers, celebration
(function () {

  // ---------- gentle beep ----------
  let audioCtx = null;
  function beep(freq, dur, when) {
    if (App.state && App.state.profile && App.state.profile.sound === false) return;
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
    if (!(r.warmupItems || []).length) return this._beginSession(r, false);
    this.pushView("warmup-ask:" + rid, () => this.startSession(rid));
    this.openModal("Ready?", `
      <p style="font-size:0.95rem;color:var(--muted);margin-bottom:1rem">This routine has a short warmup.</p>
      <button class="btn big grad" id="wu-yes">${this.icon("play")} Start with warmup</button>
      <button class="btn secondary big" id="wu-no" style="margin-top:0.7rem">Skip warmup</button>
    `);
    const body = document.getElementById("modal-body");
    body.querySelector("#wu-yes").onclick = () => this._beginSession(r, true);
    body.querySelector("#wu-no").onclick = () => this._beginSession(r, false);
  };

  App._beginSession = function (r, withWarmup) {
    this.closeModal();
    const wuItems = withWarmup
      ? (r.warmupItems || []).map((it, i) => {
        const c = { ...it, logged: [], skipped: false, warmup: true, srcIdx: i };
        delete c.groupId;
        return c;
      })
      : [];
    this._sess = {
      routineId: r.id, routineName: r.name,
      start: Date.now(), idx: 0,
      items: wuItems.concat(r.items.map((it, i) => ({ ...it, logged: [], skipped: false, srcIdx: i })))
    };
    this._openSessionUI();
  };

  // shared by fresh starts and resumed sessions: overlay, clock, first render
  App._openSessionUI = function () {
    document.getElementById("session").classList.add("open");
    clearInterval(this._sessClockT);
    this._sessClockT = setInterval(() => {
      const el = document.getElementById("session-clock");
      if (el && this._sess) el.textContent = this.fmtClock(Math.floor((Date.now() - this._sess.start) / 1000));
    }, 1000);
    this.renderSessionStep();
  };

  // ---------- keep the session alive across page reloads ----------
  // Phones reload the page after the browser sits in the background a while,
  // which used to wipe an in-progress session. A snapshot in localStorage
  // lets the user pick up right where they left off.
  const SESS_KEY = "movewell-active-session-v1";
  App.persistSession = function () {
    try { if (this._sess) localStorage.setItem(SESS_KEY, JSON.stringify(this._sess)); } catch (e) { /* storage may be full */ }
  };
  App.clearSavedSession = function () { localStorage.removeItem(SESS_KEY); };
  App.offerSessionResume = function () {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(SESS_KEY)); } catch (e) { }
    if (!saved || !Array.isArray(saved.items) || !saved.items.length) return;
    // every exercise must still exist (a custom one may have been deleted)
    if (saved.items.some(x => !this.ex(x.exId))) { this.clearSavedSession(); return; }
    this.confirm("Continue your session?",
      "You were partway through “" + saved.routineName + "”. Pick up where you left off?",
      () => {
        this._sess = saved;
        if (this._sess.idx >= this._sess.items.length) this._sess.idx = this._sess.items.length - 1;
        this._openSessionUI();
      }, "Resume",
      () => this.clearSavedSession());
  };

  // the X button opens a calm pause menu instead of a scary "lose everything" prompt
  App.exitSession = function (view) {
    const s = this._sess;
    if (!s) return;
    const doneCount = s.items.filter(x => x.logged.length > 0).length;
    const it = s.items[s.idx];
    const ex = this.ex(it.exId) || {};
    const easier = (ex.variations || [])[0];
    this.stopHoldTimer();
    this._pauseOpen = true;
    if (view === "hurt") {
      this.openModal("Sorry it hurts", `
        <p class="sp-note" style="margin:0 0 0.9rem">Pick what feels right. You can talk to your therapist about it too.</p>
        <div class="menu-list">
          ${easier ? `<button class="menu-item" data-x="easier">${this.icon("swap")}<span>Try the easier version<br><small>${this.esc(easier.name)}</small></span></button>` : ""}
          <button class="menu-item" data-x="skip">${this.icon("chevR")}<span>Skip this exercise</span></button>
          <button class="menu-item" data-x="stop">${this.icon("close")}<span>Stop for today<br><small>This session will not be saved</small></span></button>
        </div>
        <div class="exd-caution" style="margin-top:0.9rem">${this.icon("alert")}<span>Sharp pain, or pain that does not ease with rest? Stop and call your therapist or doctor.</span></div>`);
    } else {
      this.openModal("Paused", `
        <p class="sp-note" style="margin:0 0 0.9rem">You have done ${doneCount} of ${s.items.length} exercises. Take your time.</p>
        <button class="btn big" data-x="resume">${this.icon("play")} Keep going</button>
        <div class="menu-list" style="margin-top:0.7rem">
          <button class="menu-item" data-x="hurt">${this.icon("heart")}<span>This hurts</span></button>
          <button class="menu-item" data-x="end">${this.icon("close")}<span>End for today<br><small>Ending early does not save or count toward your streak</small></span></button>
        </div>`);
    }
    const body = document.getElementById("modal-body");
    body.querySelectorAll("[data-x]").forEach(b => b.onclick = () => {
      const x = b.dataset.x;
      if (x === "resume") { this.closeModal(); this.renderSessionStep(); return; }
      if (x === "hurt") { this._modalStack = []; this.exitSession("hurt"); return; }
      if (x === "easier") {
        it.variant = easier.name;
        this.closeModal(); this.renderSessionStep();
        this.toast("Switched to " + easier.name);
        return;
      }
      if (x === "skip") { this._pauseOpen = false; this.closeModal(); it.skipped = it.logged.length === 0; it.hurt = true; this.advance(); return; }
      if (x === "stop" || x === "end") {
        // ending early never saves: only a session finished to the end counts
        this._pauseOpen = false;
        this.closeModal();
        if (!s.items.some(y => y.logged.length > 0)) { this.teardownSession(); return; }
        this.renderSessionStep();
        this.confirm(x === "stop" ? "Stop for today?" : "End without saving?",
          "Sessions only count when you finish them. If you stop now, today's exercises will not be saved and will not count toward your streak.",
          () => { this.teardownSession(); this.toast(x === "stop" ? "Stopped. Rest up and take care." : "Session ended. It was not saved."); },
          x === "stop" ? "Stop, don't save" : "End, don't save", null, "Keep going");
      }
    });
  };
  App.teardownSession = function () {
    clearInterval(this._sessClockT);
    this.stopHoldTimer();
    this._sess = null;
    this.clearSavedSession();
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

  // ---------- yoga sessions: no set logging, no supersets, no rest breaks ----------
  App.isYogaSession = function (s) {
    const r = this.state.routines.find(x => x.id === s.routineId);
    return r ? this.routineType(r) === "yoga" : false;
  };
  App.completeYogaStep = function (it) {
    if (!it.logged.length) {
      const isTimed = it.timeSec > 0 || (it.hold > 0 && (!it.reps || it.reps <= 1));
      const timerTarget = it.timeSec > 0 ? it.timeSec : it.hold;
      if (isTimed) it.logged.push({ sec: timerTarget });
      else it.logged.push({ reps: it.reps || 1 });
      it.skipped = false;
      this.persistSession();
    }
    this.advance();
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
    // for a per-side exercise, one "set" is both sides together, not each side on its own
    const displaySets = it.sets;
    const doneSets = it.perSide ? Math.floor(done / 2) : done;
    const prev = this.lastPerformance(it.exId);
    const displayName = it.variant || ex.name;
    // yoga routines get a much calmer session screen: no logging, no supersets, no rest breaks
    const yoga = this.isYogaSession(s);
    // superset context (never active in a yoga session)
    const gMembers = (!yoga && it.groupId) ? s.items.map((x, j) => ({ x, j })).filter(o => o.x.groupId === it.groupId) : null;
    const gPos = gMembers ? gMembers.findIndex(o => o.j === s.idx) : -1;
    const partnerNames = gMembers ? gMembers.filter(o => o.j !== s.idx).map(o => this.esc(o.x.variant || (this.ex(o.x.exId) || {}).name)).join(" + ") : "";
    const nxt = s.items[s.idx + 1];
    const canLinkNext = !yoga && !it.warmup && !it.groupId && nxt && !nxt.warmup && !nxt.groupId;
    const variantNote = it.variant ? (ex.variations.find(v => v.name === it.variant) || {}).note : "";
    const yt = "https://www.youtube.com/results?search_query=" + encodeURIComponent(displayName + " exercise how to");
    const shortPoseName = n => n.replace(/\s*\(.*$/, "");

    const wuCount = s.items.filter(x => x.warmup).length;
    document.getElementById("session-progress-text").textContent = it.warmup
      ? "Warmup " + (s.idx + 1) + " of " + wuCount
      : "Exercise " + (s.idx + 1 - wuCount) + " of " + (total - wuCount);
    document.getElementById("session-progressbar-fill").style.width = ((s.idx) / total * 100) + "%";

    // ----- calm panel layout: one big glanceable number, one main action -----
    const tone = yoga || ex.type === "mobility" ? "blue" : ex.type === "stretch" ? "coral" : (ex.type === "lift" || ex.type === "cardio") ? "amber" : "accent";
    const roundsTotal = displaySets;
    const roundNow = Math.min(roundsTotal, doneSets + 1);
    const allDone = !yoga && done >= targetSets;
    const sideLabel = it.perSide ? (done % 2 === 0 ? "first side" : "other side") : "";
    const roundDots = Array.from({ length: Math.min(roundsTotal, 8) }, (_, i) =>
      `<span class="sp-dot ${i < doneSets ? "done" : i === doneSets && !allDone ? "now" : ""}">${i + 1}</span>`).join("");
    const chips = `
      ${it.warmup ? `<span class="sp-chip">Warmup</span>` : ""}
      <span class="sp-chip">${this.esc(t.name)}${it.perSide ? " · each side" : ""}</span>
      ${gMembers ? `<span class="sp-chip">${this.icon("link")} Pair ${gPos + 1} of ${gMembers.length}</span>` : ""}`;

    let centerHtml = "", underHtml = "";
    if (yoga) {
      const winSize = Math.min(5, total);
      let winStart = Math.max(0, s.idx - 2);
      let winEnd = winStart + winSize;
      if (winEnd > total) { winEnd = total; winStart = Math.max(0, winEnd - winSize); }
      let trail = "";
      for (let j = winStart; j < winEnd; j++) {
        const x = s.items[j];
        const st = j === s.idx ? "now" : (x.logged.length > 0 ? "done" : "");
        trail += `<span class="sp-dot ${st}" title="${this.esc(shortPoseName(x.variant || (this.ex(x.exId) || {}).name || ""))}">${j + 1}</span>`;
      }
      centerHtml = `
        <div class="sp-breath" aria-hidden="true"><span></span><b class="br-in">Breathe in</b><b class="br-out">Breathe out</b></div>
        <div class="sp-big-label">Move slowly with your breath</div>`;
      underHtml = `<div class="sp-dots" aria-label="Pose ${s.idx + 1} of ${total}">${trail}</div>`;
    } else if (allDone) {
      centerHtml = `<div class="sp-done-mark">${this.icon("check")}</div><div class="sp-big-label">All ${displaySets} ${displaySets === 1 ? "set" : "sets"} done</div>`;
    } else if (isTimed) {
      centerHtml = `
        <div class="hold-timer" id="hold-timer">
          <div class="sp-big hold-timer-display" id="hold-display" role="timer">${this.fmtClock(timerTarget)}</div>
          <div class="sp-big-label">${it.timeSec > 0 ? "keep going until the chime" : "hold until the chime"}${sideLabel ? ", " + sideLabel : ""}</div>
        </div>`;
      underHtml = `<div class="sp-dots-label">Round ${roundNow} of ${roundsTotal}</div><div class="sp-dots">${roundDots}</div>`;
    } else {
      centerHtml = `
        <div class="sp-counter">
          <button class="sp-round-btn" id="rep-minus" aria-label="One less rep">${this.icon("minus")}</button>
          <div><div class="sp-big stepper-val" id="rep-val" aria-live="polite">${it.reps || 10}</div><div class="sp-big-label">reps${sideLabel ? ", " + sideLabel : ""}</div></div>
          <button class="sp-round-btn solid" id="rep-plus" aria-label="One more rep">${this.icon("plus")}</button>
        </div>`;
      underHtml = `<div class="sp-dots-label">Set ${roundNow} of ${roundsTotal}</div><div class="sp-dots">${roundDots}</div>`;
    }

    // only show the weight stepper when the exercise actually uses weights
    const weightGear = ["dumbbell", "barbell", "kettlebell", "cable", "machine", "smith-machine"];
    const usesWeight = ex.type === "lift" || (ex.equipment || []).some(e => weightGear.includes(e)) || !!(this._lastWeight && this._lastWeight[it.exId]);
    // the one main action under the panel
    let actionHtml = "";
    if (yoga || allDone) {
      actionHtml = "";
    } else if (isTimed) {
      actionHtml = `
        <button class="btn big sp-main" id="hold-start">${this.icon("play")} Start timer</button>
        <button class="sp-quiet" id="hold-manual">I did it without the timer</button>`;
    } else {
      actionHtml = `
        ${(it.warmup || !usesWeight) ? "" : `<div class="sp-weight">
          <span class="sp-weight-label">Weight (lbs)</span>
          <div class="stepper"><button id="wt-minus" aria-label="Less weight">${this.icon("minus")}</button><input type="number" inputmode="decimal" min="0" class="stepper-input" id="wt-val" aria-label="Weight in pounds" value="${this._lastWeight && this._lastWeight[it.exId] || 0}"><button id="wt-plus" aria-label="More weight">${this.icon("plus")}</button></div>
        </div>`}
        ${prev ? `<button class="prev-hint" id="use-last-set">Same as last time: ${prev.sets.map(x => (x.reps || "") + (x.weight ? " × " + x.weight + " lb" : "")).filter(Boolean).join(", ") || prev.sets.length + " sets"}</button>` : ""}
        <button class="btn big sp-main" id="log-set">${this.icon("check")} Done with set ${it.perSide ? doneSets + 1 : done + 1}${sideLabel ? " (" + sideLabel + ")" : ""}</button>`;
    }

    const cue = (ex.tips && ex.tips[0]) || ex.caution || "";
    document.getElementById("session-body").innerHTML = `
      <section class="sp-panel tone-${tone}" aria-label="${this.esc(displayName)}">
        <div class="sp-chips">${chips}</div>
        <h1 class="sp-name session-ex-name">${this.esc(displayName)}</h1>
        <div class="sp-goal">Goal: ${this.doseText(it)}</div>
        <div class="sp-center">${centerHtml}</div>
        ${underHtml}
      </section>
      <div class="sp-actions">${actionHtml}</div>
      ${gMembers ? `<div class="ss-session-note">${this.icon("link")}<span>Alternates with <strong>${partnerNames}</strong>. No rest between them.</span></div>` : ""}
      ${cue ? `<div class="sp-cue">${this.icon("bulb")}<span>${this.esc(cue)}</span></div>` : ""}
      <div id="sets-done" class="sp-sets-done">${this.setsDoneHtml(it)}</div>
      <button class="session-howto-toggle" id="howto-toggle" aria-expanded="${it._howtoOpen ? "true" : "false"}"><span style="display:inline-flex;align-items:center;gap:0.5rem">${this.icon("book")} How to do it</span><span id="howto-chev" style="display:inline-flex">${it._howtoOpen ? this.icon("chevU") : this.icon("chevD")}</span></button>
      <div class="session-howto${it._howtoOpen ? " open" : ""}" id="howto">
        ${(ex.variations && ex.variations.length) ? `
        <div class="sp-sub">Easier or harder version</div>
        <div class="chip-row" id="sess-variants" style="margin-bottom:0.8rem">
          <button class="chip small-chip ${!it.variant ? "on" : ""}" data-v="">${this.esc(ex.name)}</button>
          ${ex.variations.map(v => `<button class="chip small-chip ${it.variant === v.name ? "on" : ""}" data-v="${this.esc(v.name)}">${this.esc(v.name)}</button>`).join("")}
        </div>` : ""}
        ${it.variant && variantNote ? `<p class="sp-note">${this.esc(variantNote)}</p>` : ""}
        <ol class="exd-steps">${ex.howTo.map(x => `<li>${this.esc(x)}</li>`).join("")}</ol>
        ${ex.caution ? `<div class="exd-caution" style="margin-top:0.5rem">${this.icon("alert")}<span>${this.esc(ex.caution)}</span></div>` : ""}
        <div class="sess-muscles" style="margin-top:0.6rem">${this.icon("person")}<span><strong>Muscles:</strong> ${this.muscleDetail(ex.muscles)}</span></div>
        <a class="video-link" href="${yt}" target="_blank" rel="noopener" style="margin-top:0.6rem">${this.icon("video")} Watch a video</a>
        ${canLinkNext ? `<button class="ss-link-inline" id="sess-ss-link">${this.icon("link")} Pair with next: ${this.esc(nxt.variant || (this.ex(nxt.exId) || {}).name)}</button>` : ""}
      </div>
    `;

    const isLast = s.idx === total - 1;
    document.getElementById("session-nav").innerHTML = `
      <button class="sp-nav-btn" id="sess-back" ${s.idx === 0 ? "disabled" : ""}><span class="sp-nav-circle">${this.icon("arrowLeft")}</span><span>Back</span></button>
      <button class="sp-nav-btn primary ${allDone || yoga ? "ready" : ""}" id="sess-next"><span class="sp-nav-circle">${isLast ? this.icon("check") : this.icon("arrowRight")}</span><span>${isLast ? "Finish" : yoga ? "Next pose" : "Next"}</span></button>
      <button class="sp-nav-btn" id="sess-skip"><span class="sp-nav-circle">${this.icon("chevR")}</span><span>Skip</span></button>
    `;

    // bindings
    const body = document.getElementById("session-body");
    const variantBar = body.querySelector("#sess-variants");
    if (variantBar) {
      this.bindFilterFades(body);
      variantBar.querySelectorAll(".chip").forEach(ch => ch.onclick = () => {
        it.variant = ch.dataset.v || "";
        if (!it.variant) delete it.variant;
        // persist the choice back to the routine itself (warmup items live in their own list)
        const routine = this.state.routines.find(x => x.id === s.routineId);
        const srcArr = routine && (it.warmup ? (routine.warmupItems || []) : routine.items);
        if (srcArr && srcArr[it.srcIdx] && srcArr[it.srcIdx].exId === it.exId) {
          if (it.variant) srcArr[it.srcIdx].variant = it.variant;
          else delete srcArr[it.srcIdx].variant;
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
      // persist the pairing back to the routine itself (never for warmup steps)
      const routine = this.state.routines.find(x => x.id === s.routineId);
      if (routine && routine.items[it.srcIdx] && routine.items[it.srcIdx].exId === it.exId &&
        routine.items[nxt.srcIdx] && routine.items[nxt.srcIdx].exId === nxt.exId) {
        routine.items[it.srcIdx].groupId = gid;
        routine.items[nxt.srcIdx].groupId = gid;
        this.save();
      }
      this.renderSessionStep();
      this.toast("Superset linked. You'll alternate between the two.");
    };
    body.querySelector("#howto-toggle").onclick = () => {
      const h = body.querySelector("#howto");
      h.classList.toggle("open");
      // remember the user's choice on this exercise step so re-rendering (e.g. after
      // logging a set) doesn't silently reopen or reclose it out from under them
      it._howtoOpen = h.classList.contains("open");
      body.querySelector("#howto-toggle").setAttribute("aria-expanded", it._howtoOpen ? "true" : "false");
      body.querySelector("#howto-chev").innerHTML = it._howtoOpen ? this.icon("chevU") : this.icon("chevD");
    };

    if (yoga) {
      // no logger UI in a yoga session, so nothing to bind here
    } else if (done >= targetSets) {
      // nothing to bind: the logger is a read-only "all done" card
    } else if (isTimed) {
      body.querySelector("#hold-start").onclick = () => this.startHoldTimer(timerTarget, it);
      body.querySelector("#hold-manual").onclick = () => this.logTimedSet(it, timerTarget, true);
    } else {
      const repVal = body.querySelector("#rep-val"), wtVal = body.querySelector("#wt-val");
      body.querySelector("#rep-minus").onclick = () => repVal.textContent = Math.max(1, Number(repVal.textContent) - 1);
      body.querySelector("#rep-plus").onclick = () => repVal.textContent = Number(repVal.textContent) + 1;
      if (wtVal) {
        body.querySelector("#wt-minus").onclick = () => wtVal.value = Math.max(0, (Number(wtVal.value) || 0) - ((Number(wtVal.value) || 0) > 20 ? 5 : 1));
        body.querySelector("#wt-plus").onclick = () => wtVal.value = (Number(wtVal.value) || 0) + ((Number(wtVal.value) || 0) >= 20 ? 5 : 1);
      }
      const useLastBtn = body.querySelector("#use-last-set");
      if (useLastBtn && prev) {
        useLastBtn.onclick = () => {
          const lastSet = prev.sets[prev.sets.length - 1];
          repVal.textContent = lastSet.reps || (it.reps || 10);
          if (wtVal) wtVal.value = lastSet.weight || 0;
          this.toast("Filled in last time's numbers");
        };
      }
      body.querySelector("#log-set").onclick = () => {
        const reps = Number(repVal.textContent), weight = wtVal ? (Number(wtVal.value) || 0) : 0;
        it.logged.push({ reps, weight: weight || 0 });
        this._lastWeight = this._lastWeight || {};
        if (wtVal) this._lastWeight[it.exId] = weight;
        this.afterSetLogged(it);
      };
    }

    document.getElementById("sess-back").onclick = () => { if (s.idx > 0) { this.stopHoldTimer(); s.idx--; this.renderSessionStep(); } };
    document.getElementById("sess-skip").onclick = () => this.openSkipPrompt(it);
    document.getElementById("sess-next").onclick = () => { if (yoga) this.completeYogaStep(it); else this.advance(); };
    this.persistSession();
  };

  // display name of the session item at idx, for "Up next" hints
  App.upNextName = function (idx) {
    const s = this._sess;
    const n = s && s.items[idx];
    if (!n) return "";
    return n.variant || (this.ex(n.exId) || {}).name || "";
  };

  // ---------- skip / defer ----------
  App.openSkipPrompt = function (it) {
    const s = this._sess;
    const ex = this.ex(it.exId);
    const name = this.esc(it.variant || (ex || {}).name || "this exercise");
    const isLast = s.items.indexOf(it) >= s.items.length - 1;
    const canDefer = !it.groupId && !isLast;
    this.openModal("Skip " + name + "?", `
      <p style="font-size:0.9rem;color:var(--muted);margin-bottom:1rem">Choose what to do with this exercise.</p>
      <button class="btn secondary big" id="skip-forever">Skip for the session</button>
      ${canDefer ? `<button class="btn secondary big" id="skip-defer" style="margin-top:0.7rem">Not available, come back later</button>` : ""}
    `);
    const body = document.getElementById("modal-body");
    body.querySelector("#skip-forever").onclick = () => {
      this.closeModal();
      it.skipped = it.logged.length === 0;
      this.advance();
    };
    const deferBtn = body.querySelector("#skip-defer");
    if (deferBtn) deferBtn.onclick = () => {
      this.closeModal();
      this.deferExercise(it);
    };
  };

  App.deferExercise = function (it) {
    const s = this._sess;
    const i = s.items.indexOf(it);
    if (i < 0 || i >= s.items.length - 1) { this.renderSessionStep(); return; }
    s.items.splice(i, 1);
    s.items.splice(i + 1, 0, it);
    this.renderSessionStep();
    this.toast("We'll come back to this one later");
  };

  App.setsDoneHtml = function (it) {
    if (!it.logged.length) return "";
    // a per-side exercise logs one entry per side, but both sides together are one "set"
    return it.logged.map((x, i) => `
      <div class="set-done-row"><span class="set-check">${App.icon("check")}</span>
        <span>Set ${it.perSide ? Math.floor(i / 2) + 1 : i + 1}${it.perSide ? (i % 2 === 0 ? " · first side" : " · other side") : ""}:
        ${x.sec ? this.fmtDur(x.sec) : (x.reps + " reps" + (x.weight ? " × " + x.weight + " lbs" : ""))}</span>
      </div>`).join("");
  };

  App.afterSetLogged = function (it) {
    this.persistSession();
    const targetSets = it.sets * (it.perSide ? 2 : 1);
    this.chime();
    it.skipped = false;
    if (it.groupId) return this.supersetNext(it);
    const s = this._sess;
    if (it.logged.length >= targetSets) {
      // exercise finished: rest first, then move on (last one goes straight to the finish)
      if (s.idx >= s.items.length - 1) { this.toast("Exercise complete!"); this.advance(); return; }
      this.openRest(60, { next: this.upNextName(s.idx + 1), advance: true });
    } else if (it.perSide && it.logged.length % 2 === 1) {
      // just finished the first side of a per-side exercise: no rest needed, go straight to the other side
      this.renderSessionStep();
    } else {
      // one "set" is both sides together for a per-side exercise, so this only runs after a full round
      const nextSet = it.perSide ? it.logged.length / 2 + 1 : it.logged.length + 1;
      this.openRest(60, { next: "set " + nextSet + " of " + it.sets + " · " + this.upNextName(s.idx) });
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
      this.persistSession();
      if (s.idx >= s.items.length - 1) { this.advance(); return; }
      this.openRest(60, { next: this.upNextName(s.idx + 1), advance: true });
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
    this.persistSession();
    if (wrapped) {
      this.openRest(60, { next: this.upNextName(s.idx) });
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
    this.persistSession();
    const targetSets = it.sets * (it.perSide ? 2 : 1);
    if (!manual) this.chime();
    it.skipped = false;
    if (it.groupId) return this.supersetNext(it);
    const s = this._sess;
    if (it.logged.length >= targetSets) {
      if (s.idx >= s.items.length - 1) { this.toast("Exercise complete!"); this.advance(); return; }
      this.openRest(60, { next: this.upNextName(s.idx + 1), advance: true });
    } else if (it.perSide && it.logged.length % 2 === 1) {
      // just finished the first side of a per-side exercise: no rest needed, go straight to the other side
      this.renderSessionStep();
    } else {
      // one "set" is both sides together for a per-side exercise, so this only runs after a full round
      const nextSet = it.perSide ? it.logged.length / 2 + 1 : it.logged.length + 1;
      this.openRest(60, { next: "round " + nextSet + " of " + it.sets + " · " + this.upNextName(s.idx) });
    }
  };

  // ---------- rest timer ----------
  // opts.next: label shown as "Up next: ..." on the rest screen
  // opts.advance: move to the next exercise when the rest ends (or is skipped)
  App.openRest = function (sec, opts) {
    opts = opts || {};
    const ov = document.getElementById("rest-overlay");
    ov.classList.add("open");
    const nextEl = document.getElementById("rest-next");
    if (nextEl) {
      nextEl.innerHTML = opts.next ? `<span>Up next</span>${this.esc(opts.next)}` : "";
      nextEl.style.display = opts.next ? "" : "none";
    }
    let remaining = sec, total = sec;
    const disp = document.getElementById("rest-display");
    const ring = document.getElementById("rest-ring-fg");
    const C = 2 * Math.PI * 92;
    const paint = () => {
      disp.textContent = this.fmtClock(Math.max(0, remaining));
      ring.style.strokeDasharray = C;
      ring.style.strokeDashoffset = C * (1 - Math.max(0, remaining) / Math.max(1, total));
    };
    // sound switch, remembered for every session
    const sb = document.getElementById("rest-sound");
    const paintSound = () => {
      const on = this.state.profile.sound !== false;
      sb.setAttribute("aria-checked", on);
      sb.classList.toggle("off", !on);
      document.getElementById("rest-sound-icon").innerHTML = this.icon(on ? "speaker" : "speakerOff");
      document.getElementById("rest-sound-label").textContent = on ? "Sound on" : "Sound off";
    };
    sb.onclick = () => { this.state.profile.sound = this.state.profile.sound === false; this.save(); paintSound(); };
    paintSound();
    paint();
    const finish = (chime) => {
      clearInterval(this._restT);
      if (chime) this.chime();
      ov.classList.remove("open");
      if (opts.advance) this.advance();
      else this.renderSessionStep();
    };
    clearInterval(this._restT);
    this._restT = setInterval(() => {
      remaining--;
      if (remaining <= 3 && remaining > 0) this.tickBeep();
      if (remaining <= 0) { paint(); finish(true); return; }
      paint();
    }, 1000);
    ov.querySelectorAll("[data-add]").forEach(b => b.onclick = () => {
      remaining = Math.max(5, remaining + Number(b.dataset.add));
      total = Math.max(total, remaining);
      paint();
    });
    document.getElementById("rest-skip").onclick = () => finish(false);
  };

  // ---------- finish + celebration ----------
  App.finishSession = function () {
    const s = this._sess;
    // a session where nothing was logged should not count toward the streak
    if (!s.items.some(i => i.logged.length > 0)) {
      this.teardownSession();
      this.toast("No exercises were logged, so nothing was saved.");
      return;
    }
    // skipping through to the end is not finishing: at least half of the main exercises must be done
    const main = s.items.filter(i => !i.warmup);
    const doneMain = main.filter(i => i.logged.length > 0).length;
    const need = Math.ceil(main.length / 2);
    if (main.length && doneMain < need) {
      const firstLeft = s.items.findIndex(i => !i.warmup && i.logged.length === 0);
      this._pauseOpen = true;
      this.openModal("Almost there", `
        <p class="sp-note" style="margin:0 0 0.9rem">You did ${doneMain} of ${main.length} exercises. Do at least ${need} to finish the session and have it count.</p>
        <button class="btn big" id="fin-back">${this.icon("arrowLeft")} Go back and do more</button>
        <div class="menu-list" style="margin-top:0.7rem">
          <button class="menu-item" id="fin-quit">${this.icon("close")}<span>End without saving</span></button>
        </div>`);
      const body = document.getElementById("modal-body");
      body.querySelector("#fin-back").onclick = () => {
        this._pauseOpen = false; this.closeModal();
        if (firstLeft >= 0) { s.idx = firstLeft; s.items[firstLeft].skipped = false; }
        this.persistSession();
        this.renderSessionStep();
      };
      body.querySelector("#fin-quit").onclick = () => {
        this._pauseOpen = false; this.closeModal();
        this.teardownSession();
        this.toast("Session ended. It was not saved.");
      };
      return;
    }
    clearInterval(this._sessClockT);
    this.stopHoldTimer();
    const durationSec = Math.floor((Date.now() - s.start) / 1000);
    const doneItems = s.items.filter(i => i.logged.length > 0);
    // a per-side exercise logs one entry per side, but both sides together only count as one set
    const totalSets = s.items.reduce((a, i) => a + (i.perSide ? Math.ceil(i.logged.length / 2) : i.logged.length), 0);

    this._pendingLog = {
      id: this.uid(), date: new Date().toISOString(),
      routineId: s.routineId, routineName: s.routineName,
      durationSec, exercisesDone: doneItems.length, setsDone: totalSets,
      items: s.items.map(i => ({ exId: i.exId, name: i.variant || (this.ex(i.exId) || {}).name || i.exId, sets: i.logged, skipped: i.skipped, warmup: !!i.warmup, hurt: !!i.hurt })),
      feel: null, pain: null, note: ""
    };

    document.getElementById("session").classList.remove("open");
    const cel = document.getElementById("celebrate");
    cel.classList.add("open");
    this.launchConfetti();

    const name = this.state.profile.name;
    // streak as it will be once this session is saved
    this.state.logs.push(this._pendingLog);
    const streakAfter = this.streak();
    this.state.logs.pop();
    // areas with pain logged in the last 30 days get their own question, one per side
    const monthAgo = Date.now() - 30 * 86400000;
    const latest = {};
    (this.state.bodyLogs || []).forEach(b => { if (new Date(b.date).getTime() > monthAgo) latest[b.region] = b; });
    const zones = Object.values(latest).filter(b => b.pain > 0).sort((x, y) => new Date(y.date) - new Date(x.date)).slice(0, 2);
    const painAsk = zones.length ? zones.map(b => ({ key: b.region, label: b.label || this.region(String(b.region).replace(/-(left|right)$/, "")).name, before: b.pain }))
      : [{ key: "", label: "", before: null }];
    const painVals = {};
    const FEELS = [[5, "Great"], [4, "Good"], [3, "Okay"], [2, "Tired"], [1, "Sore"]];
    const mins = Math.max(1, Math.round(durationSec / 60));

    document.getElementById("celebrate-card").innerHTML = `
      <section class="fin-hero">
        <div class="fin-ring">${this.icon("check")}</div>
        <h1 class="fin-title">Nice work${name ? ", " + this.esc(name) : ""}.</h1>
        <div class="fin-sub">${this.esc(s.routineName)} is done for today.</div>
        <div class="fin-stats">
          <div><div class="fin-num">${doneItems.length}</div><div class="fin-lbl">exercise${doneItems.length === 1 ? "" : "s"}</div></div>
          <div><div class="fin-num">${mins}</div><div class="fin-lbl">minute${mins === 1 ? "" : "s"}</div></div>
          <div><div class="fin-num">${streakAfter}</div><div class="fin-lbl">day${streakAfter === 1 ? "" : "s"} in a row</div></div>
        </div>
      </section>
      <div class="fin-body">
        <div class="fin-card">
          <h2>How do you feel now?</h2>
          <div class="fin-feels" id="cel-feel">
            ${FEELS.map(f => `<button class="fin-feel" data-f="${f[0]}" aria-pressed="false"><span class="fin-face">${this.icon("face" + f[0])}</span><span>${f[1]}</span></button>`).join("")}
          </div>
        </div>
        ${painAsk.map((z, i) => `
          <div class="fin-card">
            <h2>${z.label ? this.esc(z.label) + " now" : "Any pain right now?"}</h2>
            <p class="fin-hint">${z.before != null ? `It was ${z.before} out of 10 last time. ` : ""}0 means no pain, 10 is the worst.</p>
            <div class="pain-scale fin-pain" data-z="${i}">${Array.from({ length: 11 }, (_, n) => `<button class="pain-num" data-p="${n}" aria-label="Pain ${n}">${n}</button>`).join("")}</div>
          </div>`).join("")}
        <input type="text" id="cel-note" placeholder="Anything to remember? (optional)" aria-label="Note about today">
      </div>
      <div class="fin-foot"><button class="btn big grad" id="cel-save">Save and finish</button></div>
    `;
    const card = document.getElementById("celebrate-card");
    card.scrollTop = 0;
    card.querySelectorAll("#cel-feel .fin-feel").forEach(b => b.onclick = () => {
      card.querySelectorAll("#cel-feel .fin-feel").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); });
      this._pendingLog.feel = Number(b.dataset.f);
    });
    card.querySelectorAll(".fin-pain").forEach(row => row.querySelectorAll(".pain-num").forEach(b => b.onclick = () => {
      row.querySelectorAll(".pain-num").forEach(x => { x.classList.remove("on"); x.style.background = ""; });
      b.classList.add("on");
      const p = Number(b.dataset.p);
      b.style.background = p <= 3 ? "var(--accent)" : p <= 6 ? "var(--yellow)" : "var(--red)";
      painVals[row.dataset.z] = p;
    }));
    card.querySelector("#cel-save").onclick = () => {
      const log = this._pendingLog;
      log.note = card.querySelector("#cel-note").value.trim();
      const vals = Object.values(painVals);
      log.pain = vals.length ? Math.max(...vals) : null;
      // each side's answer also becomes a body note, so the Body area map stays current
      Object.entries(painVals).forEach(([i, p]) => {
        const z = painAsk[i];
        if (z && z.key) this.state.bodyLogs.push({ date: new Date().toISOString(), region: z.key, label: z.label, pain: p, note: "After " + s.routineName });
      });
      this.state.logs.push(log);
      this.save();
      const streakNow = this.streak();
      const hitMilestone = [3, 7, 14, 30, 60, 100, 180, 365].includes(streakNow);
      this.clearSavedSession();
      this._pendingLog = null;
      document.getElementById("celebrate").classList.remove("open");
      this.stopConfetti();
      this._sess = null;
      this.showPage("home");
      const base = "Session saved. See you next time!";
      this.toast(hitMilestone ? streakNow + " days in a row! " + base : base);
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
    const colors = ["#F6C453", "#FFFFFF", "#9FD3F5", "#F4A98A", "#C9E4B8"];
    const parts = Array.from({ length: (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) ? 0 : 60 }, () => ({
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
