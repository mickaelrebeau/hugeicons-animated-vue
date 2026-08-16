<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlAqsaMosqueIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dome rises, the finial catches the light and the two wings settle outward
// authored from scripts/authored
const wingRightVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(0.8px)', 'translateX(0px)'],
    transition: { duration: 0.66, delay: 0.12, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const wingLeftVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(-0.8px)', 'translateX(0px)'],
    transition: { duration: 0.66, delay: 0.12, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const domeVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(1)' },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-1.2px) scale(1.04)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.72, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const finialVariants: Variants = {
  normal: { transform: 'scaleY(1)', opacity: 1 },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.18)', 'scaleY(1)'],
    opacity: [1, 0.4, 1, 1],
    transition: { duration: 0.58, delay: 0.22, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const windowsVariants: Variants = {
  normal: { transform: 'scaleY(1)', opacity: 1 },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'],
    opacity: [1, 0.45, 1, 1],
    transition: { duration: 0.56, delay: 0.3, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const corniceVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.86,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
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
            <rect x="6" y="12" width="12" height="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14 22V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 12L20.7022 13.0133C21.7801 13.4175 22 13.7348 22 14.886V22H18V12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wingRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 22px' }" />
            <motion.path d="M2 14.886C2 13.7348 2.21988 13.4175 3.29775 13.0133L6 12V22H2V14.886Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wingLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 22px' }" />
            <motion.path d="M16.208 9.5C17.3133 6.36054 15.1439 3 12 3C8.85611 3 6.68666 6.36054 7.79198 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="domeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M12 3V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="finialVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
            <motion.path d="M8 12V10M16 12V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 9.5H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="corniceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
