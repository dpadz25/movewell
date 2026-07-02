// MoveWell core: state, storage, navigation, onboarding, home, settings
(function () {
  const STORE_KEY = "movewell-data-v1";

  window.App = {
    state: null,
    charts: {},

    // ---------- storage ----------
    defaultState() {
      return {
        onboarded: false,
        profile: { name: "", textSize: "normal", conditions: [] },
        routines: [],
        logs: [],       // completed sessions
        bodyLogs: []    // body-feel entries from the body map
      };
    },
    load() {
      try {
        const raw = localStorage.getItem(STORE_KEY);
        this.state = raw ? Object.assign(this.defaultState(), JSON.parse(raw)) : this.defaultState();
      } catch (e) {
        this.state = this.defaultState();
      }
    },
    save() {
      localStorage.setItem(STORE_KEY, JSON.stringify(this.state));
    },
    uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); },

    // ---------- lookups ----------
    ex(id) { return window.EXERCISES.find(e => e.id === id); },
    region(id) { return window.REGIONS.find(r => r.id === id) || { id, name: id, icon: "🔹" }; },
    condition(id) { return window.CONDITIONS.find(c => c.id === id) || { id, name: id, blurb: "" }; },
    equip(id) { return window.EQUIPMENT.find(q => q.id === id) || { id, name: id, icon: "" }; },
    typeMeta(id) { return window.EX_TYPES.find(t => t.id === id) || { id, name: id, color: "" }; },

    esc(s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    },

    doseText(d) {
      if (!d) return "";
      const parts = [];
      if (d.sets) parts.push(d.sets + (d.sets === 1 ? " set" : " sets"));
      if (d.timeSec) parts.push(this.fmtDur(d.timeSec));
      else if (d.reps && d.reps > 1) parts.push(d.reps + " reps");
      if (d.hold) parts.push("hold " + d.hold + "s");
      if (d.perSide) parts.push("each side");
      return parts.join(" × ").replace(/ × hold/, " · hold").replace(/ × each side/, " · each side");
    },
    fmtDur(sec) {
      if (sec >= 60 && sec % 60 === 0) return (sec / 60) + " min";
      if (sec >= 60) return Math.floor(sec / 60) + " min " + (sec % 60) + "s";
      return sec + " sec";
    },
    fmtClock(sec) {
      const m = Math.floor(sec / 60), s = sec % 60;
      return m + ":" + String(s).padStart(2, "0");
    },
    fmtDate(iso) {
      return new Date(iso).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
    },
    todayKey(d) {
      const dt = d ? new Date(d) : new Date();
      return dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
    },

    // ---------- streak ----------
    streak() {
      const days = new Set(this.state.logs.map(l => this.todayKey(l.date)));
      let count = 0;
      const cur = new Date();
      // streak survives if today not yet done: start from today if done, else yesterday
      if (!days.has(this.todayKey(cur))) cur.setDate(cur.getDate() - 1);
      while (days.has(this.todayKey(cur))) {
        count++;
        cur.setDate(cur.getDate() - 1);
      }
      return count;
    },

    // ---------- toast / confirm / modal ----------
    toast(msg) {
      const t = document.getElementById("toast");
      t.textContent = msg;
      t.classList.add("show");
      clearTimeout(this._toastT);
      this._toastT = setTimeout(() => t.classList.remove("show"), 2200);
    },
    confirm(title, text, onYes, yesLabel) {
      const c = document.getElementById("confirm");
      document.getElementById("confirm-title").textContent = title;
      document.getElementById("confirm-text").textContent = text;
      const yes = document.getElementById("confirm-yes");
      yes.textContent = yesLabel || "Yes";
      c.classList.add("open");
      yes.onclick = () => { c.classList.remove("open"); onYes(); };
      document.getElementById("confirm-no").onclick = () => c.classList.remove("open");
      document.getElementById("confirm-backdrop").onclick = () => c.classList.remove("open");
    },
    openModal(title, bodyHtml) {
      document.getElementById("modal-title").textContent = title;
      document.getElementById("modal-body").innerHTML = bodyHtml;
      document.getElementById("modal").classList.add("open");
      document.getElementById("modal-body").scrollTop = 0;
    },
    closeModal() { document.getElementById("modal").classList.remove("open"); },

    // ---------- navigation ----------
    showPage(name) {
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      document.getElementById("page-" + name).classList.add("active");
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.page === name));
      this.currentPage = name;
      this.renderPage(name);
    },
    renderPage(name) {
      if (name === "home") this.renderHome();
      if (name === "routines") this.renderRoutines();
      if (name === "library") this.renderLibrary();
      if (name === "bodymap") this.renderBodymap();
      if (name === "progress") this.renderProgress();
    },
    refresh() { this.renderPage(this.currentPage || "home"); },

    applyTextSize() {
      const ts = this.state.profile.textSize;
      document.documentElement.setAttribute("data-textsize", ts === "normal" ? "" : ts);
    },

    // ---------- HOME ----------
    renderHome() {
      const s = this.state;
      const hour = new Date().getHours();
      const greet = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
      const name = s.profile.name ? ", " + this.esc(s.profile.name) : "";
      const streak = this.streak();
      const weekStart = new Date(); weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      const weekLogs = s.logs.filter(l => new Date(l.date) >= new Date(weekStart.toDateString()));
      const totalEx = s.logs.reduce((a, l) => a + (l.exercisesDone || 0), 0);

      // week dots (Sun..Sat)
      const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
      const doneDays = new Set(s.logs.map(l => this.todayKey(l.date)));
      let dots = "";
      for (let i = 0; i < 7; i++) {
        const d = new Date(weekStart); d.setDate(weekStart.getDate() + i);
        const done = doneDays.has(this.todayKey(d));
        const isToday = this.todayKey(d) === this.todayKey();
        dots += `<div class="week-dot ${done ? "done" : ""}"><div class="dot">${done ? "✓" : ""}</div><div class="dot-label" style="${isToday ? "font-weight:800;color:var(--accent-strong)" : ""}">${dayNames[i]}</div></div>`;
      }

      let routinesHtml = "";
      if (s.routines.length === 0) {
        routinesHtml = `
          <div class="empty-state card">
            <div class="empty-icon">🌱</div>
            <p>You don't have any routines yet.<br>Let's set one up. It only takes a minute.</p>
            <button class="btn big" onclick="App.showPage('routines');App.openNewRoutineChooser()">Create My First Routine</button>
          </div>`;
      } else {
        routinesHtml = s.routines.map(r => `
          <div class="routine-card">
            <div class="routine-card-info" onclick="App.openRoutineEditor('${r.id}')">
              <div class="routine-card-name">${this.esc(r.name)}</div>
              <div class="routine-card-meta">${r.items.length} exercises · ~${Math.max(5, Math.round(r.items.length * 2.5))} min</div>
            </div>
            <button class="routine-start-btn" onclick="App.startSession('${r.id}')">▶ Start</button>
          </div>`).join("");
      }

      document.getElementById("home-scroll").innerHTML = `
        <div class="greeting">${greet}${name} 👋</div>
        <div class="greeting-sub">${streak > 0 ? "You're on a roll. Keep it gentle and steady." : "A little movement today is a win."}</div>
        <div class="streak-card">
          <div class="streak-flame">${streak > 0 ? "🔥" : "🌤️"}</div>
          <div>
            <div class="streak-num">${streak} day${streak === 1 ? "" : "s"}</div>
            <div class="streak-label">current streak</div>
          </div>
          <div style="flex:1"></div>
          <div style="text-align:right">
            <div class="streak-num" style="color:var(--blue)">${weekLogs.length}</div>
            <div class="streak-label">sessions this week</div>
          </div>
        </div>
        <div class="card" style="padding:0.8rem 1rem;">
          <div class="section-label" style="margin:0 0 0.2rem">This Week</div>
          <div class="week-dots">${dots}</div>
        </div>
        <div class="home-stats">
          <div class="home-stat"><div class="home-stat-num">${s.logs.length}</div><div class="home-stat-label">Sessions</div></div>
          <div class="home-stat"><div class="home-stat-num">${totalEx}</div><div class="home-stat-label">Exercises</div></div>
          <div class="home-stat"><div class="home-stat-num">${window.EXERCISES.length}</div><div class="home-stat-label">In Library</div></div>
        </div>
        <div class="section-label">Your Routines</div>
        ${routinesHtml}
        ${s.routines.length > 0 ? `<button class="btn ghost big" style="margin-top:0.3rem" onclick="App.showPage('routines');App.openNewRoutineChooser()">＋ New Routine</button>` : ""}
      `;
    },

    // ---------- SETTINGS ----------
    openSettings() {
      const p = this.state.profile;
      this.openModal("Settings", `
        <label class="field-label">Your name</label>
        <input type="text" id="set-name" value="${this.esc(p.name)}" placeholder="Your name">
        <label class="field-label">Text size</label>
        <div class="textsize-options">
          ${["normal", "large", "huge"].map(ts => `
            <button class="textsize-option ${p.textSize === ts ? "on" : ""}" data-ts="${ts}">
              <span class="ts-a" style="font-size:${ts === "normal" ? "1.1rem" : ts === "large" ? "1.4rem" : "1.8rem"}">Aa</span>
              <span class="ts-label">${ts === "normal" ? "Normal" : ts === "large" ? "Large" : "Extra Large"}</span>
            </button>`).join("")}
        </div>
        <button class="btn big" id="set-save" style="margin-top:0.5rem">Save Settings</button>
        <div class="section-label">Your Data</div>
        <div class="btn-row">
          <button class="btn secondary" id="set-export">⬇ Export Backup</button>
          <button class="btn secondary" id="set-import">⬆ Import Backup</button>
        </div>
        <input type="file" id="set-import-file" accept=".json" style="display:none">
        <button class="btn danger big" id="set-reset" style="margin-top:1.4rem">Erase Everything & Start Over</button>
        <p style="font-size:0.75rem;color:var(--muted2);text-align:center;margin-top:1rem">
          MoveWell keeps all data on this device only.<br>This app supports your therapy plan. It is not medical advice.<br>Always follow your physical therapist's or doctor's guidance.
        </p>
      `);
      const body = document.getElementById("modal-body");
      body.querySelectorAll(".textsize-option").forEach(b => b.onclick = () => {
        body.querySelectorAll(".textsize-option").forEach(x => x.classList.remove("on"));
        b.classList.add("on");
        this.state.profile.textSize = b.dataset.ts;
        this.applyTextSize();
      });
      body.querySelector("#set-save").onclick = () => {
        this.state.profile.name = body.querySelector("#set-name").value.trim();
        this.save(); this.applyTextSize(); this.closeModal(); this.refresh();
        this.toast("Settings saved ✓");
      };
      body.querySelector("#set-export").onclick = () => {
        const blob = new Blob([JSON.stringify(this.state, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "movewell-backup-" + this.todayKey() + ".json";
        a.click();
        this.toast("Backup downloaded ✓");
      };
      body.querySelector("#set-import").onclick = () => body.querySelector("#set-import-file").click();
      body.querySelector("#set-import-file").onchange = (e) => {
        const f = e.target.files[0]; if (!f) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result);
            if (!data.profile) throw new Error("bad file");
            this.confirm("Import backup?", "This replaces everything currently in the app with the backup file.", () => {
              this.state = Object.assign(this.defaultState(), data);
              this.save(); this.applyTextSize(); this.closeModal(); this.refresh();
              this.toast("Backup restored ✓");
            }, "Import");
          } catch (err) { this.toast("That file doesn't look like a MoveWell backup."); }
        };
        reader.readAsText(f);
      };
      body.querySelector("#set-reset").onclick = () => {
        this.confirm("Erase everything?", "This deletes your name, routines, and all history from this device. This cannot be undone.", () => {
          localStorage.removeItem(STORE_KEY);
          location.reload();
        }, "Erase All");
      };
    },

    // ---------- ONBOARDING ----------
    startOnboarding() {
      const ob = document.getElementById("onboard");
      ob.classList.add("open");
      this._obData = { name: "", conditions: [], textSize: "normal" };
      this.onboardStep(1);
    },
    onboardStep(n) {
      const inner = document.getElementById("onboard-inner");
      if (n === 1) {
        inner.innerHTML = `
          <div class="onboard-logo">🌿</div>
          <h1>Welcome to Move<span style="color:var(--accent)">Well</span></h1>
          <p>Your personal recovery companion.<br>First things first: what should we call you?</p>
          <input type="text" id="ob-name" placeholder="Your first name" autocomplete="off">
          <button class="btn big" id="ob-next1">Continue →</button>
        `;
        const go = () => {
          this._obData.name = inner.querySelector("#ob-name").value.trim();
          this.onboardStep(2);
        };
        inner.querySelector("#ob-next1").onclick = go;
        inner.querySelector("#ob-name").addEventListener("keydown", e => { if (e.key === "Enter") go(); });
        inner.querySelector("#ob-name").focus();
      }
      if (n === 2) {
        inner.innerHTML = `
          <div class="onboard-logo">🩺</div>
          <h1>What brings you here?</h1>
          <p>Tap everything that applies. We'll suggest ready-made routines for each one. You can skip this and build your own later.</p>
          <div class="chip-row" id="ob-conds">
            ${window.CONDITIONS.map(c => `<button class="chip" data-c="${c.id}">${this.esc(c.name)}</button>`).join("")}
          </div>
          <button class="btn big" id="ob-next2">Continue →</button>
          <button class="btn secondary big" id="ob-skip2" style="margin-top:0.6rem">Skip for now</button>
        `;
        inner.querySelectorAll("#ob-conds .chip").forEach(ch => ch.onclick = () => {
          ch.classList.toggle("on");
          this._obData.conditions = [...inner.querySelectorAll("#ob-conds .chip.on")].map(x => x.dataset.c);
        });
        inner.querySelector("#ob-next2").onclick = () => this.onboardStep(3);
        inner.querySelector("#ob-skip2").onclick = () => { this._obData.conditions = []; this.onboardStep(3); };
      }
      if (n === 3) {
        inner.innerHTML = `
          <div class="onboard-logo">🔍</div>
          <h1>Comfortable reading size</h1>
          <p>Pick the text size that's easiest on your eyes. You can change it any time in Settings.</p>
          <div class="textsize-options" id="ob-ts">
            <button class="textsize-option on" data-ts="normal"><span class="ts-a" style="font-size:1.1rem">Aa</span><span class="ts-label">Normal</span></button>
            <button class="textsize-option" data-ts="large"><span class="ts-a" style="font-size:1.4rem">Aa</span><span class="ts-label">Large</span></button>
            <button class="textsize-option" data-ts="huge"><span class="ts-a" style="font-size:1.8rem">Aa</span><span class="ts-label">Extra Large</span></button>
          </div>
          <button class="btn big" id="ob-finish">Let's Go! 🎉</button>
        `;
        inner.querySelectorAll("#ob-ts .textsize-option").forEach(b => b.onclick = () => {
          inner.querySelectorAll("#ob-ts .textsize-option").forEach(x => x.classList.remove("on"));
          b.classList.add("on");
          this._obData.textSize = b.dataset.ts;
          document.documentElement.setAttribute("data-textsize", b.dataset.ts === "normal" ? "" : b.dataset.ts);
        });
        inner.querySelector("#ob-finish").onclick = () => this.finishOnboarding();
      }
    },
    finishOnboarding() {
      if (this.state.onboarded) return; // guard against double-taps
      const d = this._obData;
      this.state.profile.name = d.name;
      this.state.profile.conditions = d.conditions;
      this.state.profile.textSize = d.textSize;
      // build suggested routines from templates matching chosen conditions
      const added = new Set();
      d.conditions.forEach(cid => {
        window.TEMPLATES.forEach(t => {
          if (t.conditions.includes(cid) && !added.has(t.id)) {
            added.add(t.id);
            this.state.routines.push(this.routineFromTemplate(t));
          }
        });
      });
      this.state.onboarded = true;
      this.save(); this.applyTextSize();
      document.getElementById("onboard").classList.remove("open");
      this.showPage("home");
      if (added.size > 0) this.toast(added.size + " routine" + (added.size === 1 ? "" : "s") + " ready for you ✓");
    },
    routineFromTemplate(t) {
      return {
        id: this.uid(),
        name: t.name,
        desc: t.desc,
        items: t.items.filter(id => this.ex(id)).map(id => {
          const ex = this.ex(id);
          return {
            exId: id,
            sets: ex.dose.sets || 1,
            reps: ex.dose.reps || 0,
            hold: ex.dose.hold || 0,
            timeSec: ex.dose.timeSec || 0,
            perSide: !!ex.dose.perSide
          };
        })
      };
    }
  };

  // ---------- boot ----------
  document.addEventListener("DOMContentLoaded", () => {
    App.load();
    App.applyTextSize();
    document.querySelectorAll(".nav-btn").forEach(b => b.onclick = () => App.showPage(b.dataset.page));
    document.getElementById("btn-settings").onclick = () => App.openSettings();
    document.getElementById("modal-close").onclick = () => App.closeModal();
    document.getElementById("modal-backdrop").onclick = () => App.closeModal();
    if (!App.state.onboarded) App.startOnboarding();
    else App.showPage("home");
  });
})();
