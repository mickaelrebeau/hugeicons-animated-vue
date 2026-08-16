# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.1] — 2026-08-16

### Changed

- Accept `motion-v` 2.x as a peer (`^1.7.0 || ^2.0.0`). The library already
  runs on 2.3.0; the old `^1.7.0` range was leftover from the initial port.

## [0.3.0] — 2026-08-16

### Added

- Unique hover choreography for gallery pages 1–5 (`a-arrow-down` through
  `arrow-vertical`): 386 authored gestures from each icon's name, geometry, and
  direction, plus an authoring pipeline (`scripts/authored/`, `pnpm icons:author`).
- Agent playbook in `AGENTS.md` and `.cursor/skills/author-icon-motion` to resume
  the walk at page 6 without overwriting the 165 originals.

### Changed

- README and package docs now state that authored motion covers pages 1–5 only;
  later icons still use generated name-and-shape recipes.

## [0.2.0] — 2026-08-16

### Added

- 5,957 generated animated icons from `@hugeicons/core-free-icons`, bringing the set to 6,122.
- Name-first animation stories so each icon moves from its meaning, shape, and direction.
- Handcrafted-donor choreography: generated icons inherit gestures from the 165 hand-animated siblings.
- Per-icon export `hugeicons-animated-vue/icons/*` and a lazy gallery catalog.

### Changed

- Package build compiles the full set with esbuild so the library can ship all 6,122 components.

## [0.1.1] — 2026-08-14

### Added

- Public landing at [hugeicons-animated-vue.rebeaumickael.fr](https://hugeicons-animated-vue.rebeaumickael.fr).
- shadcn registry namespace `@hugeicons-animated-vue`.
- Publish to GitHub Packages as `@mickaelrebeau/hugeicons-animated-vue`.

### Changed

- Copy-paste install is now `npx shadcn add @hugeicons-animated-vue/<icon>`.
- Registry items are served from `https://hugeicons-animated-vue.rebeaumickael.fr/r/{name}.json`.
- Landing aligned with Hugeicons' light lime look.
- Gallery cards play the icon animation on hover of the whole card.

### Fixed

- Pin TypeScript to 5.9 so the library build can emit types.

## [0.1.0] — 2026-08-14

### Added

- Initial public release of `hugeicons-animated-vue`.
- 165 hand-animated Hugeicons as Vue 3 components, powered by `motion-v`.
- `useIconAnimation` composable: hover playback, imperative `startAnimation` /
  `stopAnimation`, looping vs finite gestures, `prefers-reduced-motion`.
- Copy-paste shadcn-vue registry under `apps/web/public/r`.
- Landing with gallery and Lab (Lenis + GSAP).

[0.3.1]: https://github.com/mickaelrebeau/hugeicons-animated-vue/releases/tag/v0.3.1
[0.3.0]: https://github.com/mickaelrebeau/hugeicons-animated-vue/releases/tag/v0.3.0
[0.2.0]: https://github.com/mickaelrebeau/hugeicons-animated-vue/releases/tag/v0.2.0
[0.1.1]: https://github.com/mickaelrebeau/hugeicons-animated-vue/releases/tag/v0.1.1
[0.1.0]: https://github.com/mickaelrebeau/hugeicons-animated-vue/releases/tag/v0.1.0
