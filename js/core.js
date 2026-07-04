// MoveWell core: state, storage, navigation, onboarding, home, settings
(function () {
  const STORE_KEY = "movewell-data-v1";

  window.App = {
    state: null,
    charts: {},

    // ---------- icons ----------
    icon(name, cls) {
      const body = window.ICONS[name] || window.ICONS.sparkle;
      return `<svg class="icn${cls ? " " + cls : ""}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;
    },

    // ---------- storage ----------
    defaultState() {
      return {
        onboarded: false,
        profile: {
          name: "", textSize: "normal", conditions: [],
          sex: "", heightFt: 0, heightIn: 0, weightLb: 0,
          theme: "forest", dark: false
        },
        routines: [],
        customExercises: [],
        logs: [],       // completed sessions
        bodyLogs: []    // body-feel entries from the body map
      };
    },
    load() {
      try {
        const raw = localStorage.getItem(STORE_KEY);
        this.state = raw ? Object.assign(this.defaultState(), JSON.parse(raw)) : this.defaultState();
        this.state.profile = Object.assign(this.defaultState().profile, this.state.profile);
        if (!Array.isArray(this.state.customExercises)) this.state.customExercises = [];
      } catch (e) {
        this.state = this.defaultState();
      }
      // older saves predate the Home/Library split and archiving
      this.state.routines.forEach(r => {
        if (r.onHome === undefined) r.onHome = true;
        if (r.archived === undefined) r.archived = false;
      });
      this.syncCustomExercises();
    },
    save() {
      localStorage.setItem(STORE_KEY, JSON.stringify(this.state));
    },
    uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); },

    // merge user-created exercises into the live library
    syncCustomExercises() {
      window.EXERCISES = window.EXERCISES.filter(e => !e.custom);
      this.state.customExercises.forEach(ex => window.EXERCISES.push(ex));
    },

    // ---------- lookups ----------
    ex(id) { return window.EXERCISES.find(e => e.id === id); },
    region(id) { return window.REGIONS.find(r => r.id === id) || { id, name: id, icon: "core", color: "" }; },
    condition(id) { return window.CONDITIONS.find(c => c.id === id) || { id, name: id, blurb: "" }; },
    equip(id) { return window.EQUIPMENT.find(q => q.id === id) || { id, name: id, icon: "bodyweight" }; },
    typeMeta(id) { return window.EX_TYPES.find(t => t.id === id) || { id, name: id, color: "" }; },

    esc(s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    },

    // realistic routine length: work time + rest between sets + setup between exercises
    estimateRoutineMin(r) {
      let sec = 0;
      r.items.forEach(it => {
        const ex = this.ex(it.exId);
        if (!ex) return;
        const sets = (it.sets || 1) * (it.perSide ? 2 : 1);
        let work;
        if (it.timeSec) work = it.timeSec;
        else if (it.hold && (!it.reps || it.reps <= 1)) work = it.hold + 5;
        else work = (it.reps || 10) * ((it.hold || 0) + 4);
        const rest = ex.type === "cardio" ? 0 : ex.type === "lift" ? 90 : 20;
        const setup = ex.type === "lift" ? 45 : 25;
        sec += sets * work + Math.max(0, sets - 1) * rest + setup;
      });
      return Math.max(3, Math.round(sec / 60));
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
      this.bindFilterFades(document.getElementById("modal-body"));
    },
    closeModal() { document.getElementById("modal").classList.remove("open"); },

    // fade hints on horizontally scrolling filter bars
    bindFilterFades(root) {
      (root || document).querySelectorAll(".filter-wrap").forEach(wrap => {
        const bar = wrap.querySelector(".filter-bar");
        if (!bar) return;
        const update = () => {
          const max = bar.scrollWidth - bar.clientWidth;
          wrap.classList.toggle("at-end", max <= 4 || bar.scrollLeft >= max - 4);
          wrap.classList.toggle("scrolled", bar.scrollLeft > 4);
        };
        bar.addEventListener("scroll", update, { passive: true });
        update();
      });
    },

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

    applyAppearance() {
      const p = this.state.profile;
      document.documentElement.setAttribute("data-textsize", p.textSize === "normal" ? "" : p.textSize);
      document.documentElement.setAttribute("data-theme", p.theme || "forest");
      document.documentElement.setAttribute("data-dark", p.dark ? "1" : "");
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
        dots += `<div class="week-dot ${done ? "done" : ""}"><div class="dot">${done ? this.icon("check") : ""}</div><div class="dot-label" style="${isToday ? "font-weight:800;color:var(--accent-strong)" : ""}">${dayNames[i]}</div></div>`;
      }

      const homeRoutines = s.routines.filter(r => r.onHome && !r.archived);
      let routinesHtml = "";
      if (s.routines.length === 0) {
        routinesHtml = `
          <div class="empty-state card">
            <div class="empty-icon">${this.icon("leaf")}</div>
            <p>You don't have any routines yet.<br>Let's set one up. It only takes a minute.</p>
            <button class="btn big grad" onclick="App.showPage('routines');App.openNewRoutineChooser()">Create My First Routine</button>
          </div>`;
      } else if (homeRoutines.length === 0) {
        routinesHtml = `
          <div class="empty-state card">
            <div class="empty-icon">${this.icon("home")}</div>
            <p>Nothing on your Home screen yet.<br>Pick which routines live here from your library.</p>
            <button class="btn big grad" onclick="App.showPage('routines')">Open My Routine Library</button>
          </div>`;
      } else {
        routinesHtml = `<div class="swipe-hint">Swipe a card left to reorder, edit, or archive</div>` +
          homeRoutines.map(r => this.routineCardHtml(r, "home")).join("");
      }

      document.getElementById("home-scroll").innerHTML = `
        <div class="greeting">${greet}${name}</div>
        <div class="greeting-sub">${streak > 0 ? "You're on a roll. Keep it steady." : "A little movement today is a win."}</div>
        <div class="streak-card">
          <div class="streak-flame">${this.icon(streak > 0 ? "flame" : "sun")}</div>
          <div>
            <div class="streak-num">${streak} day${streak === 1 ? "" : "s"}</div>
            <div class="streak-label">current streak</div>
          </div>
          <div style="flex:1"></div>
          <div style="text-align:right">
            <div class="streak-num">${weekLogs.length}</div>
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
        ${s.routines.length > 0 ? `<button class="btn ghost big" style="margin-top:0.3rem" onclick="App.showPage('routines');App.openNewRoutineChooser()">${this.icon("plus")} New Routine</button>` : ""}
      `;
      this.bindRoutineCards(document.getElementById("home-scroll"), "home");
    },

    // ---------- routine cards (shared by Home and Routines library) ----------
    routineCardHtml(r, mode) {
      const meta = `${r.items.length} exercises · ~${this.estimateRoutineMin(r)} min`;
      const actions = mode === "home" ? `
          <button class="swipe-btn" data-act="up" aria-label="Move up">${this.icon("arrowUp")}<span>Up</span></button>
          <button class="swipe-btn" data-act="down" aria-label="Move down">${this.icon("arrowDown")}<span>Down</span></button>
          <button class="swipe-btn" data-act="edit" aria-label="Edit">${this.icon("pencil")}<span>Edit</span></button>
          <button class="swipe-btn danger" data-act="archive" aria-label="Archive">${this.icon("archive")}<span>Archive</span></button>`
        : `
          <button class="swipe-btn ${r.onHome ? "on" : ""}" data-act="home" aria-label="${r.onHome ? "Remove from Home" : "Add to Home"}">${this.icon("home")}<span>${r.onHome ? "On Home" : "Add"}</span></button>
          <button class="swipe-btn" data-act="edit" aria-label="Edit">${this.icon("pencil")}<span>Edit</span></button>
          <button class="swipe-btn danger" data-act="archive" aria-label="Archive">${this.icon("archive")}<span>Archive</span></button>`;
      return `
        <div class="swipe-wrap" data-rid="${r.id}">
          <div class="swipe-actions">${actions}</div>
          <div class="routine-card swipe-card">
            <div class="routine-card-info" data-act="open">
              <div class="routine-card-name">${this.esc(r.name)}</div>
              <div class="routine-card-meta">${meta}${mode === "library" && r.onHome ? ` · <span class="onhome-flag">${this.icon("home")} on Home</span>` : ""}</div>
            </div>
            <button class="routine-start-btn" data-act="start">${this.icon("play")} Start</button>
          </div>
        </div>`;
    },

    bindRoutineCards(root, mode) {
      this.bindSwipeCards(root);
      root.querySelectorAll(".swipe-wrap[data-rid]").forEach(wrap => {
        const rid = wrap.dataset.rid;
        wrap.querySelectorAll("[data-act]").forEach(el => el.onclick = (e) => {
          e.stopPropagation();
          const r = this.state.routines.find(x => x.id === rid);
          if (!r) return;
          const act = el.dataset.act;
          if (act === "open" || act === "edit") this.openRoutineEditor(rid);
          if (act === "start") this.startSession(rid);
          if (act === "up" || act === "down") this.moveRoutine(r, act === "up" ? -1 : 1);
          if (act === "archive") {
            r.archived = true;
            this.save(); this.refresh();
            this.toast("Archived. Find it at the bottom of Routines.");
          }
          if (act === "home") {
            r.onHome = !r.onHome;
            this.save(); this.refresh();
            this.toast(r.onHome ? "Added to your Home screen" : "Removed from your Home screen");
          }
        });
      });
    },

    // reorder within the routines that are visible on Home
    moveRoutine(r, dir) {
      const arr = this.state.routines;
      const idx = arr.indexOf(r);
      let j = idx + dir;
      while (j >= 0 && j < arr.length && !(arr[j].onHome && !arr[j].archived)) j += dir;
      if (j < 0 || j >= arr.length) return;
      [arr[idx], arr[j]] = [arr[j], arr[idx]];
      this.save(); this.refresh();
    },

    // swipe left on a card to reveal its action tray
    bindSwipeCards(root) {
      const closeOthers = (except) => root.querySelectorAll(".swipe-wrap.open").forEach(w => {
        if (w === except) return;
        w.classList.remove("open");
        const c = w.querySelector(".swipe-card");
        c.style.transition = "transform .2s ease";
        c.style.transform = "translateX(0)";
      });
      root.querySelectorAll(".swipe-wrap").forEach(wrap => {
        const card = wrap.querySelector(".swipe-card");
        if (!card) return;
        const trayW = () => wrap.querySelector(".swipe-actions").offsetWidth + 6;
        const apply = (x, anim) => {
          card.style.transition = anim ? "transform .2s ease" : "none";
          card.style.transform = `translateX(${x}px)`;
        };
        let startX = 0, startY = 0, tracking = false, dragging = false, wasOpen = false, suppress = false;
        card.addEventListener("pointerdown", e => {
          tracking = true; dragging = false;
          startX = e.clientX; startY = e.clientY;
          wasOpen = wrap.classList.contains("open");
        });
        card.addEventListener("pointermove", e => {
          if (!tracking) return;
          const dx = e.clientX - startX, dy = e.clientY - startY;
          if (!dragging) {
            if (Math.abs(dx) < 8) return;
            if (Math.abs(dy) > Math.abs(dx)) { tracking = false; return; }
            dragging = true;
            try { card.setPointerCapture(e.pointerId); } catch (err) { }
            closeOthers(wrap);
          }
          let x = (wasOpen ? -trayW() : 0) + dx;
          x = Math.min(0, Math.max(-trayW() - 18, x));
          apply(x, false);
        });
        const finish = e => {
          if (!tracking) return;
          tracking = false;
          if (!dragging) return;
          suppress = true;
          const dx = e.clientX - startX;
          const open = wasOpen ? dx < trayW() * 0.4 : dx < -trayW() * 0.4;
          wrap.classList.toggle("open", open);
          apply(open ? -trayW() : 0, true);
        };
        card.addEventListener("pointerup", finish);
        card.addEventListener("pointercancel", () => {
          if (!tracking) return;
          tracking = false;
          if (dragging) apply(wrap.classList.contains("open") ? -trayW() : 0, true);
        });
        // a drag should not also fire the tap actions underneath
        card.addEventListener("click", e => {
          if (suppress) { e.stopPropagation(); e.preventDefault(); suppress = false; return; }
          if (wrap.classList.contains("open")) {
            e.stopPropagation(); e.preventDefault();
            wrap.classList.remove("open");
            apply(0, true);
          }
        }, true);
      });
    },

    // ---------- SETTINGS ----------
    openSettings() {
      const p = this.state.profile;
      const themes = [["forest", "Forest"], ["ocean", "Ocean"], ["sunset", "Sunset"], ["berry", "Berry"]];
      this.openModal("Settings", `
        <label class="field-label">Your name</label>
        <input type="text" id="set-name" value="${this.esc(p.name)}" placeholder="Your name">
        <label class="field-label">Sex</label>
        <div class="sex-options" id="set-sex">
          <button class="sex-option ${p.sex === "male" ? "on" : ""}" data-sex="male">${this.icon("person")}Male</button>
          <button class="sex-option ${p.sex === "female" ? "on" : ""}" data-sex="female">${this.icon("person")}Female</button>
        </div>
        <div class="ob-field-grid">
          <div><label>Height (ft)</label><input type="number" id="set-hft" min="0" max="8" value="${p.heightFt || ""}" placeholder="5"></div>
          <div><label>Height (in)</label><input type="number" id="set-hin" min="0" max="11" value="${p.heightIn || ""}" placeholder="10"></div>
          <div><label>Weight (lbs)</label><input type="number" id="set-wt" min="0" max="900" value="${p.weightLb || ""}" placeholder="165"></div>
        </div>
        <label class="field-label">Color theme</label>
        <div class="theme-options" id="set-theme">
          ${themes.map(([id, label]) => `
            <button class="theme-option ${p.theme === id ? "on" : ""}" data-theme="${id}">
              <span class="sw sw-${id}"></span><span class="sw-label">${label}</span>
            </button>`).join("")}
        </div>
        <div class="toggle-row">
          <div class="stepper-label" style="display:flex;align-items:center;gap:0.45rem">${this.icon("moon")} Dark mode</div>
          <label class="switch"><input type="checkbox" id="set-dark" ${p.dark ? "checked" : ""}><span class="slider"></span></label>
        </div>
        <label class="field-label">Text size</label>
        <div class="textsize-options">
          ${["normal", "large", "huge"].map(ts => `
            <button class="textsize-option ${p.textSize === ts ? "on" : ""}" data-ts="${ts}">
              <span class="ts-a" style="font-size:${ts === "normal" ? "1.1rem" : ts === "large" ? "1.4rem" : "1.8rem"}">Aa</span>
              <span class="ts-label">${ts === "normal" ? "Normal" : ts === "large" ? "Large" : "Extra Large"}</span>
            </button>`).join("")}
        </div>
        <button class="btn big grad" id="set-save" style="margin-top:0.5rem">Save Settings</button>
        <div class="section-label">Your Data</div>
        <div class="btn-row">
          <button class="btn secondary" id="set-export">${this.icon("download")} Export Backup</button>
          <button class="btn secondary" id="set-import">${this.icon("upload")} Import Backup</button>
        </div>
        <input type="file" id="set-import-file" accept=".json" style="display:none">
        <button class="btn danger big" id="set-reset" style="margin-top:1.4rem">Erase Everything & Start Over</button>
        <p style="font-size:0.75rem;color:var(--muted2);text-align:center;margin-top:1rem">
          MoveWell keeps all data on this device only.<br>This app supports your training and therapy plan. It is not medical advice.<br>Always follow your physical therapist's or doctor's guidance.
        </p>
      `);
      const body = document.getElementById("modal-body");
      body.querySelectorAll(".textsize-option").forEach(b => b.onclick = () => {
        body.querySelectorAll(".textsize-option").forEach(x => x.classList.remove("on"));
        b.classList.add("on");
        this.state.profile.textSize = b.dataset.ts;
        this.applyAppearance();
      });
      body.querySelectorAll("#set-sex .sex-option").forEach(b => b.onclick = () => {
        body.querySelectorAll("#set-sex .sex-option").forEach(x => x.classList.remove("on"));
        b.classList.add("on");
        this.state.profile.sex = b.dataset.sex;
      });
      body.querySelectorAll("#set-theme .theme-option").forEach(b => b.onclick = () => {
        body.querySelectorAll("#set-theme .theme-option").forEach(x => x.classList.remove("on"));
        b.classList.add("on");
        this.state.profile.theme = b.dataset.theme;
        this.applyAppearance();
      });
      body.querySelector("#set-dark").onchange = (e) => {
        this.state.profile.dark = e.target.checked;
        this.applyAppearance();
      };
      body.querySelector("#set-save").onclick = () => {
        const p2 = this.state.profile;
        p2.name = body.querySelector("#set-name").value.trim();
        p2.heightFt = Number(body.querySelector("#set-hft").value) || 0;
        p2.heightIn = Number(body.querySelector("#set-hin").value) || 0;
        p2.weightLb = Number(body.querySelector("#set-wt").value) || 0;
        this.save(); this.applyAppearance(); this.closeModal(); this.refresh();
        this.toast("Settings saved");
      };
      body.querySelector("#set-export").onclick = () => {
        const blob = new Blob([JSON.stringify(this.state, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "movewell-backup-" + this.todayKey() + ".json";
        a.click();
        this.toast("Backup downloaded");
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
              this.state.profile = Object.assign(this.defaultState().profile, this.state.profile);
              if (!Array.isArray(this.state.customExercises)) this.state.customExercises = [];
              this.syncCustomExercises();
              this.save(); this.applyAppearance(); this.closeModal(); this.refresh();
              this.toast("Backup restored");
            }, "Import");
          } catch (err) { this.toast("That file doesn't look like a MoveWell backup."); }
        };
        reader.readAsText(f);
      };
      body.querySelector("#set-reset").onclick = () => {
        this.confirm("Erase everything?", "This deletes your profile, routines, custom exercises, and all history from this device. This cannot be undone.", () => {
          localStorage.removeItem(STORE_KEY);
          location.reload();
        }, "Erase All");
      };
    },

    // ---------- ONBOARDING ----------
    startOnboarding() {
      const ob = document.getElementById("onboard");
      ob.classList.add("open");
      this._obData = { name: "", conditions: [], textSize: "normal", sex: "", heightFt: 0, heightIn: 0, weightLb: 0, theme: "forest" };
      this.onboardStep(1);
    },
    obDots(n) {
      return `<div class="onboard-step-dots">${[1, 2, 3, 4].map(i => `<i class="${i === n ? "on" : ""}"></i>`).join("")}</div>`;
    },
    onboardStep(n) {
      const inner = document.getElementById("onboard-inner");
      if (n === 1) {
        inner.innerHTML = `
          <div class="onboard-logo">${this.icon("leaf")}</div>
          ${this.obDots(1)}
          <h1>Welcome to Move<span style="color:var(--accent)">Well</span></h1>
          <p>Your personal movement companion, from therapy stretches to gym lifts.<br>First things first, what should we call you?</p>
          <input type="text" id="ob-name" placeholder="Your first name" autocomplete="off">
          <button class="btn big grad" id="ob-next1">Continue ${this.icon("arrowRight")}</button>
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
        const d = this._obData;
        inner.innerHTML = `
          <div class="onboard-logo">${this.icon("scale")}</div>
          ${this.obDots(2)}
          <h1>A little about you</h1>
          <p>This helps tailor the body map and keep your stats in one place. You can change it any time in Settings.</p>
          <div class="sex-options" id="ob-sex">
            <button class="sex-option ${d.sex === "male" ? "on" : ""}" data-sex="male">${this.icon("person")}Male</button>
            <button class="sex-option ${d.sex === "female" ? "on" : ""}" data-sex="female">${this.icon("person")}Female</button>
          </div>
          <div class="ob-field-grid">
            <div><label>Height (ft)</label><input type="number" id="ob-hft" min="0" max="8" placeholder="5" value="${d.heightFt || ""}"></div>
            <div><label>Height (in)</label><input type="number" id="ob-hin" min="0" max="11" placeholder="10" value="${d.heightIn || ""}"></div>
            <div><label>Weight (lbs)</label><input type="number" id="ob-wt" min="0" max="900" placeholder="165" value="${d.weightLb || ""}"></div>
          </div>
          <button class="btn big grad" id="ob-next2">Continue ${this.icon("arrowRight")}</button>
          <button class="btn secondary big" id="ob-skip2" style="margin-top:0.6rem">Skip for now</button>
        `;
        inner.querySelectorAll("#ob-sex .sex-option").forEach(b => b.onclick = () => {
          inner.querySelectorAll("#ob-sex .sex-option").forEach(x => x.classList.remove("on"));
          b.classList.add("on");
          d.sex = b.dataset.sex;
        });
        const grab = () => {
          d.heightFt = Number(inner.querySelector("#ob-hft").value) || 0;
          d.heightIn = Number(inner.querySelector("#ob-hin").value) || 0;
          d.weightLb = Number(inner.querySelector("#ob-wt").value) || 0;
        };
        inner.querySelector("#ob-next2").onclick = () => { grab(); this.onboardStep(3); };
        inner.querySelector("#ob-skip2").onclick = () => this.onboardStep(3);
      }
      if (n === 3) {
        inner.innerHTML = `
          <div class="onboard-logo">${this.icon("medical")}</div>
          ${this.obDots(3)}
          <h1>What brings you here?</h1>
          <p>Tap everything that applies, from recovery goals to gym training. We'll suggest ready-made routines for each one.</p>
          <div class="chip-row" id="ob-conds">
            ${window.CONDITIONS.map(c => `<button class="chip ${this._obData.conditions.includes(c.id) ? "on" : ""}" data-c="${c.id}">${this.esc(c.name)}</button>`).join("")}
          </div>
          <button class="btn big grad" id="ob-next3">Continue ${this.icon("arrowRight")}</button>
          <button class="btn secondary big" id="ob-skip3" style="margin-top:0.6rem">Skip for now</button>
        `;
        inner.querySelectorAll("#ob-conds .chip").forEach(ch => ch.onclick = () => {
          ch.classList.toggle("on");
          this._obData.conditions = [...inner.querySelectorAll("#ob-conds .chip.on")].map(x => x.dataset.c);
        });
        inner.querySelector("#ob-next3").onclick = () => this.onboardStep(4);
        inner.querySelector("#ob-skip3").onclick = () => { this._obData.conditions = []; this.onboardStep(4); };
      }
      if (n === 4) {
        const d = this._obData;
        inner.innerHTML = `
          <div class="onboard-logo">${this.icon("palette")}</div>
          ${this.obDots(4)}
          <h1>Make it yours</h1>
          <p>Pick a color theme and a comfortable reading size. Both can change any time in Settings.</p>
          <div class="theme-options" id="ob-theme">
            ${[["forest", "Forest"], ["ocean", "Ocean"], ["sunset", "Sunset"], ["berry", "Berry"]].map(([id, label]) => `
              <button class="theme-option ${d.theme === id ? "on" : ""}" data-theme="${id}">
                <span class="sw sw-${id}"></span><span class="sw-label">${label}</span>
              </button>`).join("")}
          </div>
          <div class="textsize-options" id="ob-ts">
            <button class="textsize-option ${d.textSize === "normal" ? "on" : ""}" data-ts="normal"><span class="ts-a" style="font-size:1.1rem">Aa</span><span class="ts-label">Normal</span></button>
            <button class="textsize-option ${d.textSize === "large" ? "on" : ""}" data-ts="large"><span class="ts-a" style="font-size:1.4rem">Aa</span><span class="ts-label">Large</span></button>
            <button class="textsize-option ${d.textSize === "huge" ? "on" : ""}" data-ts="huge"><span class="ts-a" style="font-size:1.8rem">Aa</span><span class="ts-label">Extra Large</span></button>
          </div>
          <button class="btn big grad" id="ob-finish">Let's Go ${this.icon("sparkle")}</button>
        `;
        inner.querySelectorAll("#ob-theme .theme-option").forEach(b => b.onclick = () => {
          inner.querySelectorAll("#ob-theme .theme-option").forEach(x => x.classList.remove("on"));
          b.classList.add("on");
          d.theme = b.dataset.theme;
          document.documentElement.setAttribute("data-theme", d.theme);
        });
        inner.querySelectorAll("#ob-ts .textsize-option").forEach(b => b.onclick = () => {
          inner.querySelectorAll("#ob-ts .textsize-option").forEach(x => x.classList.remove("on"));
          b.classList.add("on");
          d.textSize = b.dataset.ts;
          document.documentElement.setAttribute("data-textsize", b.dataset.ts === "normal" ? "" : b.dataset.ts);
        });
        inner.querySelector("#ob-finish").onclick = () => this.finishOnboarding();
      }
    },
    finishOnboarding() {
      if (this.state.onboarded) return; // guard against double-taps
      const d = this._obData;
      const p = this.state.profile;
      p.name = d.name;
      p.conditions = d.conditions;
      p.textSize = d.textSize;
      p.sex = d.sex;
      p.heightFt = d.heightFt;
      p.heightIn = d.heightIn;
      p.weightLb = d.weightLb;
      p.theme = d.theme;
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
      this.save(); this.applyAppearance();
      document.getElementById("onboard").classList.remove("open");
      this.showPage("home");
      if (added.size > 0) this.toast(added.size + " routine" + (added.size === 1 ? "" : "s") + " ready for you");
    },
    routineFromTemplate(t) {
      return {
        id: this.uid(),
        name: t.name,
        desc: t.desc,
        onHome: true,
        archived: false,
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
    App.applyAppearance();
    document.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = App.icon(el.dataset.icon); });
    document.querySelectorAll(".nav-btn").forEach(b => b.onclick = () => App.showPage(b.dataset.page));
    document.getElementById("btn-settings").onclick = () => App.openSettings();
    document.getElementById("modal-close").onclick = () => App.closeModal();
    document.getElementById("modal-backdrop").onclick = () => App.closeModal();
    if (!App.state.onboarded) App.startOnboarding();
    else App.showPage("home");
  });
})();
