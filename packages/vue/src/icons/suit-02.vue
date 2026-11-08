<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Suit02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bow tie pops and the collar lifts
// authored from scripts/authored
const collarVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const bowVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
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
            <path d="M6.00233 3.99988C4.44888 4.04668 3.52231 4.21993 2.88101 4.86123C2.00233 5.73991 2.00233 7.15413 2.00233 9.98255L1.99762 16.0001C1.99762 18.8286 1.99762 20.2428 2.8763 21.1215C3.75498 22.0001 5.16919 22.0001 7.99762 22.0001H15.9976C18.826 22.0001 20.2403 22.0001 21.1189 21.1215C21.9976 20.2428 21.9976 18.8286 21.9976 16.0001L22.0023 9.98255C22.0023 7.15413 22.0023 5.73991 21.1236 4.86123C20.4823 4.21993 19.5558 4.04668 18.0023 3.99988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17.9976 3.99988L17.2703 6.25617C16.4899 8.63861 16.0998 9.82983 15.2142 9.98422C14.3285 10.1386 13.5125 8.98219 11.9976 6.99988L15.9976 1.99988L17.9976 3.99988Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="collarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 6.1px' }" />
            <motion.path d="M5.99762 3.99988L6.72499 6.25617C7.50529 8.63861 7.89544 9.82983 8.78108 9.98422C9.66671 10.1386 10.4827 8.98219 11.9976 6.99988L7.99762 1.99988L5.99762 3.99988Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="collarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 6.1px' }" />
            <path d="M15.9976 1.99988H7.99762" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.49762 9.99988L10.4976 11.9999H13.4976L14.4976 9.99988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <path d="M10.4976 11.9999L8.99762 21.9999M14.9976 21.9999L13.4976 11.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
