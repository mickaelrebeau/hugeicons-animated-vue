<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BarCodeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bars grow from the floor left to right, the digits staying planted
// authored from scripts/authored
const b0Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const b1Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.05,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const b2Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.1,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const b3Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.15,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const b4Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.2,
      times: [0, 0.28, 0.68, 1],
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
            <motion.path d="M3 4.5V20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b0Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 20.5px' }" />
            <motion.path d="M7.5 4.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b1Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 16.5px' }" />
            <motion.path d="M12 4.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
            <motion.path d="M16.5 4.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 16.5px' }" />
            <motion.path d="M21 4.5V20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 20.5px' }" />
            <path d="M7.625 20.25H7.5M7.75 20.25C7.75 20.3881 7.63807 20.5 7.5 20.5C7.36193 20.5 7.25 20.3881 7.25 20.25C7.25 20.1119 7.36193 20 7.5 20C7.63807 20 7.75 20.1119 7.75 20.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12.125 20.25H12M12.25 20.25C12.25 20.3881 12.1381 20.5 12 20.5C11.8619 20.5 11.75 20.3881 11.75 20.25C11.75 20.1119 11.8619 20 12 20C12.1381 20 12.25 20.1119 12.25 20.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16.625 20.25H16.5M16.75 20.25C16.75 20.3881 16.6381 20.5 16.5 20.5C16.3619 20.5 16.25 20.3881 16.25 20.25C16.25 20.1119 16.3619 20 16.5 20C16.6381 20 16.75 20.1119 16.75 20.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
