<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChurchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bell chimes from the steeple and the rose window glows
// authored from scripts/authored
const naveVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const windowVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.36, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const chimeVariants: Variants = {
  normal: { transform: 'scale(0.7)', opacity: 0 },
  animate: {
    transform: ['scale(0.7)', 'scale(0.7)', 'scale(1)', 'scale(1)', 'scale(1.1)', 'scale(1.2)'],
    opacity: [0, 0, 1, 0.25, 1, 0],
    transition: {
      duration: 0.9,
      times: [0, 0.18, 0.34, 0.5, 0.66, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        'linear',
        'linear',
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
            <path d="M18.7889 14.3944L17 13.5V22C18.8856 22 19.8284 22 20.4142 21.4142C21 20.8284 21 19.8799 21 17.9828C21 16.7729 21 16.1679 20.7013 15.6846C20.4026 15.2013 19.8647 14.9323 18.7889 14.3944Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M5.21114 14.3944L7 13.5V22C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8799 3 17.9828C3 16.7729 3 16.1679 3.2987 15.6846C3.5974 15.2013 4.13531 14.9323 5.21114 14.3944Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8.7812 8.81253L11.084 7.27735C11.3552 7.0965 11.674 7 12 7C12.326 7 12.6448 7.0965 12.916 7.27735L15.2188 8.81253C16.0907 9.39382 16.5267 9.68447 16.7633 10.1267C17 10.5688 17 11.0928 17 12.1407V22H7V12.1407C7 11.0928 7 10.5688 7.23665 10.1267C7.4733 9.68447 7.90927 9.39382 8.7812 8.81253Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="naveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <path d="M10 22V19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 7V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 4H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12.125 12.25H12M12.25 12.25C12.25 12.3881 12.1381 12.5 12 12.5C11.8619 12.5 11.75 12.3881 11.75 12.25C11.75 12.1119 11.8619 12 12 12C12.1381 12 12.25 12.1119 12.25 12.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.3px' }" />
            <motion.path d="M8.6 3.2C7.6 4.2 7.6 5.8 8.6 6.8" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="chimeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.4 3.2C16.4 4.2 16.4 5.8 15.4 6.8" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="chimeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
