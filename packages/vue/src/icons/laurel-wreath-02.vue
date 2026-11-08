<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LaurelWreath02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the leaves sprout down from the top on both sides
// authored from scripts/authored
const leafVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
      delay: 0,
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

const leaf3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
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
            <motion.path d="M18.5202 6.22967C18.8121 7.89634 17.5004 9 17.5004 9C17.5004 9 15.8969 8.437 15.605 6.77033C15.3131 5.10366 16.6248 4 16.6248 4C16.6248 4 18.2284 4.56301 18.5202 6.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.1px 6.5px' }" />
            <motion.path d="M20.9271 13.5887C19.5822 14.7178 17.937 14.0892 17.937 14.0892C17.937 14.0892 17.6366 12.3314 18.9815 11.2023C20.3264 10.0732 21.9716 10.7019 21.9716 10.7019C21.9716 10.7019 22.272 12.4596 20.9271 13.5887Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12.4px' }" />
            <motion.path d="M16.7336 19.8262C15.2336 19.2506 15.0001 17.6366 15.0001 17.6366C15.0001 17.6366 16.2666 16.5982 17.7666 17.1738C19.2666 17.7494 19.5001 19.3634 19.5001 19.3634C19.5001 19.3634 18.2336 20.4018 16.7336 19.8262Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.3px 18.5px' }" />
            <path d="M15.0001 17.6366C16.4052 16.4358 18.0007 14.0564 18.0007 11.7273C18.0007 10.7628 17.8458 9.84221 17.5645 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5.47999 6.22967C5.18811 7.89634 6.4998 9 6.4998 9C6.4998 9 8.10337 8.437 8.39525 6.77033C8.68713 5.10366 7.37544 4 7.37544 4C7.37544 4 5.77187 4.56301 5.47999 6.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.9px 6.5px' }" />
            <motion.path d="M3.07316 13.5887C4.41805 14.7178 6.06329 14.0892 6.06329 14.0892C6.06329 14.0892 6.36364 12.3314 5.01876 11.2023C3.67387 10.0732 2.02863 10.7019 2.02863 10.7019C2.02863 10.7019 1.72828 12.4596 3.07316 13.5887Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12.4px' }" />
            <motion.path d="M7.26663 19.8262C8.76663 19.2506 9.00012 17.6366 9.00012 17.6366C9.00012 17.6366 7.73361 16.5982 6.23361 17.1738C4.73361 17.7494 4.50012 19.3634 4.50012 19.3634C4.50012 19.3634 5.76663 20.4018 7.26663 19.8262Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.8px 18.5px' }" />
            <path d="M9.00012 17.6366C7.59501 16.4358 5.99957 14.0564 5.99957 11.7273C5.99957 10.7628 6.15445 9.84221 6.43571 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
