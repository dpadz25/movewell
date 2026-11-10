# MoveWell

Physical therapy companion app for real PT patients, mostly older, non-tech-savvy adults. Plain HTML/CSS/JS on GitHub Pages (`dpadz25/movewell`, `master`). No build step, backend, or accounts. Features: see README.md.

## Priorities (in order)
1. **Accessibility.** Big tap targets, plain English, clear labels. Use rem units for text so text size scaling (Normal / Large / Extra Large) keeps working.
2. **Safety.** Supports a therapy plan, not medical advice. Keep exercise cautions, never add diagnostic claims.
3. **Phones.** Installed as an iPhone home-screen app. Respect safe areas, check layouts at 375px.
4. **Simplicity.** No framework, dependencies, or tooling unless asked. Chart.js via CDN is the only library.

## Rules that bite
- **Cache:** bump `?v=` in `index.html` for every JS/CSS file you change, or users keep the old copy. One shared string, `YYYYMMDD` + letter (e.g. `20261018o`); bump the letter for same-day changes. New scripts get the same `?v=`.
- **Script order in `index.html`:** `js/data/*` first, then `core.js`, then feature files. `css/calm.css` loads after `styles.css`.
- **Saved data:** one object in localStorage under `movewell-data-v1`, shape in `defaultState()` in `js/core.js`. No cloud sync, so never silently wipe or reshape it. A new field or shape change needs a default in `defaultState()` AND a migration in `load()` (see the existing `onHome` / `archived` / `warmupItems` fixes).
- **Pain logging:** left and right are separate; `bodyLogs[].region` includes the side, e.g. `hip-left`.

## Git and Claude Design
Claude Design can push straight to GitHub, so the remote may be ahead.
- `git fetch` and `git pull` at session start and before any edit or push.
- When design commits arrive, read the diff before building on top and tell Delan what came in. Check them against this file (rem not px, safe areas, `?v=` bumped, data shape unchanged, no new dependencies). Fix violations and mention them.
- Never overwrite or revert design-pushed work without asking.
- When Delan asks for the design handoff prompt (or says he's about to make design changes), print `.claude/design-handoff-prompt.md` in a code block. Use the summary he pastes back as the "why" behind the diff.
- Pushing to `master` publishes the live site: confirm with Delan first.
- Commits: short, plain-English subject lines.

## Verify every UI change
Never call a UI change done from reading code alone.
1. Start the `movewell` launch config (port 8778) in the built-in browser.
2. Screenshot the screen **before** editing.
3. After editing, reload and check the console for errors.
4. Screenshot at 375px AND at Extra Large text size.
5. Fix anything broken and re-check before replying.
6. If saved data is touched, test with old-format data seeded into localStorage.
7. Reset the viewport to desktop.

Regression glance after relevant edits: pain logging (left/right), session timers and set logging, text scaling, safe areas.

## Workflow
- Plan first for anything non-trivial. Keep changes small.
- New screen or redesign: show a mockup and wait for Delan's OK before coding. Small fixes skip this.
- If a fix fails twice, stop and explain instead of guessing a third time.
- No em dashes anywhere, including app copy and commit messages.
- When a reply changed files, end it with **What changed** (skip it for plain questions): files touched in plain English; what Delan will notice (before/after screenshots when visual); anything he must do (e.g. clear cache); anything you could not verify.
