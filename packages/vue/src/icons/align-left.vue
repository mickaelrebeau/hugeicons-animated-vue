<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// both rows slide left until they sit on the guide, the short one first
// authored from scripts/authored
const shortVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.4px, 0px)',
      'translate(-0.336px, 0px)',
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

const longVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.8px, 0px)',
      'translate(-0.392px, 0px)',
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

const guideVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
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
            <motion.path d="M8.00232 7.5C8.00232 6.65611 7.91895 5.68211 8.75232 5.20096C9.10039 5 9.5677 5 10.5023 5H11.5023C12.4369 5 12.9042 5 13.2523 5.20096C14.0857 5.68211 14.0023 6.65611 14.0023 7.5C14.0023 8.34389 14.0857 9.31789 13.2523 9.79904C12.9042 10 12.4369 10 11.5023 10H10.5023C9.5677 10 9.10039 10 8.75232 9.79904C7.91895 9.31789 8.00232 8.34389 8.00232 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shortVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 7.5px' }" />
            <motion.path d="M8.00232 16.5C8.00232 15.6561 7.91895 14.6821 8.75232 14.201C9.10039 14 9.5677 14 10.5023 14H17.5023C18.4369 14 18.9042 14 19.2523 14.201C20.0857 14.6821 20.0023 15.6561 20.0023 16.5C20.0023 17.3439 20.0857 18.3179 19.2523 18.799C18.9042 19 18.4369 19 17.5023 19H10.5023C9.5677 19 9.10039 19 8.75232 18.799C7.91895 18.3179 8.00232 17.3439 8.00232 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="longVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 16.5px' }" />
            <motion.path d="M4 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
