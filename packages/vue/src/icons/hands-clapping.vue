<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HandsClappingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hands clap and the impact marks flash
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, 0px)',
      'translate(0px, 0px)',
      'translate(1px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sparkVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1, 0, 1, 1],
    transition: { duration: 0.6, times: [0, 0.2, 0.3, 0.5, 0.6, 1], ease: 'linear' },
  },
};

const hand2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const hand3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.4px, -0.4px)',
      'translate(0px, 0px)',
      'translate(-0.4px, -0.4px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1],
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
            <motion.path d="M14 13V9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5V16C17 19.3137 14.3137 22 11 22H10.3137C8.19198 22 6.15715 21.1571 4.65685 19.6569L2.41421 17.4142C2.149 17.149 2 16.7893 2 16.4142C2 15.6332 2.63317 15 3.41421 15C3.78929 15 4.149 15.149 4.41421 15.4142L6 17L2.41421 13.4142C2.149 13.149 2 12.7893 2 12.4142C2 11.6332 2.63317 11 3.41421 11C3.78929 11 4.149 11.149 4.41421 11.4142L8 15L3.41421 10.4142C3.149 10.149 3 9.78929 3 9.41421C3 8.63317 3.63317 8 4.41421 8C4.78929 8 5.149 8.149 5.41421 8.41421L10 13L6.41421 9.41421C6.149 9.149 6 8.78929 6 8.41421C6 7.63317 6.63317 7 7.41421 7C7.78929 7 8.149 7.149 8.41421 7.41421L14 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 14.5px' }" />
            <motion.path d="M7 2V3.5M3 5H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 20C19.3137 20 22 17.3137 22 14V7.5C22 6.67157 21.3284 6 20.5 6C19.8469 6 19.2913 6.4174 19.0854 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hand2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 13px' }" />
            <motion.path d="M14 5.5L13 4.50015C12.7348 4.23493 12.3751 4.08594 12 4.08594C11.219 4.08594 10.5858 4.7191 10.5858 5.50015" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hand3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 4.8px' }" />
          </svg>
        </div>
</template>
