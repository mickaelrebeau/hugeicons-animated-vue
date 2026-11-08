<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneySend02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the note ripples and the arrow rises
// authored from scripts/authored
const waveVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0.24px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.2,
      times: [0, 0.18, 0.46, 0.74, 1],
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
            <path d="M14.4998 14.001C14.4998 15.3817 13.3805 16.501 11.9998 16.501C10.619 16.501 9.49976 15.3817 9.49976 14.001C9.49976 12.6203 10.619 11.501 11.9998 11.501C13.3805 11.501 14.4998 12.6203 14.4998 14.001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8 7.88972C6.88069 7.88442 5.55979 7.75835 3.87798 7.42461C2.92079 7.23467 2 7.94632 2 8.92217V18.9392C2 19.6275 2.47265 20.232 3.1448 20.3802C10.1096 21.9161 11.2491 20.1104 16 20.1104C17.5107 20.1104 18.7361 20.253 19.6762 20.4305C20.7719 20.6375 22 19.7984 22 18.6833V8.90853C22 8.34037 21.6756 7.82599 21.1329 7.6578C20.3228 7.40675 18.9452 7.08767 17 7.00293" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 11.001C3.95133 11.001 5.70483 9.40605 5.92901 7.75514M18.5005 7.50098C18.5005 9.54062 20.2655 11.47 22 11.47M22 17.001C20.1009 17.001 18.2601 18.3112 18.102 20.0993M6.00049 20.4971C6.00049 18.2879 4.20963 16.4971 2.00049 16.4971" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="waveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.5 5.50098C9.5 5.50098 11.2998 3.00098 12 3.00098M14.5 5.50098C14.5 5.50098 12.7002 3.00098 12 3.00098M12 3.00098L12 8.50098" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.8px' }" />
          </svg>
        </div>
</template>
