<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudRainWindIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wind-blown rain slants down out of the cloud
// authored from scripts/authored
const dropVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 2px)',
      'translate(0.8px, -2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.16,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drop2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 2px)',
      'translate(0.8px, -2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drop3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 2px)',
      'translate(0.8px, -2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.08,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
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
            <path d="M17.4776 8.50005C17.485 8.50002 17.4925 8.5 17.5 8.5C19.9853 8.5 22 10.5147 22 13C22 14.5602 21.206 15.935 20 16.7422M16.9003 10.5C17.2119 9.89038 17.4131 9.21494 17.4776 8.50005C17.4924 8.33536 17.5 8.16856 17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.70862 6.52042 7.5227M6.52042 7.5227C3.98398 7.76407 2 9.90034 2 12.5C2 14.1358 2.78555 15.5882 4 16.5004M6.52042 7.5227C6.67826 7.50768 6.83823 7.5 7 7.5C7.78232 7.5 8.52268 7.67967 9.18206 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10.1992 21.5L12.1992 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.2px 19px' }" />
            <motion.path d="M9 14.5L7 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drop2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 17px' }" />
            <motion.path d="M17 14.5L15 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drop3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 17px' }" />
          </svg>
        </div>
</template>
