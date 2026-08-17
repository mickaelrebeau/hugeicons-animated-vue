<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BarcodeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the five bars scan from the floor in spatial order, mixed weights included
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
            <motion.path d="M4 18.5V5.5C4 5.22386 3.77614 5 3.5 5C3.22386 5 3 5.22386 3 5.5V18.5C3 18.7761 3.22386 19 3.5 19C3.77614 19 4 18.7761 4 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b0Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 19px' }" />
            <motion.path d="M17 18.5V5.5C17 5.22386 16.7761 5 16.5 5C16.2239 5 16 5.22386 16 5.5V18.5C16 18.7761 16.2239 19 16.5 19C16.7761 19 17 18.7761 17 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 19px' }" />
            <motion.path d="M8 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b1Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 19px' }" />
            <motion.path d="M12 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M21 5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="b4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 19px' }" />
          </svg>
        </div>
</template>
