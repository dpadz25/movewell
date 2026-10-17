// MoveWell progress: stats, feel & pain trends, session history, per-exercise progress
(function () {

  App.renderProgress = function () {
    const s = this.state;
    const logs = s.logs;
    const streak = this.streak();
    const totalMin = Math.round(logs.reduce((a, l) => a + (l.durationSec || 0), 0) / 60);

    // exercises that have logged data (for the per-exercise chart)
    const exWithData = [...new Set(logs.flatMap(l => l.items.filter(i => i.sets && i.sets.length).map(i => i.exId)))];

    const feelIcon = (f) => this.icon("face" + f);
    const weightLogs = s.bodyWeightLogs || [];
    const recentWeights = weightLogs.slice(-8).reverse();
    this._heatmapMonthOffset = this._heatmapMonthOffset || 0;
    // a plain-language read on pain: last two weeks vs the four weeks before that
    const day = 86400000, nowMs = Date.now();
    const avg = arr => arr.length ? arr.reduce((x, y) => x + y, 0) / arr.length : null;
    const painIn = (from, to) => logs.filter(l => l.pain != null && nowMs - new Date(l.date).getTime() >= from * day && nowMs - new Date(l.date).getTime() < to * day).map(l => l.pain);
    const painNow = avg(painIn(0, 14)), painBefore = avg(painIn(14, 42));
    let painLine = "";
    if (painNow != null && painBefore != null) {
      const a1 = Math.round(painBefore * 10) / 10, a2 = Math.round(painNow * 10) / 10;
      painLine = a2 < a1 ? `Your pain after sessions is down, from about ${a1} to ${a2} out of 10.`
        : a2 > a1 ? `Your pain after sessions is up a little, from about ${a1} to ${a2} out of 10. If it keeps rising, check in with your therapist.`
        : `Your pain after sessions is holding steady at about ${a2} out of 10.`;
    } else if (painNow != null) painLine = `Your pain after sessions has been about ${Math.round(painNow * 10) / 10} out of 10 lately. Keep logging to see the trend.`;
    this._histAll = this._histAll || false;
    const hist = logs.slice().sort((x, y) => new Date(y.date) - new Date(x.date)).slice(0, this._histAll ? 60 : 8);

    document.getElementById("progress-scroll").innerHTML = `
      <div class="page-title">Progress</div>
      <div class="page-sub">Small steps add up. Here is what you have done.</div>
      <div class="pg-stats">
        <div class="pg-stat"><div class="pg-num">${logs.length}</div><div class="pg-label">Sessions</div></div>
        <div class="pg-stat"><div class="pg-num">${streak}</div><div class="pg-label">Day streak</div></div>
        <div class="pg-stat"><div class="pg-num">${totalMin}</div><div class="pg-label">Minutes</div></div>
      </div>
      ${logs.length === 0 ? `
        <div class="empty-state card"><div class="empty-icon">${this.icon("chart")}</div>
        <p>No sessions yet.<br>Finish your first routine and your progress shows up here.</p>
        <button class="btn big grad" onclick="App.showPage('home')">Go start one</button></div>` : `
        ${painLine ? `<div class="pg-insight">${this.icon("sparkle")}<p>${painLine}</p></div>` : ""}
        <div class="chart-card">
          <div class="heatmap-nav">
            <button class="icon-btn" id="hm-prev" aria-label="Previous month">${this.icon("arrowLeft")}</button>
            <h3 id="hm-label" style="margin:0">${this.icon("calendar")} Workout Calendar</h3>
            <button class="icon-btn" id="hm-next" aria-label="Next month">${this.icon("arrowRight")}</button>
          </div>
          <div id="heatmap-holder"></div>
        </div>
        <div class="chart-card"><h3>How you felt after sessions</h3><div class="chart-holder"><canvas id="chart-feel"></canvas></div></div>
        <div class="chart-card"><h3>Sessions each week</h3><div class="chart-holder"><canvas id="chart-weeks"></canvas></div></div>
        ${exWithData.length ? `
          <div class="chart-card">
            <h3>One exercise over time</h3>
            <select id="ex-progress-select" aria-label="Pick an exercise" style="margin-bottom:0.7rem">
              ${exWithData.map(id => `<option value="${id}">${this.esc((this.ex(id) || { name: id }).name)}</option>`).join("")}
            </select>
            <div class="chart-holder"><canvas id="chart-ex"></canvas></div>
          </div>` : ""}
      `}
      ${this.bodyMonthHtml()}
      ${logs.length ? `
        <h2 class="rl-sub">Past sessions</h2>
        <div class="ex-grid">${hist.map(l => `
          <button class="pg-row pg-log" data-log="${l.id}">
            <div class="pg-feel">${l.feel ? feelIcon(l.feel) : this.icon("check")}</div>
            <div class="pg-row-info">
              <div class="home-row-name">${this.esc(l.routineName)}</div>
              <div class="home-row-meta">${this.fmtDate(l.date)} · ${Math.max(1, Math.round((l.durationSec || 0) / 60))} min${l.pain != null ? " · pain " + l.pain : ""}</div>
            </div>
            <span class="ex-item-chev">${this.icon("chevR")}</span>
          </button>`).join("")}</div>
        ${logs.length > 8 ? `<button class="lib-more pg-more" id="pg-more">${this._histAll ? "Show fewer" : "Show all " + logs.length}</button>` : ""}` : ""}
      <div class="chart-card pg-weight">
        <div class="weight-card-head">
          <h3>${this.icon("scale")} Body weight</h3>
          <button class="rl-mini" id="wi-add">${this.icon("plus")} Log weight</button>
        </div>
        ${weightLogs.length ? `<div class="chart-holder"><canvas id="chart-weight"></canvas></div>` : `<p class="home-list-empty">Optional. Log your weight if you want to see it here.</p>`}
        ${recentWeights.slice(0, 3).map(w => `
          <button class="pg-wrow" data-weight="${w.id}"><span>${w.weightLb} lb</span><span>${this.fmtDate(w.date)}</span></button>`).join("")}
      </div>
    `;

    const scroll = document.getElementById("progress-scroll");
    scroll.querySelector("#wi-add").onclick = () => this.openWeighInModal();
    scroll.querySelectorAll("[data-weight]").forEach(n => n.onclick = () => this.openWeightLogDetail(n.dataset.weight));
    scroll.querySelectorAll("[data-log]").forEach(n => n.onclick = () => this.openLogDetail(n.dataset.log));
    scroll.querySelectorAll("#pg-body-seg button").forEach(b => b.onclick = () => { this._pgView = b.dataset.view; this.refresh(); });
    const more = scroll.querySelector("#pg-more");
    if (more) more.onclick = () => { this._histAll = !this._histAll; this.refresh(); };

    // ----- charts -----
    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue("--accent").trim();
    const blue = css.getPropertyValue("--blue").trim();
    const muted = css.getPropertyValue("--muted2").trim();
    Object.values(this.charts).forEach(c => { try { c.destroy(); } catch (e) {} });
    this.charts = {};

    if (weightLogs.length) {
      this.charts.weight = new Chart(document.getElementById("chart-weight"), {
        type: "line",
        data: {
          labels: weightLogs.map(w => this.fmtDate(w.date)),
          datasets: [{ label: "Weight (lbs)", data: weightLogs.map(w => w.weightLb), borderColor: accent, backgroundColor: accent, tension: 0.35 }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { x: { ticks: { color: muted, maxTicksLimit: 6 } } }
        }
      });
    }

    if (logs.length === 0) return;

    scroll.querySelector("#hm-prev").onclick = () => { this._heatmapMonthOffset--; this.renderHeatmap(this._heatmapMonthOffset); };
    scroll.querySelector("#hm-next").onclick = () => { this._heatmapMonthOffset++; this.renderHeatmap(this._heatmapMonthOffset); };
    this.renderHeatmap(this._heatmapMonthOffset);

    // sessions per week (last 8 weeks)
    const weeks = [];
    for (let w = 7; w >= 0; w--) {
      const start = new Date(); start.setHours(0, 0, 0, 0);
      start.setDate(start.getDate() - start.getDay() - w * 7);
      const end = new Date(start); end.setDate(start.getDate() + 7);
      weeks.push({
        label: (start.getMonth() + 1) + "/" + start.getDate(),
        count: logs.filter(l => { const d = new Date(l.date); return d >= start && d < end; }).length
      });
    }
    this.charts.weeks = new Chart(document.getElementById("chart-weeks"), {
      type: "bar",
      data: { labels: weeks.map(w => w.label), datasets: [{ data: weeks.map(w => w.count), backgroundColor: accent, borderRadius: 6 }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
      }
    });

    // feel + pain trend (last 20 sessions)
    const trendLogs = logs.filter(l => l.feel != null || l.pain != null).slice(-20);
    if (trendLogs.length) {
      this.charts.feel = new Chart(document.getElementById("chart-feel"), {
        type: "line",
        data: {
          labels: trendLogs.map(l => this.fmtDate(l.date)),
          datasets: [
            { label: "Feeling (1 to 5)", data: trendLogs.map(l => l.feel), borderColor: accent, backgroundColor: accent, tension: 0.35, spanGaps: true, yAxisID: "y" },
            { label: "Pain (0 to 10)", data: trendLogs.map(l => l.pain), borderColor: blue, backgroundColor: blue, tension: 0.35, spanGaps: true, yAxisID: "y2" }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { labels: { boxWidth: 14 } } },
          scales: {
            y: { min: 1, max: 5, ticks: { stepSize: 1 }, title: { display: true, text: "Feeling" } },
            y2: { min: 0, max: 10, position: "right", grid: { drawOnChartArea: false }, title: { display: true, text: "Pain" } },
            x: { ticks: { color: muted, maxTicksLimit: 6 } }
          }
        }
      });
    }

    // per-exercise progress
    const sel = scroll.querySelector("#ex-progress-select");
    if (sel) {
      const drawEx = () => {
        const exId = sel.value;
        const points = [];
        logs.forEach(l => {
          const item = l.items.find(i => i.exId === exId && i.sets && i.sets.length);
          if (!item) return;
          const reps = item.sets.reduce((a, x) => a + (x.reps || 0), 0);
          const secs = item.sets.reduce((a, x) => a + (x.sec || 0), 0);
          const maxW = Math.max(0, ...item.sets.map(x => x.weight || 0));
          points.push({ date: this.fmtDate(l.date), reps, secs, maxW });
        });
        const useTime = points.every(p => p.reps === 0);
        const hasWeight = points.some(p => p.maxW > 0);
        const datasets = [{
          label: useTime ? "Total seconds" : "Total reps",
          data: points.map(p => useTime ? p.secs : p.reps),
          borderColor: accent, backgroundColor: accent, tension: 0.35
        }];
        if (hasWeight) datasets.push({ label: "Top weight (lbs)", data: points.map(p => p.maxW), borderColor: blue, backgroundColor: blue, tension: 0.35 });
        if (this.charts.ex) { try { this.charts.ex.destroy(); } catch (e) {} }
        this.charts.ex = new Chart(document.getElementById("chart-ex"), {
          type: "line",
          data: { labels: points.map(p => p.date), datasets },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { boxWidth: 14 } } },
            scales: { y: { beginAtZero: true }, x: { ticks: { maxTicksLimit: 6 } } }
          }
        });
      };
      sel.onchange = drawEx;
      drawEx();
    }
  };

  // "Your body this month": each part shaded by its latest pain score, with a plain-words list
  App.bodyMonthHtml = function () {
    const monthAgo = Date.now() - 30 * 86400000;
    const all = (this.state.bodyLogs || []).slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    const recent = all.filter(b => new Date(b.date).getTime() > monthAgo);
    if (!recent.length) return "";
    const latest = {}, prev = {};
    all.forEach(b => { if (latest[b.region]) prev[b.region] = latest[b.region]; latest[b.region] = b; });
    const zones = [...new Set(recent.map(b => b.region))];
    const inView = (v, z) => this.bmParts(v).some(p => p.zone === z);
    if (!this._pgView) this._pgView = zones.some(z => inView("front", z)) ? "front" : "back";
    const view = this._pgView, front = view === "front";
    // one orange ramp that changes in lightness, so it still reads for color-blind eyes
    const ramp = (n) => n <= 0 ? null : n <= 3 ? "#F4C79A" : n <= 6 ? "#E08A45" : "#A9461C";
    const colors = {};
    zones.forEach(z => { const c = ramp(latest[z].pain); if (c) colors[z] = c; });
    const [VW, VH] = this.BM_VIEWBOX;
    const marks = zones.filter(z => inView(view, z)).map(z => {
      const c = this.bmCenter(view, z);
      const side = c.key.endsWith("_a") ? "a" : "b";
      return `<span class="pg-bm-badge ${side}" style="left:${(c.x / VW * 100).toFixed(2)}%;top:${(c.y / VH * 100).toFixed(2)}%">${latest[z].pain}</span>`;
    }).join("");
    const rows = zones.slice().sort((a, b) => latest[b].pain - latest[a].pain).slice(0, 6).map(z => {
      const l = latest[z], p = prev[z];
      let tag = "", tc = "", trend = "First note this month";
      if (p) {
        trend = "Was " + p.pain + " on " + this.fmtDate(p.date);
        if (l.pain < p.pain) { tag = "Getting better"; tc = "up"; }
        else if (l.pain > p.pain) { tag = "Keep an eye on it"; tc = "down"; }
        else { tag = "Steady"; tc = ""; }
      }
      return `<div class="pg-row">
        <div class="pg-pain ${l.pain <= 3 ? "lo" : l.pain <= 6 ? "mid" : "hi"}">${l.pain}</div>
        <div class="pg-row-info">
          <div class="home-row-name">${this.esc(l.label || z)}</div>
          <div class="home-row-meta">${this.esc(trend)}</div>
        </div>
        ${tag ? `<span class="pg-trend ${tc}">${tag}</span>` : ""}
      </div>`;
    }).join("");
    return `
      <h2 class="rl-sub">Your body this month</h2>
      <p class="pg-bm-sub">Darker means more pain. Numbers are your latest score.</p>
      <div class="seg pg-bm-seg" id="pg-body-seg" role="tablist">
        <button role="tab" class="${front ? "on" : ""}" aria-selected="${front}" data-view="front">Front</button>
        <button role="tab" class="${!front ? "on" : ""}" aria-selected="${!front}" data-view="back">Back</button>
      </div>
      <div class="pg-bm">
        <div class="pg-bm-fig" role="img" aria-label="${this.esc(zones.filter(z => inView(view, z)).map(z => latest[z].label + " " + latest[z].pain + " out of 10").join(", ") || "No pain logged on this side")}">
          ${this.bmFigure(view, { colors, tap: false })}
          ${marks}
        </div>
        <div class="pg-bm-key" aria-hidden="true">
          <span><i style="background:var(--bm-key0)"></i>No pain</span>
          <span><i style="background:#F4C79A"></i>1 to 3</span>
          <span><i style="background:#E08A45"></i>4 to 6</span>
          <span><i style="background:#A9461C"></i>7 to 10</span>
        </div>
      </div>
      <div class="ex-grid">${rows}</div>`;
  };

  App.renderHeatmap = function (monthOffset) {
    const holder = document.getElementById("heatmap-holder");
    if (!holder) return;
    const counts = {};
    this.state.logs.forEach(l => {
      const k = this.todayKey(l.date);
      counts[k] = (counts[k] || 0) + 1;
    });
    const now = new Date();
    const target = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
    const monthLabel = target.toLocaleDateString(undefined, { month: "long", year: "numeric" });
    const label = document.getElementById("hm-label");
    if (label) label.innerHTML = this.icon("calendar") + " " + monthLabel;
    const nextBtn = document.querySelector("#hm-next");
    if (nextBtn) nextBtn.disabled = monthOffset >= 0;

    const firstDay = new Date(target.getFullYear(), target.getMonth(), 1);
    const daysInMonth = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
    const startPad = firstDay.getDay(); // 0=Sun

    let cells = "";
    for (let i = 0; i < startPad; i++) cells += `<div class="heatmap-cell blank"></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
      const dt = new Date(target.getFullYear(), target.getMonth(), d);
      const k = this.todayKey(dt);
      const n = counts[k] || 0;
      const level = n === 0 ? "l0" : n === 1 ? "l1" : "l2";
      cells += `<div class="heatmap-cell ${level}" title="${monthLabel.split(" ")[0]} ${d}: ${n} session${n === 1 ? "" : "s"}">${d}</div>`;
    }
    holder.innerHTML = `<div class="heatmap-grid">${cells}</div>`;
  };

  App.openLogDetail = function (logId) {
    const l = this.state.logs.find(x => x.id === logId);
    if (!l) return;
    const FEEL = { 5: "Great", 4: "Good", 3: "Okay", 2: "Tired", 1: "Sore" };
    const setText = (x) => x.sec ? App.fmtDur(x.sec) : (x.reps || 0) + " reps" + (x.weight ? " at " + x.weight + " lb" : "");
    const items = l.items.filter(i => !i.warmup || (i.sets && i.sets.length));
    this.openModal(l.routineName, `
      <div class="ld-sum">
        <div><div class="ld-k">Date</div><div class="ld-v">${this.fmtDate(l.date)}</div></div>
        <div><div class="ld-k">Time</div><div class="ld-v">${Math.max(1, Math.round((l.durationSec || 0) / 60))} min</div></div>
        <div><div class="ld-k">Felt</div><div class="ld-v">${l.feel ? this.icon("face" + l.feel) + " " + FEEL[l.feel] : "Not saved"}</div></div>
        <div><div class="ld-k">Pain after</div><div class="ld-v">${l.pain != null ? l.pain + " of 10" : "Not saved"}</div></div>
      </div>
      ${l.note ? `<div class="exd-tip" style="margin-bottom:1rem">${this.icon("note")}<span>${this.esc(l.note)}</span></div>` : ""}
      <h3 class="ld-h">What you did</h3>
      ${items.map(i => {
        const did = i.sets && i.sets.length;
        return `<div class="ld-item ${did ? "" : "skip"}">
          <span class="ld-mark">${this.icon(did ? "check" : "close")}</span>
          <div class="ld-info">
            <div class="home-row-name">${this.esc(i.name)}${i.hurt ? ` <span class="ld-hurt">hurt</span>` : ""}</div>
            <div class="home-row-meta">${did ? i.sets.map(setText).join(", ") : "Skipped this time. That is okay."}</div>
          </div>
        </div>`;
      }).join("")}
      <button class="btn danger big" id="log-delete" style="margin-top:1rem">${this.icon("trash")} Delete this entry</button>
    `);
    document.getElementById("modal-body").querySelector("#log-delete").onclick = () => {
      this.confirm("Delete this session entry?", "This removes it from your history and charts. It cannot be undone.", () => {
        this.state.logs = this.state.logs.filter(x => x.id !== logId);
        this.save(); this.closeModal(); this.renderProgress();
        this.toast("Entry deleted");
      }, "Delete");
    };
  };
})();
