<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Navigator02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the road dashes stream left as the car drives
// authored from scripts/authored
const carVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.06,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dashVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2px, 0px)',
      'translate(0.3px, 0px)',
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

const dash2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2px, 0px)',
      'translate(0.3px, 0px)',
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
            <path d="M21 4L3 4M21 20L3 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7.13478 9.66101C9.04493 10.6709 10 11.1759 10 12C10 12.8241 9.04493 13.3291 7.13478 14.339L5.83402 15.0267C4.36705 15.8023 3.63357 16.1901 3.2809 15.9082C3.18609 15.8324 3.10787 15.7325 3.05235 15.6163C2.84587 15.1841 3.26185 14.3908 4.09382 12.8043C4.27836 12.4524 4.37063 12.2764 4.38713 12.084C4.39192 12.0281 4.39192 11.9719 4.38713 11.916C4.37063 11.7236 4.27836 11.5476 4.09382 11.1957C3.26185 9.60915 2.84587 8.81587 3.05235 8.38372C3.10787 8.26754 3.18609 8.16764 3.2809 8.09184C3.63357 7.80989 4.36705 8.19769 5.83402 8.97329L7.13478 9.66101Z" stroke="currentColor" stroke-width="1.5" :variants="carVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.4px 12px' }" />
            <motion.path d="M21 12L19 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12px' }" />
            <motion.path d="M15 12L13 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dash2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 12px' }" />
          </svg>
        </div>
</template>
