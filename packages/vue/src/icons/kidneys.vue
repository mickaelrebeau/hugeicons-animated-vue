<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KidneysIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two kidneys pulse and the tubes flow
// authored from scripts/authored
const kidneyVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.06)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tubeVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const kidney2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.06)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.06,
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
            <motion.path d="M9.98556 6C10.1428 4.59395 9.00449 3 6.57134 3C4.04666 3 1.99999 5.46243 1.99999 8.5C1.99999 11.5376 3.53887 14 6.06355 14C7.67995 14 8.53551 12.7459 8.35578 11.6589" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="kidneyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.1px 8.5px' }" />
            <motion.path d="M7 8C8.50006 7.9996 10.4999 8.4957 10.4999 11.64C10.4999 15.8 8.49942 17.36 10.0005 21M17 8C15.4999 7.9996 13.5001 8.4957 13.5001 11.64C13.5001 15.8 15.5006 17.36 13.9995 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tubeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M6.61035 6C6.81406 6.57143 7.16038 7.94286 6.91592 8.85714C6.81407 9.2381 6.48829 10 6 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M14.0144 6C13.8572 4.59395 14.9955 3 17.4287 3C19.9533 3 22 5.46243 22 8.5C22 11.5376 20.4611 14 17.9364 14C16.2406 14 15.3822 12.6196 15.6783 11.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="kidney2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.9px 8.5px' }" />
            <path d="M17.3897 6C17.1859 6.57143 16.8396 7.94286 17.0841 8.85714C17.1859 9.2381 17.5117 10 18 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
