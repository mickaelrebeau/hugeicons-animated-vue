<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MouseLeftClick04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the left side clicks and the marks flash
// authored from scripts/authored
const wheelVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.6px)',
      'translate(0px, 0px)',
      'translate(0px, 0.6px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

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
            <path d="M13.5 6V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 7.5C12 7.03406 12 6.80109 12.0761 6.61732C12.1776 6.37229 12.3723 6.17761 12.6173 6.07612C12.8011 6 13.0341 6 13.5 6C13.9659 6 14.1989 6 14.3827 6.07612C14.6277 6.17761 14.8224 6.37229 14.9239 6.61732C15 6.80109 15 7.03406 15 7.5V9.5C15 9.96594 15 10.1989 14.9239 10.3827C14.8224 10.6277 14.6277 10.8224 14.3827 10.9239C14.1989 11 13.9659 11 13.5 11C13.0341 11 12.8011 11 12.6173 10.9239C12.3723 10.8224 12.1776 10.6277 12.0761 10.3827C12 10.1989 12 9.96594 12 9.5V7.5Z" stroke="currentColor" stroke-width="1.5" :variants="wheelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 8.5px' }" />
            <motion.path d="M13.5 22C19.5 22 21 17.49 21 12C21 6.50998 19.5 2 13.5 2C7.49993 2 6 6.50996 6 12C6 17.49 7.49993 22 13.5 22Z" stroke="currentColor" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 12px' }" />
            <motion.path d="M5 2C3.94531 3.13158 3.23544 4.50113 3 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="marksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
