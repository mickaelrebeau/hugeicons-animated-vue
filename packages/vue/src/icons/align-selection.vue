<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignSelectionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four handles close the marching ants around the selection
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.05)', 'scale(0.975)', 'scale(1)'],
    transition: { duration: 0.56, times: [0, 0.14, 0.5, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const handleTopRightVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.35)', 'scale(1.12)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.06, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const handleTopLeftVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.35)', 'scale(1.12)', 'scale(1)'],
    transition: { duration: 0.46, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const handleBottomRightVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.35)', 'scale(1.12)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.18, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const handleBottomLeftVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.35)', 'scale(1.12)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.12, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M20 6V18M18 4H6M18 20H6M4 18V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z" stroke="currentColor" stroke-width="1.5" :variants="handleTopRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 4px' }" />
            <motion.path d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z" stroke="currentColor" stroke-width="1.5" :variants="handleTopLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 4px' }" />
            <motion.path d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z" stroke="currentColor" stroke-width="1.5" :variants="handleBottomRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 20px' }" />
            <motion.path d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" stroke="currentColor" stroke-width="1.5" :variants="handleBottomLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 20px' }" />
          </svg>
        </div>
</template>
