<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignVerticalJustifyEndIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// both rows pack down until they rest on the end guide
// authored from scripts/authored
const guideVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
      delay: 0.1,
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

const wideVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -2.6px)',
      'translate(0px, 0.36400000000000005px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const narrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -2.6px)',
      'translate(0px, 0.36400000000000005px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.08,
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
            <motion.path d="M21 21L3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.00232 14.5C6.00232 13.6561 5.91895 12.6821 6.75232 12.201C7.10039 12 7.5677 12 8.50232 12L15.5023 12C16.4369 12 16.9042 12 17.2523 12.201C18.0857 12.6821 18.0023 13.6561 18.0023 14.5C18.0023 15.3439 18.0857 16.3179 17.2523 16.799C16.9042 17 16.4369 17 15.5023 17H8.50232C7.5677 17 7.10039 17 6.75232 16.799C5.91895 16.3179 6.00232 15.3439 6.00232 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M8.00232 5.5C8.00232 4.65611 7.91895 3.68211 8.75232 3.20096C9.10039 3 9.5677 3 10.5023 3H13.5023C14.4369 3 14.9042 3 15.2523 3.20096C16.0857 3.68211 16.0023 4.65611 16.0023 5.5C16.0023 6.34389 16.0857 7.31789 15.2523 7.79904C14.9042 8 14.4369 8 13.5023 8H10.5023C9.5677 8 9.10039 8 8.75232 7.79904C7.91895 7.31789 8.00232 6.34389 8.00232 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="narrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
          </svg>
        </div>
</template>
