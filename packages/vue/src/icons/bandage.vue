<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BandageIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four pads stamp onto the dressing, nearest first, the wrap holding
// authored from scripts/authored
const padAVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.4, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const padBVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.4, delay: 0.06, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const padCVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.4, delay: 0.12, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const padDVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.4, delay: 0.18, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M11.0251 19.7993L19.7993 11.0249C21.0551 9.7691 21.6829 9.14122 21.8901 8.40682C22.0366 7.88753 22.0366 7.33783 21.8901 6.81854C21.6829 6.08415 21.055 5.45629 19.7992 4.20057C18.5435 2.94488 17.9156 2.31704 17.1813 2.10987C16.662 1.96337 16.1123 1.96338 15.593 2.10988C14.8586 2.31707 14.2308 2.94493 12.9751 4.20063L4.20071 12.975C2.94494 14.2307 2.31705 14.8586 2.10987 15.593C1.96338 16.1123 1.96338 16.662 2.10987 17.1812C2.31705 17.9156 2.94494 18.5435 4.20071 19.7993C5.45649 21.0551 6.08438 21.683 6.81881 21.8901C7.33808 22.0366 7.88774 22.0366 8.407 21.8901C9.14143 21.6829 9.76932 21.055 11.0251 19.7993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M13 5L19 11M5 13L11 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.5 11.875V12M14.25 12C14.25 12.1381 14.3619 12.25 14.5 12.25C14.6381 12.25 14.75 12.1381 14.75 12C14.75 11.8619 14.6381 11.75 14.5 11.75C14.3619 11.75 14.25 11.8619 14.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="padAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 12px' }" />
            <motion.path d="M12 9.375V9.5M11.75 9.5C11.75 9.63807 11.8619 9.75 12 9.75C12.1381 9.75 12.25 9.63807 12.25 9.5C12.25 9.36193 12.1381 9.25 12 9.25C11.8619 9.25 11.75 9.36193 11.75 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="padBVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M9.5 11.875V12M9.25 12C9.25 12.1381 9.36193 12.25 9.5 12.25C9.63807 12.25 9.75 12.1381 9.75 12C9.75 11.8619 9.63807 11.75 9.5 11.75C9.36193 11.75 9.25 11.8619 9.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="padCVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 12px' }" />
            <motion.path d="M12 14.375V14.5M11.75 14.5C11.75 14.6381 11.8619 14.75 12 14.75C12.1381 14.75 12.25 14.6381 12.25 14.5C12.25 14.3619 12.1381 14.25 12 14.25C11.8619 14.25 11.75 14.3619 11.75 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="padDVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
          </svg>
        </div>
</template>
