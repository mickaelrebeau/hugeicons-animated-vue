<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'QqPlotIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the fit line draws and the points pop along it
// authored from scripts/authored
const fitVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pointVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
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

const point2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.25,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const point3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
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

const point4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
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

const point5Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.15,
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
            <path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M4.5 19.5001L20 4.00012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.375 17.25H13.25M13.5 17.25C13.5 17.3881 13.3881 17.5 13.25 17.5C13.1119 17.5 13 17.3881 13 17.25C13 17.1119 13.1119 17 13.25 17C13.3881 17 13.5 17.1119 13.5 17.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pointVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 17.3px' }" />
            <motion.path d="M19.375 11.25H19.25M19.5 11.25C19.5 11.3881 19.3881 11.5 19.25 11.5C19.1119 11.5 19 11.3881 19 11.25C19 11.1119 19.1119 11 19.25 11C19.3881 11 19.5 11.1119 19.5 11.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="point2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.3px 11.3px' }" />
            <motion.path d="M14.375 4.25H14.25M14.5 4.25C14.5 4.38807 14.3881 4.5 14.25 4.5C14.1119 4.5 14 4.38807 14 4.25C14 4.11193 14.1119 4 14.25 4C14.3881 4 14.5 4.11193 14.5 4.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="point3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.3px 4.3px' }" />
            <motion.path d="M9.375 6.25H9.25M9.5 6.25C9.5 6.38807 9.38807 6.5 9.25 6.5C9.11193 6.5 9 6.38807 9 6.25C9 6.11193 9.11193 6 9.25 6C9.38807 6 9.5 6.11193 9.5 6.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="point4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.3px 6.3px' }" />
            <motion.path d="M7.375 11.25H7.25M7.5 11.25C7.5 11.3881 7.38807 11.5 7.25 11.5C7.11193 11.5 7 11.3881 7 11.25C7 11.1119 7.11193 11 7.25 11C7.38807 11 7.5 11.1119 7.5 11.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="point5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.3px 11.3px' }" />
          </svg>
        </div>
</template>
