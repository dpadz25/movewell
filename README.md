# MoveWell 🌿

A friendly physical therapy companion app, built for real PT patients, especially older adults who are not tech savvy.

Try it by opening `index.html` through any static web server, or host it on GitHub Pages.

## Why this exists

PT patients rarely get good tools. The apps that exist are outdated, missing exercise variations, or set up so poorly they get abandoned. MoveWell is built the way a physical therapist would actually assign home exercises: pick a problem, get a routine, do it with guidance, and track how the body responds.

## What it does

1. **Personal onboarding.** The app greets you by name, asks what hurts, and builds starter routines automatically. Text size can be set to Normal, Large, or Extra Large for comfortable reading.
2. **Exercise library.** 112 exercises across 11 body regions (neck, shoulder, upper back, elbow, wrist and hand, lower back, hip, knee, ankle and foot, core, balance). Every exercise has step-by-step plain-English instructions, coaching tips, safety cautions, easier and harder variations, a suggested dose, and a one-tap video demonstration link.
3. **Powerful filtering.** Filter by body area, exercise type (stretch, strengthen, mobility, nerve glide, balance), equipment (bodyweight, band, dumbbell, chair, wall, towel, machine, and more), difficulty level, and free text search.
4. **Routines.** Start from 15 ready-made plans modeled on real PT protocols (thoracic outlet syndrome, posture reset, the McGill Big 3 for low back, Alfredson heel drops for Achilles, Otago-style balance work, and more) or build your own. Adjust sets, reps, hold times, and per-side settings on every exercise.
5. **Guided sessions.** One exercise at a time with big buttons, set logging (reps and weight), hold timers with chimes, automatic rest timers, and a "last time you did..." memory. Finishing triggers a confetti celebration.
6. **Feel tracking.** After each session: five labeled faces (Great to Sore), a 0 to 10 pain rating for each side you have logged recently, and notes.
7. **Find by body area.** Inside the Exercises tab, pick an area from a simple list or switch on the body map. Left and right are tracked separately, so you can log how each side feels, read about common causes, and make a routine for that exact spot.
8. **Progress.** Streaks, weekly session charts, feeling and pain trends over time, per-exercise progress charts, and full session history.

## Tech

1. Plain HTML, CSS, and JavaScript. No build step, no framework.
2. Chart.js (CDN) for progress charts.
3. All data stays in the browser (localStorage), with JSON export and import for backups.
4. Works as an installed phone app: safe areas keep content clear of the iPhone notch and home indicator.

## Project layout

```
index.html          app shell
css/styles.css      base styling (rem-based so text-size scaling works)
css/calm.css        the Calm Glass design layer, loaded after styles.css
js/data/            exercise database, conditions, routine templates
js/core.js          state, storage, navigation, onboarding, home, settings
js/library.js       exercise browsing and filtering
js/routines.js      routine creation and editing
js/session.js       guided session mode, timers, celebration
js/bodymap.js       body map, pain logging, relaxation guide
js/tour.js          first-run guided tour
js/icons.js         line icons
js/progress.js      charts and history
```

## Important

MoveWell supports a therapy plan. It is not medical advice and cannot diagnose anything. Users should always follow their physical therapist's or doctor's guidance.
