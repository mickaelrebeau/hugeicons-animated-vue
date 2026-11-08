<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WindSurfIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sail leans into the wind and the board rocks
// authored from scripts/authored
const splashVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const boardVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(-2.0999999999999996deg)',
      'translate(0.00px, 0.00px) rotate(0.8999999999999999deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const sailVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.90px, -0.12px) rotate(-6deg)',
      'translate(0.62px, 0.14px) rotate(4.199999999999999deg)',
      'translate(-0.27px, -0.05px) rotate(-1.7999999999999998deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const sail2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.93px, 0.36px) rotate(-6deg)',
      'translate(0.67px, -0.20px) rotate(4.199999999999999deg)',
      'translate(-0.28px, 0.10px) rotate(-1.7999999999999998deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M8 21L7 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="splashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 19H2C7 20.7143 12.9751 22 17 22C20 22 22 19.7347 22 19Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="boardVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M16.0103 2C18.1781 7 16.2964 16.3438 15 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.6px 10.5px' }" />
            <motion.path d="M15.0929 16.9358C9.3081 15.5156 8.37003 12.6904 7.79688 10.911C8.80901 10.0524 11.6989 6.5487 12.9641 4.88797C13.9629 3.41804 14.0749 2.89451 14.9351 3.00177C15.0113 3.01128 15.8034 3.54155 16.2029 3.91879M7.79688 10.911C9.07691 12.6395 13.9342 13.0313 16.2029 13.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sail2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.9px' }" />
          </svg>
        </div>
</template>
