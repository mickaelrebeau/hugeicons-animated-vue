<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TramIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tram rolls forward and the pantograph sparks
// authored from scripts/authored
const poleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)', opacity: 1 },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.26px, 0.02px) rotate(10deg)',
      'translate(-0.18px, 0.01px) rotate(-7deg)',
      'translate(0.08px, 0.00px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    opacity: [1, 0.4, 1, 1, 1],
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

const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.5px)',
      'translate(0px, 0.175px)',
      'translate(0px, -0.125px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.24, 0.5, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const lightVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M5 2H14M19 2H14M14 2L12 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="poleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <path d="M8 20L7 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 20L17 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5 13V12C5 8.70017 5 7.05025 6.02513 6.02513C7.05025 5 8.70017 5 12 5C15.2998 5 16.9497 5 17.9749 6.02513C19 7.05025 19 8.70017 19 12V13C19 16.2998 19 17.9497 17.9749 18.9749C16.9497 20 15.2998 20 12 20C8.70017 20 7.05025 20 6.02513 18.9749C5 17.9497 5 16.2998 5 13Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M5 14C5 14 8.26667 15 12 15C15.7333 15 19 14 19 14" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M16.5 17H18.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.5 8H18.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M5.5 17H7.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
