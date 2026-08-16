<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiBookIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the page lifts off the spine and turns, and the letter on it settles back down
// authored from scripts/authored
const coverVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.972)', 'scaleX(1.006)', 'scaleX(1)'],
    transition: { duration: 0.62, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const pageVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-4deg)', 'rotate(1deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.68,
      times: [0, 0.36, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const letterVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.88)', 'scale(1.05)', 'scale(1)'],
    transition: { duration: 0.56, delay: 0.08, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="coverVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12px' }" />
            <motion.path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pageVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 19.5px' }" />
            <motion.path d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pageVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 19.5px' }" />
            <motion.path d="M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12px' }" />
          </svg>
        </div>
</template>
