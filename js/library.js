// MoveWell exercise library: browse, search, filter, exercise detail, custom exercise builder
(function () {
  App._lib = { q: "", region: "", type: "", equip: "", level: 0 };

  App.filteredExercises = function () {
    const f = this._lib;
    const q = f.q.toLowerCase();
    return window.EXERCISES.filter(ex => {
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
          (ex.variations || []).map(v => v.name).join(" ")).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  };

  App.renderLibrary = function () {
    const f = this._lib;
    const list = this.filteredExercises();
    const levelNames = { 1: "Gentle", 2: "Moderate", 3: "Advanced" };
    const filterBar = (id, inner) => `<div class="filter-wrap"><div class="filter-bar" id="${id}">${inner}</div></div>`;

    document.getElementById("library-scroll").innerHTML = `
      <span class="page-tag">${this.icon("book")} Exercise Library</span>
      <div class="page-title">Exercises</div>
      <div class="page-sub">Every exercise has step-by-step instructions and easier or harder variations. Swipe the filter rows sideways to see more.</div>
      <button class="btn ghost big" id="lib-create" style="margin-bottom:0.9rem">${this.icon("plus")} Create Your Own Exercise</button>
      <div class="search-wrap">
        <span class="search-icon">${this.icon("search")}</span>
        <input type="text" id="lib-search" placeholder="Search, try 'neck' or 'bench'" value="${this.esc(f.q)}">
      </div>
      ${filterBar("lib-regions", `
        <button class="chip ${!f.region ? "on" : ""}" data-v="">All Areas</button>
        ${window.REGIONS.map(r => `<button class="chip ${f.region === r.id ? "on" : ""}" data-v="${r.id}">${this.icon(r.icon)} ${r.name}</button>`).join("")}`)}
      ${filterBar("lib-types", `
        <button class="chip ${!f.type ? "on" : ""}" data-v="">All Types</button>
        ${window.EX_TYPES.map(t => `<button class="chip ${f.type === t.id ? "on" : ""}" data-v="${t.id}">${t.name}</button>`).join("")}`)}
      ${filterBar("lib-equip", `
        <button class="chip ${!f.equip ? "on" : ""}" data-v="">Any Equipment</button>
        ${window.EQUIPMENT.map(q => `<button class="chip ${f.equip === q.id ? "on" : ""}" data-v="${q.id}">${this.icon(q.icon)} ${q.name}</button>`).join("")}`)}
      ${filterBar("lib-level", `
        <button class="chip ${!f.level ? "on" : ""}" data-v="0">Any Level</button>
        ${[1, 2, 3].map(l => `<button class="chip ${f.level === l ? "on" : ""}" data-v="${l}">${levelNames[l]}</button>`).join("")}`)}
      <div class="filter-count">${list.length} exercise${list.length === 1 ? "" : "s"} found
        ${(f.q || f.region || f.type || f.equip || f.level) ? ` · <a href="#" id="lib-clear" style="color:var(--accent-strong)">clear filters</a>` : ""}
      </div>
      ${list.map(ex => this.exItemHtml(ex)).join("") || `<div class="empty-state"><div class="empty-icon">${this.icon("search")}</div><p>Nothing matches those filters.<br>Try clearing one of them.</p></div>`}
    `;

    const scroll = document.getElementById("library-scroll");
    this.bindFilterFades(scroll);
    scroll.querySelector("#lib-create").onclick = () => this.openExerciseBuilder();
    const search = scroll.querySelector("#lib-search");
    search.oninput = () => { f.q = search.value; this.renderLibraryListOnly(); };
    const bindChips = (id, key, isNum) => {
      scroll.querySelectorAll("#" + id + " .chip").forEach(ch => ch.onclick = () => {
        f[key] = isNum ? Number(ch.dataset.v) : ch.dataset.v;
        this.renderLibrary();
      });
    };
    bindChips("lib-regions", "region");
    bindChips("lib-types", "type");
    bindChips("lib-equip", "equip");
    bindChips("lib-level", "level", true);
    const clear = scroll.querySelector("#lib-clear");
    if (clear) clear.onclick = (e) => { e.preventDefault(); App._lib = { q: "", region: "", type: "", equip: "", level: 0 }; this.renderLibrary(); };
  };

  // re-render just count + list while typing (keeps keyboard focus)
  App.renderLibraryListOnly = function () {
    const scroll = document.getElementById("library-scroll");
    const list = this.filteredExercises();
    const count = scroll.querySelector(".filter-count");
    if (count) count.innerHTML = `${list.length} exercise${list.length === 1 ? "" : "s"} found`;
    scroll.querySelectorAll(".ex-item, .empty-state").forEach(n => n.remove());
    scroll.insertAdjacentHTML("beforeend",
      list.map(ex => this.exItemHtml(ex)).join("") ||
      `<div class="empty-state"><div class="empty-icon">${this.icon("search")}</div><p>Nothing matches.</p></div>`);
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

  App.openExerciseDetail = function (id, opts) {
    const ex = this.ex(id);
    if (!ex) return;
    opts = opts || {};
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
      <div class="exd-block">
        <h3>Works On</h3>
        <div style="font-size:0.95rem">${this.esc(ex.muscles)}${ex.position ? ` · <span style="color:var(--muted)">${this.esc(ex.position)}</span>` : ""}</div>
      </div>
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
    const editing = editId ? this.ex(editId) : null;
    const d = editing ? JSON.parse(JSON.stringify(editing)) : {
      name: "", region: "", type: "strengthen", equipment: [], position: "", level: 2,
      muscles: "", helps: [], dose: { sets: 3, reps: 10, hold: 0, timeSec: 0, perSide: false },
      howTo: [], tips: [], caution: "", variations: []
    };
    d.dose = Object.assign({ sets: 3, reps: 10, hold: 0, timeSec: 0, perSide: false }, d.dose);
    const levelNames = { 1: "Gentle", 2: "Moderate", 3: "Advanced" };

    this.openModal(editing ? "Edit Exercise" : "Create Exercise", `
      <p style="font-size:0.85rem;color:var(--muted);margin-bottom:0.9rem">Fill this in and your exercise will look and behave exactly like the built-in ones, searchable, filterable, and usable in routines and sessions.</p>

      <div class="builder-section">
        <div class="section-label">${this.icon("pencil")} The Basics</div>
        <label class="field-label">Exercise name *</label>
        <input type="text" id="cb-name" value="${this.esc(d.name)}" placeholder="e.g. Landmine Press">
        <label class="field-label">Muscles it works</label>
        <input type="text" id="cb-muscles" value="${this.esc(d.muscles)}" placeholder="e.g. Shoulders, upper chest, core">
        <label class="field-label">Position / setup</label>
        <input type="text" id="cb-position" value="${this.esc(d.position)}" placeholder="e.g. Standing, holding one end of a barbell">
      </div>

      <div class="builder-section">
        <div class="section-label">${this.icon("core")} Body Area *</div>
        <div class="chip-row" id="cb-region">
          ${window.REGIONS.map(r => `<button class="chip ${d.region === r.id ? "on" : ""}" data-v="${r.id}">${this.icon(r.icon)} ${r.name}</button>`).join("")}
        </div>
      </div>

      <div class="builder-section">
        <div class="section-label">${this.icon("sparkle")} Type & Level</div>
        <div class="chip-row" id="cb-type" style="margin-bottom:0.7rem">
          ${window.EX_TYPES.map(t => `<button class="chip ${d.type === t.id ? "on" : ""}" data-v="${t.id}">${t.name}</button>`).join("")}
        </div>
        <div class="chip-row" id="cb-level">
          ${[1, 2, 3].map(l => `<button class="chip ${d.level === l ? "on" : ""}" data-v="${l}">${levelNames[l]}</button>`).join("")}
        </div>
      </div>

      <div class="builder-section">
        <div class="section-label">${this.icon("dumbbell")} Equipment (tap all that apply)</div>
        <div class="chip-row" id="cb-equip">
          ${window.EQUIPMENT.map(q => `<button class="chip ${d.equipment.includes(q.id) ? "on" : ""}" data-v="${q.id}">${this.icon(q.icon)} ${q.name}</button>`).join("")}
        </div>
      </div>

      <div class="builder-section">
        <div class="section-label">${this.icon("timer")} Suggested Amount</div>
        <div class="stepper-row">
          <div class="stepper-label">Sets</div>
          <div class="stepper"><button data-k="sets" data-d="-1">${this.icon("minus")}</button><span class="stepper-val" id="cb-sets">${d.dose.sets}</span><button data-k="sets" data-d="1">${this.icon("plus")}</button></div>
        </div>
        <div class="stepper-row">
          <div class="stepper-label">Reps <span style="font-weight:400;color:var(--muted2);font-size:0.75rem">(0 if timed)</span></div>
          <div class="stepper"><button data-k="reps" data-d="-1">${this.icon("minus")}</button><span class="stepper-val" id="cb-reps">${d.dose.reps}</span><button data-k="reps" data-d="1">${this.icon("plus")}</button></div>
        </div>
        <div class="stepper-row">
          <div class="stepper-label">Hold (seconds)</div>
          <div class="stepper"><button data-k="hold" data-d="-5">${this.icon("minus")}</button><span class="stepper-val" id="cb-hold">${d.dose.hold}</span><button data-k="hold" data-d="5">${this.icon("plus")}</button></div>
        </div>
        <div class="stepper-row">
          <div class="stepper-label">Timed (seconds) <span style="font-weight:400;color:var(--muted2);font-size:0.75rem">(for planks, carries)</span></div>
          <div class="stepper"><button data-k="timeSec" data-d="-15">${this.icon("minus")}</button><span class="stepper-val" id="cb-timeSec">${d.dose.timeSec}</span><button data-k="timeSec" data-d="15">${this.icon("plus")}</button></div>
        </div>
        <div class="toggle-row" style="margin-bottom:0">
          <div class="stepper-label">Do each side separately</div>
          <label class="switch"><input type="checkbox" id="cb-perside" ${d.dose.perSide ? "checked" : ""}><span class="slider"></span></label>
        </div>
      </div>

      <div class="builder-section">
        <div class="section-label">${this.icon("note")} How To Do It</div>
        <label class="field-label" style="margin-top:0">Steps, one per line</label>
        <textarea id="cb-howto" placeholder="Stand tall with feet shoulder width.&#10;Lower down slowly.&#10;Press back up.">${this.esc((d.howTo || []).join("\n"))}</textarea>
      </div>

      <div class="builder-section">
        <div class="section-label">${this.icon("bulb")} Tips & Cautions</div>
        <label class="field-label" style="margin-top:0">Helpful tips, one per line</label>
        <textarea id="cb-tips" placeholder="Keep your core braced.&#10;Go lighter than you think at first." style="min-height:3.6rem">${this.esc((d.tips || []).join("\n"))}</textarea>
        <label class="field-label">Caution note</label>
        <input type="text" id="cb-caution" value="${this.esc(d.caution || "")}" placeholder="e.g. Stop if you feel sharp pain">
      </div>

      <div class="builder-section">
        <div class="section-label">${this.icon("sparkle")} Variations</div>
        <label class="field-label" style="margin-top:0">One per line, as Name: description</label>
        <textarea id="cb-variations" placeholder="Kneeling Version: Do it from your knees to make it easier.&#10;Weighted Version: Hold a dumbbell for extra challenge." style="min-height:3.6rem">${this.esc((d.variations || []).map(v => v.name + ": " + v.note).join("\n"))}</textarea>
      </div>

      <div class="builder-section">
        <div class="section-label">${this.icon("heart")} Often Used For (optional)</div>
        <div class="chip-row" id="cb-helps">
          ${window.CONDITIONS.map(c => `<button class="chip ${d.helps.includes(c.id) ? "on" : ""}" data-v="${c.id}">${this.esc(c.name)}</button>`).join("")}
        </div>
      </div>

      <button class="btn big grad" id="cb-save">${this.icon("check")} ${editing ? "Save Changes" : "Add to My Library"}</button>
    `);

    const body = document.getElementById("modal-body");
    // single-select chip groups
    const single = (id, key, isNum) => {
      body.querySelectorAll("#" + id + " .chip").forEach(ch => ch.onclick = () => {
        body.querySelectorAll("#" + id + " .chip").forEach(x => x.classList.remove("on"));
        ch.classList.add("on");
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
    // dose steppers
    body.querySelectorAll(".stepper button").forEach(b => b.onclick = () => {
      const k = b.dataset.k, delta = Number(b.dataset.d);
      const mins = { sets: 1, reps: 0, hold: 0, timeSec: 0 };
      d.dose[k] = Math.max(mins[k], (d.dose[k] || 0) + delta);
      body.querySelector("#cb-" + k).textContent = d.dose[k];
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
      if (!d.name) { this.toast("Give your exercise a name first"); return; }
      if (!d.region) { this.toast("Pick a body area for it"); return; }
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
      this.openExerciseDetail(d.id);
    };
  };

  // choose which routine to add an exercise to
  App.pickRoutineFor = function (exId) {
    const ex = this.ex(exId);
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
      if (r.items.some(i => i.exId === exId)) { this.toast("Already in that routine"); return; }
      r.items.push({
        exId, sets: ex.dose.sets || 1, reps: ex.dose.reps || 0, hold: ex.dose.hold || 0,
        timeSec: ex.dose.timeSec || 0, perSide: !!ex.dose.perSide
      });
      this.save(); this.closeModal();
      this.toast("Added to " + r.name);
      this.refresh();
    });
    body.querySelector("#pick-new-routine").onclick = () => {
      this.closeModal();
      this.createBlankRoutine(exId);
    };
  };
})();
