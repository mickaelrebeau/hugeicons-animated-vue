<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartBubble02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three bubbles breathe at their own sizes and a tiny one rises between them
// authored from scripts/authored
const bubbleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.56,
      delay: 0.08,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bubble2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.12)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.56,
      delay: 0.16,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bubble3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.08)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.56,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const fizzVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translateY(0px) scale(0.4)',
      'translateY(0px) scale(0.4)',
      'translateY(-2px) scale(1)',
      'translateY(-4px) scale(1.1)',
    ],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.16, 0.5, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        'easeIn',
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
            <motion.circle cx="5" cy="7" r="3" stroke="currentColor" stroke-width="1.5" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 7px' }" />
            <motion.circle cx="8" cy="18" r="4" stroke="currentColor" stroke-width="1.5" :variants="bubble2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 18px' }" />
            <motion.circle cx="17" cy="7" r="5" stroke="currentColor" stroke-width="1.5" :variants="bubble3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 7px' }" />
            <motion.circle cx="13" cy="17" r="0.9" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="fizzVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
