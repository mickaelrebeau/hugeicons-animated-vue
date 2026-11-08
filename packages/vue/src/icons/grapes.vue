<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GrapesIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the grapes pop one by one from the top row down
// authored from scripts/authored
const grapeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
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

const grape2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
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

const grape3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.24,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const grape4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.14,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const grape5Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
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

const grape6Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.06,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const stemVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.66px, -0.41px) rotate(-14deg)',
      'translate(0.33px, 0.30px) rotate(8deg)',
      'translate(-0.13px, -0.10px) rotate(-3deg)',
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
            <motion.path d="M14.8293 18C14.9398 18.3128 15 18.6494 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 18.6494 9.06015 18.3128 9.17071 18" stroke="currentColor" stroke-width="1.5" :variants="grapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M11.2361 13C11.7111 13.5308 12 14.2316 12 15C12 16.6569 10.6569 18 9 18C7.34315 18 6 16.6569 6 15C6 14.2316 6.28885 13.5308 6.76389 13" stroke="currentColor" stroke-width="1.5" :variants="grape2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 15.5px' }" />
            <motion.path d="M17.2361 13C17.7111 13.5308 18 14.2316 18 15C18 16.6569 16.6569 18 15 18C13.3431 18 12 16.6569 12 15C12 14.2316 12.2889 13.5308 12.7639 13" stroke="currentColor" stroke-width="1.5" :variants="grape3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 15.5px' }" />
            <motion.path d="M15 10C15 11.6569 16.3431 13 18 13C19.6569 13 21 11.6569 21 10C21 8.34315 19.6569 7 18 7C16.3431 7 15 8.34315 15 10Z" stroke="currentColor" stroke-width="1.5" :variants="grape4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 10px' }" />
            <motion.path d="M9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10Z" stroke="currentColor" stroke-width="1.5" :variants="grape5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M3 10C3 11.6569 4.34315 13 6 13C7.65685 13 9 11.6569 9 10C9 8.34315 7.65685 7 6 7C4.34315 7 3 8.34315 3 10Z" stroke="currentColor" stroke-width="1.5" :variants="grape6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 10px' }" />
            <motion.path d="M12 7C12 5.33333 12.8 2 16 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 4.5px' }" />
          </svg>
        </div>
</template>
