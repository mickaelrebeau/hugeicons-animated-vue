<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'XRayIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the scan passes down the ribs and the pelvis lights up
// authored from scripts/authored
const spineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pelvisVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.1)', 'scale(0.92)', 'scale(1)'],
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

const ribVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const rib2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.5, delay: 0.14, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <rect width="20" height="18" rx="5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 21 22)" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M12 5L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 14.3321C11.047 14.3321 10.1425 14.2268 9.329 14.0377C8.45448 13.8345 7.5 14.4753 7.5 15.4049C7.5 15.8904 7.76615 16.3401 8.20673 16.5039C8.53045 16.6243 8.87716 16.7297 9.24287 16.8181C9.83466 16.961 10.3551 17.3472 10.6124 17.9182L10.7188 18.1543C10.9514 18.6703 11.4509 19 12 19C12.5491 19 13.0486 18.6703 13.2812 18.1543L13.3876 17.9182C13.6449 17.3472 14.1653 16.961 14.7571 16.8181C15.1228 16.7297 15.4695 16.6243 15.7933 16.5039C16.2338 16.3401 16.5 15.8904 16.5 15.4049C16.5 14.4753 15.5455 13.8345 14.671 14.0377C13.8575 14.2268 12.953 14.3321 12 14.3321Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pelvisVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.4px' }" />
            <motion.path d="M15 7C14.6134 7.61859 14.084 8 13.5 8C12.916 8 12.3866 7.61859 12 7C11.6134 7.61859 11.084 8 10.5 8C9.91601 8 9.38657 7.61859 9 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ribVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 10C7.64429 10.6186 8.52668 11 9.5 11C10.4733 11 11.3557 10.6186 12 10C12.6443 10.6186 13.5267 11 14.5 11C15.4733 11 16.3557 10.6186 17 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rib2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
