# hugeicons-animated-vue

[![npm](https://img.shields.io/npm/v/hugeicons-animated-vue.svg)](https://www.npmjs.com/package/hugeicons-animated-vue)
[![license](https://img.shields.io/github/license/mickaelrebeau/hugeicons-animated-vue.svg)](LICENSE)
[![CI](https://github.com/mickaelrebeau/hugeicons-animated-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/mickaelrebeau/hugeicons-animated-vue/actions/workflows/ci.yml)

A collection of 6,122 animated [Hugeicons](https://hugeicons.com) for **Vue 3**.
Install from npm, or copy-paste each icon as source you own.

**Authored motion covers gallery pages 1–5 only** (the first 400 icons in
alphabetical order, `a-arrow-down` through `arrow-vertical`). Those icons
have a unique hover gesture written from the pictogram's name, geometry, and
direction. The 165 original hand-crafted icons are unchanged. Every icon
after page 5 still uses a generated recipe from its name and shape.

Inspired by [enesgules/hugeicons-animated](https://github.com/enesgules/hugeicons-animated).

- MIT licensed
- Hover playback, plus `startAnimation()` / `stopAnimation()`
- Finite gestures finish their beat; looping gestures return to rest
- `prefers-reduced-motion` is respected

## Install

```bash
pnpm add hugeicons-animated-vue motion-v
```

```vue
<script setup lang="ts">
import { Notification03Icon } from 'hugeicons-animated-vue'
import type { AnimatedIconHandle } from 'hugeicons-animated-vue'
import { useTemplateRef } from 'vue'
import 'hugeicons-animated-vue/style.css'

const icon = useTemplateRef<AnimatedIconHandle>('bell')
</script>

<template>
  <Notification03Icon :size="28" />
  <Notification03Icon ref="bell" :size="28" />
  <button type="button" @click="icon?.startAnimation()">Play</button>
</template>
```

Peer dependencies: `vue` ^3.5 and [`motion-v`](https://motion.dev/docs/vue) ^1.7.

## Copy-paste

```bash
npx shadcn add @hugeicons-animated-vue/notification-03
```

Until `@hugeicons-animated-vue` is in the [shadcn registry index](https://ui.shadcn.com/r/registries.json), register it once in your project:

```bash
npx shadcn@latest registry add @hugeicons-animated-vue=https://hugeicons-animated-vue.rebeaumickael.fr/r/{name}.json
```

Or add this to `components.json`:

```json
{
  "registries": {
    "@hugeicons-animated-vue": "https://hugeicons-animated-vue.rebeaumickael.fr/r/{name}.json"
  }
}
```

## Animation coverage

The site gallery shows 80 icons per page. Unique, per-icon choreography has
been authored for **pages 1–5** only:

| Page | Icons | Authored file |
| --- | --- | --- |
| 1 | `a-arrow-down` → `ai-eraser` | `scripts/authored/page-01.mjs` |
| 2 | `ai-file` → `album-not-found-01` | `scripts/authored/page-02.mjs` |
| 3 | `album-not-found-02` → `analytics-up` | `scripts/authored/page-03.mjs` |
| 4 | `analytics` → `arrow-down-narrow-wide` | `scripts/authored/page-04.mjs` |
| 5 | `arrow-down-one-zero` → `arrow-vertical` | `scripts/authored/page-05.mjs` |

Hand-crafted originals that fall in that range were left untouched (for
example `add-circle`, `alert-circle`, `arrow-down-02`).
Page 6 onward (`arrows-up-from-line` and after) is still generated.

To continue the walk, see [AGENTS.md](AGENTS.md).

## Animation rules

- Name the action and animate only the geometry that communicates it.
- Preserve SVG primitives between poses.
- Prefer a short, discrete, productive gesture.
- Respect reduced-motion preferences.
- Every finite gesture returns to the original Hugeicon pose.

See [docs/animation-guidelines.md](docs/animation-guidelines.md).

## Development

```bash
pnpm install
pnpm dev
```

Landing: Vite + Vue 3, Lenis, GSAP ScrollTrigger. Icons live in `packages/vue`.

```bash
pnpm --filter hugeicons-animated-vue build
pnpm icons:author     # emit pages in scripts/authored/ (pages 1–5 so far)
pnpm icons:convert    # re-port from a local React clone
pnpm registry:build   # manifest + shadcn registry
```

## Contributing

Issues, discussions, and pull requests are welcome. See
[CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md).

Security reports: [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE). Icon shapes from the free Hugeicons set (`@hugeicons/core-free-icons`, MIT).
Animation patterns inspired by [enesgules/hugeicons-animated](https://github.com/enesgules/hugeicons-animated).
