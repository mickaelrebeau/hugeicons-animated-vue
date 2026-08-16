<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiSchedulingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the header rule redraws across the page and the star lands on the date
// authored from scripts/authored
const pinsVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.78)', 'scaleY(1)'],
    transition: { duration: 0.5, times: [0, 0.34, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const ruleVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.86,
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

const starVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.54, delay: 0.3, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M18 2V5M6 2V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <motion.path d="M10.5 3.5H13.5C17.2712 3.5 19.1569 3.5 20.3284 4.67157C21.5 5.84315 21.5 7.72876 21.5 11.5V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H10.5C6.72876 22 4.84315 22 3.67157 20.8284C2.5 19.6569 2.5 17.7712 2.5 14V11.5C2.5 7.72876 2.5 5.84315 3.67157 4.67157C4.84315 3.5 6.72876 3.5 10.5 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.8px' }" />
            <motion.path d="M3 8H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ruleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.44356 14.5282C10.0526 14.3279 11.3279 13.0526 11.5282 11.4436C11.5585 11.2 11.7545 11 12 11C12.2455 11 12.4415 11.2 12.4718 11.4436C12.6721 13.0526 13.9474 14.3279 15.5564 14.5282C15.8 14.5585 16 14.7545 16 15C16 15.2455 15.8 15.4415 15.5564 15.4718C13.9474 15.6721 12.6721 16.9474 12.4718 18.5564C12.4415 18.8 12.2455 19 12 19C11.7545 19 11.5585 18.8 11.5282 18.5564C11.3279 16.9474 10.0526 15.6721 8.44356 15.4718C8.19998 15.4415 8 15.2455 8 15C8 14.7545 8.19998 14.5585 8.44356 14.5282Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="starVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
          </svg>
        </div>
</template>
