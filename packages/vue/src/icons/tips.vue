<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TipsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the coin drops into the open hand
// authored from scripts/authored
const coinVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0.6px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.24, 0.5, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sparkVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.24, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.3,
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
            <motion.path d="M20 8C20 9.93293 18.433 11.5 16.5 11.5C14.567 11.5 13 9.93293 13 8C13 6.067 14.567 4.5 16.5 4.5C18.433 4.5 20 6.067 20 8Z" stroke="currentColor" stroke-linecap="square" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 8px' }" />
            <motion.path d="M14.8311 4.92276C14.3768 3.51685 13.0571 2.5 11.5 2.5C9.567 2.5 8 4.067 8 6C8 7.93293 9.567 9.5 11.5 9.5C12.1043 9.5 12.6728 9.34684 13.1689 9.07723" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4 13.5H6.39482C6.68897 13.5 6.97908 13.5663 7.24217 13.6936L9.28415 14.6816C9.54724 14.8089 9.83735 14.8751 10.1315 14.8751H11.1741C12.1825 14.8751 13 15.6662 13 16.642C13 16.6814 12.973 16.7161 12.9338 16.7269L10.3929 17.4295C9.93707 17.5555 9.449 17.5116 9.025 17.3064L6.84211 16.2503M13 16L17.5928 14.5889C18.407 14.3352 19.2871 14.636 19.7971 15.3423C20.1659 15.8529 20.0157 16.5842 19.4785 16.8942L11.9629 21.2305C11.4849 21.5063 10.9209 21.5736 10.3952 21.4176L4 19.5199" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 17.5px' }" />
          </svg>
        </div>
</template>
