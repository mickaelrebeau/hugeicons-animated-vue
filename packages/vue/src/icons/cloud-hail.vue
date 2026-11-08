<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudHailIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hail streaks and stones pelt down in turn
// authored from scripts/authored
const streakVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const streak2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -1.4px)',
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

const stoneVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.22,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const stone2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.12,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const streak3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.06,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const stone3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, 1px)', 'translate(0px, -1px)', 'translate(0px, 0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.18,
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
            <path d="M17.4776 8.50005C17.485 8.50002 17.4925 8.5 17.5 8.5C19.9853 8.5 22 10.5147 22 13C22 14.5602 21.206 15.935 20 16.7422M17.4776 8.50005C17.4924 8.33536 17.5 8.16856 17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.70862 6.52042 7.5227M17.4776 8.50005C17.4466 8.84345 17.3841 9.17773 17.293 9.5M6.52042 7.5227C3.98398 7.76407 2 9.90034 2 12.5C2 14.1358 2.78555 15.5882 4 16.5004M6.52042 7.5227C6.67826 7.50768 6.83823 7.5 7 7.5C7.7111 7.5 8.38754 7.64845 9 7.91604" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16 13.5V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="streakVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 14.5px' }" />
            <motion.path d="M8 13.5V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="streak2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 14.5px' }" />
            <motion.path d="M16 19.5H16.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stoneVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 19.5px' }" />
            <motion.path d="M8 19.5H8.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stone2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 19.5px' }" />
            <motion.path d="M12 15.5V17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="streak3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
            <motion.path d="M12 21.5H12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stone3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
          </svg>
        </div>
</template>
