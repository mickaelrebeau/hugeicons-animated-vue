<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Shapes01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the triangle hops, the circle pops and the square turns a quarter
// authored from scripts/authored
const triangleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const circleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const squareVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.2,
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
            <motion.path d="M13.3382 10H10.6618C9.1273 10 8.36006 10 8.08543 9.49297C7.8108 8.98594 8.21743 8.32019 9.0307 6.9887L10.3689 4.79773C11.101 3.59924 11.467 3 12 3C12.533 3 12.899 3.59924 13.6311 4.79773L14.9693 6.9887C15.7826 8.32019 16.1892 8.98594 15.9146 9.49297C15.6399 10 14.8727 10 13.3382 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="triangleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.circle cx="17.5" cy="17.5" r="3.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="circleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
            <motion.path d="M9.66294 20.1111C10 19.6067 10 18.9045 10 17.5C10 16.0955 10 15.3933 9.66294 14.8889C9.51702 14.6705 9.32952 14.483 9.11114 14.3371C8.60669 14 7.90446 14 6.5 14C5.09554 14 4.39331 14 3.88886 14.3371C3.67048 14.483 3.48298 14.6705 3.33706 14.8889C3 15.3933 3 16.0955 3 17.5C3 18.9045 3 19.6067 3.33706 20.1111C3.48298 20.3295 3.67048 20.517 3.88886 20.6629C4.39331 21 5.09554 21 6.5 21C7.90446 21 8.60669 21 9.11114 20.6629C9.32952 20.517 9.51702 20.3295 9.66294 20.1111Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="squareVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17.5px' }" />
          </svg>
        </div>
</template>
