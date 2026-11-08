<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OnlineLearning03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lines write in the chat bubble beside the phone
// authored from scripts/authored
const linesVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.14,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bubbleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.06)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const homeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
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
            <motion.path d="M13 5H18M13 8H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="linesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M14 15.999V16.9992C14 19.3566 14 20.5353 13.2678 21.2676C12.5355 22 11.357 22 9 22H8C5.64298 22 4.46447 22 3.73223 21.2676C3 20.5353 3 19.3566 3 16.9992V10.9982C3 8.6408 3 7.4621 3.73223 6.72974C4.35264 6.10923 5.29344 6.01447 7 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 6V7C10 8.88562 10 9.82843 10.5858 10.4142C11.1716 11 12.1144 11 14 11V13L17 11C18.8856 11 19.8284 11 20.4142 10.4142C21 9.82843 21 8.88562 21 7V6C21 4.11438 21 3.17157 20.4142 2.58579C19.8284 2 18.8856 2 17 2H14C12.1144 2 11.1716 2 10.5858 2.58579C10 3.17157 10 4.11438 10 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 7.5px' }" />
            <motion.path d="M8.625 19H8.5M8.75 19C8.75 19.1381 8.63807 19.25 8.5 19.25C8.36193 19.25 8.25 19.1381 8.25 19C8.25 18.8619 8.36193 18.75 8.5 18.75C8.63807 18.75 8.75 18.8619 8.75 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="homeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 19px' }" />
          </svg>
        </div>
</template>
