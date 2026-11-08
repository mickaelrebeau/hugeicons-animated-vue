<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TrainIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the train sways on the tracks and its lights blink
// authored from scripts/authored
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
            <motion.path d="M4 11V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V11C20 14.7712 20 16.6569 18.8284 17.8284C17.6569 19 15.7712 19 12 19C8.22876 19 6.34315 19 5.17157 17.8284C4 16.6569 4 14.7712 4 11Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
            <motion.path d="M4 12C4 12 7.73333 13 12 13C16.2667 13 20 12 20 12" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <path d="M7 19L5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17 19L19 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M4.5 16H6.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.5 16H19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5 5H19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
          </svg>
        </div>
</template>
