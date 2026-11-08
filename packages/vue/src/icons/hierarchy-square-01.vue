<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HierarchySquare01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the top block lights and the child blocks pop down the line
// authored from scripts/authored
const branchVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const nodeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
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

const node2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.34,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rootVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.12)', 'scale(0.92)', 'scale(1)'],
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
            <motion.path d="M14 19.5H13C10.1716 19.5 8.75736 19.5 7.87868 18.6213C7 17.7426 7 16.3284 7 13.5V11.5M7 8V11.5M7 11.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="branchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14 11.5C14 10.3215 14 9.73223 14.3515 9.36612C14.7029 9 15.2686 9 16.4 9H17.6C18.7314 9 19.2971 9 19.6485 9.36612C20 9.73223 20 10.3215 20 11.5C20 12.6785 20 13.2678 19.6485 13.6339C19.2971 14 18.7314 14 17.6 14H16.4C15.2686 14 14.7029 14 14.3515 13.6339C14 13.2678 14 12.6785 14 11.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 11.5px' }" />
            <motion.path d="M14 19.5C14 18.3215 14 17.7322 14.3515 17.3661C14.7029 17 15.2686 17 16.4 17H17.6C18.7314 17 19.2971 17 19.6485 17.3661C20 17.7322 20 18.3215 20 19.5C20 20.6785 20 21.2678 19.6485 21.6339C19.2971 22 18.7314 22 17.6 22H16.4C15.2686 22 14.7029 22 14.3515 21.6339C14 21.2678 14 20.6785 14 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19.5px' }" />
            <motion.path d="M5.28571 2H8.71429C10.7888 2 11 3.10993 11 5C11 6.89007 10.7888 8 8.71429 8H5.28571C3.2112 8 3 6.89007 3 5C3 3.10993 3.2112 2 5.28571 2Z" stroke="currentColor" stroke-width="1.5" :variants="rootVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 5px' }" />
          </svg>
        </div>
</template>
