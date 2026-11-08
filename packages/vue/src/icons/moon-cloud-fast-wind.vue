<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoonCloudFastWindIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wind gusts past the moon cloud
// authored from scripts/authored
const windVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.24px, 0px)',
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

const wind2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.24px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.06,
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

const moonVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.66px, 0.08px) rotate(-10deg)',
      'translate(0.40px, 0.01px) rotate(6deg)',
      'translate(-0.13px, 0.01px) rotate(-2deg)',
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

const cloudVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, 0px)',
      'translate(-0.09px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.1,
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
            <motion.path d="M14.4018 21.9146C14.5461 21.9699 14.7015 22 14.8633 22C15.628 22 16.2479 21.3284 16.2479 20.5C16.2479 19.6716 15.628 19 14.8633 19C14.5918 19 14.3386 19.0846 14.1249 19.2309C13.0637 20.0225 11.0979 21.0378 8.86324 21.301M6.09403 21.1936C5.47581 21.0635 4.85656 20.8541 4.24789 20.5478" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="windVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.2px 20.5px' }" />
            <motion.path d="M19.2479 21C19.506 21 20.2036 21 21.2479 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="wind2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.2px 21px' }" />
            <motion.path d="M4.7571 10C3.95777 9.65619 3.25693 9.04325 2.79139 8.19953C2.24193 7.2037 2.12244 6.07158 2.37265 5.03854C3.35251 5.81349 4.71947 5.94685 5.85008 5.26383C6.98068 4.58081 7.55378 3.27541 7.40232 2C8.38242 2.28978 9.25968 2.96412 9.80914 3.95995C10.0143 4.33173 10.1595 4.72251 10.2479 5.12003" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="moonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.9px 6.2px' }" />
            <motion.path d="M17.4457 9.504C17.4531 9.50396 17.4606 9.50395 17.4681 9.50395C19.9534 9.50395 21.7281 11.46 21.7521 13.56C21.7521 16.56 18.9081 17.88 17.4681 17.76M17.4457 9.504C17.4605 9.34761 17.4681 9.18923 17.4681 9.02917C17.4457 6.35995 15.2481 4.00195 12.3081 4.00195C9.54811 4.00195 7.29402 5.92942 7.05211 8.60151M17.4457 9.504C17.3434 10.5812 16.9881 11.4 16.2681 12.264M7.05211 8.60151C4.51567 8.8307 2.82811 10.86 2.76811 12.9C2.58811 15.24 4.32811 16.68 5.77281 17.316C9.24811 18.78 12.7881 17.7 13.9521 15.84C14.4681 14.82 13.8968 13.5371 12.6681 13.23C11.8281 13.02 10.3881 13.5 10.3461 15.012M7.05211 8.60151C7.20995 8.58725 7.40634 8.57995 7.56811 8.57995C8.76811 8.60151 9.63211 9.02395 10.3521 9.50395" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cloudVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.2px 11.4px' }" />
          </svg>
        </div>
</template>
