<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Hospital01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the H sign flips and the windows light up in turn
// authored from scripts/authored
const signVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const windowVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const window2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const window3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0.3, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const window4Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0.15, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M14 2V4M14 4V6M14 4H10M10 2V4M10 4V6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="signVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <path d="M3 22V11.3808C3 7.8766 3 6.12452 4.15327 5.03591C4.88623 4.34404 5.90312 4.09189 7.5 4M21 22V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14 10H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="windowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14 14H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="window2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 14H9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="window3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 10H9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="window4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M2 22H9.5M22 22H14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9.5 22V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
