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

## Current coverage — complete (all 76 gallery pages)

The gallery paginates **80 icons** (`apps/web/src/components/IconGallery.vue`).
`scripts/dump-geometry.mjs` uses the same alphabetical order as the icon files
(`a.vue` vs `b.vue` string sort), so index `80` here is gallery page 2.

**Every gallery page (1–76) is authored.** No icon file carries the generated
marker any more: each one is either a handcrafted original or an authored spec.
`scripts/icon-motion.mjs` recipes only come back if `pnpm icons:generate-missing`
runs against a newly added icon.

| Gallery page | Indices | Range | Specs | File |
| --- | --- | --- | --- | --- |
| 1 | 0–79 | `a-arrow-down` → `ai-eraser` | 78 | `scripts/authored/page-01.mjs` |
| 2 | 80–159 | `ai-file` → `album-not-found-01` | 78 | `scripts/authored/page-02.mjs` |
| 3 | 160–239 | `album-not-found-02` → `analytics-up` | 79 | `scripts/authored/page-03.mjs` |
| 4 | 240–319 | `analytics` → `arrow-down-narrow-wide` | 77 | `scripts/authored/page-04.mjs` |
| 5 | 320–399 | `arrow-down-one-zero` → `arrow-vertical` | 74 | `scripts/authored/page-05.mjs` |
| 6 | 400–479 | `arrows-up-from-line` → `backpack-02` | 79 | `scripts/authored/page-06.mjs` |
| 7 | 480–559 | `backpack-03` → `bean` | 79 | `scripts/authored/page-07.mjs` |
| 8 | 560–639 | `beater` → `bitcoin-money-02` | 80 | `scripts/authored/page-08.mjs` |
| 9 | 640–719 | `bitcoin-money` → `book-04` | 79 | `scripts/authored/page-09.mjs` |
| 10 | 720–801 | `book-a` → `border-right-02` | 81 | `scripts/authored/page-10.mjs` |
| 11 | 802–881 | `border-right` → `bubble-chat-search` | 80 | `scripts/authored/page-11.mjs` |
| 12 | 882–963 | `bubble-chat-secure` → `calendar-favorite` | 78 | `scripts/authored/page-12.mjs` |
| 13 | 964–1045 | `calendar-fold` → `calling` | 79 | `scripts/authored/page-13.mjs` |
| 14 | 1046–1126 | `camel` → `cards-02` | 79 | `scripts/authored/page-14.mjs` |
| 15 | 1127–1206 | `cards` → `chart-gantt` | 80 | `scripts/authored/page-15.mjs` |
| 16 | 1207–1286 | `chart-high-low` → `check-unread-02` | 80 | `scripts/authored/page-16.mjs` |
| 17 | 1287–1366 | `check-unread-03` → `circle-arrow-down-right` | 76 | `scripts/authored/page-17.mjs` |
| 18 | 1367–1446 | `circle-arrow-down` → `circle-power` | 79 | `scripts/authored/page-18.mjs` |
| 19 | 1447–1527 | `circle-question-mark` → `cloud-slow-wind` | 74 | `scripts/authored/page-19.mjs` |
| 20 | 1528–1608 | `cloud-snow` → `computer-check` | 75 | `scripts/authored/page-20.mjs` |
| 21 | 1609–1688 | `computer-cloud` → `cos` | 79 | `scripts/authored/page-21.mjs` |
| 22 | 1689–1770 | `cosine-01` → `cursor-info-01` | 80 | `scripts/authored/page-22.mjs` |
| 23 | 1771–1850 | `cursor-info-02` → `database-locked` | 78 | `scripts/authored/page-23.mjs` |
| 24 | 1851–1931 | `database-restore` → `dice-faces-04` | 78 | `scripts/authored/page-24.mjs` |
| 25 | 1932–2011 | `dice-faces-05` → `dollar-sign` | 79 | `scripts/authored/page-25.mjs` |
| 26 | 2012–2092 | `dollar-square` → `dumbbell` | 80 | `scripts/authored/page-26.mjs` |
| 27 | 2093–2174 | `duplex` → `ethereum-ellipse` | 80 | `scripts/authored/page-27.mjs` |
| 28 | 2175–2255 | `ethereum-rectangle` → `file-corrupt` | 75 | `scripts/authored/page-28.mjs` |
| 29 | 2256–2337 | `file-database` → `filter-remove` | 80 | `scripts/authored/page-29.mjs` |
| 30 | 2338–2423 | `filter-reset` → `folder-check` | 80 | `scripts/authored/page-30.mjs` |
| 31 | 2424–2504 | `folder-clock` → `fuel-station` | 80 | `scripts/authored/page-31.mjs` |
| 32 | 2505–2586 | `fuel` → `globe` | 78 | `scripts/authored/page-32.mjs` |
| 33 | 2587–2667 | `glove` → `gymnastic-rings` | 80 | `scripts/authored/page-33.mjs` |
| 34 | 2668–2748 | `gymnastic` → `health` | 79 | `scripts/authored/page-34.mjs` |
| 35 | 2749–2830 | `heart-add` → `hospital-bed-01` | 79 | `scripts/authored/page-35.mjs` |
| 36 | 2831–2911 | `hospital-bed-02` → `image-remove-02` | 80 | `scripts/authored/page-36.mjs` |
| 37 | 2912–2992 | `image-remove` → `join-straight` | 79 | `scripts/authored/page-37.mjs` |
| 38 | 2993–3073 | `joker` → `lamp-03` | 80 | `scripts/authored/page-38.mjs` |
| 39 | 3074–3153 | `lamp-04` → `layout-two-row` | 80 | `scripts/authored/page-39.mjs` |
| 40 | 3154–3237 | `layout` → `loading-01` | 80 | `scripts/authored/page-40.mjs` |
| 41 | 3238–3320 | `loading-02` → `look-bottom` | 77 | `scripts/authored/page-41.mjs` |
| 42 | 3321–3400 | `look-left` → `mail-setting` | 77 | `scripts/authored/page-42.mjs` |
| 43 | 3401–3481 | `mail-unlock-01` → `medal-06` | 80 | `scripts/authored/page-43.mjs` |
| 44 | 3482–3564 | `medal-07` → `message-outgoing-02` | 80 | `scripts/authored/page-44.mjs` |
| 45 | 3565–3645 | `message-outgoing` → `modern-tv-four-k` | 77 | `scripts/authored/page-45.mjs` |
| 46 | 3646–3726 | `modern-tv-issue` → `more-horizontal-circle-02` | 80 | `scripts/authored/page-46.mjs` |
| 47 | 3727–3807 | `more-horizontal-circle` → `move-right` | 78 | `scripts/authored/page-47.mjs` |
| 48 | 3808–3888 | `move-to` → `not-equal-sign-square` | 80 | `scripts/authored/page-48.mjs` |
| 49 | 3889–3968 | `not-equal-sign` → `package-add` | 78 | `scripts/authored/page-49.mjs` |
| 50 | 3969–4050 | `package-delivered-01` → `pavilon` | 78 | `scripts/authored/page-50.mjs` |
| 51 | 4051–4130 | `pay-by-check` → `pie-chart` | 80 | `scripts/authored/page-51.mjs` |
| 52 | 4131–4211 | `pie` → `pointing-left-07` | 78 | `scripts/authored/page-52.mjs` |
| 53 | 4212–4291 | `pointing-left-08` → `profile-02` | 79 | `scripts/authored/page-53.mjs` |
| 54 | 4292–4372 | `profile` → `radio-button` | 79 | `scripts/authored/page-54.mjs` |
| 55 | 4373–4452 | `radio` → `repair` | 78 | `scripts/authored/page-55.mjs` |
| 56 | 4453–4533 | `repeat-off` → `rotate-cw-square` | 79 | `scripts/authored/page-56.mjs` |
| 57 | 4534–4613 | `rotate-left-01` → `save-energy-01` | 80 | `scripts/authored/page-57.mjs` |
| 58 | 4614–4695 | `save-energy-02` → `self-transfer` | 79 | `scripts/authored/page-58.mjs` |
| 59 | 4696–4776 | `semi-truck` → `shield-key` | 77 | `scripts/authored/page-59.mjs` |
| 60 | 4777–4857 | `shield-minus` → `shower-head` | 79 | `scripts/authored/page-60.mjs` |
| 61 | 4858–4940 | `shrink-dot` → `snail` | 80 | `scripts/authored/page-61.mjs` |
| 62 | 4941–5024 | `snapchat` → `spray-can` | 80 | `scripts/authored/page-62.mjs` |
| 63 | 5025–5105 | `sql` → `square-round-corner` | 80 | `scripts/authored/page-63.mjs` |
| 64 | 5106–5186 | `square-square` → `structure-01` | 80 | `scripts/authored/page-64.mjs` |
| 65 | 5187–5266 | `structure-02` → `surfboard` | 79 | `scripts/authored/page-65.mjs` |
| 66 | 5267–5346 | `surprise` → `tablet` | 80 | `scripts/authored/page-66.mjs` |
| 67 | 5347–5427 | `tablets` → `test-tubes` | 80 | `scripts/authored/page-67.mjs` |
| 68 | 5428–5508 | `tetris` → `tick-03` | 79 | `scripts/authored/page-68.mjs` |
| 69 | 5509–5588 | `tick-04` → `touch-interaction-04` | 80 | `scripts/authored/page-69.mjs` |
| 70 | 5589–5668 | `touch-interaction` → `tsunami` | 80 | `scripts/authored/page-70.mjs` |
| 71 | 5669–5750 | `tulip` → `usb-bugs` | 79 | `scripts/authored/page-71.mjs` |
| 72 | 5751–5832 | `usb-connected-01` → `user-warning-01` | 77 | `scripts/authored/page-72.mjs` |
| 73 | 5833–5916 | `user-warning-02` → `wallet-03` | 79 | `scripts/authored/page-73.mjs` |
| 74 | 5917–5997 | `wallet-04` → `wifi-02` | 80 | `scripts/authored/page-74.mjs` |
| 75 | 5998–6077 | `wifi-circle` → `wudu` | 80 | `scripts/authored/page-75.mjs` |
| 76 | 6078–6121 | `x-ray` → `zzz` | 42 | `scripts/authored/page-76.mjs` |

