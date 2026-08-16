<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Medal07Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after star: the medal lifts from its ribbon and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.16)', 'scale(0.98)', 'scale(1.09)', 'scale(1)'],
    transition: {
      duration: 0.69,
      ease: [0.22, 1, 0.36, 1],
      times: [0, 0.12, 0.32, 0.48, 0.68, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: false,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.circle cx="12" cy="16.5" r="5.5" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.path d="M11 11L6.19145 8.93919C5.24455 8.53338 4.7711 8.33047 4.46382 7.96189C4.3681 7.84708 4.28556 7.7219 4.21773 7.58869C4 7.16107 4 6.64597 4 5.61577C4 4.10079 4 3.34331 4.38928 2.81443C4.50876 2.6521 4.6521 2.50876 4.81443 2.38928C5.34331 2 6.10079 2 7.61577 2H16.3842C17.8992 2 18.6567 2 19.1856 2.38928C19.3479 2.50876 19.4912 2.6521 19.6107 2.81443C20 3.34331 20 4.10079 20 5.61577C20 6.64597 20 7.16107 19.7823 7.58869C19.7144 7.7219 19.6319 7.84708 19.5362 7.96189C19.2289 8.33047 18.7555 8.53338 17.8085 8.93919L13 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.path d="M12 11V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.circle cx="12" cy="16.5" r="1.5" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
          </svg>
        </div>
</template>
