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
    document.getElementById("progress-scroll").innerHTML = `
      <span class="page-tag">${this.icon("chart")} Progress</span>
      <div class="page-title">Your Journey</div>
      <div class="page-sub">Consistency beats intensity. Look how far you've come.</div>
      <div class="home-stats">
        <div class="home-stat"><div class="home-stat-num">${logs.length}</div><div class="home-stat-label">Sessions</div></div>
        <div class="home-stat"><div class="home-stat-num">${streak}</div><div class="home-stat-label">Day Streak</div></div>
        <div class="home-stat"><div class="home-stat-num">${totalMin}</div><div class="home-stat-label">Minutes</div></div>
      </div>
      ${logs.length === 0 ? `
        <div class="empty-state card"><div class="empty-icon">${this.icon("chart")}</div>
        <p>No sessions yet.<br>Complete your first routine and your progress will appear here.</p>
        <button class="btn big grad" onclick="App.showPage('home')">Go Start One</button></div>` : `
        <div class="chart-card"><h3>${this.icon("calendar")} Sessions per week</h3><div class="chart-holder"><canvas id="chart-weeks"></canvas></div></div>
        <div class="chart-card"><h3>${this.icon("face4")} How you felt after sessions</h3><div class="chart-holder"><canvas id="chart-feel"></canvas></div></div>
        ${exWithData.length ? `
          <div class="chart-card">
            <h3>${this.icon("arms")} Exercise progress</h3>
            <select id="ex-progress-select" style="margin-bottom:0.7rem">
              ${exWithData.map(id => `<option value="${id}">${this.esc((this.ex(id) || { name: id }).name)}</option>`).join("")}
            </select>
            <div class="chart-holder"><canvas id="chart-ex"></canvas></div>
          </div>` : ""}
        <div class="section-label">Session History</div>
        ${logs.slice(-30).reverse().map(l => `
          <div class="history-item" data-log="${l.id}">
            <div class="history-item-top">
              <div class="history-item-name">${this.esc(l.routineName)}</div>
              <div class="history-item-date">${this.fmtDate(l.date)}</div>
            </div>
            <div class="history-item-meta">
              <span>${this.icon("clock")} ${this.fmtClock(l.durationSec || 0)}</span>
              <span>${this.icon("check")} ${l.exercisesDone} exercises</span>
              ${l.feel ? `<span>${feelIcon(l.feel)}</span>` : ""}
              ${l.pain != null ? `<span>pain ${l.pain}/10</span>` : ""}
            </div>
            ${l.note ? `<div class="history-item-meta" style="margin-top:0.2rem"><span>“${this.esc(l.note)}”</span></div>` : ""}
          </div>`).join("")}
      `}
    `;

    if (logs.length === 0) return;

    const scroll = document.getElementById("progress-scroll");
    scroll.querySelectorAll(".history-item[data-log]").forEach(n => n.onclick = () => this.openLogDetail(n.dataset.log));

    // ----- charts -----
    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue("--accent").trim();
    const blue = css.getPropertyValue("--blue").trim();
    const muted = css.getPropertyValue("--muted2").trim();
    Object.values(this.charts).forEach(c => { try { c.destroy(); } catch (e) {} });
    this.charts = {};

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
