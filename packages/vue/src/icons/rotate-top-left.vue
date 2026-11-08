<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RotateTopLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the square tips a quarter turn left and the arrow lifts
// authored from scripts/authored
const squareVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-90deg)', 'rotate(-90deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.8,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.144px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M3 15C3 18.2998 3 19.9497 4.02513 20.9749C5.05025 22 6.70017 22 10 22C13.2998 22 14.9497 22 15.9749 20.9749C17 19.9497 17 18.2998 17 15C17 11.7002 17 10.0503 15.9749 9.02513C14.9497 8 13.2998 8 10 8C6.70017 8 5.05025 8 4.02513 9.02513C3 10.0503 3 11.7002 3 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="squareVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 15px' }" />
            <motion.path d="M14.4201 2L13.0744 3.11013C12.3581 3.70104 12 3.99649 12 4.36364L13 4.36364C16.7712 4.36364 18.6569 4.36364 19.8284 5.53521C21 6.70678 21 8.59241 21 12.3636V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 7.5px' }" />
          </svg>
        </div>
</template>
