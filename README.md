# hugeicons-animated-vue

[![npm](https://img.shields.io/npm/v/hugeicons-animated-vue.svg)](https://www.npmjs.com/package/hugeicons-animated-vue)
[![license](https://img.shields.io/github/license/mickaelrebeau/hugeicons-animated-vue.svg)](LICENSE)
[![CI](https://github.com/mickaelrebeau/hugeicons-animated-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/mickaelrebeau/hugeicons-animated-vue/actions/workflows/ci.yml)

A collection of 6,122 animated [Hugeicons](https://hugeicons.com) for **Vue 3**.
Install from npm, or copy-paste each icon as source you own.

**Every icon has authored motion.** All 76 gallery pages (`a-arrow-down`
through `zzz`) carry a unique hover gesture written from the pictogram's name,
geometry, and direction. The 165 original hand-crafted icons are unchanged.

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
import Notification03Icon from 'hugeicons-animated-vue/icons/notification-03'
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

Peer dependencies: `vue` ^3.5 and [`motion-v`](https://motion.dev/docs/vue) ^1.7 or ^2.

Named imports from the package root still work (`import { Notification03Icon } from 'hugeicons-animated-vue'`). Prefer the deep path above so bundlers only pull the icons you use.

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
been authored for **every page (1–76)**:

| Page | Icons | Authored file |
| --- | --- | --- |
| 1 | `a-arrow-down` → `ai-eraser` | `scripts/authored/page-01.mjs` |
| 2 | `ai-file` → `album-not-found-01` | `scripts/authored/page-02.mjs` |
| 3 | `album-not-found-02` → `analytics-up` | `scripts/authored/page-03.mjs` |
| 4 | `analytics` → `arrow-down-narrow-wide` | `scripts/authored/page-04.mjs` |
| 5 | `arrow-down-one-zero` → `arrow-vertical` | `scripts/authored/page-05.mjs` |
| 6 | `arrows-up-from-line` → `backpack-02` | `scripts/authored/page-06.mjs` |
| 7 | `backpack-03` → `bean` | `scripts/authored/page-07.mjs` |
| 8 | `beater` → `bitcoin-money-02` | `scripts/authored/page-08.mjs` |
| 9 | `bitcoin-money` → `book-04` | `scripts/authored/page-09.mjs` |
| 10 | `book-a` → `border-right-02` | `scripts/authored/page-10.mjs` |
| 11 | `border-right` → `bubble-chat-search` | `scripts/authored/page-11.mjs` |
| 12 | `bubble-chat-secure` → `calendar-favorite` | `scripts/authored/page-12.mjs` |
| 13 | `calendar-fold` → `calling` | `scripts/authored/page-13.mjs` |
| 14 | `camel` → `cards-02` | `scripts/authored/page-14.mjs` |
| 15 | `cards` → `chart-gantt` | `scripts/authored/page-15.mjs` |
| 16 | `chart-high-low` → `check-unread-02` | `scripts/authored/page-16.mjs` |
| 17 | `check-unread-03` → `circle-arrow-down-right` | `scripts/authored/page-17.mjs` |
| 18 | `circle-arrow-down` → `circle-power` | `scripts/authored/page-18.mjs` |
| 19 | `circle-question-mark` → `cloud-slow-wind` | `scripts/authored/page-19.mjs` |
| 20 | `cloud-snow` → `computer-check` | `scripts/authored/page-20.mjs` |
| 21 | `computer-cloud` → `cos` | `scripts/authored/page-21.mjs` |
| 22 | `cosine-01` → `cursor-info-01` | `scripts/authored/page-22.mjs` |
| 23 | `cursor-info-02` → `database-locked` | `scripts/authored/page-23.mjs` |
| 24 | `database-restore` → `dice-faces-04` | `scripts/authored/page-24.mjs` |
| 25 | `dice-faces-05` → `dollar-sign` | `scripts/authored/page-25.mjs` |
| 26 | `dollar-square` → `dumbbell` | `scripts/authored/page-26.mjs` |
| 27 | `duplex` → `ethereum-ellipse` | `scripts/authored/page-27.mjs` |
| 28 | `ethereum-rectangle` → `file-corrupt` | `scripts/authored/page-28.mjs` |
| 29 | `file-database` → `filter-remove` | `scripts/authored/page-29.mjs` |
| 30 | `filter-reset` → `folder-check` | `scripts/authored/page-30.mjs` |
| 31 | `folder-clock` → `fuel-station` | `scripts/authored/page-31.mjs` |
| 32 | `fuel` → `globe` | `scripts/authored/page-32.mjs` |
| 33 | `glove` → `gymnastic-rings` | `scripts/authored/page-33.mjs` |
| 34 | `gymnastic` → `health` | `scripts/authored/page-34.mjs` |
| 35 | `heart-add` → `hospital-bed-01` | `scripts/authored/page-35.mjs` |
| 36 | `hospital-bed-02` → `image-remove-02` | `scripts/authored/page-36.mjs` |
| 37 | `image-remove` → `join-straight` | `scripts/authored/page-37.mjs` |
| 38 | `joker` → `lamp-03` | `scripts/authored/page-38.mjs` |
| 39 | `lamp-04` → `layout-two-row` | `scripts/authored/page-39.mjs` |
| 40 | `layout` → `loading-01` | `scripts/authored/page-40.mjs` |
| 41 | `loading-02` → `look-bottom` | `scripts/authored/page-41.mjs` |
| 42 | `look-left` → `mail-setting` | `scripts/authored/page-42.mjs` |
| 43 | `mail-unlock-01` → `medal-06` | `scripts/authored/page-43.mjs` |
| 44 | `medal-07` → `message-outgoing-02` | `scripts/authored/page-44.mjs` |
| 45 | `message-outgoing` → `modern-tv-four-k` | `scripts/authored/page-45.mjs` |
| 46 | `modern-tv-issue` → `more-horizontal-circle-02` | `scripts/authored/page-46.mjs` |
| 47 | `more-horizontal-circle` → `move-right` | `scripts/authored/page-47.mjs` |
| 48 | `move-to` → `not-equal-sign-square` | `scripts/authored/page-48.mjs` |
| 49 | `not-equal-sign` → `package-add` | `scripts/authored/page-49.mjs` |
| 50 | `package-delivered-01` → `pavilon` | `scripts/authored/page-50.mjs` |
| 51 | `pay-by-check` → `pie-chart` | `scripts/authored/page-51.mjs` |
| 52 | `pie` → `pointing-left-07` | `scripts/authored/page-52.mjs` |
| 53 | `pointing-left-08` → `profile-02` | `scripts/authored/page-53.mjs` |
| 54 | `profile` → `radio-button` | `scripts/authored/page-54.mjs` |
| 55 | `radio` → `repair` | `scripts/authored/page-55.mjs` |
| 56 | `repeat-off` → `rotate-cw-square` | `scripts/authored/page-56.mjs` |
| 57 | `rotate-left-01` → `save-energy-01` | `scripts/authored/page-57.mjs` |
| 58 | `save-energy-02` → `self-transfer` | `scripts/authored/page-58.mjs` |
| 59 | `semi-truck` → `shield-key` | `scripts/authored/page-59.mjs` |
| 60 | `shield-minus` → `shower-head` | `scripts/authored/page-60.mjs` |
| 61 | `shrink-dot` → `snail` | `scripts/authored/page-61.mjs` |
| 62 | `snapchat` → `spray-can` | `scripts/authored/page-62.mjs` |
| 63 | `sql` → `square-round-corner` | `scripts/authored/page-63.mjs` |
| 64 | `square-square` → `structure-01` | `scripts/authored/page-64.mjs` |
| 65 | `structure-02` → `surfboard` | `scripts/authored/page-65.mjs` |
| 66 | `surprise` → `tablet` | `scripts/authored/page-66.mjs` |
| 67 | `tablets` → `test-tubes` | `scripts/authored/page-67.mjs` |
| 68 | `tetris` → `tick-03` | `scripts/authored/page-68.mjs` |
| 69 | `tick-04` → `touch-interaction-04` | `scripts/authored/page-69.mjs` |
| 70 | `touch-interaction` → `tsunami` | `scripts/authored/page-70.mjs` |
| 71 | `tulip` → `usb-bugs` | `scripts/authored/page-71.mjs` |
| 72 | `usb-connected-01` → `user-warning-01` | `scripts/authored/page-72.mjs` |
| 73 | `user-warning-02` → `wallet-03` | `scripts/authored/page-73.mjs` |
| 74 | `wallet-04` → `wifi-02` | `scripts/authored/page-74.mjs` |
| 75 | `wifi-circle` → `wudu` | `scripts/authored/page-75.mjs` |
| 76 | `x-ray` → `zzz` | `scripts/authored/page-76.mjs` |

Hand-crafted originals in every range were left untouched (for example
`add-circle`, `alert-circle`, `arrow-down-02`, `bookmark-01`, `call-02`,
`search-01`, `undo`, `wifi-01`). No icon uses a generated recipe any more.

To review or rework a gesture, see [AGENTS.md](AGENTS.md).

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
pnpm icons:author     # emit every page in scripts/authored/ (pages 1–76)
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
