<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VacuumCleanerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shopping-cart-01: it pushes forward across the floor and pulls back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.26px) rotate(4.08deg)', 'translateX(-0.41px) rotate(-1.02deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.62,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17C7.10457 17 8 17.8954 8 19C8 20.1046 7.10457 21 6 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 21px' }" />
            <motion.path d="M10 21H11.9743C12.6141 21 13.0976 20.435 12.9832 19.8211L12.0696 14.9206C11.5383 12.0712 8.99368 10 6.0241 10C5.4585 10 5 10.4472 5 10.9988V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 21px' }" />
            <motion.path d="M19.5 21L12.8579 6.93429C11.7236 4.53225 9.3055 3 6.64911 3C4.08148 3 2 5.08148 2 7.64911V7.83772C2 9.7262 3.20843 11.4028 5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 21px' }" />
            <motion.path d="M22 21H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 21px' }" />
          </svg>
        </div>
</template>
