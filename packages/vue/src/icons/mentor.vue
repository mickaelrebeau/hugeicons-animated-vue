<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MentorIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mentor points at the board and the student nods
// authored from scripts/authored
const studentVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.4px)',
      'translate(0px, 0.06px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.26,
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

const student2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.2,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const boardVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const mentorVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.18px, 0.01px) rotate(-8deg)',
      'translate(0.09px, 0.00px) rotate(4deg)',
      'translate(-0.02px, 0.00px) rotate(-1deg)',
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

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <motion.path d="M15.59 17.7405C14.9612 18.1617 13.3126 19.0218 14.3167 20.098C14.8072 20.6237 15.3536 20.9997 16.0404 20.9997H18H19.9596C20.6464 20.9997 21.1928 20.6237 21.6833 20.098C22.6874 19.0218 21.0388 18.1617 20.41 17.7405C18.9355 16.7528 17.0645 16.7528 15.59 17.7405Z" stroke="currentColor" stroke-width="1.5" :variants="studentVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18.9px' }" />
            <motion.path d="M20 12.4998C20 13.6044 19.1046 14.4998 18 14.4998C16.8954 14.4998 16 13.6044 16 12.4998C16 11.3952 16.8954 10.4998 18 10.4998C19.1046 10.4998 20 11.3952 20 12.4998Z" stroke="currentColor" stroke-width="1.5" :variants="student2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 12.5px' }" />
            <motion.path d="M10 5.99976H15M10 2.99976H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boardVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 9.49976V13.9998C7 14.9426 7 15.414 6.70711 15.7069C6.41421 15.9998 5.94281 15.9998 5 15.9998H4C3.05719 15.9998 2.58579 15.9998 2.29289 15.7069C2 15.414 2 14.9426 2 13.9998V11.4998C2 10.557 2 10.0856 2.29289 9.79265C2.58579 9.49976 3.05719 9.49976 4 9.49976H7ZM7 9.49976H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mentorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12.7px' }" />
            <motion.path d="M6.5 4.99976C6.5 6.10433 5.60457 6.99976 4.5 6.99976C3.39543 6.99976 2.5 6.10433 2.5 4.99976C2.5 3.89519 3.39543 2.99976 4.5 2.99976C5.60457 2.99976 6.5 3.89519 6.5 4.99976Z" stroke="currentColor" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 5px' }" />
          </svg>
        </div>
</template>
