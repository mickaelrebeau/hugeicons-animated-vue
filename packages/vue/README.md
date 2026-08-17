# hugeicons-animated-vue

Animated [Hugeicons](https://hugeicons.com) for **Vue 3** — 6,122 icons.

Unique, per-icon choreography is authored for **gallery pages 1–10**
(`a-arrow-down` through `border-right-02`), plus the original 165 hand-crafted
gestures. Icons after that page still use a generated name-and-shape recipe.
Hover plays the motion; you can also drive playback yourself. Finite motions
finish their beat. Looping motions return to rest. `prefers-reduced-motion`
is respected.

Inspired by [enesgules/hugeicons-animated](https://github.com/enesgules/hugeicons-animated).

## Install

```bash
pnpm add hugeicons-animated-vue motion-v
```

Peer dependencies: `vue` ^3.5 and `motion-v` ^1.7 or ^2.

Named imports from the package root still work. Prefer the deep path so bundlers only include the icons you use.

```ts
import Notification03Icon from 'hugeicons-animated-vue/icons/notification-03'
import 'hugeicons-animated-vue/style.css'
```

```vue
<script setup lang="ts">
import Notification03Icon from 'hugeicons-animated-vue/icons/notification-03'
import type { AnimatedIconHandle } from 'hugeicons-animated-vue'
import { useTemplateRef } from 'vue'

const icon = useTemplateRef<AnimatedIconHandle>('bell')
</script>

<template>
  <Notification03Icon :size="28" />
  <Notification03Icon ref="bell" :size="28" />
  <button type="button" @click="icon?.startAnimation()">Play</button>
</template>
```

## Copy-paste

```bash
npx shadcn add @hugeicons-animated-vue/notification-03
```

Until the namespace is in the [shadcn registry index](https://ui.shadcn.com/r/registries.json), register it once:

```bash
npx shadcn@latest registry add @hugeicons-animated-vue=https://hugeicons-animated-vue.rebeaumickael.fr/r/{name}.json
```

## License

MIT. Icon geometry from `@hugeicons/core-free-icons` (MIT).
