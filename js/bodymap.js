// MoveWell body map: tap where it hurts, log how it feels, get matching exercises
// The silhouette adapts to the male / female choice made in onboarding or settings.
(function () {

  // ---------- the body figure ----------
  // One figure for everyone, built from the parts you tap. Arms are held a little out so
  // every part (wrists and feet included) gets a finger-sized target.
  // viewBox 0 0 260 470. Side "a" is the left of the screen, "b" the right.
  const VB_W = 260, VB_H = 470;
  const SHAPES = {
    neck: [["line", 130, 60, 130, 74, 20]],
    chest: [["rect", 94, 78, 72, 64, 22]],
    belly: [["rect", 98, 146, 64, 50, 16]],
    shoulder: [["circle", 84, 90, 15]],
    upperarm: [["line", 82, 112, 70, 158, 22]],
    forearm: [["line", 67, 172, 56, 218, 20]],
    hand: [["circle", 51, 240, 12]],
    hip: [["rect", 96, 200, 33, 42, 14]],
    thigh: [["line", 110, 256, 108, 308, 30]],
    knee: [["circle", 107, 331, 15]],
    lowerleg: [["line", 107, 360, 107, 410, 24]],
    foot: [["ellipse", 102, 436, 17, 10]]
  };
  // tap areas, at least 40 units (about 45 px) in both directions
  const HITS = {
    neck: [108, 8, 44, 70], chest: [102, 80, 56, 62], belly: [102, 146, 56, 52],
    shoulder: [62, 70, 40, 40], upperarm: [56, 112, 40, 48], forearm: [40, 162, 42, 54],
    hand: [30, 218, 44, 42], hip: [88, 200, 42, 44], thigh: [86, 246, 44, 64],
    knee: [86, 312, 44, 40], lowerleg: [86, 354, 44, 62], foot: [78, 418, 52, 40]
  };
  const PAIRED = ["shoulder", "upperarm", "forearm", "hand", "hip", "thigh", "knee", "lowerleg", "foot"];
  // what each part means: [exercise region, name, muscles], front and back
  const PARTS = {
    front: {
      neck: ["neck", "Neck", "Scalenes, sternocleidomastoid (SCM), deep neck flexors"],
      chest: ["chest", "Chest", "Pectoralis major and minor"],
      belly: ["core", "Belly and core", "Rectus abdominis, obliques, transverse abdominis"],
      shoulder: ["shoulder", "Shoulder", "Deltoid, rotator cuff"],
      upperarm: ["arms", "Upper arm", "Biceps brachii, brachialis"],
      forearm: ["elbow", "Elbow and forearm", "Wrist flexor and extensor tendons, forearm rotators"],
      hand: ["wrist", "Wrist and hand", "Finger flexors and extensors, thumb muscles, carpal tunnel"],
      hip: ["hip", "Hip", "Hip flexors (iliopsoas), adductors"],
      thigh: ["knee", "Front of thigh", "Quadriceps"],
      knee: ["knee", "Knee", "Quadriceps and patellar tendons, joint stabilizers"],
      lowerleg: ["ankle-foot", "Shin", "Tibialis anterior"],
      foot: ["ankle-foot", "Ankle and foot", "Ankle stabilizers, foot arch muscles"]
    },
    back: {
      neck: ["neck", "Neck", "Upper trapezius, levator scapulae, suboccipitals"],
      chest: ["upper-back", "Upper back", "Trapezius, rhomboids, lats"],
      belly: ["lower-back", "Lower back", "Erector spinae, quadratus lumborum, multifidus"],
      shoulder: ["shoulder", "Shoulder blade", "Posterior deltoid, infraspinatus, teres minor"],
      upperarm: ["arms", "Upper arm", "Triceps brachii"],
      forearm: ["elbow", "Elbow and forearm", "Triceps tendon, wrist extensor tendons"],
      hand: ["wrist", "Wrist and hand", "Wrist and finger extensors"],
      hip: ["hip", "Hip and glute", "Gluteus maximus and medius, piriformis"],
      thigh: ["hip", "Back of thigh", "Hamstrings"],
      knee: ["knee", "Back of knee", "Hamstring tendons, calf attachment"],
      lowerleg: ["ankle-foot", "Calf", "Gastrocnemius, soleus"],
      foot: ["ankle-foot", "Heel and ankle", "Achilles tendon, ankle stabilizers"]
    }
  };
  // the key saved with a pain note. Kept close to the old keys ("knee-right", "lower-back")
  // so notes logged before the redesign still light up the right part.
  const ZONE_BASE = { front: { thigh: "thigh", lowerleg: "shin", upperarm: "arms", forearm: "elbow", hand: "wrist", foot: "ankle-foot" },
    back: { thigh: "hamstring", lowerleg: "calf", upperarm: "arms", forearm: "elbow", hand: "wrist", foot: "ankle-foot", hip: "hip" } };

  const mirror = (sh) => {
    const [k, ...v] = sh;
    if (k === "circle" || k === "ellipse") return [k, VB_W - v[0], ...v.slice(1)];
    if (k === "line") return [k, VB_W - v[0], v[1], VB_W - v[2], v[3], v[4]];
    return [k, VB_W - v[0] - v[2], ...v.slice(1)];
  };
  // every tappable part of one view: key, shapes, hit box, region, label, muscles, zone key
  App.bmParts = function (view) {
    view = view === "back" ? "back" : "front";
    const front = view === "front";
    const out = [];
    Object.keys(SHAPES).forEach(base => {
      const meta = PARTS[view][base];
      const sides = PAIRED.includes(base) ? ["a", "b"] : [null];
      sides.forEach(s => {
        const shapes = s === "b" ? SHAPES[base].map(mirror) : SHAPES[base];
        const h = HITS[base];
        const hit = s === "b" ? [VB_W - h[0] - h[2], h[1], h[2], h[3]] : h;
        // facing view: the left of the screen is the person's right. From behind, their left.
        const side = s ? ((s === "a") === front ? "right" : "left") : null;
        const zBase = (ZONE_BASE[view][base]) || meta[0];
        const zone = side ? zBase + "-" + side : (meta[0]);
        const label = side ? (side === "right" ? "Right " : "Left ") + meta[1].charAt(0).toLowerCase() + meta[1].slice(1) : meta[1];
        out.push({ key: base + (s ? "_" + s : ""), base, shapes, hit, region: meta[0], label, muscles: meta[2], zone, side });
      });
    });
    return out;
  };
  const shapeSvg = (sh, cls, extra) => {
    const [k, ...v] = sh;
    extra = extra || "";
    if (k === "circle") return `<circle class="${cls}" cx="${v[0]}" cy="${v[1]}" r="${v[2]}" ${extra}></circle>`;
    if (k === "ellipse") return `<ellipse class="${cls}" cx="${v[0]}" cy="${v[1]}" rx="${v[2]}" ry="${v[3]}" ${extra}></ellipse>`;
    if (k === "rect") return `<rect class="${cls}" x="${v[0]}" y="${v[1]}" width="${v[2]}" height="${v[3]}" rx="${v[4]}" ${extra}></rect>`;
    return `<line class="${cls} line" x1="${v[0]}" y1="${v[1]}" x2="${v[2]}" y2="${v[3]}" style="stroke-width:${v[4]}px" ${extra}></line>`;
  };
  // the figure as SVG. opts.colors: { zoneKey: css color } paints parts (used for pain over time);
  // opts.sel: zone key or "zone|label" to highlight; opts.hurt: Set of zone keys with recent pain;
  // opts.tap: false draws a picture only (no tap areas)
  App.bmFigure = function (view, opts) {
    opts = opts || {};
    const parts = this.bmParts(view);
    const head = ["circle", 130, 34, 23];
    const fat = (sh) => sh[0] === "line" ? [...sh.slice(0, 5), sh[5] + 12] : sh;
    const under = [shapeSvg(head, "bm-under")].concat(parts.flatMap(p => p.shapes.map(sh => shapeSvg(fat(sh), "bm-under")))).join("");
    const seamFor = (sh) => sh[0] === "line" ? shapeSvg([...sh.slice(0, 5), sh[5] + 5], "bm-seam") : "";
    const body = parts.map(p => {
      const color = opts.colors && opts.colors[p.zone];
      const isSel = opts.sel && (opts.sel === p.zone || opts.sel === p.zone + "|" + p.label);
      const cls = ["bm-zone", isSel ? "sel" : "", opts.hurt && opts.hurt.has(p.zone) ? "hurt" : ""].join(" ").trim();
      const style = color ? ` style="--part:${color}"` : "";
      const hit = opts.tap === false ? "" : `<rect class="bm-hit" x="${p.hit[0]}" y="${p.hit[1]}" width="${p.hit[2]}" height="${p.hit[3]}" rx="12"></rect>`;
      const a11y = opts.tap === false ? "" : ` role="button" tabindex="0" aria-label="${this.esc(p.label)}" aria-pressed="${!!isSel}"`;
      return `<g class="${cls}"${style}${a11y} data-key="${p.key}" data-region="${p.region}" data-zone="${p.zone}" data-label="${this.esc(p.label)}" data-muscles="${this.esc(p.muscles)}">${p.shapes.map(seamFor).join("")}${p.shapes.map(sh => shapeSvg(sh, "bm-fill")).join("")}${hit}</g>`;
    }).join("");
    return `<svg class="bodymap-svg bm-figure" viewBox="0 0 ${VB_W} ${VB_H}" xmlns="http://www.w3.org/2000/svg"${opts.tap === false ? ' aria-hidden="true"' : ""}>
      <g class="bm-shadow">${under}</g>
      ${shapeSvg(head, "bm-head")}
      ${body}
    </svg>`;
  };
  // where a part sits, in viewBox units (for badges placed beside it)
  App.bmCenter = function (view, zone) {
    const p = this.bmParts(view).find(x => x.zone === zone);
    if (!p) return null;
    const sh = p.shapes[0];
    if (sh[0] === "circle" || sh[0] === "ellipse") return { x: sh[1], y: sh[2], key: p.key };
    if (sh[0] === "rect") return { x: sh[1] + sh[3] / 2, y: sh[2] + sh[4] / 2, key: p.key };
    return { x: (sh[1] + sh[3]) / 2, y: (sh[2] + sh[4]) / 2, key: p.key };
  };
  App.BM_VIEWBOX = [VB_W, VB_H];

  // seated meditative-pose illustration for the Mind tab: a licensed icon (credited below), rendered as a
  // CSS mask so it recolors automatically for light/dark theme, with a soft halo circle behind it
  const MEDITATION_SVG = `
    <div class="bodymap-mind-halo">
      <div class="bodymap-mind-img"></div>
    </div>`;

  const PMR_STEPS = [
    ["Hands & forearms", "Squeeze both hands into tight fists"],
    ["Upper arms & shoulders", "Pull your elbows in and shrug your shoulders up"],
    ["Face", "Scrunch your whole face, eyes shut, lips pressed"],
    ["Neck & chest", "Gently tip your head back and take a deep breath in"],
    ["Stomach & back", "Pull your stomach in tight, like bracing for a poke"],
    ["Legs & feet", "Straighten your legs and curl your toes down"]
  ];

  function pmrHtml() {
    return `
      <div class="section-label" style="margin-top:1.2rem">Progressive Muscle Relaxation</div>
      <p class="bodymap-mind-text">A short way to release built-up tension, one muscle group at a time. For each step below, tense that area for about 5 seconds, then let it go and relax for 15 to 20 seconds before moving on. The whole tutorial takes about 10 to 15 minutes. Go at your own pace, and skip any step that hurts.</p>
      <div class="pmr-steps">
        ${PMR_STEPS.map((s, i) => `
          <div class="pmr-step">
            <div class="pmr-step-num">${i + 1}</div>
            <div class="pmr-step-body">
              <div class="pmr-step-name">${s[0]}</div>
              <div class="pmr-step-detail">${s[1]}, hold, then relax.</div>
            </div>
          </div>`).join("")}
      </div>`;
  }

  // ---- helpers shared with the Exercises tab (the body map now lives there) ----
  App.bmHurtSet = function () {
    const weekAgo = Date.now() - 7 * 86400000;
    return new Set(this.state.bodyLogs.filter(b => new Date(b.date).getTime() > weekAgo && b.pain >= 3).map(b => b.region));
  };
  App.bmSvg = function (view, selZone) {
    return this.bmFigure(view, { sel: selZone, hurt: this.bmHurtSet() });
  };
  App.openRelaxSheet = function () {
    this.pushView("relax", () => this.openRelaxSheet());
    this.openModal("Feeling tense?", `
      <div class="bodymap-mind">
        ${MEDITATION_SVG}
        <p class="bodymap-mind-text">Stress does not just stay in your head. It can tighten muscles and lower your tolerance for pain, so old aches flare up and new tension builds, especially in the neck, shoulders, and back.</p>
        <div class="bodymap-mind-source">Source: Cleveland Clinic &amp; American Psychological Association</div>
        ${pmrHtml()}
      </div>`);
  };

  App.openRegionSheet = function (regionId, zoneId, label, muscles) {
    const r = this.region(regionId);
    this.pushView("region:" + regionId + ":" + zoneId + ":" + (label || ""), () => this.openRegionSheet(regionId, zoneId, label, muscles));
    // leave out catch-all entries (general fitness, post-surgery) that read as unrelated causes
    const conds = window.CONDITIONS.filter(c => c.regions.includes(regionId) && (c.commonRank ?? 999) < 999)
      .sort((a, b) => (a.commonRank ?? 999) - (b.commonRank ?? 999));
    const exs = window.EXERCISES.filter(e => e.region === regionId && e.type !== "yoga");
    let painVal = null;
    const last = (this.state.bodyLogs || []).filter(b => b.region === zoneId).slice(-1)[0];
    const WORDS = ["No pain", "Barely there", "Mild", "Mild", "Moderate", "Moderate", "Strong", "Strong", "Severe", "Severe", "Worst possible"];
    this._rsOpen = this._rsOpen || {};

    this.openModal(label || r.name, `
      <section class="fin-card rs-card">
        <div class="rs-head">
          <div class="rs-mini">${this.bmFigure(zoneId && /-(right|left)$/.test(zoneId) && /^(hamstring|calf)/.test(zoneId) || ["upper-back", "lower-back"].includes(zoneId) ? "back" : "front", { sel: zoneId, tap: false })}</div>
          <div>
            <h2>How does it feel right now?</h2>
            <p class="fin-hint">${last ? `Last time: ${last.pain} out of 10, ${this.fmtDate(last.date)}.` : "0 means no pain, 10 is the worst."}</p>
          </div>
        </div>
        <div class="pain-steps" id="rs-pain" role="group" aria-label="Pain from 0 to 10">${Array.from({ length: 11 }, (_, i) => `<button class="pain-num pain-step ${i <= 3 ? "lo" : i <= 6 ? "mid" : "hi"}" data-p="${i}" aria-label="Pain ${i}" style="height:${2.4 + i * 0.22}rem">${i}</button>`).join("")}</div>
        <div class="pain-steps-ends"><span>No pain</span><span>Worst</span></div>
        <div class="rs-word" id="rs-word" aria-live="polite">Tap a number</div>
        <input type="text" id="rs-note" placeholder="Anything to add? Like: stiff in the morning" aria-label="Note">
        <button class="btn big grad" id="rs-log" disabled>Save how it feels</button>
      </section>
      ${muscles ? `<div class="bm-muscle-note">${this.icon("person")}<span><strong>Muscles here:</strong> ${this.esc(muscles)}</span></div>` : ""}
      <button class="re-more-toggle rs-toggle" data-sec="why" aria-expanded="${!!this._rsOpen.why}">${this.icon("bulb")}<span>Why might it hurt?</span>${this.icon(this._rsOpen.why ? "chevU" : "chevD")}</button>
      <div class="rs-sec" id="rs-why" ${this._rsOpen.why ? "" : "hidden"}>
        <p class="re-hint">Common reasons this area bothers people. Only a professional can diagnose you.</p>
        ${conds.map(c => `
          <button class="region-issue" data-c="${c.id}">
            <div class="region-issue-name">${this.esc(c.name)}</div>
            <div class="region-issue-blurb">${this.esc(c.blurb)}</div>
          </button>`).join("") || `<p class="home-list-empty">No common causes listed for this area.</p>`}
      </div>
      <button class="re-more-toggle rs-toggle" data-sec="ex" aria-expanded="${!!this._rsOpen.ex}">${this.icon("book")}<span>Exercises for this area (${exs.length})</span>${this.icon(this._rsOpen.ex ? "chevU" : "chevD")}</button>
      <div class="rs-sec" id="rs-ex" ${this._rsOpen.ex ? "" : "hidden"}>
        ${exs.slice(0, 5).map(ex => this.exItemHtml(ex)).join("")}
        ${exs.length > 5 ? `<button class="link-quiet rs-all" id="rs-all">See all ${exs.length} in Exercises</button>` : ""}
      </div>
      <button class="btn ghost big" id="rs-make-routine" style="margin-top:0.8rem">${this.icon("sparkle")} Make me a routine for this area</button>
    `);

    const body = document.getElementById("modal-body");
    body.querySelectorAll(".rs-toggle").forEach(t => t.onclick = () => {
      const k = t.dataset.sec, open = !this._rsOpen[k];
      this._rsOpen[k] = open;
      body.querySelector("#rs-" + k).hidden = !open;
      t.setAttribute("aria-expanded", open);
      t.lastElementChild.outerHTML = this.icon(open ? "chevU" : "chevD");
    });
    const all = body.querySelector("#rs-all");
    if (all) all.onclick = () => {
      this._lib.region = regionId;
      this.closeModal();
      this.showPage("library");
    };
    body.querySelectorAll("#rs-pain .pain-num").forEach(b => b.onclick = () => {
      body.querySelectorAll("#rs-pain .pain-num").forEach(x => { x.classList.remove("on"); x.style.background = ""; });
      b.classList.add("on");
      const p = Number(b.dataset.p);
      b.style.background = p <= 3 ? "var(--accent)" : p <= 6 ? "var(--yellow)" : "var(--red)";
      painVal = p;
      body.querySelector("#rs-word").textContent = p + " out of 10: " + WORDS[p].toLowerCase();
      body.querySelector("#rs-log").disabled = false;
    });
    body.querySelector("#rs-log").onclick = () => {
      this.state.bodyLogs.push({
        date: new Date().toISOString(), region: zoneId, label: label || r.name,
        pain: painVal, note: body.querySelector("#rs-note").value.trim()
      });
      this.save(); this.closeModal(); this.refresh();
      this.toast("Saved. You can see it in Progress.");
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
          id: this.uid(), name: r.name + " Care", desc: "", onHome: true, archived: false,
          items: exs.slice().sort((a, b) => a.level - b.level).slice(0, 7).map(ex => ({
            exId: ex.id, sets: ex.dose.sets || 1, reps: ex.dose.reps || 0, hold: ex.dose.hold || 0,
            timeSec: ex.dose.timeSec || 0, perSide: !!ex.dose.perSide
          }))
        };
      }
      this.state.routines.push(routine);
      this.save();
      this.toast("Routine created");
      this.openRoutineEditor(routine.id);
    };
  };

  App.openConditionSheet = function (condId, regionId, backLabel) {
    const c = this.condition(condId);
    this.pushView("cond:" + condId, () => this.openConditionSheet(condId, regionId, backLabel));
    const exs = window.EXERCISES.filter(e => e.helps.includes(condId));
    const tpls = window.TEMPLATES.filter(t => t.conditions.includes(condId));
    this.openModal(c.name, `
      <p style="font-size:0.95rem;color:var(--muted);margin-bottom:1rem">${this.esc(c.blurb)}</p>
      <div class="exd-caution" style="margin-bottom:1rem">${this.icon("alert")}<span>This is general information, not a diagnosis. If pain is severe, worsening, or came from an injury, see a professional first.</span></div>
      ${tpls.length ? `
        <div class="section-label" style="margin-top:0">Ready-made plan</div>
        ${tpls.map(t => `<button class="btn big" data-tpl="${t.id}" style="margin-bottom:0.5rem">${this.icon("sparkle")} Add “${this.esc(t.name)}” Routine</button>`).join("")}` : ""}
      <div class="section-label">Exercises that often help (${exs.length})</div>
      ${exs.map(ex => this.exItemHtml(ex)).join("")}
    `);
    const body = document.getElementById("modal-body");
    body.querySelectorAll("[data-tpl]").forEach(b => b.onclick = () => {
      const t = window.TEMPLATES.find(x => x.id === b.dataset.tpl);
      const routine = this.routineFromTemplate(t);
      this.state.routines.push(routine);
      this.save();
      this.toast("Routine added");
      this.openRoutineEditor(routine.id);
    });
  };
})();
