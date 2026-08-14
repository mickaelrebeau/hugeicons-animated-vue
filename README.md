# hugeicons-animated-vue

A curated collection of hand-animated [Hugeicons](https://hugeicons.com) for **Vue 3**, distributed as copy-paste components (and as a workspace package). Inspired by [enesgules/hugeicons-animated](https://github.com/enesgules/hugeicons-animated).

Icons from Hugeicons, animated for Vue. Install each one as source code you own.

## Usage

```bash
npx shadcn-vue@latest add ./apps/web/public/r/notification-03.json
```

```vue
<script setup lang="ts">
import Notification03Icon from '@/components/ui/notification-03.vue'

const icon = useTemplateRef('bell')
</script>

<template>
  <!-- hover animates automatically -->
  <Notification03Icon :size="28" />

  <!-- or control it -->
  <Notification03Icon ref="bell" :size="28" />
  <button type="button" @click="icon?.startAnimation()">Play</button>
</template>
```

Finite gestures finish their beat even if the pointer leaves halfway through. Looping gestures stop and return to rest. `prefers-reduced-motion` is respected.

## Package

```bash
pnpm add hugeicons-animated-vue motion-v
```

```ts
import { Notification03Icon } from 'hugeicons-animated-vue'
```

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
pnpm icons:convert   # re-port from a local React clone
pnpm registry:build  # manifest + shadcn-vue registry
```

## License

MIT. Icon shapes from the free Hugeicons set (`@hugeicons/core-free-icons`, MIT).
