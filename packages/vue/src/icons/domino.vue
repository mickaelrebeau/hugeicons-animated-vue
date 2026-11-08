<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DominoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the domino tips over and rights itself, pips popping
// authored from scripts/authored
const tileVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(2.63px, -1.40px) rotate(14deg)',
      'translate(-0.68px, 0.51px) rotate(-4deg)',
      'translate(0.18px, -0.12px) rotate(1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const pipVariants: Variants = {
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

const tile2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.73px, -2.12px) rotate(14deg)',
      'translate(-0.40px, 0.68px) rotate(-4deg)',
      'translate(0.11px, -0.16px) rotate(1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const tile3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.10px, -0.97px) rotate(14deg)',
      'translate(-0.27px, 0.32px) rotate(-4deg)',
      'translate(0.07px, -0.08px) rotate(1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M19 16C19 18.8284 19 20.2426 17.9749 21.1213C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 21.1213C5 20.2426 5 18.8284 5 16L5 8C5 5.17157 5 3.75736 6.02513 2.87868C7.05026 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 2.87868C19 3.75736 19 5.17157 19 8L19 16Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 12L5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.125 7H12M12.25 7C12.25 7.13807 12.1381 7.25 12 7.25C11.8619 7.25 11.75 7.13807 11.75 7C11.75 6.86193 11.8619 6.75 12 6.75C12.1381 6.75 12.25 6.86193 12.25 7Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M9.625 16H9.5M9.75 16C9.75 16.1381 9.63807 16.25 9.5 16.25C9.36193 16.25 9.25 16.1381 9.25 16C9.25 15.8619 9.36193 15.75 9.5 15.75C9.63807 15.75 9.75 15.8619 9.75 16Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tile2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 16px' }" />
            <motion.path d="M14.625 18H14.5M14.75 18C14.75 18.1381 14.6381 18.25 14.5 18.25C14.3619 18.25 14.25 18.1381 14.25 18C14.25 17.8619 14.3619 17.75 14.5 17.75C14.6381 17.75 14.75 17.8619 14.75 18Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tile3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 18px' }" />
          </svg>
        </div>
</template>
