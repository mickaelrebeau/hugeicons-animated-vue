<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AnalyticsDownIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three bars shrink from the right, and the trend arrow falls with them
// authored from scripts/authored
const barRightVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.35)', 'scaleY(1)'],
    transition: { duration: 0.62, delay: 0.16, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const barMidVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.45)', 'scaleY(1)'],
    transition: { duration: 0.62, delay: 0.08, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const barLeftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.6)', 'scaleY(1)'],
    transition: { duration: 0.62, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const trendVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.2px, 2.2px)', 'translate(0px, 0px)'],
    transition: { duration: 0.7, times: [0, 0.5, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.18, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17 18L17 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="barRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
            <motion.path d="M12 18L12 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="barMidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M7 18L7 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="barLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18px' }" />
            <motion.path d="M6 7C9.19706 10.2683 13.2338 11.0813 17.1413 9.99185M15.6881 8.47133L17.7617 9.48839C18.0076 9.60901 18.074 9.88829 17.91 10.1122L16.5269 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trendVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 7px' }" />
            <motion.path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
