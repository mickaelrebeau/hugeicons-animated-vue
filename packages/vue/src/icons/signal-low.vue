<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SignalLowIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two bars rise and the empty slots blink
// authored from scripts/authored
const barVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 3.60px) scaleY(0.2)',
      'translate(0px, -0.36px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.16, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const antennaVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.04, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bar2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 2.40px) scaleY(0.2)',
      'translate(0px, -0.24px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.08,
      times: [0, 0.16, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const slotVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const slot2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.28, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const slot3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.36, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M6 10L6 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="barVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 14.5px' }" />
            <motion.path d="M6.80844 9.28111C6.43534 9.76037 6.2488 10 6 10C5.7512 10 5.56466 9.76037 5.19156 9.28112L4.44578 8.32312C3.37255 6.94451 2.83594 6.25521 3.04429 5.68812C3.06552 5.63034 3.0916 5.57458 3.12224 5.52145C3.423 5 4.282 5 6 5C7.718 5 8.577 5 8.87776 5.52145C8.9084 5.57458 8.93448 5.63034 8.95571 5.68812C9.16406 6.25521 8.62745 6.94451 7.55422 8.32312L6.80844 9.28111Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="antennaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 7.5px' }" />
            <motion.path d="M10 13V19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bar2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 16px' }" />
            <motion.path d="M13 19L14 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="slotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 19L18 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="slot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21 19L22 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="slot3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
