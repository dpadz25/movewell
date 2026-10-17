// MoveWell guided tour: spotlight walkthrough of the app's main features.
// Runs once after onboarding, skippable any time, replayable from Settings.
(function () {

  // Each step: target selector, title, text, and an optional page to show first.
  // Steps whose target is missing (e.g. no routines yet) adapt or are skipped.
  function buildSteps() {
    const hasRoutines = App.state.routines.some(r => r.onHome && !r.archived);
    const steps = [];
    if (hasRoutines) steps.push({
      target: "#home-scroll .upnext", page: "home", title: "Up next",
      text: "This is the routine to do next. Tap Start for a guided session with timers and big, clear steps."
    });
    else steps.push({
      target: "#home-scroll .home-empty", page: "home", title: "Start here",
      text: "You do not have a routine yet. Pick a ready-made plan or build your own in under a minute."
    });
    steps.push(
      {
        target: "#home-scroll .week-card", page: "home", title: "Your week",
        text: "Each day you finish a session gets a check here. A little movement most days beats a lot once in a while."
      },
      {
        target: "#routines-scroll .rl-new", page: "routines", title: "The Routines tab",
        text: "Every routine you own lives here. Tap the dots on a routine to start it, change it, or put it away."
      },
      {
        target: "#library-scroll .search-wrap", page: "library", title: "The Exercises tab",
        text: "Every exercise, with step-by-step instructions and easier or harder versions. Search for anything, like knee or stretch."
      },
      {
        target: "#lib-area-toggle", page: "library", title: "Find by body area",
        text: App.wantsRehab() ? "Tap Body area to pick the spot that bothers you, left or right. You can log how it feels and see exercises for that exact area." : "Tap Body area to see exercises for one part of the body, like your hips or shoulders."
      },
      {
        target: "#progress-scroll .pg-stats", page: "progress", title: "Your progress",
        text: App.wantsRehab() ? "Sessions, your streak, and how your pain is changing all collect here, so you can watch your work pay off." : "Your sessions, streak and minutes all collect here, so you can watch your work pay off."
      },
      {
        target: "#btn-settings", page: "home", title: "Make it yours",
        text: "Change your name, color, text size, and dark mode here. You can also back up your data or replay this tour."
      }
    );
    return steps;
  }

  App.startTour = function () {
    if (this._tourOn) return;
    this._tourOn = true;
    this._tourSteps = buildSteps();
    this._tourIdx = 0;
    document.getElementById("tour").classList.add("open");
    this.tourShowStep();
    this._tourResize = () => this.tourShowStep();
    window.addEventListener("resize", this._tourResize);
  };

  App.endTour = function () {
    this._tourOn = false;
    document.getElementById("tour").classList.remove("open");
    window.removeEventListener("resize", this._tourResize);
    if (!this.state.toured) { this.state.toured = true; this.save(); }
    // the tour wanders through the tabs, so bring the user back home
    if (this.currentPage !== "home") this.showPage("home");
  };

  App.tourShowStep = function () {
    const step = this._tourSteps[this._tourIdx];
    if (!step) { this.endTour(); return; }
    if (this.currentPage !== step.page) this.showPage(step.page);

    const target = document.querySelector(step.target);
    if (!target) { this.tourNext(); return; }
    target.scrollIntoView({ block: "center" });

    const pad = 8;
    const rect = target.getBoundingClientRect();
    const hole = document.getElementById("tour-hole");
    hole.style.top = (rect.top - pad) + "px";
    hole.style.left = (rect.left - pad) + "px";
    hole.style.width = (rect.width + pad * 2) + "px";
    hole.style.height = (rect.height + pad * 2) + "px";

    document.getElementById("tour-step-num").textContent = "Step " + (this._tourIdx + 1) + " of " + this._tourSteps.length;
    document.getElementById("tour-title").textContent = step.title;
    document.getElementById("tour-text").textContent = step.text;
    document.getElementById("tour-next").innerHTML = this._tourIdx === this._tourSteps.length - 1
      ? "Done " + App.icon("check") : "Next " + App.icon("arrowRight");

    // put the card below the target when there's room, otherwise above
    const card = document.getElementById("tour-card");
    card.style.visibility = "hidden";
    requestAnimationFrame(() => {
      const ch = card.offsetHeight;
      const below = rect.bottom + pad + 14;
      let top = below + ch < window.innerHeight - 12 ? below : rect.top - pad - ch - 14;
      const safeTop = App.safeTop() + 12;
      top = Math.max(safeTop, Math.min(top, window.innerHeight - ch - 12));
      card.style.top = top + "px";
      card.style.visibility = "";
      card.classList.remove("tour-pop"); void card.offsetWidth; card.classList.add("tour-pop");
    });

  };

  App.tourNext = function () {
    this._tourIdx++;
    if (this._tourIdx >= this._tourSteps.length) this.endTour();
    else this.tourShowStep();
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tour-next").onclick = () => App.tourNext();
    document.getElementById("tour-skip").onclick = () => App.endTour();
  });
})();
