<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RightToLeftListBulletIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the right-hand bullets pop down the list
// authored from scripts/authored
const lineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.04,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line2Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.14,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line3Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.24,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bulletVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
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

const bullet2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bullet3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
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
            <motion.path d="M3.87949 5.5L15.8795 5.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path opacity="0.4" d="M3.87949 12.5L15.8795 12.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="line2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3.87949 19.5L15.8795 19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="line3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path opacity="0.4" d="M20.0045 5.5H19.8795M20.1295 5.5C20.1295 5.63807 20.0176 5.75 19.8795 5.75C19.7414 5.75 19.6295 5.63807 19.6295 5.5C19.6295 5.36193 19.7414 5.25 19.8795 5.25C20.0176 5.25 20.1295 5.36193 20.1295 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bulletVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.9px 5.5px' }" />
            <motion.path opacity="0.4" d="M20.0045 12.5H19.8795M20.1295 12.5C20.1295 12.6381 20.0176 12.75 19.8795 12.75C19.7414 12.75 19.6295 12.6381 19.6295 12.5C19.6295 12.3619 19.7414 12.25 19.8795 12.25C20.0176 12.25 20.1295 12.3619 20.1295 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bullet2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.9px 12.5px' }" />
            <motion.path opacity="0.4" d="M20.0045 19.5H19.8795M20.1295 19.5C20.1295 19.6381 20.0176 19.75 19.8795 19.75C19.7414 19.75 19.6295 19.6381 19.6295 19.5C19.6295 19.3619 19.7414 19.25 19.8795 19.25C20.0176 19.25 20.1295 19.3619 20.1295 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bullet3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.9px 19.5px' }" />
          </svg>
        </div>
</template>
