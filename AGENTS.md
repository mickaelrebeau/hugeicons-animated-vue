# Agent notes

This repo is a Vue 3 port of animated Hugeicons. **Your primary job, when
asked to continue icon work, is to author unique hover gestures** — one icon
at a time, from name, SVG shape, direction, and context — modeled on the 165
handcrafted originals. Do not invent a shared pulse or spin recipe.

- Icon source of truth: `packages/vue/src/icons/*.vue`
- Do not hand-edit generated registry files; run `pnpm registry:build`
- To re-port from the React repo: clone it, set `HUGEICONS_SRC`, run `pnpm icons:convert`
- Landing animations live in `apps/web` (Lenis + GSAP). Icon playback uses `motion-v`.
- Talk to the user in French. Keep code, comments, verbs, and this file in English.

When the task is authoring, converting, or reviewing icon motion, follow this
file end to end and load the project skill `.cursor/skills/author-icon-motion`.

## Current coverage — stopped after gallery page 5

The gallery paginates **80 icons** (`apps/web/src/components/IconGallery.vue`).
`scripts/dump-geometry.mjs` uses the same alphabetical order as the icon files
(`a.vue` vs `b.vue` string sort), so index `80` here is gallery page 2.

**Authored (unique choreography) exists only for gallery pages 1–5.**
Icons from page 6 onward still carry the generated marker and a name/shape recipe
from `scripts/icon-motion.mjs`. Do not claim the whole library is hand-authored.

| Gallery page | Indices | Range | Specs | File |
| --- | --- | --- | --- | --- |
| 1 | 0–79 | `a-arrow-down` → `ai-eraser` | 78 | `scripts/authored/page-01.mjs` |
| 2 | 80–159 | `ai-file` → `album-not-found-01` | 78 | `scripts/authored/page-02.mjs` |
| 3 | 160–239 | `album-not-found-02` → `analytics-up` | 79 | `scripts/authored/page-03.mjs` |
| 4 | 240–319 | `analytics` → `arrow-down-narrow-wide` | 77 | `scripts/authored/page-04.mjs` |
| 5 | 320–399 | `arrow-down-one-zero` → `arrow-vertical` | 74 | `scripts/authored/page-05.mjs` |
| **6 (next)** | **400–479** | **`arrows-up-from-line` → `backpack-02`** | **79 to write** | **`scripts/authored/page-06.mjs`** |

Totals after page 5: **386 authored specs**, **6,122 icons**, **552** files
without the generated marker (165 originals + `accident` + 386 authored).

Resume at page 6. Skip `attachment` (handcrafted). After each page, stop and
ask whether to continue or let the user hover-review — do not silently walk
the rest of the library.

## Three tiers of icon motion

An icon file falls into exactly one tier, identified by its header comment:

| Tier | Marker | Owner |
| --- | --- | --- |
| Handcrafted | neither marker | a human; **never regenerate** |
| Authored | `authored from scripts/authored` | `pnpm icons:author` |
| Generated | `generated from @hugeicons/core-free-icons` | `pnpm icons:generate-missing` |

`scripts/generate-missing-icons.mjs` only rewrites the generated marker, so
handcrafted and authored files survive a full regeneration.

The authoring emitter overwrites **generated or authored** files. It refuses a
handcrafted file unless the spec sets `rework: true`. Never set `rework` unless
the user explicitly asks to replace that original.

### Protected originals in pages 1–6 (do not touch)

Page 1: `add-circle`, `accident` (collision verb only; no authored/generated marker).
Page 2: `airplane-take-off-01`, `alarm-clock`.
Page 3: `alert-circle` (circle scale, stem stretch, dot bounce, duration 0.56).
Page 4: `archive-02`, `arrow-down-02`, `arrow-down-left-01`.
Page 5: `arrow-down-right-01`, `arrow-left-02` (translateX −2.6, scaleY 0.94),
`arrow-right-02`, `arrow-up-02` (translateY −2.6, scaleX 0.94),
`arrow-up-left-01`, `arrow-up-right-01` (translate 2.1, −2.1).
Page 6: `attachment`.

Handcrafted arrows often animate a wrapping `<g>`. Sampling only `<path>` in
DevTools can show `moved: 0` even when the gesture plays.

## Authoring one gallery page

1. Dump geometry — author against those numbers, not guesses:

   ```bash
   node scripts/dump-geometry.mjs 400 80
   node scripts/dump-geometry.mjs airplane-mode-off
   ```

2. List every kebab name in the slice. For each file, read the header:
   skip if it has **neither** marker (handcrafted). Do not copy a skipped
   original into the spec file.

3. Write `scripts/authored/page-NN.mjs`. Export a default object keyed by
   kebab name. `parts` is positional: one entry per SVG primitive in source
   order; `null` leaves that primitive static. Shared easings live in
   `scripts/authored/_kit.mjs` (files prefixed `_` are skipped by the emitter).

4. Import kit helpers instead of duplicating them. Page-local helpers are fine
   when the gesture is unique to that family (`bang` on page 3, `squash` on
   page 5). Promote a helper into `_kit.mjs` only when a later page needs it.

