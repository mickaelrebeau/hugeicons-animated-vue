<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkflowSquare05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the zigzag flows and the squares fire in order
// authored from scripts/authored
const nodeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.24)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const node2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.24)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.12,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const node3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.24)', 'scale(0.92)', 'scale(1)'],
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

const node4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.24)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.36,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const flowVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M3 4.4C3 3.26863 3 2.70294 3.35147 2.35147C3.70294 2 4.26863 2 5.4 2H5.6C6.73137 2 7.29706 2 7.64853 2.35147C8 2.70294 8 3.26863 8 4.4V4.6C8 5.73137 8 6.29706 7.64853 6.64853C7.29706 7 6.73137 7 5.6 7H5.4C4.26863 7 3.70294 7 3.35147 6.64853C3 6.29706 3 5.73137 3 4.6V4.4Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 4.5px' }" />
            <motion.path d="M16 9.4C16 8.26863 16 7.70294 16.3515 7.35147C16.7029 7 17.2686 7 18.4 7H18.6C19.7314 7 20.2971 7 20.6485 7.35147C21 7.70294 21 8.26863 21 9.4V9.6C21 10.7314 21 11.2971 20.6485 11.6485C20.2971 12 19.7314 12 18.6 12H18.4C17.2686 12 16.7029 12 16.3515 11.6485C16 11.2971 16 10.7314 16 9.6V9.4Z" stroke="currentColor" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 9.5px' }" />
            <motion.path d="M3 14.4C3 13.2686 3 12.7029 3.35147 12.3515C3.70294 12 4.26863 12 5.4 12H5.6C6.73137 12 7.29706 12 7.64853 12.3515C8 12.7029 8 13.2686 8 14.4V14.6C8 15.7314 8 16.2971 7.64853 16.6485C7.29706 17 6.73137 17 5.6 17H5.4C4.26863 17 3.70294 17 3.35147 16.6485C3 16.2971 3 15.7314 3 14.6V14.4Z" stroke="currentColor" stroke-width="1.5" :variants="node3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 14.5px' }" />
            <motion.path d="M16 19.4C16 18.2686 16 17.7029 16.3515 17.3515C16.7029 17 17.2686 17 18.4 17H18.6C19.7314 17 20.2971 17 20.6485 17.3515C21 17.7029 21 18.2686 21 19.4V19.6C21 20.7314 21 21.2971 20.6485 21.6485C20.2971 22 19.7314 22 18.6 22H18.4C17.2686 22 16.7029 22 16.3515 21.6485C16 21.2971 16 20.7314 16 19.6V19.4Z" stroke="currentColor" stroke-width="1.5" :variants="node4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19.5px' }" />
            <motion.path d="M8 4.5L15 9.5L9 14.5L16 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
