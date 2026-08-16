<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ActivitySparkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the reading is traced first, then the spark fires in the corner it points to
// authored from scripts/authored
const traceVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.78,
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

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.8,
      times: [0, 0.68, 0.84, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
    transition: { duration: 0.62, delay: 0.6, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M7 14L9.79289 11.2071C10.1834 10.8166 10.8166 10.8166 11.2071 11.2071L12.7929 12.7929C13.1834 13.1834 13.8166 13.1834 14.2071 12.7929L17 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="traceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.9993 13C21 12.6804 21 12.3473 21 12C21 7.75736 21 5.63604 19.682 4.31802C18.364 3 16.2426 3 12 3C7.75736 3 5.63604 3 4.31802 4.31802C3 5.63604 3 7.75736 3 12C3 16.2426 3 18.364 4.31802 19.682C5.63604 21 7.75736 21 12 21C12.3473 21 12.6804 21 13 20.9993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.9737 16.0215C18.9795 15.9928 19.0205 15.9928 19.0263 16.0215C19.3302 17.5081 20.4919 18.6698 21.9785 18.9737C22.0072 18.9795 22.0072 19.0205 21.9785 19.0263C20.4919 19.3302 19.3302 20.4919 19.0263 21.9785C19.0205 22.0072 18.9795 22.0072 18.9737 21.9785C18.6698 20.4919 17.5081 19.3302 16.0215 19.0263C15.9928 19.0205 15.9928 18.9795 16.0215 18.9737C17.5081 18.6698 18.6698 17.5081 18.9737 16.0215Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 19px' }" />
          </svg>
        </div>
</template>
