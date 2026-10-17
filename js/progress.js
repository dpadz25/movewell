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
    const bodyNotes = (s.bodyLogs || []).slice(-5).reverse();
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
      ${bodyNotes.length ? `
        <h2 class="rl-sub">Body notes</h2>
        ${bodyNotes.map(b => `
          <div class="pg-row">
            <div class="pg-pain ${b.pain <= 3 ? "lo" : b.pain <= 6 ? "mid" : "hi"}">${b.pain}</div>
            <div class="pg-row-info">
              <div class="home-row-name">${this.esc(b.label || this.region(String(b.region).replace(/-(left|right)$/, "")).name)}</div>
              <div class="home-row-meta">${this.fmtDate(b.date)}${b.note ? " · “" + this.esc(b.note) + "”" : ""}</div>
            </div>
          </div>`).join("")}` : ""}
      ${logs.length ? `
        <h2 class="rl-sub">Past sessions</h2>
        ${hist.map(l => `
          <button class="pg-row pg-log" data-log="${l.id}">
            <div class="pg-feel">${l.feel ? feelIcon(l.feel) : this.icon("check")}</div>
            <div class="pg-row-info">
              <div class="home-row-name">${this.esc(l.routineName)}</div>
              <div class="home-row-meta">${this.fmtDate(l.date)} · ${Math.max(1, Math.round((l.durationSec || 0) / 60))} min${l.pain != null ? " · pain " + l.pain : ""}</div>
            </div>
            <span class="ex-item-chev">${this.icon("chevR")}</span>
          </button>`).join("")}
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
    this.openModal(l.routineName, `
      <div class="history-item-meta" style="margin-bottom:1rem">
        <span>${this.icon("calendar")} ${this.fmtDate(l.date)}</span>
        <span>${this.icon("clock")} ${this.fmtClock(l.durationSec || 0)}</span>
        ${l.feel ? `<span>felt ${this.icon("face" + l.feel)}</span>` : ""}
        ${l.pain != null ? `<span>pain ${l.pain}/10</span>` : ""}
      </div>
      ${l.note ? `<div class="exd-tip" style="margin-bottom:1rem">${this.icon("note")}<span>${this.esc(l.note)}</span></div>` : ""}
      ${l.items.map(i => `
        <div class="exd-variation">
          <strong>${this.esc(i.name)} ${i.skipped ? "· skipped" : ""}</strong>
          ${(i.sets && i.sets.length) ? `<span>${i.sets.map((x, n) => "Set " + (n + 1) + ": " + (x.sec ? App.fmtDur(x.sec) : x.reps + " reps" + (x.weight ? " × " + x.weight + " lbs" : ""))).join(" · ")}</span>` : `<span>${i.skipped ? "Skipped this time. That's okay." : "No sets logged"}</span>`}
        </div>`).join("")}
      <button class="btn danger big" id="log-delete" style="margin-top:1rem">${this.icon("trash")} Delete This Entry</button>
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
