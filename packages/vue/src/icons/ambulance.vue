<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AmbulanceIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the van lurches forward, both wheels turn, and the plus stamps on the door
// authored from scripts/authored
const cabinVariants: Variants = {
  normal: { transform: 'translateX(0px) rotate(0deg)' },
  animate: {
    transform: [
      'translateX(0px) rotate(0deg)',
      'translateX(1.4px) rotate(-1.4deg)',
      'translateX(-0.3px) rotate(0.5deg)',
      'translateX(0px) rotate(0deg)',
    ],
    transition: { duration: 0.7, delay: 0.04, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bodyVariants: Variants = {
  normal: { transform: 'translateX(0px) rotate(0deg)' },
  animate: {
    transform: [
      'translateX(0px) rotate(0deg)',
      'translateX(1.4px) rotate(-1.4deg)',
      'translateX(-0.3px) rotate(0.5deg)',
      'translateX(0px) rotate(0deg)',
    ],
    transition: { duration: 0.7, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lightVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.8)', 'scale(1)'],
    opacity: [1, 0.35, 1],
    transition: { duration: 0.4, delay: 0.1, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.48, delay: 0.18, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const wheelRightVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(90deg)'],
    transition: { duration: 0.7, times: [0, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M11 18H15M13.5 8H14.4429C15.7533 8 16.4086 8 16.9641 8.31452C17.5196 8.62904 17.89 9.20972 18.6308 10.3711C19.1502 11.1854 19.6955 11.7765 20.4622 12.3024C21.2341 12.8318 21.6012 13.0906 21.8049 13.506C22 13.9038 22 14.375 22 15.3173C22 16.5596 22 17.1808 21.651 17.5755C21.636 17.5925 21.6207 17.609 21.6049 17.625C21.2375 18 20.6594 18 19.503 18H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cabinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 18px' }" />
            <motion.path d="M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15V8C2 6.58579 2 5.87868 2.43934 5.43934C2.87868 5 3.58579 5 5 5H10.5C11.9142 5 12.6213 5 13.0607 5.43934C13.5 5.87868 13.5 6.58579 13.5 8V18H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 18px' }" />
            <motion.path d="M22 15H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '21.5px 15px' }" />
            <motion.path d="M8 9V13M10 11L6 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 11px' }" />
            <motion.circle cx="17" cy="18" r="2" stroke="currentColor" stroke-width="1.5" :variants="wheelRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
            <motion.circle cx="7" cy="18" r="2" stroke="currentColor" stroke-width="1.5" :variants="wheelRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18px' }" />
          </svg>
        </div>
</template>
