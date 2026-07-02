// MoveWell exercise library: browse, search, filter, exercise detail
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

    document.getElementById("library-scroll").innerHTML = `
      <span class="page-tag">Exercise Library</span>
      <div class="page-title">Exercises</div>
      <div class="page-sub">Every exercise has step-by-step instructions and easier or harder variations.</div>
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" id="lib-search" placeholder="Search, try 'neck' or 'band'" value="${this.esc(f.q)}">
      </div>
      <div class="filter-bar" id="lib-regions">
        <button class="chip ${!f.region ? "on" : ""}" data-v="">All Areas</button>
        ${window.REGIONS.map(r => `<button class="chip ${f.region === r.id ? "on" : ""}" data-v="${r.id}">${r.icon} ${r.name}</button>`).join("")}
      </div>
      <div class="filter-bar" id="lib-types">
        <button class="chip ${!f.type ? "on" : ""}" data-v="">All Types</button>
        ${window.EX_TYPES.map(t => `<button class="chip ${f.type === t.id ? "on" : ""}" data-v="${t.id}">${t.name}</button>`).join("")}
      </div>
      <div class="filter-bar" id="lib-equip">
        <button class="chip ${!f.equip ? "on" : ""}" data-v="">Any Equipment</button>
        ${window.EQUIPMENT.map(q => `<button class="chip ${f.equip === q.id ? "on" : ""}" data-v="${q.id}">${q.icon} ${q.name}</button>`).join("")}
      </div>
      <div class="filter-bar" id="lib-level">
        <button class="chip ${!f.level ? "on" : ""}" data-v="0">Any Level</button>
        ${[1, 2, 3].map(l => `<button class="chip ${f.level === l ? "on" : ""}" data-v="${l}">${levelNames[l]}</button>`).join("")}
      </div>
      <div class="filter-count">${list.length} exercise${list.length === 1 ? "" : "s"} found
        ${(f.q || f.region || f.type || f.equip || f.level) ? ` · <a href="#" id="lib-clear" style="color:var(--accent-strong)">clear filters</a>` : ""}
      </div>
      ${list.map(ex => this.exItemHtml(ex)).join("") || `<div class="empty-state"><div class="empty-icon">🔎</div><p>Nothing matches those filters.<br>Try clearing one of them.</p></div>`}
    `;

    const scroll = document.getElementById("library-scroll");
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
      `<div class="empty-state"><div class="empty-icon">🔎</div><p>Nothing matches.</p></div>`);
  };

  App.exItemHtml = function (ex) {
    const t = this.typeMeta(ex.type);
    const r = this.region(ex.region);
    const levelNames = { 1: "Gentle", 2: "Moderate", 3: "Advanced" };
    return `
      <div class="ex-item" onclick="App.openExerciseDetail('${ex.id}')">
        <div class="ex-item-icon">${r.icon}</div>
        <div class="ex-item-info">
          <div class="ex-item-name">${this.esc(ex.name)}</div>
          <div class="ex-item-meta">
            <span class="tag ${t.color}">${t.name}</span>
            <span class="tag">${r.name}</span>
            <span class="tag">${levelNames[ex.level]}</span>
            ${ex.equipment.includes("none") ? `<span class="tag">🙌 No equipment</span>` : ex.equipment.slice(0, 2).map(q => `<span class="tag">${this.equip(q).icon} ${this.equip(q).name}</span>`).join("")}
            ${(ex.variations && ex.variations.length) ? `<span class="tag blue">${ex.variations.length} variation${ex.variations.length === 1 ? "" : "s"}</span>` : ""}
          </div>
        </div>
        <div class="ex-item-chev">›</div>
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
        <span class="tag ${t.color}">${t.name}</span>
        <span class="tag">${r.icon} ${r.name}</span>
        <span class="tag">${levelNames[ex.level]}</span>
        ${ex.equipment.map(q => `<span class="tag">${this.equip(q).icon} ${this.equip(q).name}</span>`).join("")}
      </div>
      <div class="exd-block">
        <h3>Works On</h3>
        <div style="font-size:0.95rem">${this.esc(ex.muscles)} · <span style="color:var(--muted)">${this.esc(ex.position)}</span></div>
      </div>
      <div class="exd-block">
        <h3>Suggested Amount</h3>
        <div style="font-size:1.05rem;font-weight:700;color:var(--accent-strong)">${this.doseText(ex.dose)}</div>
      </div>
      <a class="video-link" href="${yt}" target="_blank" rel="noopener">▶ Watch a video demonstration</a>
      <div class="exd-block">
        <h3>How To Do It</h3>
        <ol class="exd-steps">${ex.howTo.map(s => `<li>${this.esc(s)}</li>`).join("")}</ol>
      </div>
      ${ex.tips && ex.tips.length ? `<div class="exd-block"><h3>Helpful Tips</h3>${ex.tips.map(tip => `<div class="exd-tip"><span>💡</span><span>${this.esc(tip)}</span></div>`).join("")}</div>` : ""}
      ${ex.caution ? `<div class="exd-block"><h3>Take Care</h3><div class="exd-caution"><span>⚠️</span><span>${this.esc(ex.caution)}</span></div></div>` : ""}
      ${ex.variations && ex.variations.length ? `
        <div class="exd-block"><h3>Variations</h3>
          ${ex.variations.map(v => `<div class="exd-variation"><strong>${this.esc(v.name)}</strong><span>${this.esc(v.note)}</span></div>`).join("")}
        </div>` : ""}
      <div class="exd-block">
        <h3>Often Used For</h3>
        <div class="chip-row">${ex.helps.map(h => `<span class="tag accent">${this.esc(this.condition(h).name)}</span>`).join("")}</div>
      </div>
      ${opts.hideAdd ? "" : `<button class="btn big" id="exd-add">＋ Add to a Routine</button>`}
    `);
    const add = document.getElementById("modal-body").querySelector("#exd-add");
    if (add) add.onclick = () => this.pickRoutineFor(ex.id);
  };

  // choose which routine to add an exercise to
  App.pickRoutineFor = function (exId) {
    const ex = this.ex(exId);
    const routines = this.state.routines;
    this.openModal("Add “" + ex.name + "” to…", `
      ${routines.length ? routines.map(r => `
        <div class="ex-item" data-r="${r.id}">
          <div class="ex-item-icon">📋</div>
          <div class="ex-item-info"><div class="ex-item-name">${this.esc(r.name)}</div>
          <div class="ex-item-meta"><span class="tag">${r.items.length} exercises</span></div></div>
          <div class="ex-item-chev">＋</div>
        </div>`).join("") : `<p style="color:var(--muted);margin-bottom:1rem">No routines yet. Create one first.</p>`}
      <button class="btn ghost big" id="pick-new-routine" style="margin-top:0.5rem">＋ Create a New Routine</button>
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
      this.toast("Added to " + r.name + " ✓");
      this.refresh();
    });
    body.querySelector("#pick-new-routine").onclick = () => {
      this.closeModal();
      this.createBlankRoutine(exId);
    };
  };
})();
