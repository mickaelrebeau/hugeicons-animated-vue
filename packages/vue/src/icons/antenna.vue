<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AntennaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four tines fire left to right, then the mast grounds the signal
// authored from scripts/authored
const boomVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1.04)', 'scaleX(1)'],
    transition: { duration: 0.5, delay: 0.22, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tine4Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.46, delay: 0.18, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tine3Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.46, delay: 0.12, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tine2Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.46, delay: 0.06, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tine1Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.46, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const mastVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.22)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: {
      duration: 0.58,
      delay: 0.24,
      times: [0, 0.14, 0.62, 1],
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
            <motion.path d="M5 7H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boomVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M21.5 3L17.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tine4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 7px' }" />
            <motion.path d="M16.5 3L12.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tine3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 7px' }" />
            <motion.path d="M11.5 3L7.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tine2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 7px' }" />
            <motion.path d="M6.5 3L2.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tine1Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 7px' }" />
            <motion.path d="M12 15V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mastVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
          </svg>
        </div>
</template>
