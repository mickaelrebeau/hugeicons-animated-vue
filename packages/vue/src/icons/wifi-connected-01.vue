<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiConnected01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arcs light up in turn and the tick pops
// authored from scripts/authored
const arcVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.6, delay: 0.08, times: [0, 0.2, 0.5, 1], ease: 'easeInOut' },
  },
};

const arc2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.6, delay: 0.16, times: [0, 0.2, 0.5, 1], ease: 'easeInOut' },
  },
};

const arc3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.6, delay: 0, times: [0, 0.2, 0.5, 1], ease: 'easeInOut' },
  },
};

const badgeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M12 20.5C11.0173 20.5 10.2863 19.503 8.82421 17.509L3.48742 9.73059C2.40801 8.25847 1.86831 7.52241 2.02741 6.57659C2.18651 5.63078 2.81754 5.2161 4.07962 4.38675C6.38289 2.87318 9.0958 2 12 2C14.9042 2 17.6171 2.87318 19.9204 4.38675C21.1825 5.2161 21.8135 5.63078 21.9726 6.57659C22.1317 7.52241 21.592 8.25847 20.5126 9.73059L16 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M19 13C14.6871 10.3333 9.31293 10.3333 5 13" stroke="currentColor" stroke-width="1.5" :variants="arcVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21 10C15.4548 6 8.54519 6 3 10" stroke="currentColor" stroke-width="1.5" :variants="arc2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 16C13.465 14.6667 10.535 14.6667 8 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arc3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18px' }" />
          </svg>
        </div>
</template>
