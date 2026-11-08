<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cashier02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the keys are punched row by row, the drawer slides open with a ding
// authored from scripts/authored
const drawerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, 1.4px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.4, 0.56, 0.84, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        'linear',
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const flagVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(0deg)', 'rotate(-14deg)', 'rotate(8deg)', 'rotate(0deg)'],
    transition: { duration: 0.9, times: [0, 0.4, 0.56, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const keysVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.9, times: [0, 0.12, 0.26, 1], ease: 'linear' },
  },
};

const keys2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 1, 0.15, 1, 1],
    transition: { duration: 0.9, times: [0, 0.18, 0.28, 0.42, 1], ease: 'linear' },
  },
};

const glintVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(0.2)', opacity: 0 },
  animate: {
    transform: [
      'rotate(0deg) scale(0.2)',
      'rotate(0deg) scale(0.2)',
      'rotate(45deg) scale(1.1)',
      'rotate(90deg) scale(0.2)',
    ],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.8,
      delay: 0.34,
      times: [0, 0.3, 0.6, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M2.5 17.5C2.5 19.3856 2.5 20.3284 3.08579 20.9142C3.67157 21.5 4.61438 21.5 6.5 21.5H17.5C19.3856 21.5 20.3284 21.5 20.9142 20.9142C21.5 20.3284 21.5 19.3856 21.5 17.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="drawerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
            <motion.path d="M10 19.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drawerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
            <motion.path d="M16.5 5.5V8.5M15 5.5H18C18.4659 5.5 18.6989 5.5 18.8827 5.42388C19.1277 5.32239 19.3224 5.12771 19.4239 4.88268C19.5 4.69891 19.5 4.46594 19.5 4C19.5 3.53406 19.5 3.30109 19.4239 3.11732C19.3224 2.87229 19.1277 2.67761 18.8827 2.57612C18.6989 2.5 18.4659 2.5 18 2.5H15C14.5341 2.5 14.3011 2.5 14.1173 2.57612C13.8723 2.67761 13.6776 2.87229 13.5761 3.11732C13.5 3.30109 13.5 3.53406 13.5 4C13.5 4.46594 13.5 4.69891 13.5761 4.88268C13.6776 5.12771 13.8723 5.32239 14.1173 5.42388C14.3011 5.5 14.5341 5.5 15 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flagVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 5.5px' }" />
            <path d="M21.5 17.5H2.5L3.80394 11.6323C4.13763 10.1306 4.30448 9.37983 4.85289 8.93992C5.4013 8.5 6.17043 8.5 7.70869 8.5H16.2913C17.8296 8.5 18.5987 8.5 19.1471 8.93992C19.6955 9.37983 19.8624 10.1306 20.1961 11.6323L21.5 17.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7.5 11.5H8M11.75 11.5H12.25M16 11.5H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="keysVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.5 14.5H8M11.75 14.5H12.25M16 14.5H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="keys2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21.2 1.4V3.4M20.2 2.4H22.2" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="glintVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
