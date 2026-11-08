<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HotPriceIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame flickers and the percent tag spins
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'scaleY(1) skewX(0deg)' },
  animate: {
    transform: [
      'scaleY(1) skewX(0deg)',
      'scaleY(1.06) skewX(-3deg)',
      'scaleY(0.96) skewX(2deg)',
      'scaleY(1.03) skewX(-1deg)',
      'scaleY(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const percentVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(36deg)',
      'rotate(125.99999999999999deg)',
      'rotate(185.4deg)',
      'rotate(180deg)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <motion.path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C11.6117 4.48692 11.2315 5.82158 10 8C8.79908 7.4449 8.5 7 8 5.75C6 8 4 11 4 14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5 12.5L9.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="percentVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M9.875 12.75H9.75M10 12.75C10 12.8881 9.88807 13 9.75 13C9.61193 13 9.5 12.8881 9.5 12.75C9.5 12.6119 9.61193 12.5 9.75 12.5C9.88807 12.5 10 12.6119 10 12.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="percentVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M14.375 17.25H14.25M14.5 17.25C14.5 17.3881 14.3881 17.5 14.25 17.5C14.1119 17.5 14 17.3881 14 17.25C14 17.1119 14.1119 17 14.25 17C14.3881 17 14.5 17.1119 14.5 17.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="percentVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
          </svg>
        </div>
</template>
