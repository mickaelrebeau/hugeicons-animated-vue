<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiVoiceIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the voice keeps talking, the wave travelling left to right across the panel
// authored from scripts/authored
const barSecondVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.26)', 'scaleY(1)'],
    transition: {
      duration: 0.66,
      delay: 0.09,
      times: [0, 0.28, 0.64, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const barThirdVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.26)', 'scaleY(1)'],
    transition: {
      duration: 0.66,
      delay: 0.18,
      times: [0, 0.28, 0.64, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const barFourthVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.26)', 'scaleY(1)'],
    transition: {
      duration: 0.66,
      delay: 0.27,
      times: [0, 0.28, 0.64, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const barFirstVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.26)', 'scaleY(1)'],
    transition: {
      duration: 0.66,
      times: [0, 0.28, 0.64, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const sparkVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: {
      duration: 0.9,
      times: [0, 0.3, 0.66, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M9 11V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barSecondVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12.5px' }" />
            <path d="M11.5 3C7.27027 3 5.1554 3 3.75276 4.19797C3.55358 4.36808 3.36808 4.55358 3.19797 4.75276C2 6.1554 2 8.27027 2 12.5C2 16.7297 2 18.8446 3.19797 20.2472C3.36808 20.4464 3.55358 20.6319 3.75276 20.802C5.1554 22 7.27027 22 11.5 22C15.7297 22 17.8446 22 19.2472 20.802C19.4464 20.6319 19.6319 20.4464 19.802 20.2472C21 18.8446 21 16.7297 21 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 8V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barThirdVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M15 10V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barFourthVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 12.5px' }" />
            <motion.path d="M6 12V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barFirstVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12.5px' }" />
            <motion.path d="M15.3881 5.08714C16.796 4.91193 17.9119 3.79602 18.0871 2.38812C18.1137 2.17498 18.2852 2 18.5 2C18.7148 2 18.8863 2.17498 18.9129 2.38812C19.0881 3.79602 20.204 4.91193 21.6119 5.08714C21.825 5.11366 22 5.28522 22 5.5C22 5.71478 21.825 5.88634 21.6119 5.91286C20.204 6.08807 19.0881 7.20398 18.9129 8.61188C18.8863 8.82502 18.7148 9 18.5 9C18.2852 9 18.1137 8.82502 18.0871 8.61188C17.9119 7.20398 16.796 6.08807 15.3881 5.91286C15.175 5.88634 15 5.71478 15 5.5C15 5.28522 15.175 5.11366 15.3881 5.08714Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5.5px' }" />
          </svg>
        </div>
</template>
