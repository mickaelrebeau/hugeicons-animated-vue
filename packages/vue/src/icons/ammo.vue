<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AmmoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the left round seats first, then the right — two cartridges dropping into a clip
// authored from scripts/authored
const tipLeftVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-3.2px)', 'translateY(0.4px)', 'translateY(0px)'],
    transition: {
      duration: 0.5,
      times: [0, 0.12, 0.55, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const caseLeftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.04, times: [0, 0.12, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const baseLeftVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.5px)', 'translateY(0px)'],
    transition: { duration: 0.5, delay: 0.08, times: [0, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tipRightVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-3.2px)', 'translateY(0.4px)', 'translateY(0px)'],
    transition: {
      duration: 0.5,
      delay: 0.14,
      times: [0, 0.12, 0.55, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const caseRightVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.18, times: [0, 0.12, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const baseRightVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.5px)', 'translateY(0px)'],
    transition: { duration: 0.5, delay: 0.22, times: [0, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M9.5 8C9.5 5 8 2 8 2C8 2 6.5 5 6.5 8H9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tipLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 8px' }" />
            <motion.path d="M10 10.5L9.5 8H6.5L6 10.5H10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tipLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 10.5px' }" />
            <motion.path d="M10 10.5H6V18C6 18.5523 6.44772 19 7 19H9C9.55228 19 10 18.5523 10 18V10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="caseLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 19px' }" />
            <motion.path d="M10 22H6V20C6 19.4477 6.44772 19 7 19H9C9.55228 19 10 19.4477 10 20V22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="baseLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 22px' }" />
            <motion.path d="M17.5 8C17.5 5 16 2 16 2C16 2 14.5 5 14.5 8H17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tipRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 8px' }" />
            <motion.path d="M18 10.5L17.5 8H14.5L14 10.5H18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tipRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 10.5px' }" />
            <motion.path d="M18 10.5H14V18C14 18.5523 14.4477 19 15 19H17C17.5523 19 18 18.5523 18 18V10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="caseRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 19px' }" />
            <motion.path d="M18 22H14V20C14 19.4477 14.4477 19 15 19H17C17.5523 19 18 19.4477 18 20V22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="baseRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 22px' }" />
          </svg>
        </div>
</template>
