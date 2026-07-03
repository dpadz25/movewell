// MoveWell routines: list, create (blank / from template), edit items and doses
(function () {

  App.renderRoutines = function () {
    const s = this.state;
    document.getElementById("routines-scroll").innerHTML = `
      <span class="page-tag">${this.icon("clipboard")} Your Plan</span>
      <div class="page-title">Routines</div>
      <div class="page-sub">A routine is a set of exercises done together, like a session your therapist or coach would give you.</div>
      <button class="btn big grad" onclick="App.openNewRoutineChooser()">${this.icon("plus")} New Routine</button>
      <div class="section-label">${s.routines.length ? "My Routines" : ""}</div>
      ${s.routines.length ? s.routines.map(r => `
        <div class="routine-card">
          <div class="routine-card-info" onclick="App.openRoutineEditor('${r.id}')">
            <div class="routine-card-name">${this.esc(r.name)}</div>
            <div class="routine-card-meta">${r.items.length} exercises · tap to view or edit</div>
          </div>
          <button class="routine-start-btn" onclick="App.startSession('${r.id}')">${this.icon("play")} Start</button>
        </div>`).join("")
      : `<div class="empty-state"><div class="empty-icon">${this.icon("clipboard")}</div><p>No routines yet.<br>Start from a ready-made plan or build your own.</p></div>`}
    `;
  };

  // ----- create flow -----
  App.openNewRoutineChooser = function () {
    this.openModal("New Routine", `
      <p style="color:var(--muted);font-size:0.92rem;margin-bottom:1rem">Start from a ready-made plan, from recovery programs to push / pull / legs, or build your own from scratch.</p>
      <div class="section-label" style="margin-top:0">Ready-Made Plans</div>
      ${window.TEMPLATES.map(t => `
        <div class="ex-item" data-t="${t.id}">
          <div class="ex-item-icon tile ${t.conditions.includes("strength-training") ? "purple" : "accent"}">${this.icon(t.conditions.includes("strength-training") ? "dumbbell" : "medical")}</div>
          <div class="ex-item-info">
            <div class="ex-item-name">${this.esc(t.name)}</div>
            <div class="ex-item-meta"><span class="tag">${t.items.length} exercises</span>
              ${t.conditions.slice(0, 2).map(c => `<span class="tag accent">${this.esc(this.condition(c).name)}</span>`).join("")}
            </div>
          </div>
          <div class="ex-item-chev">${this.icon("plus")}</div>
        </div>`).join("")}
      <button class="btn ghost big" id="new-blank" style="margin-top:0.8rem">${this.icon("pencil")} Build My Own From Scratch</button>
    `);
    const body = document.getElementById("modal-body");
    body.querySelectorAll(".ex-item[data-t]").forEach(n => n.onclick = () => {
      const t = window.TEMPLATES.find(x => x.id === n.dataset.t);
      const r = this.routineFromTemplate(t);
      this.state.routines.push(r);
      this.save(); this.closeModal();
      this.toast("Routine added");
      this.openRoutineEditor(r.id);
    });
    body.querySelector("#new-blank").onclick = () => { this.closeModal(); this.createBlankRoutine(); };
  };

  App.createBlankRoutine = function (firstExId) {
    const r = { id: this.uid(), name: "", desc: "", items: [] };
    if (firstExId) {
      const ex = this.ex(firstExId);
      r.items.push({ exId: firstExId, sets: ex.dose.sets || 1, reps: ex.dose.reps || 0, hold: ex.dose.hold || 0, timeSec: ex.dose.timeSec || 0, perSide: !!ex.dose.perSide });
    }
    this.openModal("Name Your Routine", `
      <label class="field-label">Routine name</label>
      <input type="text" id="new-routine-name" placeholder="e.g. Morning Neck Care" autocomplete="off">
      <button class="btn big grad" id="new-routine-go" style="margin-top:1rem">Create Routine</button>
    `);
    const body = document.getElementById("modal-body");
    const input = body.querySelector("#new-routine-name");
    const go = () => {
      r.name = input.value.trim() || "My Routine";
      this.state.routines.push(r);
      this.save(); this.closeModal();
      this.openRoutineEditor(r.id);
    };
    body.querySelector("#new-routine-go").onclick = go;
    input.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
    input.focus();
  };

  // ----- editor -----
  App.openRoutineEditor = function (rid) {
    const r = this.state.routines.find(x => x.id === rid);
    if (!r) return;
    this.openModal("Edit Routine", `
      <label class="field-label">Routine name</label>
      <input type="text" id="re-name" value="${this.esc(r.name)}">
      ${r.desc ? `<p style="font-size:0.85rem;color:var(--muted);margin-top:0.5rem">${this.esc(r.desc)}</p>` : ""}
      <div class="section-label">Exercises (${r.items.length})</div>
      <div id="re-items">${r.items.map((it, i) => this.routineItemHtml(r, it, i)).join("") || `<p style="color:var(--muted);font-size:0.9rem">No exercises yet. Add some below.</p>`}</div>
      <button class="btn big" id="re-add" style="margin-top:0.6rem">${this.icon("plus")} Add Exercises</button>
      <div class="btn-row" style="margin-top:0.8rem">
        <button class="btn secondary" id="re-start">${this.icon("play")} Start This Routine</button>
        <button class="btn danger" id="re-delete">${this.icon("trash")} Delete</button>
      </div>
    `);
    const body = document.getElementById("modal-body");
    body.querySelector("#re-name").onchange = (e) => { r.name = e.target.value.trim() || r.name; this.save(); this.refresh(); };
    body.querySelector("#re-add").onclick = () => this.openExercisePicker(r.id);
    body.querySelector("#re-start").onclick = () => { this.closeModal(); this.startSession(r.id); };
    body.querySelector("#re-delete").onclick = () => {
      this.confirm("Delete this routine?", "“" + r.name + "” and its exercise list will be removed. Your past session history is kept.", () => {
        this.state.routines = this.state.routines.filter(x => x.id !== r.id);
        this.save(); this.closeModal(); this.refresh();
        this.toast("Routine deleted");
      }, "Delete");
    };
    this.bindRoutineItemButtons(r);
  };

  App.routineItemHtml = function (r, it, i) {
    const ex = this.ex(it.exId);
    if (!ex) return "";
    return `
      <div class="routine-item" data-i="${i}">
        <div class="routine-item-info" data-act="dose">
          <div class="routine-item-name">${i + 1}. ${this.esc(ex.name)}</div>
          <div class="routine-item-dose">${this.doseText(it)} · tap to adjust</div>
        </div>
        <button class="mini-btn" data-act="up" title="Move up" ${i === 0 ? "disabled style='opacity:0.3'" : ""}>${this.icon("arrowUp")}</button>
        <button class="mini-btn" data-act="down" title="Move down" ${i === r.items.length - 1 ? "disabled style='opacity:0.3'" : ""}>${this.icon("arrowDown")}</button>
        <button class="mini-btn danger" data-act="remove" title="Remove">${this.icon("close")}</button>
      </div>`;
  };

  App.bindRoutineItemButtons = function (r) {
    const body = document.getElementById("modal-body");
    body.querySelectorAll(".routine-item").forEach(node => {
      const i = Number(node.dataset.i);
      node.querySelectorAll("[data-act]").forEach(btn => btn.onclick = (e) => {
        e.stopPropagation();
        const act = btn.dataset.act;
        if (act === "up" && i > 0) { [r.items[i - 1], r.items[i]] = [r.items[i], r.items[i - 1]]; this.save(); this.openRoutineEditor(r.id); }
        if (act === "down" && i < r.items.length - 1) { [r.items[i + 1], r.items[i]] = [r.items[i], r.items[i + 1]]; this.save(); this.openRoutineEditor(r.id); }
        if (act === "remove") { r.items.splice(i, 1); this.save(); this.openRoutineEditor(r.id); }
        if (act === "dose") this.openDoseEditor(r.id, i);
      });
    });
  };

  // ----- dose editor -----
  App.openDoseEditor = function (rid, i) {
    const r = this.state.routines.find(x => x.id === rid);
    const it = r.items[i];
    const ex = this.ex(it.exId);
    const timed = it.timeSec > 0;
    this.openModal(ex.name, `
      <p style="font-size:0.85rem;color:var(--muted);margin-bottom:1rem">Adjust the amounts to match your plan.</p>
      <div class="stepper-row">
        <div class="stepper-label">Sets</div>
        <div class="stepper"><button data-k="sets" data-d="-1">${this.icon("minus")}</button><span class="stepper-val" id="dv-sets">${it.sets}</span><button data-k="sets" data-d="1">${this.icon("plus")}</button></div>
      </div>
      ${timed ? `
      <div class="stepper-row">
        <div class="stepper-label">Time (seconds)</div>
        <div class="stepper"><button data-k="timeSec" data-d="-15">${this.icon("minus")}</button><span class="stepper-val" id="dv-timeSec">${it.timeSec}</span><button data-k="timeSec" data-d="15">${this.icon("plus")}</button></div>
      </div>` : `
      <div class="stepper-row">
        <div class="stepper-label">Reps</div>
        <div class="stepper"><button data-k="reps" data-d="-1">${this.icon("minus")}</button><span class="stepper-val" id="dv-reps">${it.reps}</span><button data-k="reps" data-d="1">${this.icon("plus")}</button></div>
      </div>
      <div class="stepper-row">
        <div class="stepper-label">Hold (seconds)</div>
        <div class="stepper"><button data-k="hold" data-d="-5">${this.icon("minus")}</button><span class="stepper-val" id="dv-hold">${it.hold}</span><button data-k="hold" data-d="5">${this.icon("plus")}</button></div>
      </div>`}
      <div class="toggle-row">
        <div class="stepper-label">Do each side separately</div>
        <label class="switch"><input type="checkbox" id="dv-perside" ${it.perSide ? "checked" : ""}><span class="slider"></span></label>
      </div>
      <button class="btn secondary big" id="dv-detail" style="margin-bottom:0.6rem">${this.icon("book")} View Exercise Instructions</button>
      <button class="btn big grad" id="dv-done">${this.icon("check")} Done</button>
    `);
    const body = document.getElementById("modal-body");
    body.querySelectorAll(".stepper button").forEach(b => b.onclick = () => {
      const k = b.dataset.k, d = Number(b.dataset.d);
      const mins = { sets: 1, reps: 0, hold: 0, timeSec: 15 };
      it[k] = Math.max(mins[k], (it[k] || 0) + d);
      body.querySelector("#dv-" + k).textContent = it[k];
      this.save();
    });
    body.querySelector("#dv-perside").onchange = (e) => { it.perSide = e.target.checked; this.save(); };
    body.querySelector("#dv-detail").onclick = () => this.openExerciseDetail(it.exId, { hideAdd: true });
    body.querySelector("#dv-done").onclick = () => this.openRoutineEditor(rid);
  };

  // ----- picker: add exercises to a routine -----
  App.openExercisePicker = function (rid) {
    const r = this.state.routines.find(x => x.id === rid);
    this._pick = { q: "", region: "" };
    const render = () => {
      const q = this._pick.q.toLowerCase();
      const list = window.EXERCISES.filter(ex => {
        if (this._pick.region && ex.region !== this._pick.region) return false;
        if (q && !(ex.name + " " + ex.muscles).toLowerCase().includes(q)) return false;
        return true;
      });
      const inR = new Set(r.items.map(i => i.exId));
      document.getElementById("pick-list").innerHTML = list.map(ex => `
        <div class="ex-item" data-ex="${ex.id}" style="${inR.has(ex.id) ? "opacity:0.55" : ""}">
          <div class="ex-item-icon tile ${this.region(ex.region).color || ""}">${this.icon(this.region(ex.region).icon)}</div>
          <div class="ex-item-info">
            <div class="ex-item-name">${this.esc(ex.name)}</div>
            <div class="ex-item-meta">${ex.custom ? `<span class="tag pink">Custom</span>` : ""}<span class="tag ${this.typeMeta(ex.type).color}">${this.typeMeta(ex.type).name}</span><span class="tag">${this.region(ex.region).name}</span></div>
          </div>
          <div class="ex-item-chev">${inR.has(ex.id) ? this.icon("check") : this.icon("plus")}</div>
        </div>`).join("");
      document.getElementById("pick-list").querySelectorAll(".ex-item").forEach(n => n.onclick = () => {
        const exId = n.dataset.ex;
        if (inR.has(exId)) { this.toast("Already in this routine"); return; }
        const ex = this.ex(exId);
        r.items.push({ exId, sets: ex.dose.sets || 1, reps: ex.dose.reps || 0, hold: ex.dose.hold || 0, timeSec: ex.dose.timeSec || 0, perSide: !!ex.dose.perSide });
        this.save();
        this.toast(ex.name + " added");
        render();
      });
    };
    this.openModal("Add to “" + r.name + "”", `
      <div class="search-wrap"><span class="search-icon">${this.icon("search")}</span><input type="text" id="pick-search" placeholder="Search exercises"></div>
      <div class="filter-wrap"><div class="filter-bar" id="pick-regions">
        <button class="chip on" data-v="">All</button>
        ${window.REGIONS.map(rg => `<button class="chip" data-v="${rg.id}">${this.icon(rg.icon)} ${rg.name}</button>`).join("")}
      </div></div>
      <div id="pick-list"></div>
      <button class="btn big" id="pick-done" style="margin-top:0.8rem">${this.icon("check")} Done, Back to Routine</button>
    `);
    const body = document.getElementById("modal-body");
    body.querySelector("#pick-search").oninput = (e) => { this._pick.q = e.target.value; render(); };
    body.querySelectorAll("#pick-regions .chip").forEach(ch => ch.onclick = () => {
      body.querySelectorAll("#pick-regions .chip").forEach(x => x.classList.remove("on"));
      ch.classList.add("on");
      this._pick.region = ch.dataset.v;
      render();
    });
    body.querySelector("#pick-done").onclick = () => this.openRoutineEditor(rid);
    render();
  };
})();
