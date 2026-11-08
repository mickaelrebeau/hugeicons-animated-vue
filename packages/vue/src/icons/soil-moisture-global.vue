<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SoilMoistureGlobalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the field arcs light outward and the drop bobs
// authored from scripts/authored
const dropVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
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

const arcVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.06, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arc2Variants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.12, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arc3Variants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.18, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17 19.5034C17 18.2482 18.0532 17.0077 18.7924 16.2917C19.1939 15.9028 19.8061 15.9028 20.2076 16.2917C20.9468 17.0077 22 18.2482 22 19.5034C22 20.7341 21.0533 22 19.5 22C17.9467 22 17 20.7341 17 19.5034Z" stroke="currentColor" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 19px' }" />
            <motion.path d="M21.9999 12C17.8993 12 14.3751 14.4682 12.832 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.4px 15px' }" />
            <motion.path d="M21.9984 8C15.6563 8 10.2992 12.217 8.57812 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arc2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.3px 13px' }" />
            <motion.path d="M21.9993 4C13.4329 4 6.26423 9.98405 4.44531 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arc3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.2px 11px' }" />
            <path d="M2 10C2.87815 10 3.72986 10.1132 4.54134 10.3258" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M2 6C3.86605 6 5.64683 6.36509 7.27481 7.02772" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M2 2C5.17533 2 8.15863 2.82221 10.7486 4.26534" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
