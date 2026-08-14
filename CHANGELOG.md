# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[0.1.1]: https://github.com/mickaelrebeau/hugeicons-animated-vue/releases/tag/v0.1.1
[0.1.0]: https://github.com/mickaelrebeau/hugeicons-animated-vue/releases/tag/v0.1.0