The gallery hides a few names, so dump indices drift from gallery slots. Confirm
the last icon of the next page in the gallery pager before writing its specs.

Totals after page 76: **5956 authored specs**, **6,122 icons**, **6122** files
without the generated marker (165 originals + `accident` + 5956 authored).

The walk is finished. Further work is review and rework: when the user flags an
icon, edit its spec in the matching page file and re-run `pnpm icons:author`.
When new Hugeicons names appear, author them in a new page file and stop after
each page to let the user hover-review.

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

### Protected originals in pages 1–13 (do not touch)

Page 1: `add-circle`, `accident` (collision verb only; no authored/generated marker).
Page 2: `airplane-take-off-01`, `alarm-clock`.
Page 3: `alert-circle` (circle scale, stem stretch, dot bounce, duration 0.56).
Page 4: `archive-02`, `arrow-down-02`, `arrow-down-left-01`.
Page 5: `arrow-down-right-01`, `arrow-left-02` (translateX −2.6, scaleY 0.94),
`arrow-right-02`, `arrow-up-02` (translateY −2.6, scaleX 0.94),
`arrow-up-left-01`, `arrow-up-right-01` (translate 2.1, −2.1).
Page 6: `attachment`.
Page 7: `battery-charging-01`.
Page 8: none.
Page 9: `bluetooth`.
Page 10: `bookmark-01`.
Page 11: none.
Page 12: `bug-01`, `calendar-add-01`. Hidden handcrafted in the same span: `bulb`, `calendar-03`.
Page 13: `call-02` (loops: the handset rattles, rests, rattles).
Page 14: `cancel-01` (the X writes itself). Hidden handcrafted: `camera-01`.
Page 15: none.
Page 16: none.
Page 17: `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`.
Page 18: `circle-check`.
Page 19: `circle-x`, `clipboard-paste`, `clipboard`, `clock-01`,
`cloud-download`, `cloud-rain`. Hidden handcrafted: `cloud-lightning`.
Page 20: `cloud-upload`, `cloud`, `coffee-02`, `command`, `compass`.
Hidden handcrafted: `code-xml`.
Page 21: `copy-01`.
Page 22: none visible. Hidden handcrafted: `credit-card`, `crown`.
Page 23: `cursor-pointer-01`, `dashboard-square-01`.
Page 24: `delete-02`, `diamond-02`. Hidden handcrafted: `database`.
Page 25: `document-attachment`.
Page 26: none visible. Hidden handcrafted: `download-01`.
Page 27: none visible. Hidden handcrafted: `earth`, `edit-02`.
Page 28: `external-link`, `eye-off`, `eye`, `favourite`, `file-01`. Hidden handcrafted: `file-add`.
Page 29: none visible. Hidden handcrafted: `file-download`, `file-upload`.
Page 30: none visible. Hidden handcrafted: `filter`, `fire`, `flash`, `flower`, `folder-01`, `folder-add`.
Page 31: none visible. Hidden handcrafted: `folder-open`.
Page 32: `full-screen`, `github`. Hidden handcrafted: `ghost`, `gift`.
Page 33: none visible. Hidden handcrafted: `grid-view`.
Page 34: `headphone-off`. Hidden handcrafted: `headphones`.
Page 35: `help-circle`, `history`. Hidden handcrafted: `home-01`.
Page 36: none visible. Hidden handcrafted: `image-01`.
Page 37: `information-circle`. Hidden handcrafted: `inbox`.
Page 38: none visible. Hidden handcrafted: `key-01`.
Page 39: none.
Page 40: none visible. Hidden handcrafted: `leaf-01`, `link-01`, `link-square-02`, `list-view`.
Page 41: `location-add-01`, `login-01`, `logout-01`. Hidden handcrafted: `loading-03`, `location-01`, `lock`.
Page 42: `magic-wand-01`, `mail-01`, `mail-open`.
Page 43: none visible. Hidden handcrafted: `maximize-screen`.
Page 44: none visible. Hidden handcrafted: `menu-01`, `message-01`, `message-add-01`.
Page 45: `minimize-screen`, `minus-sign-circle`, `minus-sign`. Hidden handcrafted: `mic-01`.
Page 46: none visible. Hidden handcrafted: `moon-02`.
Page 47: `more-horizontal`, `more-vertical`. Hidden handcrafted: `mouse-left-click-01`.
Page 48: none visible. Hidden handcrafted: `music-note-01`.
Page 49: `notification-03`, `notification-off-01`.
Page 50: `paint-brush-02`, `party`, `pause`. Hidden handcrafted: `panel-left`.
Page 51: none.
Page 52: `play`, `plus-sign`. Hidden handcrafted: `pin`.
Page 53: none visible. Hidden handcrafted: `printer`.
Page 54: `qr-code-01`. Hidden handcrafted: `puzzle`.
Page 55: `redo`, `refresh`.
Page 56: `robot-01`. Hidden handcrafted: `rocket-01`.
Page 57: none.
Page 58: `save`, `search-01`. Hidden handcrafted: `scissor-01`.
Page 59: `sent`, `settings-01`, `share-08`. Hidden handcrafted: `shield-02`.
Page 60: `shopping-cart-01`. Hidden handcrafted: `shopping-cart-add-01`.
Page 61: none visible. Hidden handcrafted: `sleeping`, `sliders-horizontal`, `smile`.
Page 62: none visible. Hidden handcrafted: `snow`, `sort-by-down-01`, `sort-by-up-01`, `sparkles`.
Page 63: none visible. Hidden handcrafted: `square-lock-01`.
Page 64: none visible. Hidden handcrafted: `star`.
Page 65: `sun-03`.
Page 66: none.
Page 67: none visible. Hidden handcrafted: `target-01`.
Page 68: `tick-02`. Hidden handcrafted: `thumbs-up`.
Page 69: none.
Page 70: none.
Page 71: `undo`. Hidden handcrafted: `umbrella`, `upload-01`.
Page 72: `user-add-01`, `user-check-01`, `user-remove-01`. Hidden handcrafted: `user-group`, `user-multiple-02`.
Page 73: `user`, `video-01`, `volume-high`, `volume-mute-01`, `wallet-01`.
Page 74: `wifi-01`.
Page 75: none.
Page 76: none visible. Hidden handcrafted: `zoom-in-area`, `zoom-out-area`.

