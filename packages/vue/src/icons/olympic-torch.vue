<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OlympicTorchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame flickers on the raised torch
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'scale(1) skewX(0deg)' },
  animate: {
    transform: [
      'scale(1) skewX(0deg)',
      'scale(1.08) skewX(-6deg)',
      'scale(0.94) skewX(4deg)',
      'scale(1.04) skewX(-2deg)',
      'scale(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const torchVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.4px, -0.4px)',
      'translate(-0.06px, 0.06px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.06,
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
            <motion.path d="M10 8.94648C10.0112 7.71996 10.5211 6.32069 11.6575 5.3729C14.5106 2.99353 21.2591 6.95603 20.8207 2C24.4804 7.64147 18.4776 7.81928 18.2152 9.83766C18.0664 10.9826 20.1591 11.6114 21.3687 10.6027C21.1245 11.4521 19.5 14.8057 15 13.8206" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.2px 8.4px' }" />
            <motion.path d="M8.95445 12.0276C7.83074 10.9039 8.01032 7 8.01032 7L17 15.9897C17 15.9897 13.0961 16.1678 11.9724 15.0441" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="torchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.4px 11.6px' }" />
            <motion.path d="M8.14822 12L2.24774 19.983C1.87554 20.4866 1.92775 21.1867 2.37054 21.6295C2.81333 22.0722 3.51343 22.1245 4.01701 21.7523L12 15.8518" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="torchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.9px 17.1px' }" />
            <motion.path d="M7 10L14 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="torchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 13.5px' }" />
          </svg>
        </div>
</template>
