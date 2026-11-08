<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartAverageIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the curve rewrites and the average markers pop in from left to right
// authored from scripts/authored
const curveVariants: Variants = {
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

const markVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.6)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.14,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const mark2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.6)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.04,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const mark3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.6)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.34,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const mark4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.6)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.24,
      times: [0, 0.34, 0.66, 1],
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
            <path d="M20.9877 21H9.9877C6.68787 21 5.03795 21 4.01283 19.9749C2.9877 18.9497 2.9877 17.2998 2.9877 14V3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M6.9877 7C7.61628 5.87847 8.46901 5 9.781 5C15.3279 5 12.2101 17 18.1708 17C19.4921 17 20.3397 16.1157 20.9877 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="curveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.9998 11.0006H10.9873M11.0123 11.0006C11.0123 11.0144 11.0011 11.0256 10.9873 11.0256C10.9735 11.0256 10.9623 11.0144 10.9623 11.0006C10.9623 10.9868 10.9735 10.9756 10.9873 10.9756C11.0011 10.9756 11.0123 10.9868 11.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 11px' }" />
            <motion.path d="M6.99981 11.0006H6.98731M7.01231 11.0006C7.01231 11.0144 7.00112 11.0256 6.98731 11.0256C6.9735 11.0256 6.96231 11.0144 6.96231 11.0006C6.96231 10.9868 6.9735 10.9756 6.98731 10.9756C7.00112 10.9756 7.01231 10.9868 7.01231 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mark2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 11px' }" />
            <motion.path d="M20.9998 11.0006H20.9873M21.0123 11.0006C21.0123 11.0144 21.0011 11.0256 20.9873 11.0256C20.9735 11.0256 20.9623 11.0144 20.9623 11.0006C20.9623 10.9868 20.9735 10.9756 20.9873 10.9756C21.0011 10.9756 21.0123 10.9868 21.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mark3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 11px' }" />
            <motion.path d="M16.9998 11.0006H16.9873M17.0123 11.0006C17.0123 11.0144 17.0011 11.0256 16.9873 11.0256C16.9735 11.0256 16.9623 11.0144 16.9623 11.0006C16.9623 10.9868 16.9735 10.9756 16.9873 10.9756C17.0011 10.9756 17.0123 10.9868 17.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mark4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 11px' }" />
          </svg>
        </div>
</template>
