// MoveWell exercise library: browse, search, filter, exercise detail, custom exercise builder
(function () {
  App._lib = { q: "", region: "", type: "", equip: "", level: 0 };

  App.filteredExercises = function () {
    const f = this._lib;
    const q = f.q.toLowerCase();
    return window.EXERCISES.filter(ex => {
      // yoga poses stay hidden (even from All and search) unless the Yoga type filter is on
      if (ex.type === "yoga" && f.type !== "yoga") return false;
      if (f.region && ex.region !== f.region) return false;
      if (f.type && ex.type !== f.type) return false;
      if (f.equip) {
        if (f.equip === "none") { if (!ex.equipment.includes("none")) return false; }
        else if (!ex.equipment.includes(f.equip)) return false;
      }
      if (f.level && ex.level !== f.level) return false;
      if (q) {
        const hay = (ex.name + " " + ex.muscles + " " + this.region(ex.region).name + " " +
          ex.helps.map(h => this.condition(h).name).join(" ") + " " +
          ex.equipment.map(q => this.equip(q).name).join(" ") + " " +
          (ex.variations || []).map(v => v.name).join(" ")).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  };

  // body areas that come in a left and a right
  const PAIRED = ["shoulder", "arms", "elbow", "wrist", "hip", "knee", "ankle-foot"];
  const LEVELS = { 1: "Gentle", 2: "Moderate", 3: "Advanced" };
  const COMMON_EQUIP = ["none", "band", "dumbbell", "chair", "wall", "towel", "machine", "barbell"];
  const DEFAULT_LIB = () => ({ q: "", region: "", type: "", equip: "", level: 0 });

  // what the "Selected" bar and "Log how it feels" use: a side-aware zone key and a label
  App.libSelection = function () {
    const u = this._libUi, f = this._lib;
    if (u.zone) return u.zone;
    if (!f.region) return null;
    const r = this.region(f.region);
    const paired = PAIRED.includes(f.region);
    if (paired && !u.side) return { region: f.region, zone: null, label: r.name, needSide: true };
    if (paired && u.side !== "both") {
      const side = u.side === "left" ? "Left" : "Right";
      return { region: f.region, zone: f.region + "-" + u.side, label: side + " " + r.name };
    }
    return { region: f.region, zone: f.region, label: (paired ? "Both sides, " : "") + r.name };
  };

  App.renderLibrary = function () {
    const f = this._lib;
    const u = this._libUi = this._libUi || { areaOpen: false, filtersOpen: false, mapOn: false, view: "front", side: "", zone: null, moreEquip: false };
    const list = this.filteredExercises();
    const filterCount = (f.type ? 1 : 0) + (f.equip ? 1 : 0) + (f.level ? 1 : 0);
    const sel = this.libSelection();
    const opt = (group, value, label, on) =>
      `<button class="opt-btn ${on ? "on" : ""}" data-g="${group}" data-v="${value}" aria-pressed="${on}">${label}</button>`;

    // removable chips for everything that is narrowing the list
    const chips = [];
    if (f.region) chips.push(["region", sel ? sel.label : this.region(f.region).name]);
    if (f.type) chips.push(["type", this.typeMeta(f.type).name]);
    if (f.equip) chips.push(["equip", this.equip(f.equip).name]);
    if (f.level) chips.push(["level", LEVELS[f.level]]);

    const equipShown = u.moreEquip ? window.EQUIPMENT : window.EQUIPMENT.filter(q => COMMON_EQUIP.includes(q.id) || q.id === f.equip);
    const paired = f.region && PAIRED.includes(f.region);
    const front = u.view !== "back";

    const areaPanel = `
      <section class="lib-panel" aria-label="Find by body area">
        <div class="lib-panel-head">
          <h2>Pick an area</h2>
          <label class="lib-switch">Body map
            <span class="switch"><input type="checkbox" id="lib-map" ${u.mapOn ? "checked" : ""}><span class="slider"></span></span>
          </label>
        </div>
        ${u.mapOn ? `
          <div class="seg" role="tablist">
            <button role="tab" class="${front ? "on" : ""}" aria-selected="${front}" data-view="front">Front</button>
            <button role="tab" class="${!front ? "on" : ""}" aria-selected="${!front}" data-view="back">Back</button>
          </div>
          <p class="lib-map-hint">Tap where it hurts. Each side is separate.</p>
          <div class="lib-map">
            <div class="lib-map-caps"><span>${front ? "Your right" : "Your left"}</span><span>${front ? "Your left" : "Your right"}</span></div>
            ${this.bmSvg(u.view, u.zone ? u.zone.zone + "|" + u.zone.label : null)}
          </div>` : `
          <div class="opt-grid two">
            ${window.REGIONS.map(r => opt("region", r.id, this.esc(r.name), f.region === r.id)).join("")}
          </div>
          ${paired ? `
            <div class="lib-side">
              <div class="lib-side-q">Which side?</div>
              <div class="opt-grid three">
                ${opt("side", "left", "Left", u.side === "left")}
                ${opt("side", "right", "Right", u.side === "right")}
                ${opt("side", "both", "Both", u.side === "both")}
              </div>
            </div>` : ""}`}
        ${sel ? `
          <div class="lib-sel">
            <div class="lib-sel-text"><div class="lib-sel-k">Selected</div><div class="lib-sel-v">${this.esc(sel.label)}</div></div>
            <button class="lib-sel-btn" id="lib-log" ${sel.needSide ? "disabled" : ""}>${sel.needSide ? "Pick a side" : "Log how it feels"}</button>
          </div>` : ""}
        <button class="lib-relax" id="lib-relax">${this.icon("sparkle")}<span>Feeling tense? Try a calm-down exercise</span>${this.icon("chevR")}</button>
      </section>`;

    const filterPanel = `
      <section class="lib-panel" aria-label="Filters">
        <div class="lib-group"><div class="lib-group-t">Kind of movement</div>
          <div class="opt-grid ${this.state.profile.textSize === "huge" ? "two" : "three"}">
            ${opt("type", "", "Any", !f.type)}
            ${window.EX_TYPES.map(t => opt("type", t.id, t.name, f.type === t.id)).join("")}
          </div></div>
        <div class="lib-group"><div class="lib-group-t">How hard</div>
          <div class="opt-grid two">
            ${opt("level", 0, "Any", !f.level)}
            ${[1, 2, 3].map(l => opt("level", l, LEVELS[l], f.level === l)).join("")}
          </div></div>
        <div class="lib-group"><div class="lib-group-t">Equipment</div>
          <div class="opt-grid two">
            ${opt("equip", "", "Any", !f.equip)}
            ${equipShown.map(q => opt("equip", q.id, this.esc(q.name), f.equip === q.id)).join("")}
          </div>
          <button class="lib-more" id="lib-more">${u.moreEquip ? "Show less" : "More equipment"}</button>
        </div>
        ${filterCount ? `<button class="lib-clear" id="lib-clear-f">Clear filters</button>` : ""}
      </section>`;

    document.getElementById("library-scroll").innerHTML = `
      <div class="page-title">Exercises</div>
      <div class="search-wrap">
        <span class="search-icon">${this.icon("search")}</span>
        <input type="text" id="lib-search" placeholder="Search, like knee or stretch" aria-label="Search exercises" value="${this.esc(f.q)}">
      </div>
      <div class="lib-toggles">
        <button class="lib-pill ${u.areaOpen ? "open" : ""} ${f.region ? "has" : ""}" id="lib-area-toggle" aria-expanded="${u.areaOpen}">
          ${this.icon("person")}<span>Body area</span>${f.region ? `<span class="lib-badge">1</span>` : ""}
        </button>
        <button class="lib-pill ${u.filtersOpen ? "open" : ""} ${filterCount ? "has" : ""}" id="lib-filter-toggle" aria-expanded="${u.filtersOpen}">
          ${this.icon("sliders")}<span>Filters</span>${filterCount ? `<span class="lib-badge">${filterCount}</span>` : ""}
        </button>
      </div>
      ${chips.length ? `<div class="lib-chips">${chips.map(c => `<button class="lib-chip" data-k="${c[0]}" aria-label="Remove ${this.esc(c[1])}">${this.esc(c[1])}${this.icon("close")}</button>`).join("")}</div>` : ""}
      ${u.areaOpen ? areaPanel : ""}
      ${u.filtersOpen ? filterPanel : ""}
      <div class="lib-list-head">
        <div class="filter-count">${list.length} exercise${list.length === 1 ? "" : "s"}</div>
        <button class="lib-create" id="lib-create">${this.icon("plus")} Make your own</button>
      </div>
      <div class="ex-grid" id="lib-list">${list.map(ex => this.exItemHtml(ex)).join("") || `<div class="empty-state"><div class="empty-icon">${this.icon("search")}</div><p>Nothing matches those choices.<br>Try removing one of them.</p></div>`}</div>
    `;

    const scroll = document.getElementById("library-scroll");
    const $ = (sel) => scroll.querySelector(sel);
    const rerender = () => this.refresh();
    $("#lib-create").onclick = () => this.openExerciseBuilder();
    const search = $("#lib-search");
    search.oninput = () => { f.q = search.value; this.renderLibraryListOnly(); };
    $("#lib-area-toggle").onclick = () => { u.areaOpen = !u.areaOpen; rerender(); };
    $("#lib-filter-toggle").onclick = () => { u.filtersOpen = !u.filtersOpen; rerender(); };
    scroll.querySelectorAll(".lib-chip").forEach(ch => ch.onclick = () => {
      const k = ch.dataset.k;
      if (k === "region") { f.region = ""; u.side = ""; u.zone = null; }
      else f[k] = k === "level" ? 0 : "";
      rerender();
    });
    scroll.querySelectorAll(".opt-btn").forEach(b => b.onclick = () => {
      const g = b.dataset.g, v = b.dataset.v;
      if (g === "region") { f.region = f.region === v ? "" : v; u.side = ""; u.zone = null; }
      else if (g === "side") { u.side = v; }
      else if (g === "level") f.level = Number(v);
      else f[g] = v;
      rerender();
    });
    const map = $("#lib-map");
    if (map) map.onchange = () => { u.mapOn = map.checked; u.zone = null; rerender(); };
    scroll.querySelectorAll(".seg button").forEach(b => b.onclick = () => { u.view = b.dataset.view; u.zone = null; rerender(); });
    scroll.querySelectorAll(".lib-map .bm-zone").forEach(z => z.onclick = () => {
      const same = u.zone && u.zone.zone === z.dataset.zone && u.zone.label === z.dataset.label;
      if (same) { u.zone = null; f.region = ""; }
      else {
        u.zone = { region: z.dataset.region, zone: z.dataset.zone, label: z.dataset.label, muscles: z.dataset.muscles };
        f.region = z.dataset.region;
      }
      rerender();
    });
    // a side picked from the list also lights up the matching spots on the map
    if (!u.zone && sel && sel.zone) scroll.querySelectorAll(".lib-map .bm-zone").forEach(z => {
      if (z.dataset.zone === sel.zone) z.classList.add("sel");
    });
    const log = $("#lib-log");
    if (log) log.onclick = () => {
      const s = this.libSelection();
      if (!s || s.needSide) return;
      this.openRegionSheet(s.region, s.zone, s.label, s.muscles || "");
    };
    const relax = $("#lib-relax");
    if (relax) relax.onclick = () => this.openRelaxSheet();
    const more = $("#lib-more");
    if (more) more.onclick = () => { u.moreEquip = !u.moreEquip; rerender(); };
    const clearF = $("#lib-clear-f");
    if (clearF) clearF.onclick = () => { f.type = ""; f.equip = ""; f.level = 0; rerender(); };
  };

  // re-render just count + list (keeps keyboard focus while typing in search)
  App.renderLibraryListOnly = function () {
    const scroll = document.getElementById("library-scroll");
    const list = this.filteredExercises();
    const count = scroll.querySelector(".filter-count");
    if (count) count.textContent = `${list.length} exercise${list.length === 1 ? "" : "s"}`;
    const box = scroll.querySelector("#lib-list");
    if (box) box.innerHTML = list.map(ex => this.exItemHtml(ex)).join("") ||
      `<div class="empty-state"><div class="empty-icon">${this.icon("search")}</div><p>Nothing matches.</p></div>`;
  };

  // open the Exercises tab with the body map showing (used by Home and older links)
  App.openBodyArea = function () {
    this._libUi = Object.assign(this._libUi || {}, { areaOpen: true, mapOn: true });
    this.showPage("library");
  };

  App.exItemHtml = function (ex) {
    const t = this.typeMeta(ex.type);
    const r = this.region(ex.region);
    const levelNames = { 1: "Gentle", 2: "Moderate", 3: "Advanced" };
    return `
      <div class="ex-item" onclick="App.openExerciseDetail('${ex.id}')">
        <div class="ex-item-icon tile ${r.color || ""}">${this.icon(r.icon)}</div>
        <div class="ex-item-info">
          <div class="ex-item-name">${this.esc(ex.name)}</div>
          <div class="ex-item-meta">
            ${ex.custom ? `<span class="tag pink">${this.icon("pencil")} Custom</span>` : ""}
            <span class="tag ${t.color}">${t.name}</span>
            <span class="tag">${r.name}</span>
            <span class="tag">${levelNames[ex.level]}</span>
            ${ex.equipment.includes("none") ? `<span class="tag">${this.icon("bodyweight")} No equipment</span>` : ex.equipment.slice(0, 2).map(q => `<span class="tag">${this.icon(this.equip(q).icon)} ${this.equip(q).name}</span>`).join("")}
            ${(ex.variations && ex.variations.length) ? `<span class="tag blue">${ex.variations.length} variation${ex.variations.length === 1 ? "" : "s"}</span>` : ""}
          </div>
        </div>
        <div class="ex-item-chev">${this.icon("chevR")}</div>
      </div>`;
  };

  // annotate everyday muscle names with their anatomical names
  App.muscleDetail = function (str) {
    return String(str || "").split(/,\s*/).map(part => {
      if (part.includes("(")) return this.esc(part);
      const anat = window.MUSCLE_MAP[part.toLowerCase().trim()];
      return anat ? `${this.esc(part)} <span class="anat">(${this.esc(anat)})</span>` : this.esc(part);
    }).join(", ");
  };

  App.openExerciseDetail = function (id, opts) {
    const ex = this.ex(id);
    if (!ex) return;
    opts = opts || {};
    this.pushView("exd:" + id + (opts.hideAdd ? ":h" : ""), () => this.openExerciseDetail(id, opts));
    const t = this.typeMeta(ex.type);
    const r = this.region(ex.region);
    const levelNames = { 1: "Gentle", 2: "Moderate", 3: "Advanced" };
    const yt = "https://www.youtube.com/results?search_query=" + encodeURIComponent(ex.name + " exercise how to");

    this.openModal(ex.name, `
      <div class="exd-tags">
        ${ex.custom ? `<span class="tag pink">${this.icon("pencil")} Custom</span>` : ""}
        <span class="tag ${t.color}">${t.name}</span>
        <span class="tag">${this.icon(r.icon)} ${r.name}</span>
        <span class="tag">${levelNames[ex.level]}</span>
        ${ex.equipment.map(q => `<span class="tag">${this.icon(this.equip(q).icon)} ${this.equip(q).name}</span>`).join("")}
      </div>
      ${ex.muscles || ex.position ? `<div class="exd-block">
        <h3>${ex.muscles ? "Muscles Targeted" : "Starting position"}</h3>
        <div style="font-size:0.95rem">${this.muscleDetail(ex.muscles)}${ex.muscles && ex.position ? " · " : ""}${ex.position ? `<span style="color:var(--muted)">${this.esc(ex.position)}</span>` : ""}</div>
      </div>` : ""}
      <div class="exd-block">
        <h3>Suggested Amount</h3>
        <div style="font-size:1.05rem;font-weight:700;color:var(--accent-strong)">${this.doseText(ex.dose)}</div>
      </div>
      <a class="video-link" href="${yt}" target="_blank" rel="noopener">${this.icon("video")} Watch a video demonstration</a>
      ${ex.howTo && ex.howTo.length ? `
      <div class="exd-block">
        <h3>How To Do It</h3>
        <ol class="exd-steps">${ex.howTo.map(s => `<li>${this.esc(s)}</li>`).join("")}</ol>
      </div>` : ""}
      ${ex.tips && ex.tips.length ? `<div class="exd-block"><h3>Helpful Tips</h3>${ex.tips.map(tip => `<div class="exd-tip">${this.icon("bulb")}<span>${this.esc(tip)}</span></div>`).join("")}</div>` : ""}
      ${ex.caution ? `<div class="exd-block"><h3>Take Care</h3><div class="exd-caution">${this.icon("alert")}<span>${this.esc(ex.caution)}</span></div></div>` : ""}
      ${ex.variations && ex.variations.length ? `
        <div class="exd-block"><h3>Variations</h3>
          ${ex.variations.map(v => `<div class="exd-variation"><strong>${this.esc(v.name)}</strong><span>${this.esc(v.note)}</span></div>`).join("")}
        </div>` : ""}
      ${ex.helps && ex.helps.length ? `
      <div class="exd-block">
        <h3>Often Used For</h3>
        <div class="chip-row">${ex.helps.map(h => `<span class="tag accent">${this.esc(this.condition(h).name)}</span>`).join("")}</div>
      </div>` : ""}
      ${opts.hideAdd ? "" : `<button class="btn big grad" id="exd-add">${this.icon("plus")} Add to a Routine</button>`}
      ${ex.custom && !opts.hideAdd ? `
        <div class="btn-row" style="margin-top:0.6rem">
          <button class="btn secondary" id="exd-edit">${this.icon("pencil")} Edit</button>
          <button class="btn danger" id="exd-delete">${this.icon("trash")} Delete</button>
        </div>` : ""}
    `);
    const body = document.getElementById("modal-body");
    const add = body.querySelector("#exd-add");
    if (add) add.onclick = () => this.pickRoutineFor(ex.id);
    const edit = body.querySelector("#exd-edit");
    if (edit) edit.onclick = () => this.openExerciseBuilder(ex.id);
    const del = body.querySelector("#exd-delete");
    if (del) del.onclick = () => {
      this.confirm("Delete this exercise?", "“" + ex.name + "” will be removed from your library and from any routines that use it. Past session history is kept.", () => {
        this.state.customExercises = this.state.customExercises.filter(x => x.id !== ex.id);
        this.state.routines.forEach(r => { r.items = r.items.filter(i => i.exId !== ex.id); });
        this.syncCustomExercises();
        this.save(); this.closeModal(); this.refresh();
        this.toast("Exercise deleted");
      }, "Delete");
    };
  };

  // ---------- CUSTOM EXERCISE BUILDER ----------
  // Build or edit a user-created exercise with every field the built-in ones have.
  App.openExerciseBuilder = function (editId) {
    this.pushView("builder:" + (editId || "new"), () => this.openExerciseBuilder(editId));
    const editing = editId ? this.ex(editId) : null;
    const d = editing ? JSON.parse(JSON.stringify(editing)) : {
      name: "", region: "", type: "strengthen", equipment: [], position: "", level: 2,
      muscles: "", helps: [], dose: { sets: 3, reps: 10, hold: 0, timeSec: 0, perSide: false },
      howTo: [], tips: [], caution: "", variations: []
    };
    d.dose = Object.assign({ sets: 3, reps: 10, hold: 0, timeSec: 0, perSide: false }, d.dose);
    const levelNames = { 1: "Gentle", 2: "Moderate", 3: "Advanced" };

    // how the exercise is measured: counted reps, a still hold, or a length of time
    let mode = d.dose.timeSec > 0 ? "time" : (d.dose.hold > 0 && (!d.dose.reps || d.dose.reps <= 1)) ? "hold" : "reps";
    let moreOpen = !!editing;
    const fmtVal = (k, v) => (k === "hold" || k === "timeSec") ? this.fmtDur(v) : v;
    const stepper = (label, k, step) => `
      <div class="stepper-row">
        <div class="stepper-label">${label}</div>
        <div class="stepper"><button data-k="${k}" data-d="-${step}" aria-label="Less">${this.icon("minus")}</button><span class="stepper-val" id="cb-${k}">${fmtVal(k, d.dose[k])}</span><button data-k="${k}" data-d="${step}" aria-label="More">${this.icon("plus")}</button></div>
      </div>`;

    this.openModal(editing ? "Edit exercise" : "Make your own exercise", `
      <div class="cb">
        <section class="cb-card">
          <label class="cb-q" for="cb-name">What is it called?</label>
          <input type="text" id="cb-name" value="${this.esc(d.name)}" placeholder="For example, Wall Push-Up" autocomplete="off">
        </section>
        <section class="cb-card">
          <div class="cb-q">Which part of the body?</div>
          <div class="opt-grid two" id="cb-region">
            ${window.REGIONS.map(r => `<button class="opt-btn ${d.region === r.id ? "on" : ""}" data-v="${r.id}" aria-pressed="${d.region === r.id}">${this.esc(r.name)}</button>`).join("")}
          </div>
        </section>
        <section class="cb-card">
          <div class="cb-q">How do you do it?</div>
          <div class="seg seg3" role="tablist" id="cb-mode">
            <button role="tab" data-m="reps" class="${mode === "reps" ? "on" : ""}">Count reps</button>
            <button role="tab" data-m="hold" class="${mode === "hold" ? "on" : ""}">Hold still</button>
            <button role="tab" data-m="time" class="${mode === "time" ? "on" : ""}">For a time</button>
          </div>
          <div id="cb-dose"></div>
          <div class="toggle-row">
            <div class="stepper-label">Do each side separately</div>
            <label class="switch"><input type="checkbox" id="cb-perside" ${d.dose.perSide ? "checked" : ""}><span class="slider"></span></label>
          </div>
        </section>

        <button class="re-more-toggle" id="cb-more" aria-expanded="${moreOpen}">${this.icon("note")}<span>More details (optional)</span><span id="cb-more-chev">${this.icon(moreOpen ? "chevU" : "chevD")}</span></button>
        <div class="cb-more" id="cb-more-body" ${moreOpen ? "" : "hidden"}>
          <label class="field-label" for="cb-howto">Steps, one per line</label>
          <textarea id="cb-howto" placeholder="Stand an arm's length from a wall.&#10;Lean in slowly.&#10;Push back to start.">${this.esc((d.howTo || []).join("\n"))}</textarea>
          <label class="field-label" for="cb-muscles">Muscles it works</label>
          <input type="text" id="cb-muscles" value="${this.esc(d.muscles)}" placeholder="For example, chest and shoulders">
          <label class="field-label" for="cb-position">Starting position</label>
          <input type="text" id="cb-position" value="${this.esc(d.position)}" placeholder="For example, standing at a wall">
          <div class="field-label">Kind of movement</div>
          <div class="chip-row" id="cb-type">${window.EX_TYPES.map(t => `<button class="chip ${d.type === t.id ? "on" : ""}" data-v="${t.id}">${t.name}</button>`).join("")}</div>
          <div class="field-label">How hard</div>
          <div class="opt-grid three" id="cb-level">${[1, 2, 3].map(l => `<button class="opt-btn ${d.level === l ? "on" : ""}" data-v="${l}">${levelNames[l]}</button>`).join("")}</div>
          <div class="field-label">Equipment (tap all that apply)</div>
          <div class="chip-row" id="cb-equip">${window.EQUIPMENT.map(q => `<button class="chip ${d.equipment.includes(q.id) ? "on" : ""}" data-v="${q.id}">${this.esc(q.name)}</button>`).join("")}</div>
          <label class="field-label" for="cb-tips">Helpful tips, one per line</label>
          <textarea id="cb-tips" placeholder="Keep your back straight." style="min-height:3.6rem">${this.esc((d.tips || []).join("\n"))}</textarea>
          <label class="field-label" for="cb-caution">Take care note</label>
          <input type="text" id="cb-caution" value="${this.esc(d.caution || "")}" placeholder="For example, stop if you feel sharp pain">
          <label class="field-label" for="cb-variations">Easier or harder versions, one per line as Name: how</label>
          <textarea id="cb-variations" placeholder="Counter Push-Up: Use a kitchen counter to make it easier." style="min-height:3.6rem">${this.esc((d.variations || []).map(v => v.name + ": " + v.note).join("\n"))}</textarea>
          <div class="field-label">Often used for</div>
          <div class="chip-row" id="cb-helps">${window.CONDITIONS.map(c => `<button class="chip ${d.helps.includes(c.id) ? "on" : ""}" data-v="${c.id}">${this.esc(c.name)}</button>`).join("")}</div>
        </div>
        <div class="cb-foot"><button class="btn big grad" id="cb-save">${editing ? "Save changes" : "Add to my exercises"}</button></div>
      </div>
    `);

    const body = document.getElementById("modal-body");
    const renderDose = () => {
      const box = body.querySelector("#cb-dose");
      box.innerHTML = stepper("Sets", "sets", 1) +
        (mode === "reps" ? stepper("Reps", "reps", 1) + stepper("Hold each rep (seconds)", "hold", 5)
          : mode === "hold" ? stepper("Hold for", "hold", 5)
          : stepper("Keep going for", "timeSec", 15));
      box.querySelectorAll(".stepper button").forEach(b => b.onclick = () => {
        const k = b.dataset.k, delta = Number(b.dataset.d);
        const mins = { sets: 1, reps: 1, hold: mode === "hold" ? 5 : 0, timeSec: 15 };
        d.dose[k] = Math.max(mins[k], (d.dose[k] || 0) + delta);
        box.querySelector("#cb-" + k).textContent = fmtVal(k, d.dose[k]);
      });
    };
    const setMode = (m) => {
      mode = m;
      if (m === "reps") { d.dose.timeSec = 0; if (!d.dose.reps || d.dose.reps < 2) d.dose.reps = 10; }
      if (m === "hold") { d.dose.timeSec = 0; d.dose.reps = 1; if (!d.dose.hold) d.dose.hold = 30; }
      if (m === "time") { d.dose.hold = 0; d.dose.reps = 0; if (!d.dose.timeSec) d.dose.timeSec = 60; }
      body.querySelectorAll("#cb-mode button").forEach(x => x.classList.toggle("on", x.dataset.m === m));
      renderDose();
    };
    setMode(mode);
    body.querySelectorAll("#cb-mode button").forEach(b => b.onclick = () => setMode(b.dataset.m));
    body.querySelector("#cb-more").onclick = () => {
      moreOpen = !moreOpen;
      body.querySelector("#cb-more-body").hidden = !moreOpen;
      body.querySelector("#cb-more").setAttribute("aria-expanded", moreOpen);
      body.querySelector("#cb-more-chev").innerHTML = this.icon(moreOpen ? "chevU" : "chevD");
    };
    // single-select groups
    const single = (id, key, isNum) => {
      body.querySelectorAll("#" + id + " [data-v]").forEach(ch => ch.onclick = () => {
        body.querySelectorAll("#" + id + " [data-v]").forEach(x => { x.classList.toggle("on", x === ch); x.setAttribute("aria-pressed", x === ch); });
        d[key] = isNum ? Number(ch.dataset.v) : ch.dataset.v;
      });
    };
    single("cb-region", "region");
    single("cb-type", "type");
    single("cb-level", "level", true);
    // multi-select chip groups
    body.querySelectorAll("#cb-equip .chip").forEach(ch => ch.onclick = () => {
      ch.classList.toggle("on");
      d.equipment = [...body.querySelectorAll("#cb-equip .chip.on")].map(x => x.dataset.v);
    });
    body.querySelectorAll("#cb-helps .chip").forEach(ch => ch.onclick = () => {
      ch.classList.toggle("on");
      d.helps = [...body.querySelectorAll("#cb-helps .chip.on")].map(x => x.dataset.v);
    });
    body.querySelector("#cb-perside").onchange = (e) => { d.dose.perSide = e.target.checked; };

    body.querySelector("#cb-save").onclick = () => {
      d.name = body.querySelector("#cb-name").value.trim();
      d.muscles = body.querySelector("#cb-muscles").value.trim();
      d.position = body.querySelector("#cb-position").value.trim();
      d.caution = body.querySelector("#cb-caution").value.trim();
      d.howTo = body.querySelector("#cb-howto").value.split("\n").map(x => x.trim()).filter(Boolean);
      d.tips = body.querySelector("#cb-tips").value.split("\n").map(x => x.trim()).filter(Boolean);
      d.variations = body.querySelector("#cb-variations").value.split("\n").map(x => x.trim()).filter(Boolean).map(line => {
        const i = line.indexOf(":");
        return i > 0 ? { name: line.slice(0, i).trim(), note: line.slice(i + 1).trim() } : { name: line, note: "" };
      });
      if (!d.name) { this.toast("Give your exercise a name first"); body.querySelector("#cb-name").focus(); return; }
      if (!d.region) { this.toast("Pick which part of the body it is for"); body.querySelector("#cb-region").scrollIntoView({ block: "center", behavior: "smooth" }); return; }
      if (d.equipment.length === 0) d.equipment = ["none"];
      d.custom = true;

      if (editing) {
        const idx = this.state.customExercises.findIndex(x => x.id === editId);
        if (idx >= 0) this.state.customExercises[idx] = d;
      } else {
        d.id = "custom-" + this.uid();
        this.state.customExercises.push(d);
      }
      this.syncCustomExercises();
      this.save();
      this.toast(editing ? "Exercise updated" : "Added to your library");
      this.refresh();
      // the builder step is done; back from the detail view should skip past it
      this._modalStack.pop();
      this.openExerciseDetail(d.id);
    };
  };

  // choose which routine to add an exercise to
  App.pickRoutineFor = function (exId) {
    const ex = this.ex(exId);
    this.pushView("pickfor:" + exId, () => this.pickRoutineFor(exId));
    const routines = this.state.routines;
    this.openModal("Add “" + ex.name + "” to…", `
      ${routines.length ? routines.map(r => `
        <div class="ex-item" data-r="${r.id}">
          <div class="ex-item-icon tile accent">${this.icon("clipboard")}</div>
          <div class="ex-item-info"><div class="ex-item-name">${this.esc(r.name)}</div>
          <div class="ex-item-meta"><span class="tag">${r.items.length} exercises</span></div></div>
          <div class="ex-item-chev">${this.icon("plus")}</div>
        </div>`).join("") : `<p style="color:var(--muted);margin-bottom:1rem">No routines yet. Create one first.</p>`}
      <button class="btn ghost big" id="pick-new-routine" style="margin-top:0.5rem">${this.icon("plus")} Create a New Routine</button>
    `);
    const body = document.getElementById("modal-body");
    body.querySelectorAll(".ex-item[data-r]").forEach(n => n.onclick = () => {
      const r = this.state.routines.find(x => x.id === n.dataset.r);
      r.items.push({
        exId, sets: ex.dose.sets || 1, reps: ex.dose.reps || 0, hold: ex.dose.hold || 0,
        timeSec: ex.dose.timeSec || 0, perSide: !!ex.dose.perSide
      });
      this.save(); this.closeModal();
      this.toast("Added to " + r.name);
      this.refresh();
    });
    body.querySelector("#pick-new-routine").onclick = () => this.createBlankRoutine(exId);
  };
})();
