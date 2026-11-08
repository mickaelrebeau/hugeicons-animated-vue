<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MouseRightClick04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the right side clicks and the marks flash
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
            <path d="M10.5 6V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10.5 22C16.5 22 18 17.49 18 12C18 6.50998 16.5 2 10.5 2C4.49993 2 3 6.50996 3 12C3 17.49 4.49993 22 10.5 22Z" stroke="currentColor" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 12px' }" />
            <motion.path d="M12 7.5C12 7.03406 12 6.80109 11.9239 6.61732C11.8224 6.37229 11.6277 6.17761 11.3827 6.07612C11.1989 6 10.9659 6 10.5 6C10.0341 6 9.80109 6 9.61732 6.07612C9.37229 6.17761 9.17761 6.37229 9.07612 6.61732C9 6.80109 9 7.03406 9 7.5V9.5C9 9.96594 9 10.1989 9.07612 10.3827C9.17761 10.6277 9.37229 10.8224 9.61732 10.9239C9.80109 11 10.0341 11 10.5 11C10.9659 11 11.1989 11 11.3827 10.9239C11.6277 10.8224 11.8224 10.6277 11.9239 10.3827C12 10.1989 12 9.96594 12 9.5V7.5Z" stroke="currentColor" stroke-width="1.5" :variants="wheelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 8.5px' }" />
            <motion.path d="M19 2C20.0547 3.13158 20.7646 4.50113 21 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="marksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