5. Emit, then refresh index and manifest:

   ```bash
   pnpm icons:author
   ```

   Expect `✓ authored N/N` with N = all specs across every page file. After
   page 6 that should be **465/465** and **631** handcrafted in the manifest
   (552 + 79), unless a skip list changed.

6. Spot-check in the gallery (`pnpm dev`, usually `http://localhost:5173`).
   Hover uses `.hia-icon` + `mouseenter`. The gallery cell also fires
   `pointerenter`. `.cell .hia-icon` has `pointer-events: none`, so CDP tests
   should dispatch `mouseenter` on `.hia-icon` or call `startAnimation()` on
   the cell handle.

7. Confirm git: skipped originals still have neither marker. Do not commit
   unless the user asks.

## Spec shape

```js
'icon-kebab': {
  verb: 'one sentence naming the action the geometry performs',
  // loops: true,  // only for an ongoing condition; stopAnimation returns to rest
  // clip: true,   // svg overflow="hidden"
  parts: [
    null, // primitive 0 stays still
    {
      as: 'head',           // becomes headVariants (deduped by compiled payload)
      origin: [12, 18],     // transform-origin in viewBox units
      transform: ['translateY(0px)', 'translateY(2.6px)', 'translateY(-0.4px)', 'translateY(0px)'],
      times: [0, 0.44, 0.72, 1],
      ease: [INOUT, OUT, OUT],
      dur: 0.5,
      delay: 0.04,          // compiled onto transition.delay
    },
  ],
},
```

- `parts.length` **must** equal the Hugeicons primitive count from the dump.
- `as` is a role name, not a CSS selector.
- `delay` belongs on the part; the emitter puts it on `transition`.
- `loops: true` wires `useIconAnimation({ loops: true })` so leave stops the
  gesture. Infinite playback also needs `repeat: Infinity` on the part.
- `clip: true` sets SVG `overflow="hidden"`.
- Component `name` is `toPascal(kebab)` (already ends in `Icon`).

### Rest pose is the first keyframe (critical)

`compilePart` in `scripts/build-authored-icons.mjs` sets
`normal.transform = part.transform[0]` (same for opacity). **Every transform
and opacity array must start at rest** (`translate(0)`, `scale(1)`,
`rotate(0deg)`, opacity `1`). Starting on the peak pose makes the icon jump
on hover. Page 3 hit this; `arrive` / `grow` in `_kit.mjs` already start at rest.

## Kit (`scripts/authored/_kit.mjs`)

| Helper | Use |
| --- | --- |
| `OUT` / `INOUT` | `[0.23, 1, 0.32, 1]` and `[0.77, 0, 0.175, 1]` — same as the originals |
| `sweep` | Retract a stroke, rewrite it |
| `draw` | Wipe a slash or mark off and on |
| `stamp` | A badge or mark that shrinks then snaps back |
| `twinkle` | Sparkle catch |
| `spinStar` | Four-point star onto its axis |
| `beat` | Container acknowledging an inner event |
| `shake` | Warning rattle |
| `arrive` | Block pulls off an edge, then snaps onto it |
| `nudge` | Travel along a named axis, then settle (arrow-down-02 beat) |
| `grow` | Bar scales from a named origin on `X` or `Y` |
| `compute` | Processor / chip thinking |

Durations at icon size are short: most beats **0.46–0.82 s**. Prefer
`transform` and `opacity`. Do not morph `d` unless command types match.

## Choreography

Read the name as a verb, then move only the part that performs it. Variants
of the same family must **differ** when the geometry differs (01 chevron vs
02 shaft+head vs 03 + baseline vs 04 filled head vs 05 filled body, big,
double, from-line, to-line, to-dot, az/za, one-zero, narrow-wide, expand,
shrink, move, reload, turn, stack).

Patterns already used — reuse the idea, retarget origins from the dump:

- Directional arrows: `nudge` / squash along the named axis; `-02` originals
  use ~2.6px and a perpendicular `scale(0.94)`. Diagonals: ±2.1px.
- Expand = corners fly **out**; shrink = corners pull **in**.
- Reload = opposing arcs `sweep`, heads chase.
- Turn = path `sweep`, then the head completes the U.
- Archives: drawer vs lid vs file-arrow each get their own job.
- Off / forbidden: the slash `draw`s; the subject may dim or recoil.
- Alerts: `shake` the frame; bang stem stretches, the dot answers later.

Write a `verb` that a stranger could act out. Reject generic “pulse” and
“rotate the whole icon” unless that is literally the pictogram.

Motion rules for product vs gallery: `docs/animation-guidelines.md`.

## After a page

1. Unlock the browser if you locked it.
2. Summarize in French: range, spec count, skipped originals, emitter totals.
3. Ask whether to author the next page or stop for a hover review.
4. Do not run `pnpm icons:generate-missing` unless asked — it would not
   clobber authored files, but it is unrelated to this walk.
5. Do not commit or push unless asked.
