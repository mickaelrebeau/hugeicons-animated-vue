<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KurtaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the buttons pop down the placket
// authored from scripts/authored
const placketVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const buttonsVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.4)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.16,
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
            <path d="M6.37726 16H5.08354C3.22665 16 2.84168 15.6255 3.05142 13.7791L3.41559 10.5731C3.75345 7.59878 4.43808 6.75874 7.23391 5.66482L8.93305 5V2C9.90622 2.31731 10.9677 2.83772 12 2.83772C13.0323 2.83772 14.0938 2.31731 15.067 2V5L16.7661 5.66482C19.5619 6.75874 20.2466 7.59878 20.5844 10.5731L20.9486 13.7791C21.1583 15.6255 20.7734 16 18.9165 16H17.6227" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9 5L11.0513 5.68377C11.6671 5.88904 12.3329 5.88904 12.9487 5.68377L15 5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6.9642 10L6.50433 20.9584C6.4681 21.8215 6.64698 22 7.51062 22H16.4894C17.353 22 17.5319 21.8215 17.4957 20.9584L17.0358 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 13L12 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="placketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 9H13M12 11.5H13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="buttonsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 10.3px' }" />
          </svg>
        </div>
</template>
