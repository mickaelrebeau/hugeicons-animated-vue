---
name: author-icon-motion
description: >-
  Author unique hover gestures for Hugeicons Vue icons, one gallery page (80
  icons) at a time, via scripts/authored specs and pnpm icons:author. Use when
  continuing the authored-motion walk, writing page-NN.mjs, dumping geometry,
  choreographing an icon from its name and SVG, or when the user mentions
  gallery pages, icons:author, dump-geometry, or questionnaire results for
  the next page.
---

# Author icon motion

Read [AGENTS.md](../../../AGENTS.md) before writing any spec. That file is the
source of truth for coverage, protected originals, spec shape, and the kit.

## Resume point

Stopped after **gallery page 5**. Next is **page 6**: indices **400–479**,
`arrows-up-from-line` → `backpack-02`. Skip **`attachment`**. Spec file:
`scripts/authored/page-06.mjs`.

Authored choreography exists **only** for pages 1–5. Later icons are still
generated recipes. Never overwrite a file that has neither the authored nor
the generated marker.

## One-page loop

1. `node scripts/dump-geometry.mjs <fromIndex> 80`
2. Skip every icon whose `.vue` has neither `authored from scripts/authored`
   nor `generated from @hugeicons/core-free-icons`
3. Write `scripts/authored/page-NN.mjs` — one entry per remaining icon, `parts`
   positional, rest pose as keyframe `[0]`, origins from the dump
4. Import helpers from `scripts/authored/_kit.mjs`; do not duplicate `nudge` /
   `grow` / `arrive` / `sweep`
5. `pnpm icons:author` — expect a clean `N/N` with no handcrafted refusals
   you did not intend
6. Hover-check a sample on `http://localhost:5173` (dispatch `mouseenter` on
   `.hia-icon`; gallery cells set `pointer-events: none` on that node)
7. Stop. Summarize in French. Ask to continue or review. Do not commit.

## Hard gates

- No generic pulse/rotation for a whole page.
- Every `transform` / `opacity` array starts at rest.
- `parts.length` equals the primitive count in the dump.
- Finite gestures return to the Hugeicons pose.
- Talk to the user in French.
