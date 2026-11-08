<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DiscountIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the badge rosette turns and the dots pop
// authored from scripts/authored
const badgeVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(9deg)',
      'rotate(31.499999999999996deg)',
      'rotate(46.35deg)',
      'rotate(45deg)',
    ],
    transition: {
      duration: 0.8,
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

const slashVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
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

const dot2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
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
            <motion.path d="M15.4824 4.0332C14.7956 2.81965 13.494 2 12 2C10.5059 2 9.2034 2.81942 8.5166 4.0332C8.34748 4.01139 8.17506 4 8 4C5.79086 4 4 5.79086 4 8C4 8.17506 4.01139 8.34748 4.0332 8.5166C2.81942 9.2034 2 10.5059 2 12C2 13.494 2.81965 14.7956 4.0332 15.4824C4.01131 15.6519 4 15.8246 4 16C4 18.2091 5.79086 20 8 20C8.1751 20 8.34744 19.9876 8.5166 19.9658C9.20329 21.18 10.5055 22 12 22C13.4943 22 14.7957 21.1798 15.4824 19.9658C15.6519 19.9877 15.8246 20 16 20C18.2091 20 20 18.2091 20 16C20 15.8246 19.9877 15.6519 19.9658 15.4824C21.1798 14.7957 22 13.4943 22 12C22 10.5055 21.18 9.20329 19.9658 8.5166C19.9876 8.34744 20 8.1751 20 8C20 5.79086 18.2091 4 16 4C15.8246 4 15.6519 4.01131 15.4824 4.0332Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 9L9 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.375 9.25H9.25M9.5 9.25C9.5 9.38807 9.38807 9.5 9.25 9.5C9.11193 9.5 9 9.38807 9 9.25C9 9.11193 9.11193 9 9.25 9C9.38807 9 9.5 9.11193 9.5 9.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.3px 9.3px' }" />
            <motion.path d="M14.875 14.75H14.75M15 14.75C15 14.8881 14.8881 15 14.75 15C14.6119 15 14.5 14.8881 14.5 14.75C14.5 14.6119 14.6119 14.5 14.75 14.5C14.8881 14.5 15 14.6119 15 14.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 14.8px' }" />
          </svg>
        </div>
</template>
