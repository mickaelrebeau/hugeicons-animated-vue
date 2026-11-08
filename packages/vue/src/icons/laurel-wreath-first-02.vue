<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LaurelWreathFirst02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the 1 hops and the leaves sprout around it
// authored from scripts/authored
const leafVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
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

const leaf2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
      delay: 0.16,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leaf3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
      delay: 0.22,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const oneVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
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
            <motion.path d="M18.5201 6.22967C18.812 7.89634 17.5003 9 17.5003 9C17.5003 9 15.8968 8.437 15.6049 6.77033C15.313 5.10366 16.6247 4 16.6247 4C16.6247 4 18.2282 4.56301 18.5201 6.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.1px 6.5px' }" />
            <motion.path d="M20.927 13.5887C19.5821 14.7178 17.9368 14.0892 17.9368 14.0892C17.9368 14.0892 17.6365 12.3314 18.9814 11.2023C20.3262 10.0732 21.9715 10.7019 21.9715 10.7019C21.9715 10.7019 22.2718 12.4596 20.927 13.5887Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12.4px' }" />
            <motion.path d="M16.7335 19.8262C15.2335 19.2506 15 17.6366 15 17.6366C15 17.6366 16.2665 16.5982 17.7665 17.1738C19.2665 17.7494 19.5 19.3634 19.5 19.3634C19.5 19.3634 18.2335 20.4018 16.7335 19.8262Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.3px 18.5px' }" />
            <path d="M15 17.6366C16.4051 16.4358 18.0006 14.0564 18.0006 11.7273C18.0006 10.7628 17.8457 9.84221 17.5644 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5.47987 6.22967C5.18799 7.89634 6.49968 9 6.49968 9C6.49968 9 8.10325 8.437 8.39513 6.77033C8.68701 5.10366 7.37532 4 7.37532 4C7.37532 4 5.77175 4.56301 5.47987 6.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.9px 6.5px' }" />
            <motion.path d="M3.07304 13.5887C4.41792 14.7178 6.06316 14.0892 6.06316 14.0892C6.06316 14.0892 6.36352 12.3314 5.01864 11.2023C3.67375 10.0732 2.02851 10.7019 2.02851 10.7019C2.02851 10.7019 1.72816 12.4596 3.07304 13.5887Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12.4px' }" />
            <motion.path d="M7.26651 19.8262C8.76651 19.2506 9 17.6366 9 17.6366C9 17.6366 7.73349 16.5982 6.23349 17.1738C4.73349 17.7494 4.5 19.3634 4.5 19.3634C4.5 19.3634 5.76651 20.4018 7.26651 19.8262Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.8px 18.5px' }" />
            <path d="M9 17.6366C7.59489 16.4358 5.99945 14.0564 5.99945 11.7273C5.99945 10.7628 6.15433 9.84221 6.43559 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11 10L12 9.5V14.5M13 14.5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="oneVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
