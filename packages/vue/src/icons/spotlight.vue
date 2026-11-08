<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpotlightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spotlight swivels on its stand and the beam flashes
// authored from scripts/authored
const lampVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-10deg)',
      'translate(0.00px, 0.00px) rotate(7deg)',
      'translate(0.00px, 0.00px) rotate(-3deg)',
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

const lamp2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.71px, -0.85px) rotate(-10deg)',
      'translate(-0.58px, 0.51px) rotate(7deg)',
      'translate(0.23px, -0.24px) rotate(-3deg)',
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

const beamVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 0.1, 1, 1],
    transition: { duration: 0.8, delay: 0.14, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M8 2V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 14L13 9L8.88388 4.88388C8.31794 4.31794 7.55036 4 6.75 4C5.94964 4 5.18206 4.31794 4.61612 4.88388L3.88388 5.61612C3.31794 6.18206 3 6.94964 3 7.75C3 8.55036 3.31794 9.31794 3.88388 9.88388L8 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lampVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 9px' }" />
            <motion.path d="M13 9L8 14L8.7623 17.0492C8.902 17.608 9.40407 18 9.98006 18C10.313 18 10.6322 17.8678 10.8677 17.6323L16.6323 11.8677C16.8678 11.6322 17 11.313 17 10.9801C17 10.4041 16.608 9.902 16.0492 9.7623L13 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lamp2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 13.5px' }" />
            <motion.path d="M18 19L20 21M19 15H21M14 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
