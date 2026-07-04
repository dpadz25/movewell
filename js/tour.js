// MoveWell guided tour: spotlight walkthrough of the app's main features.
// Runs once after onboarding, skippable any time, replayable from Settings.
(function () {

  // Each step: target selector, title, text, and an optional page to show first.
  // Steps whose target is missing (e.g. no routines yet) adapt or are skipped.
  function buildSteps() {
    const hasRoutines = App.state.routines.some(r => r.onHome && !r.archived);
    const steps = [
      {
        target: ".streak-card", page: "home", title: "Your streak",
        text: "Every day you complete a session adds to your streak. A little movement most days beats a lot once in a while."
      }
    ];
    if (hasRoutines) {
      steps.push({
        target: ".swipe-wrap .routine-card", page: "home", title: "Your routines",
        text: "These are your routines. Tap the green Start button for a guided session with timers, rest breaks, and set logging."
      });
      steps.push({
        target: ".swipe-wrap", page: "home", title: "Swipe for options", nudge: true,
        text: "Swipe any routine card to the left to reorder it, edit it, or archive it out of the way."
      });
    } else {
      steps.push({
        target: "#home-scroll .empty-state", page: "home", title: "Start here",
        text: "You don't have a routine yet. This button walks you through creating your first one in under a minute."
      });
    }
    steps.push(
      {
        target: ".nav-btn[data-page='routines']", page: "home", title: "Routine library",
        text: "The Routines tab holds every routine you have, including archived ones. Choose which ones show on your Home screen."
      },
      {
        target: ".nav-btn[data-page='library']", page: "home", title: "Exercise library",
        text: "Browse every exercise with step-by-step instructions, target muscles, and easier or harder variations."
      },
      {
        target: ".nav-btn[data-page='bodymap']", page: "home", title: "Body map",
        text: "Tap where it hurts on a body outline to log how it feels and see exercises made for that exact spot."
      },
      {
        target: ".nav-btn[data-page='progress']", page: "home", title: "Your progress",
        text: "Sessions, streaks, and pain trends over time, so you can see your work paying off."
      },
      {
        target: "#btn-settings", page: "home", title: "Make it yours",
        text: "Change your name, colors, text size, and dark mode here. You can also back up your data or replay this tour."
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
    document.querySelectorAll(".tour-nudge").forEach(n => n.classList.remove("tour-nudge"));
    if (!this.state.toured) { this.state.toured = true; this.save(); }
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
      ? "Done " + App.icon("check") : "Continue " + App.icon("arrowRight");

    // put the card below the target when there's room, otherwise above
    const card = document.getElementById("tour-card");
    card.style.visibility = "hidden";
    requestAnimationFrame(() => {
      const ch = card.offsetHeight;
      const below = rect.bottom + pad + 14;
      let top = below + ch < window.innerHeight - 12 ? below : rect.top - pad - ch - 14;
      top = Math.max(12, Math.min(top, window.innerHeight - ch - 12));
      card.style.top = top + "px";
      card.style.visibility = "";
    });

    // little demo animation for the swipe step
    document.querySelectorAll(".tour-nudge").forEach(n => n.classList.remove("tour-nudge"));
    if (step.nudge) {
      const cardEl = target.querySelector(".swipe-card") || target;
      cardEl.classList.add("tour-nudge");
    }
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
