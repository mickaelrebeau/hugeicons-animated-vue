<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignHorizontalDistributeCenterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two columns push apart from the middle until their centre-ticks line up
// authored from scripts/authored
const tickRightVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.16, times: [0, 0.14, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tickLeftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.14, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tallVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.8px, 0px)',
      'translate(-0.25200000000000006px, 0px)',
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

const shortVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.8px, 0px)',
      'translate(0.25200000000000006px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.06,
      times: [0, 0.12, 0.62, 1],
      ease: [
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
            <motion.path d="M16.5 8V3M16.5 16.5V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tickRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
            <motion.path d="M7.5 6V3M7.5 18.5V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tickLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 12px' }" />
            <motion.path d="M7.5 6.00036C8.34389 6.00036 9.31789 5.91699 9.79904 6.75036C10 7.09844 10 7.56575 10 8.50036L10 15.5004C10 16.435 10 16.9023 9.79904 17.2504C9.31789 18.0837 8.34389 18.0004 7.5 18.0004C6.65611 18.0004 5.68211 18.0837 5.20096 17.2504C5 16.9023 5 16.435 5 15.5004L5 8.50036C5 7.56575 5 7.09844 5.20096 6.75036C5.68211 5.91699 6.65611 6.00036 7.5 6.00036Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tallVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 12px' }" />
            <motion.path d="M16.5 8.00036C17.3439 8.00036 18.3179 7.91699 18.799 8.75036C19 9.09844 19 9.56575 19 10.5004L19 13.5004C19 14.435 19 14.9023 18.799 15.2504C18.3179 16.0837 17.3439 16.0004 16.5 16.0004C15.6561 16.0004 14.6821 16.0837 14.201 15.2504C14 14.9023 14 14.435 14 13.5004L14 10.5004C14 9.56575 14 9.09844 14.201 8.75036C14.6821 7.91699 15.6561 8.00036 16.5 8.00036Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shortVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
          </svg>
        </div>
</template>
