<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SoftDrink02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the straw wobbles in the cup and a bubble blinks
// authored from scripts/authored
const strawVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.87px, 0.33px) rotate(6deg)',
      'translate(-0.63px, -0.17px) rotate(-4.199999999999999deg)',
      'translate(0.27px, 0.09px) rotate(1.7999999999999998deg)',
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

const lidVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.1, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bubbleVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M6.63244 18.2626L5.03072 6.09986C4.91063 5.188 5.11589 5 6.12552 5H16.8745C17.8841 5 18.0894 5.188 17.9693 6.09986L16.3676 18.2626C16.1495 19.9182 16.0405 20.746 15.4139 21.2437C14.1165 22.2744 8.827 22.2295 7.58606 21.2437C6.95948 20.746 6.85047 19.9182 6.63244 18.2626Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13.5 19L13.946 2.94128C13.9771 2.41272 14.4148 2 14.9443 2H19.0014" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="strawVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.3px 10.5px' }" />
            <motion.path d="M6 10C6.18182 9.66667 6.78182 9 8.09091 9C9.72727 9 9.29545 10 10.3864 10C11.4773 10 13.1136 9 14.75 9C16.3864 9 17.5 10 17.5 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 9.5px' }" />
            <motion.path d="M10.125 16H10M10.25 16C10.25 16.1381 10.1381 16.25 10 16.25C9.86193 16.25 9.75 16.1381 9.75 16C9.75 15.8619 9.86193 15.75 10 15.75C10.1381 15.75 10.25 15.8619 10.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
