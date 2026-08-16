<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlarmClockOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bar strikes through and the bells slump silent under it
// authored from scripts/authored
const dialVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.955)', 'scale(0.965)', 'scale(1)'],
    opacity: [1, 1, 0.4, 0.45, 1],
    transition: {
      duration: 0.88,
      times: [0, 0.3, 0.5, 0.72, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const barVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.88,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bellLeftVariants: Variants = {
  normal: { transform: 'rotate(0deg)', opacity: 1 },
  animate: {
    transform: ['rotate(0deg)', 'rotate(0deg)', 'rotate(7deg)', 'rotate(8deg)', 'rotate(0deg)'],
    opacity: [1, 1, 0.45, 0.5, 1],
    transition: {
      duration: 0.88,
      times: [0, 0.32, 0.52, 0.74, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const bellRightVariants: Variants = {
  normal: { transform: 'rotate(0deg)', opacity: 1 },
  animate: {
    transform: ['rotate(0deg)', 'rotate(0deg)', 'rotate(-7deg)', 'rotate(-8deg)', 'rotate(0deg)'],
    opacity: [1, 1, 0.45, 0.5, 1],
    transition: {
      duration: 0.88,
      times: [0, 0.32, 0.52, 0.74, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M9.40379 4.40379C10.2222 4.14157 11.0946 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5C20.5 13.4054 20.3584 14.2778 20.0962 15.0962M6.24476 6.24476C4.5573 7.79814 3.5 10.0256 3.5 12.5C3.5 17.1944 7.30558 21 12 21C14.4744 21 16.7019 19.9427 18.2552 18.2552" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dialVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <path d="M5.88 18.7031L3.5 21.0031" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4 4L2 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 4px' }" />
            <motion.path d="M22 6L19 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 6px' }" />
          </svg>
        </div>
</template>
