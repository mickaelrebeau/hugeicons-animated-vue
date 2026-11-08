<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChatGptIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the six interlocked links turn a sixth of a turn around their knot
// authored from scripts/authored
const linkVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.57px, -0.20px) rotate(10.200000000000001deg)',
      'translate(3.66px, 0.56px) rotate(66deg)',
      'translate(3.30px, 0.28px) rotate(58.199999999999996deg)',
      'translate(3.38px, 0.34px) rotate(60deg)',
    ],
    transition: {
      duration: 0.86,
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

const link2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.55px, 0.18px) rotate(10.200000000000001deg)',
      'translate(-3.51px, -0.59px) rotate(66deg)',
      'translate(-3.16px, -0.31px) rotate(58.199999999999996deg)',
      'translate(-3.25px, -0.37px) rotate(60deg)',
    ],
    transition: {
      duration: 0.86,
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

const link3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.52px, 0.55px) rotate(10.200000000000001deg)',
      'translate(1.26px, 4.46px) rotate(66deg)',
      'translate(1.40px, 3.89px) rotate(58.199999999999996deg)',
      'translate(1.37px, 4.02px) rotate(60deg)',
    ],
    transition: {
      duration: 0.86,
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

const link4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.54px, -0.55px) rotate(10.200000000000001deg)',
      'translate(-1.35px, -4.52px) rotate(66deg)',
      'translate(-1.48px, -3.94px) rotate(58.199999999999996deg)',
      'translate(-1.46px, -4.07px) rotate(60deg)',
    ],
    transition: {
      duration: 0.86,
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

const link5Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.18px, 0.61px) rotate(10.200000000000001deg)',
      'translate(-2.72px, 2.78px) rotate(66deg)',
      'translate(-2.25px, 2.64px) rotate(58.199999999999996deg)',
      'translate(-2.36px, 2.68px) rotate(60deg)',
    ],
    transition: {
      duration: 0.86,
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

const link6Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.18px, -0.61px) rotate(10.200000000000001deg)',
      'translate(2.72px, -2.78px) rotate(66deg)',
      'translate(2.25px, -2.64px) rotate(58.199999999999996deg)',
      'translate(2.36px, -2.68px) rotate(60deg)',
    ],
    transition: {
      duration: 0.86,
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
            <motion.path d="M11.7453 14.85L6.90436 12V7C6.90436 4.79086 8.72949 3 10.9809 3C12.3782 3 13.6113 3.6898 14.3458 4.74128" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="linkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.6px 8.9px' }" />
            <motion.path d="M9.59961 19.1791C10.3266 20.2757 11.5866 21.0008 13.0192 21.0008C15.2707 21.0008 17.0958 19.21 17.0958 17.0008V12.0008L12.1612 9.0957" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="link2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 15px' }" />
            <motion.path d="M9.45166 13.5L9.45123 7.66938L13.8642 5.16938C15.814 4.06481 18.3072 4.72031 19.4329 6.63348C20.1593 7.86806 20.1388 9.32466 19.5089 10.4995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="link3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 8.8px' }" />
            <motion.path d="M4.48963 13.4993C3.8595 14.6742 3.83887 16.131 4.56539 17.3657C5.6911 19.2789 8.18428 19.9344 10.1341 18.8298L14.5471 16.3298L14.643 10.7344" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="link4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.2px 15.3px' }" />
            <motion.path d="M17.0959 17.6309C18.4415 17.5734 19.7295 16.8634 20.4529 15.634C21.5786 13.7209 20.9106 11.2745 18.9608 10.1699L14.5478 7.66992L9.48907 10.4255" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="link5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 12.7px' }" />
            <motion.path d="M6.90454 6.36938C5.55865 6.42662 4.27032 7.13672 3.54684 8.3663C2.42113 10.2795 3.08917 12.7258 5.03896 13.8304L9.45196 16.3304L14.5 13.5807" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="link6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 11.3px' }" />
          </svg>
        </div>
</template>
