<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AmazonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the a holds, then the smile-arrow draws from left to right and the dart lands
// authored from scripts/authored
const letterVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.08, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const counterVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'],
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const smileVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.86,
      delay: 0.16,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const dartVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg) scale(1)',
      'translate(-2.4px, 1.2px) rotate(-12deg) scale(0.6)',
      'translate(0.3px, -0.2px) rotate(4deg) scale(1.08)',
      'translate(0px, 0px) rotate(0deg) scale(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.28,
      times: [0, 0.12, 0.62, 1],
      ease: [
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
            <motion.path d="M7 6L9.5 7C9.5 7 10 5 12 5C13.6 5 14.1664 6.86545 14 8.5C7.5 8.5 6.5 11.5 6.5 13C6.5 14.5 7.5 17 10.5 17C13 17 14.5 15 14.5 15L15.5 16.5L18 14.5C18 14.5 17 13.6667 17 12.5V9C17 9 17.6681 2.5 12 2.5C7.6 2.5 7 6 7 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 9.8px' }" />
            <motion.path d="M13.5 10.8555C13.5 12.3555 12.5805 14.3555 11.2014 14.3555C9.30586 14.3555 9.36245 10.8555 13.5 10.8555Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="counterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.4px 12.6px' }" />
            <motion.path d="M2 17.5C2 17.5 10.5 23.5844 19 19.5281C19 19.5281 10.5 25.1056 2 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="smileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21.99 17.7025C22.136 19.0999 20.6414 21 20.6414 21C20.6414 21 21.6208 19.4076 21.4245 17.7025C19.8212 17.0648 18 17.7895 18 17.7895C18 17.7895 19.5024 16.685 21.4245 17.0888C21.7265 17.1522 21.9579 17.3956 21.99 17.7025Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="dartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 18px' }" />
          </svg>
        </div>
</template>
