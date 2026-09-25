<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BubblesIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three bubbles swell in size order, then the highlight wipes
// authored from scripts/authored
const bubbleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.16, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bubble2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.08, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bubble3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const glintVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.5,
      delay: 0.28,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
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
            <motion.circle cx="19" cy="13" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 13px' }" />
            <motion.circle cx="13" cy="19" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bubble2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 19px' }" />
            <motion.circle cx="8.5" cy="7.5" r="5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bubble3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 7.5px' }" />
            <motion.path d="M6 7.5C6 6.11929 7.11929 5 8.5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="glintVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.3px 6.3px' }" />
          </svg>
        </div>
</template>
