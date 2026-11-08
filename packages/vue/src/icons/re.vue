<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ReIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the r and e hop and the colon blinks
// authored from scripts/authored
const letterVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.1px)',
      'translate(0px, 0.15400000000000003px)',
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

const letter2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.1px)',
      'translate(0px, 0.15400000000000003px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
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

const colonVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6.5 14C6.5 14 8 12 9.5 13.5M6.5 14V17.5M6.5 14V12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 14.8px' }" />
            <motion.path d="M11.5 15V14.25C11.5 13.2835 12.2835 12.5 13.25 12.5C14.2165 12.5 15 13.2835 15 14.25V15H11.5ZM11.5 15V15.75C11.5 16.7165 12.2835 17.5 13.25 17.5C13.7397 17.5 14.1824 17.2989 14.5 16.9747" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letter2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 15px' }" />
            <motion.path d="M18.125 13H18M18.25 13C18.25 13.1381 18.1381 13.25 18 13.25C17.8619 13.25 17.75 13.1381 17.75 13C17.75 12.8619 17.8619 12.75 18 12.75C18.1381 12.75 18.25 12.8619 18.25 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="colonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.125 17H18M18.25 17C18.25 17.1381 18.1381 17.25 18 17.25C17.8619 17.25 17.75 17.1381 17.75 17C17.75 16.8619 17.8619 16.75 18 16.75C18.1381 16.75 18.25 16.8619 18.25 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="colonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
