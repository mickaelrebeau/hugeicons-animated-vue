<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiChemistryIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the level bubbles up the tube twice before the reaction sparks off the side
// authored from scripts/authored
const tubeVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-2deg)', 'rotate(0.8deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.78,
      times: [0, 0.3, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sparkVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.62, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const levelVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: [
      'translateY(0px)',
      'translateY(-1.2px)',
      'translateY(-0.4px)',
      'translateY(-1px)',
      'translateY(0px)',
    ],
    transition: {
      duration: 0.78,
      times: [0, 0.24, 0.44, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M13.5 18C13.5 20.2091 11.7091 22 9.5 22C7.29086 22 5.5 20.2091 5.5 18V2H13.5V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tubeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 22px' }" />
            <motion.path d="M16 10.5L15.7421 11.197C15.4039 12.111 15.2348 12.568 14.9014 12.9014C14.568 13.2348 14.111 13.4039 13.197 13.7421L12.5 14L13.197 14.2579C14.111 14.5961 14.568 14.7652 14.9014 15.0986C15.2348 15.432 15.4039 15.889 15.7421 16.803L16 17.5L16.2579 16.803C16.5961 15.889 16.7652 15.432 17.0986 15.0986C17.432 14.7652 17.889 14.5961 18.803 14.2579L19.5 14L18.803 13.7421C17.889 13.4039 17.432 13.2348 17.0986 12.9014C16.7652 12.568 16.5961 12.111 16.2579 11.197L16 10.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 14px' }" />
            <motion.path d="M4.5 2H14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tubeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 22px' }" />
            <motion.path d="M5.5 8H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="levelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 8px' }" />
          </svg>
        </div>
</template>
