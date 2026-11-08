<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FryIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the egg wobbles in the pan as the yolk pops
// authored from scripts/authored
const panVariants: Variants = {
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

const eggVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1.1)',
      'translate(0.00px, 0.00px) scale(0.95)',
      'translate(0.00px, 0.00px) scale(1.03)',
      'translate(0.00px, 0.00px) scale(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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

const handleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.65px, 0.61px) rotate(-4deg)',
      'translate(-0.61px, -0.65px) rotate(4deg)',
      'translate(0.32px, 0.31px) rotate(-2deg)',
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

const yolkVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
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
            <motion.path d="M22 9.5C22 13.6421 18.6421 17 14.5 17C10.3579 17 7 13.6421 7 9.5C7 5.35786 10.3579 2 14.5 2C18.6421 2 22 5.35786 22 9.5Z" stroke="currentColor" stroke-width="1.5" :variants="panVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 9.5px' }" />
            <motion.path d="M19 9C19 11.2091 17.2091 13 15 13C12.7909 13 11 11.2091 11 9C11 6.79086 12.7909 5 15 5C17.2091 5 19 6.79086 19 9Z" stroke="currentColor" stroke-width="1.5" :variants="eggVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 9px' }" />
            <motion.path d="M2 22L9 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 18.5px' }" />
            <motion.path d="M15.125 9H15M15.25 9C15.25 9.13807 15.1381 9.25 15 9.25C14.8619 9.25 14.75 9.13807 14.75 9C14.75 8.86193 14.8619 8.75 15 8.75C15.1381 8.75 15.25 8.86193 15.25 9Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="yolkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 9px' }" />
          </svg>
        </div>
</template>