Handcrafted arrows often animate a wrapping `<g>`. Sampling only `<path>` in
DevTools can show `moved: 0` even when the gesture plays.

## Geometry version (critical)

Author against `@hugeicons/core-free-icons@4.2.3` (pinned in `package.json`).
4.3.0 (a Dependabot bump) redraws many icons and shifts dump indices by ~40;
emitting under it rewrites ~110 authored files from pages 1–11 with the wrong
geometry. Do not accept that bump without re-authoring every page. Pages 12–13
had ten icons emitted under 4.3.0 (`building`, `bus-front`, `calendar-check`,
`bulb-charging`, `cake`, `calendar-clock`, `calendar-heart`, `calendar-minus`,
`calendar-plus`, `calendar-search`); their specs were retargeted to 4.2.3, so
`pnpm icons:author` now runs clean.

## Authoring one gallery page

1. Dump geometry — author against those numbers, not guesses:

   ```bash
   node scripts/dump-geometry.mjs 802 80
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

   Expect `✓ authored N/N` with N = all specs across every page file. The current run expects **5956/5956** and **6122**
   handcrafted; add any new specs to both.

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
- `extras: [{ tag, attrs, as, opacity, transform, ... }]` adds props the
  gesture brings in (flash burst, sound waves, wipers, sparks, speed lines).
  They render after the primitives (`under: true` renders them first). The
  emitter **requires** `opacity[0] === 0`; end them at 0 too, because a finite
  gesture holds its last keyframe until the next hover. Kit props: `burst`,
  `rays`, `glint`, `trail`, `puff`; page 14 also has `waves` and `wiper`.
- Origins are effectively the part's own fill-box center; to pivot elsewhere
  use `around` / `scaleFrom`, or `wrap` (view-box origin) for whole-icon moves.
- Every `times` array should end at `1`; wrap the page export in
  `settleSpecs(specs)` from the kit to pad early endings.
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
| `around` | Rigid rotation around an off-center pivot (fill-box compensated) |
| `scaleFrom` | Scale on one axis with a planted pivot (fill-box compensated) |
| `hold` / `scaleHold` | Travel or scale, hold, return — no overshoot (`HOLD_T` / `HOLD_E`) |
| `retrace` | Retract a stroke toward its end and rewrite it, no visibility pop |
| `T5` / `E5` | Five-key damped timing shared by `around` |
| `ride` / `swing` | Parts that travel together (translate keys) / rotate around one shared pivot |
| `blink` / `glow` | Indicator light blinking / a small light popping bigger |
| `burst` / `rays` / `glint` / `trail` / `puff` | Extras: flash, glow ticks, sparkle, speed lines, smoke |
| `settleSpecs` | Export wrapper: pads `times` that end before 1 |
| `rise` / `flex` | Grow from a pivot (dip, overshoot) / five-key scale from a pivot |
| `pop` / `flip` / `lap` | Mark pops in place / coin flips on its axis / full turn landing at rest |
| `wave` / `dim` | Signal arc lights up in turn / fade out and back |
| `hop` | Hop up and land (promoted from page 16) |
| `tap` / `point` | Hand pointer taps down / arrow pointer clicks toward its tip (promoted from page 22) |
| `swell` / `fall` | Uniform scale from a planted pivot / weather leaving through the bottom and re-entering from above |
| `hand` / `DIR` | Pointing-hand family: `poke`, `nudge`, `wag`, `thrust`, `hold` along a `DIR` unit vector (promoted from page 34 for pages 52–53) |

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
