<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CameraOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash cuts across and the camera flinches away from it
// authored from scripts/authored
const slashVariants: Variants = {
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

const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg)',
      'translate(0.5px, 0.5px) rotate(3deg)',
      'translate(-0.15px, -0.1px) rotate(-1deg)',
      'translate(0px, 0px) rotate(0deg)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.08,
      times: [0, 0.3, 0.62, 1],
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
            <path d="M9.71586 9.71484C8.6787 10.4376 8 11.639 8 12.999C8 15.2081 9.79086 16.999 12 16.999C13.36 16.999 14.5614 16.3203 15.2841 15.2831" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.49597 6.49597C6.38143 6.5 6.24171 6.5 6.05369 6.5C5.07361 6.5 4.58357 6.5 4.18289 6.61342C3.18055 6.89716 2.39716 7.68055 2.11342 8.68289C2 9.08357 2 9.57361 2 10.5537V14.5C2 17.3284 2 18.7426 2.87868 19.6213C3.75736 20.5 5.17157 20.5 8 20.5H16C18 20.5 19.2929 20.5 20.1893 20.1893M21.878 17.878C22 17.0498 22 15.9645 22 14.5V10.5537C22 9.57361 22 9.08357 21.8866 8.68289C21.6028 7.68055 20.8194 6.89716 19.8171 6.61342C19.4164 6.5 18.9264 6.5 17.9463 6.5C17.5803 6.5 17.3973 6.5 17.2269 6.47029C16.8046 6.39666 16.417 6.18927 16.1215 5.87871C16.0022 5.75336 15.703 5.30451 15.5 5C15.1036 4.40544 14.9054 4.10816 14.6345 3.90367C14.4691 3.77879 14.2852 3.68039 14.0895 3.612C13.7691 3.5 13.4118 3.5 12.6972 3.5H11.3028C10.5882 3.5 10.2309 3.5 9.91048 3.612C9.7148 3.68039 9.53094 3.77879 9.36549 3.90367C9.14445 4.07051 8.97183 4.2991 8.7005 4.7005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M19.125 9.5H19M19.25 9.5C19.25 9.63807 19.1381 9.75 19 9.75C18.8619 9.75 18.75 9.63807 18.75 9.5C18.75 9.36193 18.8619 9.25 19 9.25C19.1381 9.25 19.25 9.36193 19.25 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
