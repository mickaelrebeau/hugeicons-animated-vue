<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrangeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four tiles shuffle — top-left and bottom-right swap influence along the diagonal
// authored from scripts/authored
const tileTLVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 1.4px)',
      'translate(-0.2px, -0.2px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.6, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tileBLVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.2px, -0.6px)', 'translate(0px, 0px)'],
    transition: { duration: 0.56, delay: 0.06, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const guidesVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.74,
      delay: 0.08,
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

const tileTRVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-1.2px, 0.6px)', 'translate(0px, 0px)'],
    transition: { duration: 0.56, delay: 0.06, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tileBRVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.4px, -1.4px)',
      'translate(0.2px, 0.2px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.6, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M3 4.5C3 3.67157 3.67157 3 4.5 3H6.5C7.32843 3 8 3.67157 8 4.5V6.5C8 7.32843 7.32843 8 6.5 8H4.5C3.67157 8 3 7.32843 3 6.5V4.5Z" stroke="currentColor" stroke-width="1.5" :variants="tileTLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 5.5px' }" />
            <motion.path d="M3 17.5C3 16.6716 3.67157 16 4.5 16H6.5C7.32843 16 8 16.6716 8 17.5V19.5C8 20.3284 7.32843 21 6.5 21H4.5C3.67157 21 3 20.3284 3 19.5V17.5Z" stroke="currentColor" stroke-width="1.5" :variants="tileBLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 18.5px' }" />
            <motion.path d="M8.00002 18.5H21M16 5.5H8.00002M16.3235 7.67649L7.64868 16.3513" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guidesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 4.5C16 3.67157 16.6716 3 17.5 3H19.5C20.3284 3 21 3.67157 21 4.5V6.5C21 7.32843 20.3284 8 19.5 8H17.5C16.6716 8 16 7.32843 16 6.5V4.5Z" stroke="currentColor" stroke-width="1.5" :variants="tileTRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5.5px' }" />
            <motion.path d="M18 21L19.3883 20.0537C20.4628 19.3213 21 18.9551 21 18.5C21 18.0449 20.4628 17.6787 19.3883 16.9463L18 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileBRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 18.5px' }" />
          </svg>
        </div>
</template>
