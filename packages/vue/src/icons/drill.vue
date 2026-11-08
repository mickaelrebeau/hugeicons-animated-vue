<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DrillIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the drill bit spins and the drill shudders
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bitVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-0.80px, 0px) scaleX(0.6)',
      'translate(0.20px, 0px) scaleX(1.1)',
      'translate(-0.40px, 0px) scaleX(0.8)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.5,
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

const chuckVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M10 11H6C5.07003 11 4.60504 11 4.22354 10.8978C3.18827 10.6204 2.37962 9.81173 2.10222 8.77646C2 8.39496 2 7.92997 2 7C2 6.07003 2 5.60504 2.10222 5.22354C2.37962 4.18827 3.18827 3.37962 4.22354 3.10222C4.60504 3 5.07003 3 6 3H10C11.8856 3 12.8284 3 13.4142 3.58579C14 4.17157 14 5.11438 14 7C14 8.88562 14 9.82843 13.4142 10.4142C12.8284 11 11.8856 11 10 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 7px' }" />
            <path d="M2 20V19C2 18.4477 2.44772 18 3 18H9C10.1046 18 11 18.8954 11 20C11 20.5523 10.5523 21 10 21H3C2.44772 21 2 20.5523 2 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M11 11V12C11 13.1046 11.8954 14 13 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 18L5 11H9L7 18H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 7H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 7px' }" />
            <motion.path d="M14 9H16C16.465 9 16.6975 9 16.8882 8.94889C17.4059 8.81019 17.8102 8.40587 17.9489 7.88823C18 7.69748 18 7.46499 18 7C18 6.53501 18 6.30252 17.9489 6.11177C17.8102 5.59413 17.4059 5.18981 16.8882 5.05111C16.6975 5 16.465 5 16 5H14V9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chuckVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 7px' }" />
          </svg>
        </div>
</template>
