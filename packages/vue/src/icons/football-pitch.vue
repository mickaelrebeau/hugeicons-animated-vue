<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FootballPitchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball rolls from goal to goal across the center line
// authored from scripts/authored
const ballVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-5px, 0px)',
      'translate(5px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 1, times: [0, 0.3, 0.7, 0.9, 1], ease: 'easeInOut' },
  },
};

const goalVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.1)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const goal2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.1)', 'scale(0.92)', 'scale(1)'],
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
            <path d="M2 8.57143C2 6.41644 2 5.33894 2.58579 4.66947C3.17157 4 4.11438 4 6 4H18C19.8856 4 20.8284 4 21.4142 4.66947C22 5.33894 22 6.41644 22 8.57143V15.4286C22 17.5836 22 18.6611 21.4142 19.3305C20.8284 20 19.8856 20 18 20H6C4.11438 20 3.17157 20 2.58579 19.3305C2 18.6611 2 17.5836 2 15.4286V8.57143Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.circle cx="12" cy="12" r="2" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M12 10V5M12 14V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M22 9H19.5C18.9477 9 18.5 9.44772 18.5 10V14C18.5 14.5523 18.9477 15 19.5 15H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="goalVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.3px 12px' }" />
            <motion.path d="M2 9H4.5C5.05228 9 5.5 9.44772 5.5 10V14C5.5 14.5523 5.05228 15 4.5 15H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="goal2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.8px 12px' }" />
          </svg>
        </div>
</template>
