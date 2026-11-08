<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SoilTemperatureGlobalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the thermometer rises and the field arcs pulse
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const arcVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.1, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arc2Variants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.18, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const thermometerVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 4.40px) scaleY(0.2)',
      'translate(0px, -0.44px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.16, 0.62, 1],
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
            <motion.path d="M12.832 18.0001C13.1442 17.2857 13.5374 16.6148 14 15.999" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.4px 17px' }" />
            <motion.path d="M21.9984 8C15.6563 8 10.2992 12.217 8.57812 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.3px 13px' }" />
            <motion.path d="M21.9993 4C13.4329 4 6.26423 9.98405 4.44531 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arc2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.2px 11px' }" />
            <motion.path d="M19 22C20.6569 22 22 20.6569 22 19C22 18.3038 21.7629 17.663 21.365 17.154C20.861 16.5093 20.609 16.1869 20.5545 16.0286C20.5 15.8704 20.5 15.6628 20.5 15.2478V12.5C20.5 11.6716 19.8284 11 19 11C18.1716 11 17.5 11.6716 17.5 12.5V15.2478C17.5 15.6628 17.5 15.8704 17.4455 16.0286C17.391 16.1869 17.139 16.5093 16.635 17.154C16.2371 17.663 16 18.3038 16 19C16 20.6569 17.3431 22 19 22Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.3" :variants="thermometerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 16.5px' }" />
            <path d="M2 10C2.87815 10 3.72986 10.1132 4.54134 10.3258" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M2 6C3.86605 6 5.64683 6.36509 7.27481 7.02772" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M2 2C5.17533 2 8.15863 2.82221 10.7486 4.26534" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
