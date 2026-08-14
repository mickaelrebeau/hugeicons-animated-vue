# hugeicons-animated-vue

Hand-animated [Hugeicons](https://hugeicons.com) for **Vue 3**. Hover plays the
gesture; you can also drive playback yourself. Finite motions finish their beat.
Looping motions return to rest. `prefers-reduced-motion` is respected.

Inspired by [enesgules/hugeicons-animated](https://github.com/enesgules/hugeicons-animated).

## Install

```bash
pnpm add hugeicons-animated-vue motion-v
```

Peer dependencies: `vue` ^3.5 and `motion-v` ^1.7.

```ts
import { Notification03Icon } from 'hugeicons-animated-vue'
import 'hugeicons-animated-vue/style.css'
```

```vue
<script setup lang="ts">
import { Notification03Icon } from 'hugeicons-animated-vue'
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

Each icon is also available as source via the shadcn-vue registry in this repo:

```bash
npx shadcn-vue@latest add https://raw.githubusercontent.com/mickaelrebeau/hugeicons-animated-vue/main/apps/web/public/r/notification-03.json
```

## License

MIT. Icon geometry from `@hugeicons/core-free-icons` (MIT).
