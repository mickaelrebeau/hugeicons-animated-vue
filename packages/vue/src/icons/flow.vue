<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlowIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four nodes light up around the loop
// authored from scripts/authored
const nodeVariants: Variants = {
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

const node2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
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

const node4Variants: Variants = {
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

const linksVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.06,
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
            <motion.path d="M21 6.5C21 8.433 19.433 10 17.5 10C15.567 10 14 8.433 14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 6.5px' }" />
            <motion.path d="M3 6.5C3 4.85008 3 4.02513 3.51256 3.51256C4.02513 3 4.85008 3 6.5 3C8.14992 3 8.97487 3 9.48744 3.51256C10 4.02513 10 4.85008 10 6.5C10 8.14992 10 8.97487 9.48744 9.48744C8.97487 10 8.14992 10 6.5 10C4.85008 10 4.02513 10 3.51256 9.48744C3 8.97487 3 8.14992 3 6.5Z" stroke="currentColor" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 6.5px' }" />
            <motion.path d="M3 17.5C3 15.8501 3 15.0251 3.51256 14.5126C4.02513 14 4.85008 14 6.5 14C8.14992 14 8.97487 14 9.48744 14.5126C10 15.0251 10 15.8501 10 17.5C10 19.1499 10 19.9749 9.48744 20.4874C8.97487 21 8.14992 21 6.5 21C4.85008 21 4.02513 21 3.51256 20.4874C3 19.9749 3 19.1499 3 17.5Z" stroke="currentColor" stroke-width="1.5" :variants="node3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17.5px' }" />
            <motion.path d="M14 17.5C14 15.8501 14 15.0251 14.5126 14.5126C15.0251 14 15.8501 14 17.5 14C19.1499 14 19.9749 14 20.4874 14.5126C21 15.0251 21 15.8501 21 17.5C21 19.1499 21 19.9749 20.4874 20.4874C19.9749 21 19.1499 21 17.5 21C15.8501 21 15.0251 21 14.5126 20.4874C14 19.9749 14 19.1499 14 17.5Z" stroke="currentColor" stroke-width="1.5" :variants="node4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
            <motion.path d="M17.5 10V14M14 17.5H10M10 6.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="linksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
