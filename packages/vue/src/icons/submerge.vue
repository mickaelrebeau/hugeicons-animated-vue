<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SubmergeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball sinks under the waterline and bobs back up
// authored from scripts/authored
const ballVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2px)',
      'translate(0px, -0.4px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dripsVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const waterVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, 0px)',
      'translate(-0.6px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.circle cx="12" cy="14" r="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M7 2V3M7 5.5V6.5M7 9V10M17 2V3M17 5.5V6.5M17 9V10M12 2V3M12 5.5V6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dripsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M2 12V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 14.8717C4.26409 16.7863 6.1743 15.7292 8.0217 14.833C9.59668 14.069 11.126 13.4219 12.79 14.833C16.0467 17.5465 18.9092 14.7526 22 14.1976" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="waterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
          </svg>
        </div>
</template>
