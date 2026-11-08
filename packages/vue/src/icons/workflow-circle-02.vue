<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkflowCircle02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the zigzag flows down and the nodes fire in order
// authored from scripts/authored
const nodeVariants: Variants = {
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
            <motion.path d="M21 19.5C21 20.8807 19.8807 22 18.5 22C17.1193 22 16 20.8807 16 19.5C16 18.1193 17.1193 17 18.5 17C19.8807 17 21 18.1193 21 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19.5px' }" />
            <motion.path d="M21 9.5C21 10.8807 19.8807 12 18.5 12C17.1193 12 16 10.8807 16 9.5C16 8.11929 17.1193 7 18.5 7C19.8807 7 21 8.11929 21 9.5Z" stroke="currentColor" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 9.5px' }" />
            <motion.path d="M8 14.5C8 15.8807 6.88071 17 5.5 17C4.11929 17 3 15.8807 3 14.5C3 13.1193 4.11929 12 5.5 12C6.88071 12 8 13.1193 8 14.5Z" stroke="currentColor" stroke-width="1.5" :variants="node3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 14.5px' }" />
            <motion.path d="M8 4.5C8 5.88071 6.88071 7 5.5 7C4.11929 7 3 5.88071 3 4.5C3 3.11929 4.11929 2 5.5 2C6.88071 2 8 3.11929 8 4.5Z" stroke="currentColor" stroke-width="1.5" :variants="node4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 4.5px' }" />
            <motion.path d="M8 4.5L15.5 9.5L8.5 14.5L16 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
