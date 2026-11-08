<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TwinTowerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the towers rise tier by tier and their antennas blink
// authored from scripts/authored
const hopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.5px)',
      'translate(0px, 0.07px)',
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

const hop2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.7px)',
      'translate(0px, 0.098px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.05,
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

const hop3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.9px)',
      'translate(0px, 0.12600000000000003px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
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

const hop4Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.5px)',
      'translate(0px, 0.07px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.08,
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

const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const hop5Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.7px)',
      'translate(0px, 0.098px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.13,
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

const hop6Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.9px)',
      'translate(0px, 0.12600000000000003px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.18,
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

const led2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0.28, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M9 19L12 15L15 19M9 14H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 22V14C2 13.0572 2 12.5858 2.29289 12.2929C2.58579 12 3.05719 12 4 12H7C7.94281 12 8.41421 12 8.70711 12.2929C9 12.5858 9 13.0572 9 14V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 17px' }" />
            <motion.path d="M3 12V10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H6C6.94281 8 7.41421 8 7.70711 8.29289C8 8.58579 8 9.05719 8 10V12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hop2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 10px' }" />
            <motion.path d="M4 8V5.5C4 5.03406 4 4.80109 4.07612 4.61732C4.17761 4.37229 4.37229 4.17761 4.61732 4.07612C4.80109 4 5.03406 4 5.5 4C5.96594 4 6.19891 4 6.38268 4.07612C6.62771 4.17761 6.82239 4.37229 6.92388 4.61732C7 4.80109 7 5.03406 7 5.5V8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hop3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 6px' }" />
            <motion.path d="M15 22V14C15 13.0572 15 12.5858 15.2929 12.2929C15.5858 12 16.0572 12 17 12H20C20.9428 12 21.4142 12 21.7071 12.2929C22 12.5858 22 13.0572 22 14V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hop4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17px' }" />
            <path d="M2 22H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5.5 4V2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 12V10C16 9.05719 16 8.58579 16.2929 8.29289C16.5858 8 17.0572 8 18 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hop5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 10px' }" />
            <motion.path d="M17 8V5.5C17 5.03406 17 4.80109 17.0761 4.61732C17.1776 4.37229 17.3723 4.17761 17.6173 4.07612C17.8011 4 18.0341 4 18.5 4C18.9659 4 19.1989 4 19.3827 4.07612C19.6277 4.17761 19.8224 4.37229 19.9239 4.61732C20 4.80109 20 5.03406 20 5.5V8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hop6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 6px' }" />
            <motion.path d="M18.5 4V2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="led2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M5.5 22V20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M18.5 22V20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
