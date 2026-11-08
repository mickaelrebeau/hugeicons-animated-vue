<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FavouriteSquareIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the heart hops inside the square
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.26, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const heartVariants: Variants = {
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
            <motion.path d="M2 12C2 7.75736 2 5.63604 3.31802 4.31802C4.63604 3 6.75736 3 11 3C15.2426 3 17.364 3 18.682 4.31802C20 5.63604 20 7.75736 20 12C20 16.2426 20 18.364 18.682 19.682C17.364 21 15.2426 21 11 21C6.75736 21 4.63604 21 3.31802 19.682C2 18.364 2 16.2426 2 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M11 16.5C11 16.5 6 13.3235 6 10.25C6 8.73122 7.05263 7.5 8.5 7.5C9.25 7.5 10 7.76471 11 8.82353C12 7.76471 12.75 7.5 13.5 7.5C14.9474 7.5 16 8.73122 16 10.25C16 13.3235 11 16.5 11 16.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
          </svg>
        </div>
</template>
