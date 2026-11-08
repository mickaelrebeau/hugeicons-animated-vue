<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MouseRightClick06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the right click marks flash
// authored from scripts/authored
const mouseVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.53px, -0.06px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.17px, -0.02px) rotate(1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const marksVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1, 0, 1, 1],
    transition: { duration: 0.7, times: [0, 0.15, 0.3, 0.45, 0.6, 1], ease: 'linear' },
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
            <path d="M10.5 5.5V2M10.5 12V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10.5 22C16.5 22 18 17.49 18 12C18 6.50998 16.5 2 10.5 2C4.49993 2 3 6.50996 3 12C3 17.49 4.49993 22 10.5 22Z" stroke="currentColor" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 12px' }" />
            <path d="M18 12L3 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19 3.16746L19.3811 2M19.9713 5.56746L21 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="marksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M9 7C9 6.53406 9 6.30109 9.07612 6.11732C9.17761 5.87229 9.37229 5.67761 9.61732 5.57612C9.80109 5.5 10.0341 5.5 10.5 5.5C10.9659 5.5 11.1989 5.5 11.3827 5.57612C11.6277 5.67761 11.8224 5.87229 11.9239 6.11732C12 6.30109 12 6.53406 12 7V7.5C12 7.96594 12 8.19891 11.9239 8.38268C11.8224 8.62771 11.6277 8.82239 11.3827 8.92388C11.1989 9 10.9659 9 10.5 9C10.0341 9 9.80109 9 9.61732 8.92388C9.37229 8.82239 9.17761 8.62771 9.07612 8.38268C9 8.19891 9 7.96594 9 7.5V7Z" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
