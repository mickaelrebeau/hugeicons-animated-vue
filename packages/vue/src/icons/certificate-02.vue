<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Certificate02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the laurel wings flap open and the medal flips on its ribbon
// authored from scripts/authored
const wingVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.08px, 0.77px) rotate(-12deg)',
      'translate(0.02px, -0.39px) rotate(6deg)',
      'translate(0.00px, 0.13px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const wing2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.08px, 0.77px) rotate(12deg)',
      'translate(-0.02px, -0.39px) rotate(-6deg)',
      'translate(-0.00px, 0.13px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const coinVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, delay: 0.1, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M9 5.02649C7.42349 4.60306 4.65212 3.46017 3.16165 4.30124C1.61279 5.17525 1.61278 10.8248 3.16165 11.6988C4.65212 12.5398 7.42349 11.3969 9 10.9735" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="wingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.3px 8px' }" />
            <motion.path d="M15 5.02649C16.5765 4.60306 19.3479 3.46017 20.8384 4.30124C22.3872 5.17525 22.3872 10.8248 20.8384 11.6988C19.3479 12.5398 16.5765 11.3969 15 10.9735" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="wing2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.7px 8px' }" />
            <motion.circle cx="12" cy="8" r="4" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <path d="M9.77244 11L8.34515 17.3753C8.01375 18.8555 7.84805 19.5957 8.18452 19.8368C9.33435 20.6607 10.7588 18.0976 12 18.0976C13.13 18.0976 14.817 20.5523 15.8155 19.8368C16.1519 19.5957 15.9862 18.8555 15.6548 17.3753L14.2276 11" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
