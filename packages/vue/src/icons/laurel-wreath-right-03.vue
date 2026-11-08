<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LaurelWreathRight03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the branch grows and its leaves unfold
// authored from scripts/authored
const leafVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
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

const stemVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leaf2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
      delay: 0.12,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leaf3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
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

const leaf4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leaf5Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.46,
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
            <motion.path d="M13.0111 6.5C13.0111 6.5 11.179 6.4339 10.3382 4.9339C9.4975 3.4339 10.4889 2 10.4889 2C10.4889 2 12.321 2.0661 13.1618 3.5661C14.0025 5.0661 13.0111 6.5 13.0111 6.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 4.3px' }" />
            <motion.path d="M12.8171 6.5C14.2805 8.59896 16.1341 13.475 11.8415 16.1875C6.47567 19.5781 5.9878 20.5469 5.5 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.9679 18.5C7.9679 18.5 11.5403 17.1364 9.49877 13.5C9.49877 13.5 5.41625 14.8636 7.9679 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 16px' }" />
            <motion.path d="M8 19.0001C8 19.0001 10.3674 15.9252 13.5 19.105C13.5 19.105 10.9923 22.6818 8 19.0001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.8px 19.3px' }" />
            <motion.path d="M14.5094 12.9391C14.5094 12.9391 14.1124 8.85377 18.4701 9.00405C18.4701 9.00405 19.1061 13.5764 14.5094 12.9391Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.6px 11.2px' }" />
            <motion.path d="M14.4906 12.5001C14.4906 12.5001 14.8876 8.41481 10.5299 8.56508C10.5299 8.56508 9.89393 13.1374 14.4906 12.5001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.4px 10.8px' }" />
          </svg>
        </div>
</template>
