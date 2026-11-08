<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SkewIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four corner handles drag the shape into a skew and back
// authored from scripts/authored
const handleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 0px)',
      'translate(-0.21px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const handle2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.4px, 0px)',
      'translate(0.21px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shapeVariants: Variants = {
  normal: { transform: 'skewX(0deg)' },
  animate: {
    transform: ['skewX(0deg)', 'skewX(-12deg)', 'skewX(2deg)', 'skewX(0deg)'],
    transition: {
      duration: 0.62,
      times: [0, 0.3, 0.66, 1],
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
            <motion.circle cx="9" cy="4" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 4px' }" />
            <motion.circle cx="19" cy="7" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 7px' }" />
            <motion.circle cx="20" cy="20" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handle2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 20px' }" />
            <motion.circle cx="4" cy="18" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handle2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 18px' }" />
            <motion.path d="M10.9171 4.5752L17.0848 6.4255M19.1544 8.99455L19.8476 18.0061M18.0162 19.7523L5.98574 18.2484M8.32812 5.88435L4.67383 16.1164" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 12.2px' }" />
          </svg>
        </div>
</template>
