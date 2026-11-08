<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneyRemove02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the note ripples and the X rattles
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

const xVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, delay: 0.2, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M14.4998 11C14.4998 12.3807 13.3805 13.5 11.9998 13.5C10.6191 13.5 9.49982 12.3807 9.49982 11C9.49982 9.61929 10.6191 8.5 11.9998 8.5C13.3805 8.5 14.4998 9.61929 14.4998 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M22 12.5V5.92705C22 5.35889 21.6756 4.84452 21.1329 4.67632C20.1903 4.38421 18.4794 4 16 4C11.4209 4 10.1967 5.67747 3.87798 4.42361C2.92079 4.23366 2 4.94531 2 5.92116V15.9382C2 16.6265 2.47265 17.231 3.1448 17.3792C9.59373 18.8013 11.0483 17.3585 15 17.137" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 8C3.95133 8 5.70483 6.40507 5.92901 4.75417M18.5005 4.5C18.5005 6.53964 20.2655 8.46899 22 8.46899M6.00049 17.4961C6.00049 15.287 4.20963 13.4961 2.00049 13.4961" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="waveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 15.5L19.75 17.75M19.75 17.75L17.5 20M19.75 17.75L17.5 15.5M19.75 17.75L22 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.8px 17.8px' }" />
          </svg>
        </div>
</template>
