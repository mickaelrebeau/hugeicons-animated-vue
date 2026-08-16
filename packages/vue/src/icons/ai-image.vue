<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiImageIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ridge redraws itself left to right, the sun pops back in, the spark signs off
// authored from scripts/authored
const sunVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.58, delay: 0.12, times: [0, 0.2, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
    transition: { duration: 0.62, delay: 0.38, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const ridgeVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.92,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.circle cx="7" cy="8" r="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 8px' }" />
            <motion.path d="M20.9977 11C21 11.4701 21 11.9693 21 12.5C21 16.9783 21 19.2175 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3C12.0307 3 12.5299 3 13 3.00231" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.5px' }" />
            <motion.path d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5.5px' }" />
            <motion.path d="M4.5 21.4999C8.87246 16.275 13.7741 9.384 20.9975 14.0424" stroke="currentColor" stroke-width="1.5" :variants="ridgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
