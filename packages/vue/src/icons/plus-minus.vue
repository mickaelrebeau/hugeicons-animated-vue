<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PlusMinusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plus spins in its box and the minus redraws in the other
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const frame2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const minusVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.2,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
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
            <motion.path d="M11.0001 16C11.0001 17.8692 11.0001 18.8038 11.402 19.5C11.6653 19.9561 12.044 20.3348 12.5001 20.5981C13.1962 21 14.1308 21 16.0001 21C17.8693 21 18.8039 21 19.5001 20.5981C19.9561 20.3348 20.3348 19.9561 20.5981 19.5C21.0001 18.8038 21.0001 17.8692 21.0001 16C21.0001 14.1308 21.0001 13.1962 20.5981 12.5C20.3348 12.0439 19.9561 11.6652 19.5001 11.4019C18.8039 11 17.8693 11 16.0001 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 16px' }" />
            <motion.path d="M8.00024 3C9.86948 3 10.8041 3 11.5002 3.40192C11.9563 3.66523 12.335 4.04394 12.5983 4.5C13.0002 5.19615 13.0002 6.13077 13.0002 8C13.0002 9.86923 13.0002 10.8038 12.5983 11.5C12.335 11.9561 11.9563 12.3348 11.5002 12.5981C10.8041 13 9.86948 13 8.00024 13C6.13101 13 5.1964 13 4.50024 12.5981C4.04419 12.3348 3.66547 11.9561 3.40217 11.5C3.00024 10.8038 3.00024 9.86923 3.00024 8C3.00024 6.13077 3.00024 5.19615 3.40217 4.5C3.66547 4.04394 4.04419 3.66523 4.50024 3.40192C5.1964 3 6.13101 3 8.00024 3Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frame2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 8px' }" />
            <motion.path d="M8.00003 6V10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 8px' }" />
            <motion.path d="M10 8L6.00003 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 8px' }" />
            <motion.path d="M18 16L14 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
