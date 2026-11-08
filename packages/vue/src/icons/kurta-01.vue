<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Kurta01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the kurta sways and the placket redraws
// authored from scripts/authored
const kurtaVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.70px, -0.02px) rotate(-4deg)',
      'translate(-0.52px, -0.01px) rotate(3deg)',
      'translate(0.17px, -0.00px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const placketVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
      times: [0, 0.16, 0.24, 1],
      ease: [
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
            <motion.path d="M17.5488 15C17.5889 16.2407 17.5857 17.7741 17.57 19.0892C17.5538 20.4524 17.5456 21.1339 17.1064 21.567C16.6672 22 15.976 22 14.5937 22H9.40634C8.02398 22 7.33279 22 6.89359 21.567C6.45438 21.1339 6.44625 20.4524 6.42997 19.0892C6.41428 17.7741 6.41113 16.2407 6.45124 15M17.5488 15C17.445 11.7897 17.1556 8.36182 16.51 6M17.5488 15H19.4165C20.1808 15 20.563 15 20.8004 14.7487C21.0377 14.4973 21.016 14.1317 20.9725 13.4005C20.733 9.37316 19.6338 6.15858 18.7273 4.28185C18.4606 3.72971 18.3273 3.45365 17.9998 3.17821C17.6723 2.90277 17.315 2.80091 16.6003 2.59718L14.5056 2C14.0044 3 13.0022 3.5 12 3.5C10.9978 3.5 9.99555 3 9.49444 2L7.39966 2.59718C6.68503 2.80091 6.32771 2.90277 6.00022 3.17821C5.67273 3.45365 5.53939 3.72971 5.2727 4.28185C4.36625 6.15858 3.26703 9.37316 3.0275 13.4005C2.98401 14.1317 2.96227 14.4973 3.19965 14.7487C3.43703 15 3.8192 15 4.58354 15H6.45124M6.45124 15C6.55501 11.7897 6.84442 8.36182 7.48999 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="kurtaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.5 12H20.5M3.5 12H6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="kurtaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 4L12 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="placketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
