<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArmoredBootIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the toe plants, the shin plates stack, and the rivets wink
// authored from scripts/authored
const bootVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-4deg)', 'rotate(1.2deg)', 'rotate(0deg)'],
    transition: { duration: 0.62, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const plateVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1.04)', 'scaleX(1)'],
    transition: { duration: 0.54, delay: 0.08, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const spurVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(10deg)', 'rotate(-2deg)', 'rotate(0deg)'],
    transition: { duration: 0.52, delay: 0.12, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const strapHighVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: { duration: 0.46, delay: 0.06, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const strapLowVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: { duration: 0.46, delay: 0.12, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sparkVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.44, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const spark2Variants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.44, delay: 0.28, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M19.8629 22H9.05441C6.20033 22 4.7733 22 3.88665 21.119C3 20.238 3 18.82 3 15.984V7.11652C3 6.52911 3 6.23541 3.15915 5.85969C3.3183 5.48398 3.45975 5.34712 3.74267 5.07341C4.84945 4.00264 6.92721 2.70559 10.1018 2.18241C11.3888 1.9703 12.0324 1.86425 12.5615 2.31472C13.0907 2.7652 13.0907 3.49507 13.0907 4.9548V10.6189C13.0907 12.017 13.0907 12.716 13.3631 13.3102C13.8866 14.4519 15.079 14.9007 16.1548 15.3996C16.9152 15.7522 17.7114 16.0661 18.4427 16.4775C19.7311 17.2022 20.6341 18.4527 20.9125 19.8976C21.1005 20.8736 21.0814 22 19.8629 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bootVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 22px' }" />
            <motion.path d="M3 17C3 17 5.00702 16 5.9505 16.2939C7.07883 16.6454 7.96297 17.6232 9 16.2713C10.1316 14.9447 11.9915 14 14 14" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="plateVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 15.8px' }" />
            <motion.path d="M19.0586 17C18.0586 17.3333 16.0586 18.8 16.0586 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spurVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.6px 19.5px' }" />
            <motion.path d="M3.05859 8.5H6.05859" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="strapHighVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.6px 8.5px' }" />
            <motion.path d="M3 12H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="strapLowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
            <motion.path d="M10.125 10H10M10.25 10C10.25 10.1381 10.1381 10.25 10 10.25C9.86193 10.25 9.75 10.1381 9.75 10C9.75 9.86193 9.86193 9.75 10 9.75C10.1381 9.75 10.25 9.86193 10.25 10Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 10px' }" />
            <motion.path d="M10.125 6H10M10.25 6C10.25 6.13807 10.1381 6.25 10 6.25C9.86193 6.25 9.75 6.13807 9.75 6C9.75 5.86193 9.86193 5.75 10 5.75C10.1381 5.75 10.25 5.86193 10.25 6Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="spark2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 6px' }" />
          </svg>
        </div>
</template>
