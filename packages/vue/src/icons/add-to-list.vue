<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AddToListIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow pushes the new entry in from the left, the rows shuffle down in order, and the tick is written last
// authored from scripts/authored
const pageVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.54, delay: 0.1, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const rowVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1)'],
    transition: { duration: 0.46, delay: 0.24, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const row2Variants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1)'],
    transition: { duration: 0.46, delay: 0.12, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const row3Variants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1)'],
    transition: { duration: 0.46, delay: 0.18, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tickVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.6,
      delay: 0.3,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.8px)', 'translateX(-0.2px)', 'translateX(0px)'],
    transition: {
      duration: 0.62,
      times: [0, 0.34, 0.68, 1],
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
            <motion.path d="M3.5 9V14C3.5 17.7712 3.5 19.6569 4.67157 20.8284C5.84315 22 7.72876 22 11.5 22H12.5C16.2712 22 18.1569 22 19.3284 20.8284C20.5 19.6569 20.5 17.7712 20.5 14V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pageVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.5 17H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 17px' }" />
            <motion.path d="M13.5 7H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="row2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 7px' }" />
            <motion.path d="M13.5 12H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="row3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 12px' }" />
            <motion.path d="M6.5 16.5C6.5 16.5 7.46758 16.7672 8 18C8 18 9 15 11 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.8px 16px' }" />
            <motion.path d="M10 5H3.5M10 5C10 4.15973 7.67332 2.58984 7.08333 2M10 5C10 5.84027 7.67331 7.41016 7.08333 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 5px' }" />
          </svg>
        </div>
</template>
