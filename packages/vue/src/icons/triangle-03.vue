<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Triangle03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sparkles twinkle around the triangle and the dot pops
// authored from scripts/authored
const sparkVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const spark2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const spark3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const dotVariants: Variants = {
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
            <path d="M3 17.3362V7.10375C3 5.22156 3 4.28046 3.56858 4.04626C4.13717 3.81205 4.80633 4.47751 6.14468 5.80841L18.2764 17.8728C19.6148 19.2037 20.2839 19.8692 20.0484 20.4346C19.8129 21 18.8665 21 16.9739 21H6.68422C4.94747 21 4.07908 21 3.53955 20.4635C3 19.9269 3 19.0634 3 17.3362Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.9159 12.8369L17.4805 9.42001M20.9159 12.8369C21.078 12.6772 20.9581 11.3527 20.9461 10.5134M20.9159 12.8369C20.7539 12.9967 19.9987 12.8894 18.6077 12.8184" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.129 3.08307L14.5645 6.5M11.129 3.08307C10.967 3.24282 11.0868 4.56733 11.0988 5.40659M11.129 3.08307C11.2911 2.92332 12.0462 3.03064 13.4372 3.10157" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spark2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.9087 3.08363L17.4727 6.5M20.9087 3.08363C20.748 2.92247 19.4161 3.04169 18.5722 3.05362M20.9087 3.08363C21.0693 3.24479 20.9614 3.99571 20.8901 5.37903" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spark3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.ellipse cx="16.0878" cy="8.01465" rx="1.38268" ry="1.375" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.1px 8px' }" />
          </svg>
        </div>
</template>
