<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DiningTableIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the table sets itself: top and base settle into place
// authored from scripts/authored
const topVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.15px)',
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

const baseVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const legVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.30px) scaleY(1.1)',
      'translate(0px, 0.12px) scaleY(0.96)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
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
            <motion.path d="M21 4L20.496 4.96113C19.8115 6.2666 18.8831 7 17.9151 7H7.0849C6.11686 7 5.18847 6.2666 4.50396 4.96113L4 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="topVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 5.5px' }" />
            <motion.path d="M2 4H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="topVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M5 20H5.86863C6.16649 20 6.31542 20 6.4578 19.9794C6.78821 19.9316 7.10141 19.8019 7.36884 19.602C7.48407 19.5159 7.58938 19.4106 7.8 19.2C8.11593 18.8841 8.2739 18.7261 8.44674 18.5969C8.84788 18.2971 9.31768 18.1025 9.81331 18.0309C10.0269 18 10.2503 18 10.6971 18H13.3029C13.7497 18 13.9731 18 14.1867 18.0309C14.6823 18.1025 15.1521 18.2971 15.5533 18.5969C15.7261 18.7261 15.8841 18.8841 16.2 19.2C16.4106 19.4106 16.5159 19.5159 16.6312 19.602C16.8986 19.8019 17.2118 19.9316 17.5422 19.9794C17.6846 20 17.8335 20 18.1314 20H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="baseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <path d="M10 18L10.2058 16.9709C10.333 16.3348 10.3967 16.0167 10.5999 15.8059C10.6541 15.7497 10.7147 15.7001 10.7804 15.658C11.027 15.5 11.3513 15.5 12 15.5C12.6487 15.5 12.973 15.5 13.2196 15.658C13.2853 15.7001 13.3459 15.7497 13.4001 15.8059C13.6033 16.0167 13.667 16.3348 13.7942 16.9709L14 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 7L10.2058 8.02913C10.333 8.66523 10.3967 8.98327 10.5999 9.19409C10.6541 9.25028 10.7147 9.29993 10.7804 9.34203C11.027 9.5 11.3513 9.5 12 9.5C12.6487 9.5 12.973 9.5 13.2196 9.34203C13.2853 9.29993 13.3459 9.25028 13.4001 9.19409C13.6033 8.98327 13.667 8.66523 13.7942 8.02913L14 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 15.5L12 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="legVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
          </svg>
        </div>
</template>
