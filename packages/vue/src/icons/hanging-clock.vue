<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HangingClockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clock swings on its bracket and the hand ticks
// authored from scripts/authored
const clockVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.32px, -0.09px) rotate(8deg)',
      'translate(0.99px, -0.05px) rotate(-6deg)',
      'translate(-0.33px, -0.01px) rotate(2deg)',
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

const clock2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.35px, -0.02px) rotate(8deg)',
      'translate(0.26px, -0.01px) rotate(-6deg)',
      'translate(-0.09px, -0.00px) rotate(2deg)',
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

const clock3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.30px, -0.02px) rotate(8deg)',
      'translate(0.97px, -0.10px) rotate(-6deg)',
      'translate(-0.32px, 0.01px) rotate(2deg)',
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
            <circle cx="17.5" cy="4.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
            <motion.circle cx="17.5" cy="15.5" r="4.5" stroke="currentColor" stroke-width="1.5" :variants="clockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 15.5px' }" />
            <path d="M2 8H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1.5" />
            <motion.path d="M17.5 6V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1.5" :variants="clock2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 8.5px' }" />
            <path d="M2 6V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1.5" />
            <path d="M2 20C2 13.3726 7.37258 8 14 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1.5" />
            <motion.path d="M18.5 16.5L17.5 16V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="clock3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 15.3px' }" />
          </svg>
        </div>
</template>
