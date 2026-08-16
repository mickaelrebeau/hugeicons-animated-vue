<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignTopIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// both columns rise to kiss the top guide, the short one a beat later
// authored from scripts/authored
const shortVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.4px)',
      'translate(0px, -0.336px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.08,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tallVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.8px)',
      'translate(0px, -0.392px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const guideVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
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
            <motion.path d="M16.502 7.99988C17.3458 7.99988 18.3198 7.9165 18.801 8.74988C19.002 9.09795 19.002 9.56526 19.002 10.4999V11.4999C19.002 12.4345 19.002 12.9018 18.801 13.2499C18.3198 14.0832 17.3458 13.9999 16.502 13.9999C15.6581 13.9999 14.6841 14.0832 14.2029 13.2499C14.002 12.9018 14.002 12.4345 14.002 11.4999L14.002 10.4999C14.002 9.56526 14.002 9.09795 14.2029 8.74988C14.6841 7.9165 15.6581 7.99988 16.502 7.99988Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shortVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 8px' }" />
            <motion.path d="M7.50195 7.99988C8.34585 7.99988 9.31984 7.9165 9.80099 8.74988C10.002 9.09795 10.002 9.56526 10.002 10.4999L10.002 17.4999C10.002 18.4345 10.002 18.9018 9.80099 19.2499C9.31984 20.0832 8.34585 19.9999 7.50195 19.9999C6.65806 19.9999 5.68406 20.0832 5.20292 19.2499C5.00195 18.9018 5.00195 18.4345 5.00195 17.4999L5.00195 10.4999C5.00195 9.56526 5.00195 9.09795 5.20292 8.74988C5.68406 7.9165 6.65806 7.99988 7.50195 7.99988Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tallVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 8px' }" />
            <motion.path d="M22 4L2 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
