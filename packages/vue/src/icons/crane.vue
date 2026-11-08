<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CraneIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the crane hook swings and the track wheels roll
// authored from scripts/authored
const armVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.40px, -0.31px) rotate(-6deg)',
      'translate(-0.29px, 0.19px) rotate(4deg)',
      'translate(0.10px, -0.07px) rotate(-1.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const wheelVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const wheel2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
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

const wheel3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
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
            <path d="M15.0037 16H5.00085C3.34353 16 2 17.3431 2 19C2 20.6569 3.34353 22 5.00085 22H15.0037C16.661 22 18.0045 20.6569 18.0045 19C18.0045 17.3431 16.661 16 15.0037 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M5 8.00201C5 6.11639 5 5.17358 5.58595 4.5878C6.1719 4.00201 7.11498 4.00201 9.00113 4.00201L8.99723 4.00201C9.77218 4.00201 10.5955 4.00201 10.9476 4.13999C11.2997 4.27797 11.5839 4.54123 12.1523 5.06776L13.822 6.61417C14.3533 7.10632 14.619 7.35239 14.7799 7.66373C14.899 7.99326 15.0028 8.59305 15.0028 9.3172C15.0028 10.8983 15.0028 11.6889 14.5807 12.2308C14.4792 12.3612 14.3618 12.4785 14.2314 12.58C13.6894 13.002 12.8985 13.002 11.317 13.002H9.00113C7.11498 13.002 6.1719 13.002 5.58595 12.4162C5 11.8304 5 10.8876 5 9.00201V8.00201Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 12C18 13.1046 18.8954 14 20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10V3.44907C20 2.64877 19.3512 2 18.5509 2C18.196 2 17.8535 2.13024 17.5882 2.36602L13.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 8px' }" />
            <motion.path d="M10.125 19H10M10.25 19C10.25 19.1381 10.1381 19.25 10 19.25C9.86193 19.25 9.75 19.1381 9.75 19C9.75 18.8619 9.86193 18.75 10 18.75C10.1381 18.75 10.25 18.8619 10.25 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wheelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 19px' }" />
            <motion.path d="M5.625 19H5.5M5.75 19C5.75 19.1381 5.63807 19.25 5.5 19.25C5.36193 19.25 5.25 19.1381 5.25 19C5.25 18.8619 5.36193 18.75 5.5 18.75C5.63807 18.75 5.75 18.8619 5.75 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wheel2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 19px' }" />
            <motion.path d="M14.625 19.0019H14.5M14.75 19.0019C14.75 19.14 14.6381 19.2519 14.5 19.2519C14.3619 19.2519 14.25 19.14 14.25 19.0019C14.25 18.8638 14.3619 18.7519 14.5 18.7519C14.6381 18.7519 14.75 18.8638 14.75 19.0019Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wheel3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 19px' }" />
          </svg>
        </div>
</template>
