<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartBubbleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bubbles inflate from small to big, in order of size
// authored from scripts/authored
const bubbleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 0.56,
      times: [0, 0.2, 0.6, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bubble2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 0.56,
      delay: 0.1,
      times: [0, 0.2, 0.6, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bubble3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 0.56,
      delay: 0.2,
      times: [0, 0.2, 0.6, 1],
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
            <path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 8px' }" />
            <motion.circle cx="11.5" cy="15.5" r="2.5" stroke="currentColor" stroke-width="1.5" :variants="bubble2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 15.5px' }" />
            <motion.circle cx="17.5" cy="7.5" r="3.5" stroke="currentColor" stroke-width="1.5" :variants="bubble3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 7.5px' }" />
          </svg>
        </div>
</template>
