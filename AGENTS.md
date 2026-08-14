# Agent notes

- Icon source of truth: `packages/vue/src/icons/*.vue`
- Do not hand-edit generated registry files; run `pnpm registry:build`
- To re-port from the React repo: clone it, set `HUGEICONS_SRC`, run `pnpm icons:convert`
- Landing animations live in `apps/web` (Lenis + GSAP). Icon playback uses `motion-v`.
