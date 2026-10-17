// MoveWell body map: tap where it hurts, log how it feels, get matching exercises
// The silhouette adapts to the male / female choice made in onboarding or settings.
(function () {

  // zones: [cx, cy, rx, ry, regionId, label, muscles]
  const FRONT_ZONES = [
    [100, 57, 16, 11, "neck", "Neck (Front)", "Scalenes, sternocleidomastoid (SCM), deep neck flexors"],
    [60, 76, 15, 12, "shoulder", "Left Shoulder", "Deltoid, rotator cuff (supraspinatus, infraspinatus, subscapularis)"],
    [140, 76, 15, 12, "shoulder", "Right Shoulder", "Deltoid, rotator cuff (supraspinatus, infraspinatus, subscapularis)"],
    [100, 97, 30, 16, "chest", "Chest", "Pectoralis major & minor"],
    [50, 105, 10, 16, "arms", "Left Upper Arm (Biceps)", "Biceps brachii, brachialis"],
    [150, 105, 10, 16, "arms", "Right Upper Arm (Biceps)", "Biceps brachii, brachialis"],
    [50, 136, 11, 10, "elbow", "Left Elbow", "Wrist extensor & flexor tendons (tennis / golfer's elbow)"],
    [150, 136, 11, 10, "elbow", "Right Elbow", "Wrist extensor & flexor tendons (tennis / golfer's elbow)"],
    [47, 163, 9, 15, "wrist", "Left Forearm", "Wrist flexors & extensors, forearm rotators"],
    [153, 163, 9, 15, "wrist", "Right Forearm", "Wrist flexors & extensors, forearm rotators"],
    [48, 196, 11, 13, "wrist", "Left Wrist & Hand", "Finger flexors & extensors, thumb muscles, carpal tunnel"],
    [152, 196, 11, 13, "wrist", "Right Wrist & Hand", "Finger flexors & extensors, thumb muscles, carpal tunnel"],
    [100, 145, 27, 18, "core", "Stomach / Core", "Rectus abdominis (six-pack), obliques, transverse abdominis"],
    [76, 194, 14, 13, "hip", "Left Hip / Groin", "Hip flexors (iliopsoas), adductors (inner thigh)"],
    [124, 194, 14, 13, "hip", "Right Hip / Groin", "Hip flexors (iliopsoas), adductors (inner thigh)"],
    [81, 258, 13, 24, "knee", "Left Thigh (Quads)", "Quadriceps femoris (rectus femoris + vastus muscles)"],
    [119, 258, 13, 24, "knee", "Right Thigh (Quads)", "Quadriceps femoris (rectus femoris + vastus muscles)"],
    [81, 306, 13, 12, "knee", "Left Knee", "Quadriceps & patellar tendons, joint stabilizers"],
    [119, 306, 13, 12, "knee", "Right Knee", "Quadriceps & patellar tendons, joint stabilizers"],
    [81, 350, 11, 18, "ankle-foot", "Left Shin", "Tibialis anterior"],
    [119, 350, 11, 18, "ankle-foot", "Right Shin", "Tibialis anterior"],
    [80, 402, 14, 13, "ankle-foot", "Left Ankle & Foot", "Ankle stabilizers, foot arch (plantar) muscles"],
    [120, 402, 14, 13, "ankle-foot", "Right Ankle & Foot", "Ankle stabilizers, foot arch (plantar) muscles"]
  ];
  const BACK_ZONES = [
    [100, 57, 16, 11, "neck", "Neck (Back)", "Upper trapezius, levator scapulae, suboccipitals"],
    [60, 76, 15, 12, "shoulder", "Left Shoulder (Back)", "Posterior deltoid, infraspinatus, teres minor"],
    [140, 76, 15, 12, "shoulder", "Right Shoulder (Back)", "Posterior deltoid, infraspinatus, teres minor"],
    [100, 95, 30, 17, "upper-back", "Upper Back", "Trapezius, rhomboids"],
    [100, 128, 33, 13, "upper-back", "Mid Back (Lats)", "Latissimus dorsi, lower trapezius"],
    [50, 105, 10, 16, "arms", "Left Upper Arm (Triceps)", "Triceps brachii"],
    [150, 105, 10, 16, "arms", "Right Upper Arm (Triceps)", "Triceps brachii"],
    [50, 136, 11, 10, "elbow", "Left Elbow", "Triceps tendon, wrist extensor tendons"],
    [150, 136, 11, 10, "elbow", "Right Elbow", "Triceps tendon, wrist extensor tendons"],
    [47, 163, 9, 15, "wrist", "Left Forearm", "Wrist & finger extensors"],
    [153, 163, 9, 15, "wrist", "Right Forearm", "Wrist & finger extensors"],
    [100, 158, 27, 14, "lower-back", "Lower Back", "Erector spinae, quadratus lumborum, multifidus"],
    [100, 195, 33, 17, "hip", "Glutes & Buttocks", "Gluteus maximus & medius, piriformis"],
    [81, 258, 13, 24, "hip", "Left Hamstring", "Biceps femoris, semitendinosus, semimembranosus"],
    [119, 258, 13, 24, "hip", "Right Hamstring", "Biceps femoris, semitendinosus, semimembranosus"],
    [81, 306, 13, 12, "knee", "Left Knee (Back)", "Hamstring tendons, calf attachment (popliteal area)"],
    [119, 306, 13, 12, "knee", "Right Knee (Back)", "Hamstring tendons, calf attachment (popliteal area)"],
    [81, 352, 12, 20, "ankle-foot", "Left Calf", "Gastrocnemius, soleus"],
    [119, 352, 12, 20, "ankle-foot", "Right Calf", "Gastrocnemius, soleus"],
    [80, 402, 14, 13, "ankle-foot", "Left Ankle (Achilles)", "Achilles tendon, ankle stabilizers"],
    [120, 402, 14, 13, "ankle-foot", "Right Ankle (Achilles)", "Achilles tendon, ankle stabilizers"]
  ];

  // The front view faces you like a mirror image of a person standing opposite, so the
  // shape on the left of the screen is that person's RIGHT side. Relabel the front zones to
  // match ("Your right" / "Your left" captions sit beside the map).
  FRONT_ZONES.forEach(z => {
    if (z[0] < 100) z[5] = z[5].replace(/^Left\b/, "Right");
    else if (z[0] > 100) z[5] = z[5].replace(/^Right\b/, "Left");
  });

  // Left/Right ellipses for a paired body part currently share one regionId (e.g. "hip"),
  // which is fine for icon/condition/exercise lookups but wrong for pain-highlighting and
  // logging, since it can't tell sides apart. Derive a side-aware key from the label text
  // ("Left Hip / Groin" / "Right Hip / Groin") instead of hand-tagging every zone row.
  function zoneKey(z) {
    const m = /^(Left|Right)\b/.exec(z[5]);
    return m ? z[4] + "-" + m[1].toLowerCase() : z[4];
  }

  // two silhouettes: broader shoulders (male) vs narrower shoulders and wider hips (female)
  const BODY_MALE = `
    <circle class="bm-body" cx="100" cy="30" r="21"/>
    <rect class="bm-body" x="90" y="48" width="20" height="16" rx="6"/>
    <path class="bm-body" d="M 64 64 Q 100 55 136 64 L 139 120 Q 139 150 132 176 L 68 176 Q 61 150 61 120 Z"/>
    <rect class="bm-body" x="41" y="68" width="18" height="62" rx="8"/>
    <rect class="bm-body" x="141" y="68" width="18" height="62" rx="8"/>
    <rect class="bm-body" x="40" y="130" width="16" height="56" rx="7"/>
    <rect class="bm-body" x="144" y="130" width="16" height="56" rx="7"/>
    <ellipse class="bm-body" cx="48" cy="197" rx="9" ry="12"/>
    <ellipse class="bm-body" cx="152" cy="197" rx="9" ry="12"/>
    <path class="bm-body" d="M 68 176 L 132 176 Q 136 196 132 210 L 68 210 Q 64 196 68 176 Z"/>
    <rect class="bm-body" x="70" y="208" width="24" height="102" rx="11"/>
    <rect class="bm-body" x="106" y="208" width="24" height="102" rx="11"/>
    <rect class="bm-body" x="72" y="308" width="19" height="88" rx="9"/>
    <rect class="bm-body" x="109" y="308" width="19" height="88" rx="9"/>
    <ellipse class="bm-body" cx="79" cy="404" rx="15" ry="9"/>
    <ellipse class="bm-body" cx="121" cy="404" rx="15" ry="9"/>`;

  const BODY_FEMALE = `
    <circle class="bm-body" cx="100" cy="30" r="21"/>
    <rect class="bm-body" x="91" y="48" width="18" height="16" rx="6"/>
    <path class="bm-body" d="M 70 64 Q 100 57 130 64 L 133 112 Q 131 142 123 168 L 77 168 Q 69 142 67 112 Z"/>
    <rect class="bm-body" x="44" y="69" width="16" height="61" rx="8"/>
    <rect class="bm-body" x="140" y="69" width="16" height="61" rx="8"/>
    <rect class="bm-body" x="42" y="130" width="14" height="56" rx="7"/>
    <rect class="bm-body" x="144" y="130" width="14" height="56" rx="7"/>
    <ellipse class="bm-body" cx="48" cy="197" rx="9" ry="12"/>
    <ellipse class="bm-body" cx="152" cy="197" rx="9" ry="12"/>
    <path class="bm-body" d="M 77 168 L 123 168 Q 135 190 131 210 L 69 210 Q 65 190 77 168 Z"/>
    <rect class="bm-body" x="69" y="208" width="25" height="102" rx="12"/>
    <rect class="bm-body" x="106" y="208" width="25" height="102" rx="12"/>
    <rect class="bm-body" x="73" y="308" width="18" height="88" rx="9"/>
    <rect class="bm-body" x="110" y="308" width="18" height="88" rx="9"/>
    <ellipse class="bm-body" cx="80" cy="404" rx="14" ry="9"/>
    <ellipse class="bm-body" cx="120" cy="404" rx="14" ry="9"/>`;

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

  function bodySvg(zones, hurtRegions, sex, selZone) {
    const zonesHtml = zones.map(z => {
      const zk = zoneKey(z);
      const sel = selZone && selZone === zk + "|" + z[5];
      return `<ellipse class="bm-zone ${hurtRegions.has(zk) ? "hurt" : ""} ${sel ? "sel" : ""}" cx="${z[0]}" cy="${z[1]}" rx="${z[2]}" ry="${z[3]}" data-region="${z[4]}" data-zone="${zk}" data-label="${z[5]}" data-muscles="${z[6] || ""}"><title>${z[5]}: ${z[6] || ""}</title></ellipse>`;
    }).join("");
    return `
    <svg class="bodymap-svg" viewBox="0 0 200 430" xmlns="http://www.w3.org/2000/svg">
      <g>
        ${sex === "female" ? BODY_FEMALE : BODY_MALE}
        ${zonesHtml}
      </g>
    </svg>`;
  }

  // ---- helpers shared with the Exercises tab (the body map now lives there) ----
  App.bmHurtSet = function () {
    const weekAgo = Date.now() - 7 * 86400000;
    return new Set(this.state.bodyLogs.filter(b => new Date(b.date).getTime() > weekAgo && b.pain >= 3).map(b => b.region));
  };
  App.bmSvg = function (view, selZone) {
    return bodySvg(view === "back" ? BACK_ZONES : FRONT_ZONES, this.bmHurtSet(), this.state.profile.sex, selZone);
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
        <h2>How does it feel right now?</h2>
        <p class="fin-hint">${last ? `Last time it was ${last.pain} out of 10, on ${this.fmtDate(last.date)}. ` : ""}0 means no pain, 10 is the worst.</p>
        <div class="pain-scale fin-pain" id="rs-pain">${Array.from({ length: 11 }, (_, i) => `<button class="pain-num" data-p="${i}" aria-label="Pain ${i}">${i}</button>`).join("")}</div>
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
