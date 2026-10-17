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
        bodyLogs: [],   // body-feel entries from the body map
        bodyWeightLogs: [] // weigh-in history: {id, date, weightLb}
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
      // older saves predate the Home/Library split, archiving, and warmups
      this.state.routines.forEach(r => {
        if (r.onHome === undefined) r.onHome = true;
        if (r.archived === undefined) r.archived = false;
        if (!Array.isArray(r.warmupItems)) r.warmupItems = [];
      });
      // older saves predate side-aware body-map regions (e.g. "hip-left" vs "hip"); the
      // side was already sitting in the free-text label, so recover it from there instead
      // of leaving old logs stuck highlighting both sides.
      if (Array.isArray(this.state.bodyLogs)) {
        this.state.bodyLogs.forEach(b => {
          if (!b.region || /-left$|-right$/.test(b.region)) return;
          const m = /^(Left|Right)\b/.exec(b.label || "");
          if (m) b.region = b.region + "-" + m[1].toLowerCase();
        });
      }
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
    // body-map zones store a side-aware key for paired parts (e.g. "hip-left"); strip
    // the suffix so region metadata (icon/name/color) still resolves for those entries.
    region(id) {
      const base = (id || "").replace(/-left$|-right$/, "");
      return window.REGIONS.find(r => r.id === base) || { id, name: id, icon: "core", color: "" };
    },
    condition(id) { return window.CONDITIONS.find(c => c.id === id) || { id, name: id, blurb: "" }; },
    equip(id) { return window.EQUIPMENT.find(q => q.id === id) || { id, name: id, icon: "bodyweight" }; },
    typeMeta(id) { return window.EX_TYPES.find(t => t.id === id) || { id, name: id, color: "" }; },
    routineTypeMeta(id) { return window.ROUTINE_TYPES.find(t => t.id === id) || { id, name: id, icon: "sparkle" }; },
    // a routine's type: the user's manual tag wins, otherwise the majority exercise type decides
    routineType(r) {
      if (r.kind) return r.kind;
      const map = { stretch: "stretching", strengthen: "strengthening", mobility: "mobility", "nerve-glide": "mobility", balance: "balance", lift: "gym", cardio: "cardio", yoga: "yoga", recovery: "recovery" };
      const counts = {};
      r.items.forEach(it => {
        const ex = this.ex(it.exId);
        if (!ex) return;
        const k = map[ex.type] || "mixed";
        counts[k] = (counts[k] || 0) + 1;
      });
      const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const total = entries.reduce((n, e) => n + e[1], 0);
      if (!total) return "mixed";
      return entries[0][1] / total >= 0.6 ? entries[0][0] : "mixed";
    },

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
    // brief top-right checkmark, for screens (like the routine editor) that autosave
    // every field with no other feedback
    flashSaveIndicator() {
      const el = document.getElementById("modal-save-indicator");
      if (!el) return;
      el.innerHTML = this.icon("check");
      el.classList.remove("show");
      void el.offsetWidth; // restart the animation if it's already mid-flash
      el.classList.add("show");
    },
    confirm(title, text, onYes, yesLabel, onNo) {
      const c = document.getElementById("confirm");
      document.getElementById("confirm-title").textContent = title;
      document.getElementById("confirm-text").textContent = text;
      const yes = document.getElementById("confirm-yes");
      yes.textContent = yesLabel || "Yes";
      c.classList.add("open");
      yes.onclick = () => { c.classList.remove("open"); onYes(); };
      // onNo only fires on the explicit No button; a backdrop tap just dismisses
      document.getElementById("confirm-no").onclick = () => { c.classList.remove("open"); if (onNo) onNo(); };
      document.getElementById("confirm-backdrop").onclick = () => c.classList.remove("open");
    },
    openModal(title, bodyHtml) {
      document.getElementById("modal-title").textContent = title;
      document.getElementById("modal-body").innerHTML = bodyHtml;
      document.getElementById("modal").classList.add("open");
      document.getElementById("modal-body").scrollTop = this._keepScroll || 0;
      this._keepScroll = 0;
      const back = document.getElementById("modal-back");
      if (back) back.style.display = this._modalStack.length > 1 ? "inline-flex" : "none";
      this.bindFilterFades(document.getElementById("modal-body"));
    },
    closeModal() {
      this._modalStack = [];
      document.getElementById("modal").classList.remove("open");
      // a pause menu closed any way (X, backdrop, Keep going) puts the session screen back in a clean state
      if (this._pauseOpen) { this._pauseOpen = false; if (this._sess) this.renderSessionStep(); }
    },

    // ---------- modal navigation stack ----------
    // Every modal screen registers itself with pushView(key, renderFn) so the
    // back arrow can return to the previous screen at its old scroll position.
    _modalStack: [],
    pushView(key, fn) {
      if (this._viewRestoring) return;
      const isOpen = document.getElementById("modal").classList.contains("open");
      if (!isOpen) this._modalStack = [];
      const top = this._modalStack[this._modalStack.length - 1];
      if (top && top.key === key) {
        // same screen re-rendering (e.g. reorder, stepper): keep place, keep scroll
        top.fn = fn;
        this._keepScroll = document.getElementById("modal-body").scrollTop;
        return;
      }
      if (top && isOpen) top.scroll = document.getElementById("modal-body").scrollTop;
      this._modalStack.push({ key, fn, scroll: 0 });
    },
    modalBack() {
      if (this._modalStack.length < 2) { this.closeModal(); return; }
      this._modalStack.pop();
      const v = this._modalStack[this._modalStack.length - 1];
      this._viewRestoring = true;
      try { v.fn(); } finally { this._viewRestoring = false; }
      document.getElementById("modal-body").scrollTop = v.scroll || 0;
      const back = document.getElementById("modal-back");
      if (back) back.style.display = this._modalStack.length > 1 ? "inline-flex" : "none";
    },

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
      // the Body Map tab now lives inside Exercises
      if (name === "bodymap") { this.openBodyArea(); return; }
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
    refresh() {
      // re-render the current page without losing the user's scroll position
      const name = this.currentPage || "home";
      const el = document.querySelector("#page-" + name + " .scroll");
      const st = el ? el.scrollTop : 0;
      this.renderPage(name);
      const el2 = document.querySelector("#page-" + name + " .scroll");
      if (el2) el2.scrollTop = st;
    },

    applyAppearance() {
      const p = this.state.profile;
      document.documentElement.setAttribute("data-textsize", p.textSize === "normal" ? "" : p.textSize);
      // only green and pink remain; older ocean, sunset and berry saves show as green
      document.documentElement.setAttribute("data-theme", p.theme === "pink" ? "pink" : "forest");
      document.documentElement.setAttribute("data-dark", p.dark ? "1" : "");
    },

    // ---------- HOME ----------
    // movement color for a routine's tile: therapy green, stretch coral, yoga blue, gym amber
    routineTone(r) {
      const t = this.routineType(r);
      if (t === "stretching" || t === "mobility" || t === "warmup") return "orange";
      if (t === "yoga") return "blue";
      if (t === "gym" || t === "cardio") return "yellow";
      return "accent";
    },
    // rough time estimate so people know what they are signing up for
    estMinutes(r) {
      const sec = r.items.reduce((sum, it) => {
        const per = it.timeSec > 0 ? it.timeSec : it.hold > 0 ? it.hold * Math.max(1, it.reps || 1) : (it.reps || 10) * 4;
        return sum + (per + 15) * (it.sets || 1) * (it.perSide ? 2 : 1);
      }, 0);
      return Math.max(1, Math.round(sec / 60));
    },
    lastDone(r) {
      for (let i = this.state.logs.length - 1; i >= 0; i--) if (this.state.logs[i].routineId === r.id) return this.state.logs[i].date;
      return null;
    },
    relDay(iso) {
      const d = new Date(iso), today = new Date();
      const days = Math.round((new Date(today.toDateString()) - new Date(d.toDateString())) / 86400000);
      if (days <= 0) return "today";
      if (days === 1) return "yesterday";
      if (days < 7) return d.toLocaleDateString(undefined, { weekday: "long" });
      return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    },
    // the one routine Home suggests: the one you have gone longest without doing
    upNextRoutine(list) {
      if (!list.length) return null;
      return list.slice().sort((a, b) => {
        const la = this.lastDone(a), lb = this.lastDone(b);
        if (!la && !lb) return 0;
        if (!la) return -1;
        if (!lb) return 1;
        return new Date(la) - new Date(lb);
      })[0];
    },

    renderHome() {
      const s = this.state;
      const now = new Date();
      const hour = now.getHours();
      const greet = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
      const name = s.profile.name ? ", " + this.esc(s.profile.name) : "";
      const dateLine = now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
      const streak = this.streak();
      const weekStart = new Date(); weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
      const doneDays = new Set(s.logs.map(l => this.todayKey(l.date)));
      let dots = "";
      for (let i = 0; i < 7; i++) {
        const d = new Date(weekStart); d.setDate(weekStart.getDate() + i);
        const done = doneDays.has(this.todayKey(d));
        const isToday = this.todayKey(d) === this.todayKey();
        dots += `<div class="week-dot ${done ? "done" : ""} ${isToday ? "today" : ""}"><div class="dot">${done ? this.icon("check") : ""}</div><div class="dot-label">${dayNames[i]}</div></div>`;
      }

      const homeRoutines = s.routines.filter(r => r.onHome && !r.archived);
      const next = this.upNextRoutine(homeRoutines);
      let top = "", list = "";
      if (s.routines.filter(r => !r.archived).length === 0) {
        top = `
          <div class="home-empty card">
            <div class="home-sprout" aria-hidden="true">
              <svg viewBox="0 0 120 110" width="120" height="110"><ellipse cx="60" cy="100" rx="38" ry="8" class="sprout-soil"></ellipse><rect class="sprout-stem" x="57" y="40" width="6" height="60" rx="3"></rect><path class="sprout-l1" d="M60 70c-4-16-18-24-34-22 2 16 16 26 34 22z"></path><path class="sprout-l2" d="M60 58c4-18 20-28 38-26-2 18-18 30-38 26z"></path></svg>
            </div>
            <h2>Let us start your first routine</h2>
            <p>Pick one that is ready to go. You can change any part of it later.</p>
            <button class="btn big" id="home-pick-tpl">Show me ready-made routines</button>
            <button class="btn big secondary" id="home-build">Build my own</button>
          </div>
          <button class="home-hint-row" id="home-where">${this.icon("person")}<span><strong>Not sure where to start?</strong><br>Tell us where it hurts</span>${this.icon("chevR")}</button>`;
      } else if (!next) {
        top = `
          <div class="home-empty card">
            <h2>Nothing on Home yet</h2>
            <p>Pick which routines live here from your Routines list.</p>
            <button class="btn big" id="home-open-lib">Open my routines</button>
          </div>`;
      } else {
        const last = this.lastDone(next);
        top = `
          <section class="upnext" aria-label="Up next">
            <div class="upnext-top"><span class="upnext-pill">Up next</span><span class="upnext-last">${last ? "Last done " + this.relDay(last) : "Not done yet"}</span></div>
            <div class="upnext-name">${this.esc(next.name)}</div>
            <div class="upnext-meta">${next.items.length} exercise${next.items.length === 1 ? "" : "s"} · about ${this.estMinutes(next)} min</div>
            <button class="upnext-start" data-start="${next.id}">${this.icon("play")} Start</button>
          </section>`;
        const others = homeRoutines.filter(r => r !== next);
        list = `
          <div class="home-list-head"><h2>My routines</h2><button class="link-quiet" id="home-see-all">See all</button></div>
          ${others.map(r => `
            <div class="home-row" data-rid="${r.id}">
              <div class="tile ${this.routineTone(r)} home-row-tile">${this.icon(this.routineTypeMeta(this.routineType(r)).icon)}</div>
              <button class="home-row-info" data-act="open"><span class="home-row-name">${this.esc(r.name)}</span><span class="home-row-meta">${r.items.length} exercise${r.items.length === 1 ? "" : "s"} · ${this.estMinutes(r)} min</span></button>
              <button class="home-row-play" data-act="start" aria-label="Start ${this.esc(r.name)}">${this.icon("play")}</button>
            </div>`).join("") || `<p class="home-list-empty">Add more routines from the Routines tab.</p>`}
          <button class="btn ghost big" id="home-new" style="margin-top:0.4rem">${this.icon("plus")} New routine</button>`;
      }

      document.getElementById("home-scroll").innerHTML = `
        <div class="home-date">${this.esc(dateLine)}</div>
        <div class="greeting">${greet}${name}</div>
        <div class="home-grid">
          <div class="home-col">
            ${top}
            <section class="week-card" aria-label="This week">
              <div class="week-card-head"><span>This week</span>${streak > 0 ? `<span class="streak-chip">${this.icon("flame")} ${streak} day${streak === 1 ? "" : "s"} in a row</span>` : ""}</div>
              <div class="week-dots">${dots}</div>
            </section>
          </div>
          ${list ? `<div class="home-col">${list}</div>` : ""}
        </div>
      `;
      const root = document.getElementById("home-scroll");
      root.querySelectorAll("[data-start]").forEach(b => b.onclick = () => this.startSession(b.dataset.start));
      root.querySelectorAll(".home-row").forEach(row => {
        const rid = row.dataset.rid;
        row.querySelectorAll("[data-act]").forEach(el => el.onclick = () => {
          const act = el.dataset.act;
          if (act === "open") this.openRoutineEditor(rid);
          if (act === "start") this.startSession(rid);
          if (act === "menu") this.openRoutineMenu(rid);
        });
      });
      const on = (id, fn) => { const el = root.querySelector("#" + id); if (el) el.onclick = fn; };
      on("home-see-all", () => this.showPage("routines"));
      on("home-open-lib", () => this.showPage("routines"));
      on("home-new", () => { this.showPage("routines"); this.openNewRoutineChooser(); });
      on("home-pick-tpl", () => { this.showPage("routines"); this.openNewRoutineChooser(); });
      on("home-build", () => { this.showPage("routines"); this.createBlankRoutine(); });
      on("home-where", () => this.openBodyArea());
    },

    // replaces the hidden swipe tray with a visible options sheet
    openRoutineMenu(rid) {
      const r = this.state.routines.find(x => x.id === rid);
      if (!r) return;
      this.pushView("rmenu:" + rid, () => this.openRoutineMenu(rid));
      this.openModal(r.name, `
        <div class="menu-list">
          <button class="menu-item primary" data-m="start">${this.icon("play")}<span>Start now</span></button>
          <button class="menu-item" data-m="edit">${this.icon("pencil")}<span>Change exercises</span></button>
          <button class="menu-item" data-m="up">${this.icon("arrowUp")}<span>Move up the list</span></button>
          <button class="menu-item" data-m="down">${this.icon("arrowDown")}<span>Move down the list</span></button>
          <button class="menu-item" data-m="home">${this.icon("home")}<span>${r.onHome ? "Take off Home screen" : "Put on Home screen"}</span></button>
          <button class="menu-item danger" data-m="archive">${this.icon("archive")}<span>Put away (archive)</span></button>
        </div>`);
      document.getElementById("modal-body").querySelectorAll("[data-m]").forEach(b => b.onclick = () => {
        const m = b.dataset.m;
        if (m === "edit") { this.closeModal(); this.openRoutineEditor(rid); return; }
        if (m === "up" || m === "down") { this.moveRoutine(r, m === "up" ? -1 : 1); this.toast(m === "up" ? "Moved up" : "Moved down"); return; }
        if (m === "start") { this.closeModal(); this.startSession(rid); return; }
        if (m === "home") { r.onHome = !r.onHome; this.save(); this.closeModal(); this.refresh(); this.toast(r.onHome ? "Added to your Home screen" : "Removed from your Home screen"); return; }
        if (m === "archive") { r.archived = true; this.save(); this.closeModal(); this.refresh(); this.toast("Put away. Find it at the bottom of Routines."); }
      });
    },

    // ---------- WEIGHT LOG ----------
    openWeighInModal() {
      this.pushView("weighin", () => this.openWeighInModal());
      const logs = this.state.bodyWeightLogs;
      const last = logs[logs.length - 1];
      this.openModal("Log Weight", `
        <label class="field-label">Weight (lbs)</label>
        <input type="number" id="wi-val" min="0" max="900" step="0.1" value="${last ? last.weightLb : (this.state.profile.weightLb || "")}" placeholder="165">
        <button class="btn big grad" id="wi-save" style="margin-top:0.8rem">Save Weigh-In</button>
      `);
      document.getElementById("modal-body").querySelector("#wi-save").onclick = () => {
        const v = Number(document.getElementById("wi-val").value);
        if (!v || v <= 0) { this.toast("Enter a valid weight"); return; }
        this.state.bodyWeightLogs.push({ id: this.uid(), date: new Date().toISOString(), weightLb: v });
        this.state.profile.weightLb = v;
        this.save(); this.closeModal(); this.refresh();
        this.toast("Weight logged");
      };
    },
    openWeightLogDetail(id) {
      const entry = this.state.bodyWeightLogs.find(x => x.id === id);
      if (!entry) return;
      this.pushView("weightlog:" + id, () => this.openWeightLogDetail(id));
      this.openModal("Edit Weigh-In", `
        <label class="field-label">Weight (lbs)</label>
        <input type="number" id="wld-val" min="0" max="900" step="0.1" value="${entry.weightLb}">
        <button class="btn big grad" id="wld-save" style="margin-top:0.8rem">Save Changes</button>
        <button class="btn danger big" id="wld-delete" style="margin-top:1rem">${this.icon("trash")} Delete This Entry</button>
      `);
      const body = document.getElementById("modal-body");
      body.querySelector("#wld-save").onclick = () => {
        const v = Number(body.querySelector("#wld-val").value);
        if (!v || v <= 0) { this.toast("Enter a valid weight"); return; }
        entry.weightLb = v;
        this.save(); this.closeModal(); this.refresh();
        this.toast("Updated");
      };
      body.querySelector("#wld-delete").onclick = () => {
        this.confirm("Delete this weigh-in?", "This removes it from your history and chart. It cannot be undone.", () => {
          this.state.bodyWeightLogs = this.state.bodyWeightLogs.filter(x => x.id !== id);
          this.save(); this.closeModal(); this.refresh();
          this.toast("Entry deleted");
        }, "Delete");
      };
    },

    // ---------- routine cards (shared by Home and Routines library) ----------
    routineCardHtml(r, mode) {
      const meta = `${r.items.length} exercise${r.items.length === 1 ? "" : "s"}`;
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
            const ax = Math.abs(dx), ay = Math.abs(dy);
            // clearly vertical: hand the gesture to the page scroll
            if (ay > 12 && ay > ax * 1.4) { tracking = false; return; }
            // not clearly horizontal yet: keep watching
            if (ax < 8 || ax < ay) return;
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
        // once a sideways drag has locked in, stop the page from scrolling mid-swipe
        card.addEventListener("touchmove", e => { if (dragging) e.preventDefault(); }, { passive: false });
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
      this.pushView("settings", () => this.openSettings());
      const p = this.state.profile;
      const themes = [["forest", "Green"], ["pink", "Pink"]];
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
        <button class="btn secondary big" id="set-tour" style="margin-top:0.6rem">${this.icon("sparkle")} Replay the App Tour</button>
        <button class="btn danger big" id="set-reset" style="margin-top:1.4rem">Erase Everything & Start Over</button>
        <p style="font-size:0.75rem;color:var(--muted2);text-align:center;margin-top:1rem">
          MoveWell keeps all data on this device only.<br>This app supports your training and therapy plan. It is not medical advice.<br>Always follow your physical therapist's or doctor's guidance.
        </p>
        <p style="font-size:0.7rem;color:var(--muted2);text-align:center;margin-top:0.6rem">Meditation icon on the Body Map's Mind tab by <a href="https://www.vecteezy.com" target="_blank" rel="noopener">Vecteezy.com</a></p>
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
      body.querySelector("#set-tour").onclick = () => {
        this.closeModal();
        this.showPage("home");
        this.startTour();
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
      return `<div class="ob-dots" role="progressbar" aria-valuemin="1" aria-valuemax="4" aria-valuenow="${n}" aria-label="Step ${n} of 4">${[1, 2, 3, 4].map(i => `<i class="${i === n ? "on" : i < n ? "done" : ""}"></i>`).join("")}</div>`;
    },
    obHead(n, opts) {
      opts = opts || {};
      return `<div class="ob-head">
        ${n > 1 ? `<button class="ob-back" id="ob-back" aria-label="Back">${this.icon("arrowLeft")}</button>` : `<span></span>`}
        ${this.obDots(n)}
        ${opts.skip ? `<button class="ob-skip" id="ob-skip">Skip</button>` : `<span></span>`}
      </div>`;
    },
    // which ready-made routines onboarding will add, so the last step can show them
    obPlannedTemplates() {
      const d = this._obData;
      const out = [];
      const add = t => { if (t && !out.includes(t)) out.push(t); };
      d.conditions.forEach(cid => window.TEMPLATES.forEach(t => { if (t.conditions.includes(cid)) add(t); }));
      (d.groups || []).forEach(gid => {
        if (gid === "general") { add(window.TEMPLATES.find(t => t.id === "tpl-gentle-full")); return; }
        const g = window.CONDITION_GROUPS.find(x => x.id === gid);
        if (!g || g.conditions.some(c => d.conditions.includes(c))) return;
        add(window.TEMPLATES.find(t => t.conditions.some(c => g.conditions.includes(c))));
      });
      return out.slice(0, 6);
    },
    onboardStep(n) {
      const inner = document.getElementById("onboard-inner");
      const d = this._obData;
      d.groups = d.groups || [];
      const ob = document.getElementById("onboard");
      ob.dataset.step = n;
      const bindHead = (back, skip) => {
        const bb = inner.querySelector("#ob-back"); if (bb) bb.onclick = back;
        const sk = inner.querySelector("#ob-skip"); if (sk) sk.onclick = skip;
      };
      if (n === 1) {
        inner.innerHTML = `
          ${this.obHead(1)}
          <div class="ob-welcome">
            <div class="ob-hero" aria-hidden="true">
              <div class="ob-sun"></div>
              <div class="ob-ripple"></div><div class="ob-ripple r2"></div><div class="ob-ripple r3"></div>
              <div class="ob-logo">${this.icon("leaf")}</div>
            </div>
            <h1 class="ob-rise d1">Welcome to MoveWell</h1>
            <p class="ob-rise d2">Your exercises, your pace. Let us set things up together. It takes about a minute.</p>
          </div>
          <label class="ob-name ob-rise d3"><span>What should we call you?</span>
            <input type="text" id="ob-name" placeholder="Your first name" autocomplete="given-name" value="${this.esc(d.name)}">
          </label>
          <button class="btn big grad ob-next ob-rise d3" id="ob-next1">Continue</button>
        `;
        const go = () => { d.name = inner.querySelector("#ob-name").value.trim(); this.onboardStep(2); };
        inner.querySelector("#ob-next1").onclick = go;
        inner.querySelector("#ob-name").addEventListener("keydown", e => { if (e.key === "Enter") go(); });
      }
      if (n === 2) {
        const groups = window.CONDITION_GROUPS.concat([{ id: "general", name: "Just get moving", icon: "sparkle", color: "accent", conditions: [] }]);
        const render2 = () => {
          const picked = groups.filter(g => d.groups.includes(g.id) && g.conditions.length);
          inner.innerHTML = `
            ${this.obHead(2, { skip: true })}
            <h1 class="ob-title">${d.name ? "What brings you here, " + this.esc(d.name) + "?" : "What brings you here?"}</h1>
            <p class="ob-lead">Pick as many as you like. We will add a starter routine for each one.</p>
            <div class="ob-goals ob-stag">
              ${groups.map(g => {
                const on = d.groups.includes(g.id);
                return `<button class="ob-goal ${on ? "on" : ""}" role="checkbox" aria-checked="${on}" data-g="${g.id}">
                  <span class="tile ${g.color} ob-goal-icon">${this.icon(g.icon)}</span>
                  <span class="ob-goal-name">${this.esc(g.name)}</span>
                  <span class="ob-check">${this.icon("check")}</span>
                </button>`;
              }).join("")}
            </div>
            ${picked.length ? `
              <div class="ob-more">
                <div class="ob-more-t">Anything more specific? <span>(optional)</span></div>
                <div class="ob-chips">
                  ${picked.flatMap(g => g.conditions).map(cid => `<button class="lib-chip ob-chip ${d.conditions.includes(cid) ? "on" : ""}" data-c="${cid}" aria-pressed="${d.conditions.includes(cid)}">${this.esc(this.condition(cid).name)}</button>`).join("")}
                </div>
              </div>` : ""}
            <button class="btn big grad ob-next" id="ob-next2">${d.groups.length ? "Continue" : "Skip for now"}</button>
          `;
          inner.querySelectorAll(".ob-goal").forEach(b => b.onclick = () => {
            const id = b.dataset.g;
            if (d.groups.includes(id)) {
              d.groups = d.groups.filter(x => x !== id);
              const g = groups.find(x => x.id === id);
              d.conditions = d.conditions.filter(c => !g.conditions.includes(c));
            } else d.groups.push(id);
            const st = inner.scrollTop; render2(); inner.scrollTop = st;
            inner.querySelectorAll(".ob-stag > *").forEach(x => x.style.animation = "none");
          });
          inner.querySelectorAll(".ob-chip").forEach(ch => ch.onclick = () => {
            const cid = ch.dataset.c;
            if (d.conditions.includes(cid)) d.conditions = d.conditions.filter(x => x !== cid); else d.conditions.push(cid);
            ch.classList.toggle("on"); ch.setAttribute("aria-pressed", ch.classList.contains("on"));
          });
          inner.querySelector("#ob-next2").onclick = () => this.onboardStep(3);
          bindHead(() => this.onboardStep(1), () => { d.groups = []; d.conditions = []; this.onboardStep(3); });
        };
        render2();
      }
      if (n === 3) {
        inner.innerHTML = `
          ${this.obHead(3, { skip: true })}
          <h1 class="ob-title">Make it easy to read</h1>
          <p class="ob-lead">Tap a size. This screen changes so you can see it.</p>
          <div class="ob-sizes ob-stag" role="radiogroup" aria-label="Text size">
            ${[["normal", "Normal", 1.1], ["large", "Large", 1.4], ["huge", "Extra large", 1.75]].map(([id, label, px]) => `
              <button class="ob-size ${d.textSize === id ? "on" : ""}" role="radio" aria-checked="${d.textSize === id}" data-ts="${id}"><span style="font-size:${px}rem">Aa</span><span class="ob-size-l">${label}</span></button>`).join("")}
          </div>
          <div class="ob-sub-t">Pick a color</div>
          <div class="ob-colors ob-stag" role="radiogroup" aria-label="Color">
            ${[["forest", "Green"], ["pink", "Pink"]].map(([id, label]) => `
              <button class="ob-color ${d.theme === id ? "on" : ""}" role="radio" aria-checked="${d.theme === id}" data-theme="${id}"><span class="sw sw-${id}"></span>${label}</button>`).join("")}
          </div>
          <button class="btn big grad ob-next" id="ob-next3">Continue</button>
        `;
        inner.querySelectorAll(".ob-size").forEach(b => b.onclick = () => {
          d.textSize = b.dataset.ts;
          document.documentElement.setAttribute("data-textsize", d.textSize === "normal" ? "" : d.textSize);
          inner.querySelectorAll(".ob-size").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-checked", x === b); });
        });
        inner.querySelectorAll(".ob-color").forEach(b => b.onclick = () => {
          d.theme = b.dataset.theme;
          document.documentElement.setAttribute("data-theme", d.theme);
          inner.querySelectorAll(".ob-color").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-checked", x === b); });
        });
        inner.querySelector("#ob-next3").onclick = () => this.onboardStep(4);
        bindHead(() => this.onboardStep(2), () => this.onboardStep(4));
      }
      if (n === 4) {
        const plan = this.obPlannedTemplates();
        inner.innerHTML = `
          ${this.obHead(4)}
          <div class="ob-leaves" aria-hidden="true">${[8, 22, 38, 55, 70, 84, 94].map((x, i) => `<span class="ob-leaf" style="left:${x}%;animation-delay:${-i * 1.3}s;animation-duration:${8 + (i % 3) * 2}s">${this.icon("leaf")}</span>`).join("")}</div>
          <div class="ob-done ob-stag">
            <h1 class="ob-title">${d.name ? "You are all set, " + this.esc(d.name) + "." : "You are all set."}</h1>
            <p class="ob-lead">${plan.length ? "We made " + (plan.length === 1 ? "a starter routine" : plan.length + " starter routines") + " for you. You can change them any time." : "Your Home screen is ready. Pick a ready-made plan or build your own whenever you like."}</p>
            ${plan.map(t => `<div class="ob-plan"><span class="ob-plan-dot">${this.icon("check")}</span><span>${this.esc(t.name)}</span></div>`).join("")}
          </div>
          <button class="btn big grad ob-next ob-glow" id="ob-finish">Start using MoveWell</button>
        `;
        inner.querySelector("#ob-finish").onclick = () => this.finishOnboarding();
        bindHead(() => this.onboardStep(3));
      }
      inner.scrollTop = 0;
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
      // add the starter routines shown on the last onboarding step
      const added = new Set();
      this.obPlannedTemplates().forEach(t => { added.add(t.id); this.state.routines.push(this.routineFromTemplate(t)); });
      this.state.onboarded = true;
      this.save(); this.applyAppearance();
      document.getElementById("onboard").classList.remove("open");
      this.showPage("home");
      if (added.size > 0) this.toast(added.size + " routine" + (added.size === 1 ? "" : "s") + " ready for you");
      setTimeout(() => this.startTour(), 700);
    },
    routineFromTemplate(t) {
      const r = {
        id: this.uid(),
        name: t.name,
        desc: t.desc,
        onHome: true,
        archived: false,
        warmupItems: [],
        // template items are exercise ids, or objects like { id, sets: 1 }
        // that override parts of the exercise's default dose
        items: t.items.map(entry => {
          const o = typeof entry === "string" ? { id: entry } : entry;
          const ex = this.ex(o.id);
          if (!ex) return null;
          return {
            exId: o.id,
            sets: o.sets != null ? o.sets : (ex.dose.sets || 1),
            reps: o.reps != null ? o.reps : (ex.dose.reps || 0),
            hold: o.hold != null ? o.hold : (ex.dose.hold || 0),
            timeSec: o.timeSec != null ? o.timeSec : (ex.dose.timeSec || 0),
            perSide: o.perSide != null ? !!o.perSide : !!ex.dose.perSide
          };
        }).filter(Boolean)
      };
      if (t.kind) r.kind = t.kind;
      return r;
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
    document.getElementById("modal-back").onclick = () => App.modalBack();
    document.getElementById("modal-backdrop").onclick = () => App.closeModal();
    if (!App.state.onboarded) App.startOnboarding();
    else {
      App.showPage("home");
      App.offerSessionResume();
    }
  });
})();
