<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MouseLeftClick06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the left click marks flash
// authored from scripts/authored
const mouseVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.53px, -0.06px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.17px, -0.02px) rotate(-1deg)',
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
            <path d="M13.5 5.5V2M13.5 12V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13.5 22C19.5 22 21 17.49 21 12C21 6.50998 19.5 2 13.5 2C7.49993 2 6 6.50996 6 12C6 17.49 7.49993 22 13.5 22Z" stroke="currentColor" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 12px' }" />
            <path d="M15 7C15 6.53406 15 6.30109 14.9239 6.11732C14.8224 5.87229 14.6277 5.67761 14.3827 5.57612C14.1989 5.5 13.9659 5.5 13.5 5.5C13.0341 5.5 12.8011 5.5 12.6173 5.57612C12.3723 5.67761 12.1776 5.87229 12.0761 6.11732C12 6.30109 12 6.53406 12 7V7.5C12 7.96594 12 8.19891 12.0761 8.38268C12.1776 8.62771 12.3723 8.82239 12.6173 8.92388C12.8011 9 13.0341 9 13.5 9C13.9659 9 14.1989 9 14.3827 8.92388C14.6277 8.82239 14.8224 8.62771 14.9239 8.38268C15 8.19891 15 7.96594 15 7.5V7Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M6 12L21 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5 3.16746L4.61888 2M4.02867 5.56746L3 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="marksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
