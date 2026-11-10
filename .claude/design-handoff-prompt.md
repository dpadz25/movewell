# Claude Design handoff prompt

Paste this into Claude Design after it makes changes. Then paste its answer into Claude Code (or have it go in the commit message).

```
Write a handoff summary of the changes you just made to MoveWell, so Claude Code can pick up with full context. Use these sections:

1. What changed: each screen or component touched, in plain English, plus the file names.
2. Why: the design intent behind each change (what problem it solves for older, non-tech-savvy users).
3. Look and feel: any new colors, fonts, spacing, icons, or layout rules I introduced, and where they live in the CSS.
4. Data: any new or changed fields in saved data (the movewell-data-v1 object), or "none".
5. Text sizing and phones: whether I used rem units, and whether I checked Extra Large text size, 375px phone width, and iPhone safe areas.
6. Version bump: whether I bumped the ?v= value in index.html for every file I changed.
7. Not done or unsure: anything unfinished, assumptions I made, or things I couldn't check.
8. Pushed: the commit message and branch I pushed to.

Keep it short and specific. No em dashes.
```
