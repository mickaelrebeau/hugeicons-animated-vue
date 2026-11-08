<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatabaseExpandIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four corners push outward around the database
// authored from scripts/authored
const dbVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const cornerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, -1.2px)',
      'translate(-0.144px, 0.144px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const corner2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.2px, -1.2px)',
      'translate(0.144px, 0.144px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const corner3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, 1.2px)',
      'translate(-0.144px, -0.144px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const corner4Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.2px, 1.2px)',
      'translate(0.144px, -0.144px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
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
            <path d="M12 10C14.2091 10 16 9.10457 16 8C16 6.89543 14.2091 6 12 6C9.79086 6 8 6.89543 8 8C8 9.10457 9.79086 10 12 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 12C16 13.1046 14.2091 14 12 14C9.79086 14 8 13.1046 8 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16 8V16C16 17.1046 14.2091 18 12 18C9.79086 18 8 17.1046 8 16V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dbVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M18 2H20C20.9428 2 21.4142 2 21.7071 2.29289C22 2.58579 22 3.05719 22 4V6M21.5 2.5L18 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cornerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 4px' }" />
            <motion.path d="M6 2H4C3.05719 2 2.58579 2 2.29289 2.29289C2 2.58579 2 3.05719 2 4V6M2.5 2.5L6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="corner2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 4px' }" />
            <motion.path d="M18 22H20C20.9428 22 21.4142 22 21.7071 21.7071C22 21.4142 22 20.9428 22 20V18M21.5 21.5L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="corner3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 20px' }" />
            <motion.path d="M6 22H4C3.05719 22 2.58579 22 2.29289 21.7071C2 21.4142 2 20.9428 2 20V18M2.5 21.5L6 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="corner4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 20px' }" />
          </svg>
        </div>
</template>
