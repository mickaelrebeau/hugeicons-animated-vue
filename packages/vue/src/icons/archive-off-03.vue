<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArchiveOff03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash cuts the box, and the lid and body go dim
// authored from scripts/authored
const barVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.82,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const boxVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.96)', 'scale(1)'],
    opacity: [1, 1, 0.38, 1],
    transition: {
      duration: 0.82,
      delay: 0.04,
      times: [0, 0.28, 0.54, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const lidVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.94)', 'scale(1)'],
    opacity: [1, 1, 0.32, 1],
    transition: {
      duration: 0.82,
      delay: 0.08,
      times: [0, 0.28, 0.54, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20 9V16M4 9V16C4 18.8284 4 20.2426 4.87868 21.1213C5.75736 22 7.17157 22 10 22H14C16.8284 22 18.2426 22 19.1213 21.1213C19.4634 20.7793 19.6723 20.3561 19.7999 19.7999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boxVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
            <motion.path d="M8 4H19.5C20.4346 4 20.9019 4 21.25 4.20096C21.478 4.33261 21.6674 4.52197 21.799 4.75C22 5.09808 22 5.56538 22 6.5C22 7.43462 22 7.90192 21.799 8.25C21.6674 8.47803 21.478 8.66739 21.25 8.79904C20.9019 9 20.4346 9 19.5 9H13M9 9H4.5C3.56538 9 3.09808 9 2.75 8.79904C2.52197 8.66739 2.33261 8.47803 2.20096 8.25C2 7.90192 2 7.43462 2 6.5C2 5.56538 2 5.09808 2.20096 4.75C2.33261 4.52197 2.52197 4.33261 2.75 4.20096C3.0296 4.03954 3.38613 4.00778 4 4.00153" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
          </svg>
        </div>
</template>
