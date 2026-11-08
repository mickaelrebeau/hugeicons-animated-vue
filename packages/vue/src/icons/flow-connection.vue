<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlowConnectionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the connections redraw from node to node
// authored from scripts/authored
const nodeVariants: Variants = {
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

const node2Variants: Variants = {
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

const node3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.28,
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
            <motion.path d="M2.5 5.5C2.5 3.85008 2.5 3.02513 3.01256 2.51256C3.52513 2 4.35008 2 6 2C7.64992 2 8.47487 2 8.98744 2.51256C9.5 3.02513 9.5 3.85008 9.5 5.5C9.5 7.14992 9.5 7.97487 8.98744 8.48744C8.47487 9 7.64992 9 6 9C4.35008 9 3.52513 9 3.01256 8.48744C2.5 7.97487 2.5 7.14992 2.5 5.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 5.5px' }" />
            <motion.path d="M3.65685 15.6569C4.76142 14.5523 5.31371 14 6 14C6.68629 14 7.23858 14.5523 8.34315 15.6569C9.44772 16.7614 10 17.3137 10 18C10 18.6863 9.44772 19.2386 8.34315 20.3431C7.23858 21.4477 6.68629 22 6 22C5.31371 22 4.76142 21.4477 3.65685 20.3431C2.55228 19.2386 2 18.6863 2 18C2 17.3137 2.55228 16.7614 3.65685 15.6569Z" stroke="currentColor" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 18px' }" />
            <motion.path d="M6 9V14M10 18H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="linksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 18C15 16.3501 15 15.5251 15.5126 15.0126C16.0251 14.5 16.8501 14.5 18.5 14.5C20.1499 14.5 20.9749 14.5 21.4874 15.0126C22 15.5251 22 16.3501 22 18C22 19.6499 22 20.4749 21.4874 20.9874C20.9749 21.5 20.1499 21.5 18.5 21.5C16.8501 21.5 16.0251 21.5 15.5126 20.9874C15 20.4749 15 19.6499 15 18Z" stroke="currentColor" stroke-width="1.5" :variants="node3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18px' }" />
          </svg>
        </div>
</template>
