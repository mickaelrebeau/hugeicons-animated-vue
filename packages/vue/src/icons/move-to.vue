<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoveToIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bottom line slides right with its arrow, the bullets answer
// authored from scripts/authored
const lineVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 0px)',
      'translate(-0.21px, 0px)',
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

const dotVariants: Variants = {
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

const dot2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.26,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dot3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.32,
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
            <motion.path d="M8 17.625L20 17.625" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 17.6px' }" />
            <motion.path d="M17 14.625L20 17.625L17 20.625" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17.6px' }" />
            <path d="M8 3.625L20 3.625" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M8 10.625L20 10.625" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M4.375 3.625H4.25M4.5 3.625C4.5 3.76307 4.38807 3.875 4.25 3.875C4.11193 3.875 4 3.76307 4 3.625C4 3.48693 4.11193 3.375 4.25 3.375C4.38807 3.375 4.5 3.48693 4.5 3.625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.3px 3.6px' }" />
            <motion.path d="M4.375 10.625H4.25M4.5 10.625C4.5 10.7631 4.38807 10.875 4.25 10.875C4.11193 10.875 4 10.7631 4 10.625C4 10.4869 4.11193 10.375 4.25 10.375C4.38807 10.375 4.5 10.4869 4.5 10.625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.3px 10.6px' }" />
            <motion.path d="M4.375 17.625H4.25M4.5 17.625C4.5 17.7631 4.38807 17.875 4.25 17.875C4.11193 17.875 4 17.7631 4 17.625C4 17.4869 4.11193 17.375 4.25 17.375C4.38807 17.375 4.5 17.4869 4.5 17.625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.3px 17.6px' }" />
          </svg>
        </div>
</template>
