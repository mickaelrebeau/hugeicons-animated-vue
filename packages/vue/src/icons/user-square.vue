<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserSquareIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the head bobs and the tile answers
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const hopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
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
            <motion.path d="M11.5001 2.5L12.5001 2.50001C16.7427 2.50006 18.864 2.50008 20.182 3.8181C21.5 5.13611 21.5 7.25741 21.5 11.5V12.5001C21.5 16.7427 21.5 18.8641 20.182 20.1821C18.864 21.5001 16.7426 21.5001 12.5 21.5001H11.5C7.25736 21.5001 5.13604 21.5001 3.81802 20.1821C2.5 18.8641 2.5 16.7427 2.5 12.5001V11.5C2.5 7.25732 2.5 5.13598 3.81804 3.81795C5.13607 2.49993 7.25741 2.49995 11.5001 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.9999 7.39502C13.9329 7.39502 15.4999 8.96202 15.4999 10.895C15.4999 12.828 13.9329 14.395 11.9999 14.395C10.0669 14.395 8.49988 12.828 8.49988 10.895C8.49988 8.96202 10.0669 7.39502 11.9999 7.39502Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.9px' }" />
            <path d="M18.9823 20.895C18.7259 17.2624 15.6978 14.395 11.9999 14.395C8.302 14.395 5.27383 17.2624 5.01746 20.895" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
