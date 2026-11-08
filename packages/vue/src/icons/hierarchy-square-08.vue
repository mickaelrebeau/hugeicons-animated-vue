<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HierarchySquare08Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the person sends the work to the two blocks on the right
// authored from scripts/authored
const personVariants: Variants = {
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

const nodeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
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

const node2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
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
            <motion.path d="M6.19868 9.6H4.80132C2.79237 9.6 1.43791 11.7484 2.22927 13.6796C2.33951 13.9486 2.59243 14.1231 2.87228 14.1231H3.36437C3.53023 14.1231 3.67481 14.2411 3.71504 14.4094L4.34854 17.0597C4.48063 17.6123 4.95537 18 5.5 18C6.04463 18 6.51937 17.6123 6.65146 17.0597L7.28496 14.4094C7.32519 14.2411 7.46977 14.1231 7.63563 14.1231H8.12772C8.40757 14.1231 8.66049 13.9486 8.77073 13.6796C9.56209 11.7484 8.20763 9.6 6.19868 9.6Z" stroke="currentColor" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 13.8px' }" />
            <motion.path d="M7.25 7.8C7.25 8.79411 6.4665 9.6 5.5 9.6C4.5335 9.6 3.75 8.79411 3.75 7.8C3.75 6.80589 4.5335 6 5.5 6C6.4665 6 7.25 6.80589 7.25 7.8Z" stroke="currentColor" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 7.8px' }" />
            <motion.path d="M16 5C16 3.58579 16 2.87868 16.4393 2.43934C16.8787 2 17.5858 2 19 2C20.4142 2 21.1213 2 21.5607 2.43934C22 2.87868 22 3.58579 22 5C22 6.41421 22 7.12132 21.5607 7.56066C21.1213 8 20.4142 8 19 8C17.5858 8 16.8787 8 16.4393 7.56066C16 7.12132 16 6.41421 16 5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 5px' }" />
            <motion.path d="M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z" stroke="currentColor" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 19px' }" />
            <motion.path d="M16 5H15C12.547 5.1828 12 6.20315 12 9.65278L12 14.3472C12 17.7969 12.547 18.8172 15 19H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="branchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
