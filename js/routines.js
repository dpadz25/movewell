// MoveWell routines: list, create (blank / from template), edit items and doses
(function () {

  App.renderRoutines = function () {
    const s = this.state;
    const active = s.routines.filter(r => !r.archived);
    const archived = s.routines.filter(r => r.archived);
    document.getElementById("routines-scroll").innerHTML = `
      <span class="page-tag">${this.icon("clipboard")} Your Plan</span>
      <div class="page-title">Routine Library</div>
      <div class="page-sub">All of your routines live here. Tap the home button on a card (swipe left) to choose which ones show on your Home screen.</div>
      <button class="btn big grad" onclick="App.openNewRoutineChooser()">${this.icon("plus")} New Routine</button>
      <div class="section-label">${active.length ? "All Routines" : ""}</div>
      ${active.length ? `<div class="swipe-hint">Swipe a card left to add to Home, edit, or archive</div>` +
        active.map(r => this.routineCardHtml(r, "library")).join("")
      : `<div class="empty-state"><div class="empty-icon">${this.icon("clipboard")}</div><p>No routines yet.<br>Start from a ready-made plan or build your own.</p></div>`}
      ${archived.length ? `
        <div class="section-label">Archived (${archived.length})</div>
        ${archived.map(r => `
          <div class="routine-card archived-card" data-arid="${r.id}">
            <div class="routine-card-info">
              <div class="routine-card-name">${this.esc(r.name)}</div>
              <div class="routine-card-meta">${r.items.length} exercises · archived</div>
            </div>
            <button class="btn secondary small" data-act="restore">${this.icon("upload")} Restore</button>
            <button class="mini-btn danger" data-act="destroy" aria-label="Delete forever">${this.icon("trash")}</button>
          </div>`).join("")}` : ""}
    `;
    const root = document.getElementById("routines-scroll");
    this.bindRoutineCards(root, "library");
    root.querySelectorAll("[data-arid]").forEach(card => {
      const r = s.routines.find(x => x.id === card.dataset.arid);
      card.querySelector("[data-act='restore']").onclick = () => {
        r.archived = false;
        this.save(); this.refresh();
        this.toast("Routine restored");
      };
      card.querySelector("[data-act='destroy']").onclick = () => {
        this.confirm("Delete forever?", "“" + r.name + "” will be permanently removed. Your past session history is kept.", () => {
          this.state.routines = this.state.routines.filter(x => x.id !== r.id);
          this.save(); this.refresh();
          this.toast("Routine deleted");
        }, "Delete");
      };
    });
  };

  // ----- create flow -----
  // Two levels: pick a simple body area first, then the specific plan.
  App.openNewRoutineChooser = function () {
    this.pushView("chooser", () => this.openNewRoutineChooser());
    this.openModal("New Routine", `
      <button class="btn big grad" id="new-blank">${this.icon("pencil")} Build My Own From Scratch</button>
      <div class="section-label">Or start from a ready-made plan</div>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.7rem">Pick the part of the body you want to work on and we'll show you the plans for it.</p>
      ${window.TEMPLATE_GROUPS.map(g => `
        <div class="cat-card" data-g="${g.id}">
          <div class="ex-item-icon tile ${g.color}">${this.icon(g.icon)}</div>
          <div class="ex-item-info">
            <div class="ex-item-name">${this.esc(g.name)}</div>
            <div class="cat-card-blurb">${this.esc(g.blurb)} · ${g.templates.length} plan${g.templates.length === 1 ? "" : "s"}</div>
          </div>
          <div class="ex-item-chev">${this.icon("chevR")}</div>
        </div>`).join("")}
    `);
    const body = document.getElementById("modal-body");
    body.querySelector("#new-blank").onclick = () => this.createBlankRoutine();
    body.querySelectorAll(".cat-card").forEach(n => n.onclick = () => this.openTemplateGroup(n.dataset.g));
  };

  App.openTemplateGroup = function (gid) {
    this.pushView("tgroup:" + gid, () => this.openTemplateGroup(gid));
    const g = window.TEMPLATE_GROUPS.find(x => x.id === gid);
    if (!g) return;
    const tpls = g.templates.map(id => window.TEMPLATES.find(t => t.id === id)).filter(Boolean);
    this.openModal(g.name, `
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:0.9rem">Tap a plan to add it to your routines. You can rename it or change any exercise afterward.</p>
      ${tpls.map(t => `
        <div class="ex-item" data-t="${t.id}">
          <div class="ex-item-icon tile ${g.color}">${this.icon(g.icon)}</div>
          <div class="ex-item-info">
            <div class="ex-item-name">${this.esc(t.name)}</div>
            <div class="cat-card-blurb">${this.esc(t.desc)}</div>
            <div class="ex-item-meta" style="margin-top:0.35rem"><span class="tag">${t.items.length} exercises</span></div>
          </div>
          <div class="ex-item-chev">${this.icon("plus")}</div>
        </div>`).join("")}
    `);
    const body = document.getElementById("modal-body");
    body.querySelectorAll(".ex-item[data-t]").forEach(n => n.onclick = () => {
      const t = window.TEMPLATES.find(x => x.id === n.dataset.t);
      const r = this.routineFromTemplate(t);
      this.state.routines.push(r);
      this.save();
      this.toast("Routine added");
      this.openRoutineEditor(r.id);
    });
  };

  App.createBlankRoutine = function (firstExId) {
    this.pushView("blank-name", () => this.createBlankRoutine(firstExId));
    const r = { id: this.uid(), name: "", desc: "", onHome: true, archived: false, items: [] };
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
      this.save();
      // the naming step is done; back from the editor should skip past it
      this._modalStack.pop();
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
    this.pushView("editor:" + rid, () => this.openRoutineEditor(rid));
    this.openModal("Edit Routine", `
      <label class="field-label">Routine name</label>
      <input type="text" id="re-name" value="${this.esc(r.name)}">
      ${r.desc ? `<p style="font-size:0.85rem;color:var(--muted);margin-top:0.5rem">${this.esc(r.desc)}</p>` : ""}
      <p style="font-size:0.85rem;color:var(--muted2);margin-top:0.4rem">Estimated session: ~${this.estimateRoutineMin(r)} min including rest</p>
      <div class="section-label">Exercises (${r.items.length})</div>
      ${r.items.length > 1 ? `<p style="font-size:0.78rem;color:var(--muted2);margin:-0.2rem 0 0.5rem">Tap the link between two exercises to pair them as a superset. You'll alternate between them during the session, resting after each round.</p>` : ""}
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
    const next = r.items[i + 1];
    const linked = !!(it.groupId && next && next.groupId === it.groupId);
    const inGroup = !!it.groupId;
    return `
      <div class="routine-item ${inGroup ? "ss-grouped" : ""}" data-i="${i}">
        <div class="routine-item-info" data-act="dose">
          <div class="routine-item-name">${i + 1}. ${this.esc(it.variant || ex.name)}${inGroup ? ` <span class="ss-tag">${this.icon("link")} superset</span>` : ""}</div>
          <div class="routine-item-dose">${it.variant ? `variation of ${this.esc(ex.name)} · ` : ""}${this.doseText(it)} · tap to adjust</div>
        </div>
        <button class="mini-btn" data-act="up" title="Move up" ${i === 0 ? "disabled style='opacity:0.3'" : ""}>${this.icon("arrowUp")}</button>
        <button class="mini-btn" data-act="down" title="Move down" ${i === r.items.length - 1 ? "disabled style='opacity:0.3'" : ""}>${this.icon("arrowDown")}</button>
        <button class="mini-btn danger" data-act="remove" title="Remove">${this.icon("close")}</button>
      </div>
      ${next ? `<button class="ss-connector ${linked ? "linked" : ""}" data-link="${i}">${this.icon("link")} ${linked ? "Superset linked · tap to unlink" : "Superset with next"}</button>` : ""}`;
  };

  // supersets: consecutive items sharing a groupId alternate during a session.
  // after any reorder or removal, groups must stay contiguous and have 2+ members.
  App.normalizeGroups = function (r) {
    const used = new Set();
    let prevOrig = null, curGid = null;
    r.items.forEach(it => {
      const orig = it.groupId || null;
      if (!orig) { prevOrig = null; curGid = null; return; }
      if (orig !== prevOrig) {
        curGid = used.has(orig) ? this.uid() : orig;
        used.add(orig); used.add(curGid);
        prevOrig = orig;
      }
      it.groupId = curGid;
    });
    const counts = {};
    r.items.forEach(it => { if (it.groupId) counts[it.groupId] = (counts[it.groupId] || 0) + 1; });
    r.items.forEach(it => { if (it.groupId && counts[it.groupId] < 2) delete it.groupId; });
  };

  App.toggleSupersetLink = function (r, i) {
    const a = r.items[i], b = r.items[i + 1];
    if (!a || !b) return;
    if (a.groupId && a.groupId === b.groupId) {
      // unlink: split the group after item i
      const gid = a.groupId, ng = this.uid();
      for (let j = i + 1; j < r.items.length && r.items[j].groupId === gid; j++) r.items[j].groupId = ng;
    } else if (a.groupId && b.groupId) {
      // both already lead groups: merge b's group into a's
      const old = b.groupId;
      r.items.forEach(x => { if (x.groupId === old) x.groupId = a.groupId; });
    } else {
      const gid = a.groupId || b.groupId || this.uid();
      a.groupId = gid; b.groupId = gid;
    }
    this.normalizeGroups(r);
    this.save();
    this.openRoutineEditor(r.id);
  };

  App.bindRoutineItemButtons = function (r) {
    const body = document.getElementById("modal-body");
    body.querySelectorAll(".routine-item").forEach(node => {
      const i = Number(node.dataset.i);
      node.querySelectorAll("[data-act]").forEach(btn => btn.onclick = (e) => {
        e.stopPropagation();
        const act = btn.dataset.act;
        if (act === "up" && i > 0) { [r.items[i - 1], r.items[i]] = [r.items[i], r.items[i - 1]]; this.normalizeGroups(r); this.save(); this.openRoutineEditor(r.id); }
        if (act === "down" && i < r.items.length - 1) { [r.items[i + 1], r.items[i]] = [r.items[i], r.items[i + 1]]; this.normalizeGroups(r); this.save(); this.openRoutineEditor(r.id); }
        if (act === "remove") { r.items.splice(i, 1); this.normalizeGroups(r); this.save(); this.openRoutineEditor(r.id); }
        if (act === "dose") this.openDoseEditor(r.id, i);
      });
    });
    body.querySelectorAll("[data-link]").forEach(btn => btn.onclick = (e) => {
      e.stopPropagation();
      this.toggleSupersetLink(r, Number(btn.dataset.link));
    });
  };

  // ----- dose editor -----
  App.openDoseEditor = function (rid, i) {
    const r = this.state.routines.find(x => x.id === rid);
    const it = r.items[i];
    const ex = this.ex(it.exId);
    this.pushView("dose:" + rid + ":" + i, () => this.openDoseEditor(rid, i));
    const timed = it.timeSec > 0;
    const hasVariations = ex.variations && ex.variations.length > 0;
    this.openModal(ex.name, `
      <p style="font-size:0.85rem;color:var(--muted);margin-bottom:1rem">Adjust the amounts to match your plan.</p>
      ${hasVariations ? `
      <div class="section-label" style="margin-top:0">Which version are you doing?</div>
      <p style="font-size:0.78rem;color:var(--muted2);margin-bottom:0.5rem">Pick the variation you actually use and it will show by that name in this routine and during sessions.</p>
      <div class="chip-row" id="dv-variant" style="margin-bottom:1rem">
        <button class="chip ${!it.variant ? "on" : ""}" data-v="">${this.esc(ex.name)}</button>
        ${ex.variations.map(v => `<button class="chip ${it.variant === v.name ? "on" : ""}" data-v="${this.esc(v.name)}">${this.esc(v.name)}</button>`).join("")}
      </div>` : ""}
      <div class="stepper-row">
        <div class="stepper-label">Sets</div>
        <div class="stepper"><button data-k="sets" data-d="-1">${this.icon("minus")}</button><span class="stepper-val" id="dv-sets">${it.sets}</span><button data-k="sets" data-d="1">${this.icon("plus")}</button></div>
      </div>
      ${timed ? `
      <div class="stepper-row">
        <div class="stepper-label">Time</div>
        <div class="stepper"><button data-k="timeSec" data-d="-15">${this.icon("minus")}</button><span class="stepper-val" id="dv-timeSec" style="min-width:4.4rem">${this.fmtDur(it.timeSec)}</span><button data-k="timeSec" data-d="15">${this.icon("plus")}</button></div>
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
      const k = b.dataset.k;
      let d = Number(b.dataset.d);
      // long cardio blocks step by a full minute instead of 15 seconds
      if (k === "timeSec" && (it.timeSec || 0) >= 300) d = d > 0 ? 60 : -60;
      const mins = { sets: 1, reps: 0, hold: 0, timeSec: 15 };
      it[k] = Math.max(mins[k], (it[k] || 0) + d);
      body.querySelector("#dv-" + k).textContent = k === "timeSec" ? this.fmtDur(it[k]) : it[k];
      this.save();
    });
    body.querySelectorAll("#dv-variant .chip").forEach(ch => ch.onclick = () => {
      body.querySelectorAll("#dv-variant .chip").forEach(x => x.classList.remove("on"));
      ch.classList.add("on");
      it.variant = ch.dataset.v || "";
      if (!it.variant) delete it.variant;
      this.save();
    });
    body.querySelector("#dv-perside").onchange = (e) => { it.perSide = e.target.checked; this.save(); };
    body.querySelector("#dv-detail").onclick = () => this.openExerciseDetail(it.exId, { hideAdd: true });
    body.querySelector("#dv-done").onclick = () => this.modalBack();
  };

  // ----- picker: add exercises to a routine -----
  App.openExercisePicker = function (rid) {
    const r = this.state.routines.find(x => x.id === rid);
    this.pushView("picker:" + rid, () => this.openExercisePicker(rid));
    this._pick = { q: "", region: "" };
    const render = () => {
      const q = this._pick.q.toLowerCase();
      const list = window.EXERCISES.filter(ex => {
        if (this._pick.region && ex.region !== this._pick.region) return false;
        if (q && !(ex.name + " " + ex.muscles + " " + ex.equipment.map(x => this.equip(x).name).join(" ") + " " +
          (ex.variations || []).map(v => v.name).join(" ")).toLowerCase().includes(q)) return false;
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
    body.querySelector("#pick-done").onclick = () => this.modalBack();
    render();
  };
})();
