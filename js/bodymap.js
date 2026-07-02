// MoveWell body map: tap where it hurts, log how it feels, get matching exercises
(function () {
  App._bmView = "front";

  // zones: [cx, cy, rx, ry, regionId, label]
  const FRONT_ZONES = [
    [100, 57, 16, 11, "neck", "Neck"],
    [60, 76, 15, 12, "shoulder", "Left Shoulder"],
    [140, 76, 15, 12, "shoulder", "Right Shoulder"],
    [100, 97, 30, 16, "shoulder", "Chest"],
    [50, 136, 11, 12, "elbow", "Left Elbow"],
    [150, 136, 11, 12, "elbow", "Right Elbow"],
    [48, 196, 11, 13, "wrist", "Left Wrist & Hand"],
    [152, 196, 11, 13, "wrist", "Right Wrist & Hand"],
    [100, 145, 27, 18, "core", "Stomach / Core"],
    [76, 194, 14, 13, "hip", "Left Hip"],
    [124, 194, 14, 13, "hip", "Right Hip"],
    [81, 306, 13, 14, "knee", "Left Knee"],
    [119, 306, 13, 14, "knee", "Right Knee"],
    [80, 402, 14, 13, "ankle-foot", "Left Ankle & Foot"],
    [120, 402, 14, 13, "ankle-foot", "Right Ankle & Foot"]
  ];
  const BACK_ZONES = [
    [100, 57, 16, 11, "neck", "Neck"],
    [100, 100, 34, 22, "upper-back", "Upper Back"],
    [60, 76, 15, 12, "shoulder", "Left Shoulder"],
    [140, 76, 15, 12, "shoulder", "Right Shoulder"],
    [100, 152, 27, 16, "lower-back", "Lower Back"],
    [100, 195, 33, 17, "hip", "Hips & Buttocks"],
    [50, 136, 11, 12, "elbow", "Left Elbow"],
    [150, 136, 11, 12, "elbow", "Right Elbow"],
    [81, 258, 13, 22, "hip", "Left Thigh"],
    [119, 258, 13, 22, "hip", "Right Thigh"],
    [81, 306, 13, 14, "knee", "Left Knee"],
    [119, 306, 13, 14, "knee", "Right Knee"],
    [81, 352, 12, 20, "ankle-foot", "Left Calf"],
    [119, 352, 12, 20, "ankle-foot", "Right Calf"],
    [80, 402, 14, 13, "ankle-foot", "Left Ankle & Foot"],
    [120, 402, 14, 13, "ankle-foot", "Right Ankle & Foot"]
  ];

  function bodySvg(zones, hurtRegions) {
    const zonesHtml = zones.map(z =>
      `<ellipse class="bm-zone ${hurtRegions.has(z[4]) ? "hurt" : ""}" cx="${z[0]}" cy="${z[1]}" rx="${z[2]}" ry="${z[3]}" data-region="${z[4]}" data-label="${z[5]}"><title>${z[5]}</title></ellipse>`
    ).join("");
    return `
    <svg class="bodymap-svg" viewBox="0 0 200 430" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle class="bm-body" cx="100" cy="30" r="21"/>
        <rect class="bm-body" x="90" y="48" width="20" height="16" rx="6"/>
        <path class="bm-body" d="M 66 64 Q 100 56 134 64 L 138 120 Q 138 150 132 176 L 68 176 Q 62 150 62 120 Z"/>
        <rect class="bm-body" x="42" y="68" width="17" height="62" rx="8"/>
        <rect class="bm-body" x="141" y="68" width="17" height="62" rx="8"/>
        <rect class="bm-body" x="41" y="130" width="15" height="56" rx="7"/>
        <rect class="bm-body" x="144" y="130" width="15" height="56" rx="7"/>
        <ellipse class="bm-body" cx="48" cy="197" rx="9" ry="12"/>
        <ellipse class="bm-body" cx="152" cy="197" rx="9" ry="12"/>
        <path class="bm-body" d="M 68 176 L 132 176 Q 136 196 132 210 L 68 210 Q 64 196 68 176 Z"/>
        <rect class="bm-body" x="70" y="208" width="24" height="102" rx="11"/>
        <rect class="bm-body" x="106" y="208" width="24" height="102" rx="11"/>
        <rect class="bm-body" x="72" y="308" width="19" height="88" rx="9"/>
        <rect class="bm-body" x="109" y="308" width="19" height="88" rx="9"/>
        <ellipse class="bm-body" cx="79" cy="404" rx="15" ry="9"/>
        <ellipse class="bm-body" cx="121" cy="404" rx="15" ry="9"/>
        ${zonesHtml}
      </g>
    </svg>`;
  }

  App.renderBodymap = function () {
    // regions with pain logged in the last 7 days
    const weekAgo = Date.now() - 7 * 86400000;
    const hurt = new Set(this.state.bodyLogs.filter(b => new Date(b.date).getTime() > weekAgo && b.pain >= 3).map(b => b.region));
    const zones = this._bmView === "front" ? FRONT_ZONES : BACK_ZONES;

    const recent = this.state.bodyLogs.slice(-5).reverse();

    document.getElementById("bodymap-scroll").innerHTML = `
      <span class="page-tag">Body Map</span>
      <div class="page-title">Where does it hurt?</div>
      <div class="page-sub">Tap any part of the body to log how it feels and see exercises that can help.</div>
      <div class="bodymap-wrap">
        <div class="bodymap-toggle">
          <button class="btn ${this._bmView === "front" ? "" : "secondary"} small" id="bm-front">Front</button>
          <button class="btn ${this._bmView === "back" ? "" : "secondary"} small" id="bm-back">Back</button>
        </div>
        ${bodySvg(zones, hurt)}
        <div class="bodymap-hint">💡 Green areas are tappable.${hurt.size ? " Red areas had pain logged this week." : ""}</div>
      </div>
      ${recent.length ? `
        <div class="section-label">Recent Body Notes</div>
        ${recent.map(b => `
          <div class="history-item">
            <div class="history-item-top">
              <div class="history-item-name">${this.region(b.region).icon} ${this.esc(b.label || this.region(b.region).name)}</div>
              <div class="history-item-date">${this.fmtDate(b.date)}</div>
            </div>
            <div class="history-item-meta"><span>Pain: <strong>${b.pain}/10</strong></span>${b.note ? `<span>“${this.esc(b.note)}”</span>` : ""}</div>
          </div>`).join("")}` : ""}
    `;
    const scroll = document.getElementById("bodymap-scroll");
    scroll.querySelector("#bm-front").onclick = () => { this._bmView = "front"; this.renderBodymap(); };
    scroll.querySelector("#bm-back").onclick = () => { this._bmView = "back"; this.renderBodymap(); };
    scroll.querySelectorAll(".bm-zone").forEach(z => z.onclick = () => this.openRegionSheet(z.dataset.region, z.dataset.label));
  };

  App.openRegionSheet = function (regionId, label) {
    const r = this.region(regionId);
    const conds = window.CONDITIONS.filter(c => c.regions.includes(regionId));
    const exs = window.EXERCISES.filter(e => e.region === regionId);
    let painVal = null;

    this.openModal(label || r.name, `
      <div class="card" style="margin-bottom:1rem">
        <div class="feel-title">How does this area feel right now?</div>
        <div class="pain-scale" id="rs-pain">${Array.from({ length: 11 }, (_, i) => `<button class="pain-num" data-p="${i}">${i}</button>`).join("")}</div>
        <div class="pain-scale-labels"><span>No pain</span><span>Worst pain</span></div>
        <input type="text" id="rs-note" placeholder="Optional note, like: stiff in the morning">
        <button class="btn big" id="rs-log" style="margin-top:0.8rem" disabled>Save How It Feels</button>
      </div>
      <div class="section-label" style="margin-top:0.4rem">What might be going on</div>
      <p style="font-size:0.8rem;color:var(--muted2);margin-bottom:0.6rem">Common reasons this area bothers people. Tap one to learn more. Only a professional can diagnose you.</p>
      ${conds.map(c => `
        <div class="region-issue" data-c="${c.id}">
          <div class="region-issue-name">${this.esc(c.name)}</div>
          <div class="region-issue-blurb">${this.esc(c.blurb)}</div>
        </div>`).join("") || `<p style="color:var(--muted)">No listed conditions for this area.</p>`}
      <div class="section-label">Exercises for this area (${exs.length})</div>
      ${exs.map(ex => this.exItemHtml(ex)).join("")}
      <button class="btn big" id="rs-make-routine" style="margin-top:0.8rem">✨ Make Me a Routine for This Area</button>
    `);

    const body = document.getElementById("modal-body");
    body.querySelectorAll("#rs-pain .pain-num").forEach(b => b.onclick = () => {
      body.querySelectorAll("#rs-pain .pain-num").forEach(x => { x.classList.remove("on"); x.style.background = ""; });
      b.classList.add("on");
      const p = Number(b.dataset.p);
      b.style.background = p <= 3 ? "var(--accent)" : p <= 6 ? "var(--yellow)" : "var(--red)";
      painVal = p;
      body.querySelector("#rs-log").disabled = false;
    });
    body.querySelector("#rs-log").onclick = () => {
      this.state.bodyLogs.push({
        date: new Date().toISOString(), region: regionId, label: label || r.name,
        pain: painVal, note: body.querySelector("#rs-note").value.trim()
      });
      this.save(); this.closeModal(); this.renderBodymap();
      this.toast("Body note saved ✓");
    };
    body.querySelectorAll(".region-issue").forEach(n => n.onclick = () => this.openConditionSheet(n.dataset.c, regionId, label));
    body.querySelector("#rs-make-routine").onclick = () => {
      // prefer a template that targets this region, otherwise build from region's gentlest exercises
      const tpl = window.TEMPLATES.find(t => t.conditions.some(c => this.condition(c).regions[0] === regionId)) ||
        window.TEMPLATES.find(t => t.conditions.some(c => this.condition(c).regions.includes(regionId)));
      let routine;
      if (tpl) routine = this.routineFromTemplate(tpl);
      else {
        routine = {
          id: this.uid(), name: r.name + " Care", desc: "",
          items: exs.slice().sort((a, b) => a.level - b.level).slice(0, 7).map(ex => ({
            exId: ex.id, sets: ex.dose.sets || 1, reps: ex.dose.reps || 0, hold: ex.dose.hold || 0,
            timeSec: ex.dose.timeSec || 0, perSide: !!ex.dose.perSide
          }))
        };
      }
      this.state.routines.push(routine);
      this.save();
      this.toast("Routine created ✓");
      this.openRoutineEditor(routine.id);
    };
  };

  App.openConditionSheet = function (condId, regionId, backLabel) {
    const c = this.condition(condId);
    const exs = window.EXERCISES.filter(e => e.helps.includes(condId));
    const tpls = window.TEMPLATES.filter(t => t.conditions.includes(condId));
    this.openModal(c.name, `
      <p style="font-size:0.95rem;color:var(--muted);margin-bottom:1rem">${this.esc(c.blurb)}</p>
      <div class="exd-caution" style="margin-bottom:1rem"><span>⚠️</span><span>This is general information, not a diagnosis. If pain is severe, worsening, or came from an injury, see a professional first.</span></div>
      ${tpls.length ? `
        <div class="section-label" style="margin-top:0">Ready-made plan</div>
        ${tpls.map(t => `<button class="btn big" data-tpl="${t.id}" style="margin-bottom:0.5rem">✨ Add “${this.esc(t.name)}” Routine</button>`).join("")}` : ""}
      <div class="section-label">Exercises that often help (${exs.length})</div>
      ${exs.map(ex => this.exItemHtml(ex)).join("")}
    `);
    const body = document.getElementById("modal-body");
    body.querySelectorAll("[data-tpl]").forEach(b => b.onclick = () => {
      const t = window.TEMPLATES.find(x => x.id === b.dataset.tpl);
      const routine = this.routineFromTemplate(t);
      this.state.routines.push(routine);
      this.save();
      this.toast("Routine added ✓");
      this.openRoutineEditor(routine.id);
    });
  };
})();
