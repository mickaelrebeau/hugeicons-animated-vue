<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GrapeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the grapes swing on their stem
// authored from scripts/authored
const bunchVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.66px, -0.12px) rotate(-8deg)',
      'translate(-1.24px, -0.07px) rotate(6deg)',
      'translate(0.42px, -0.01px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const bunch2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.86px, 0.43px) rotate(-8deg)',
      'translate(-0.60px, -0.40px) rotate(6deg)',
      'translate(0.21px, 0.12px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const bunch3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.79px, -0.54px) rotate(-8deg)',
      'translate(-0.64px, 0.33px) rotate(6deg)',
      'translate(0.20px, -0.13px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const leafVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.66px, 0.67px) rotate(10deg)',
      'translate(-0.45px, -0.34px) rotate(-6deg)',
      'translate(0.14px, 0.12px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M15.5 17.9219C15.5 19.8549 13.933 21.4219 12 21.4219C10.067 21.4219 8.5 19.8549 8.5 17.9219C8.5 15.9889 10.067 14.4219 12 14.4219C13.933 14.4219 15.5 15.9889 15.5 17.9219Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bunchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.9px' }" />
            <motion.path d="M12 11.9219C12 13.8549 10.433 15.4219 8.5 15.4219C6.567 15.4219 5 13.8549 5 11.9219C5 9.98888 6.567 8.42188 8.5 8.42188C10.433 8.42188 12 9.98888 12 11.9219Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bunch2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 11.9px' }" />
            <motion.path d="M19 11.9219C19 13.8549 17.433 15.4219 15.5 15.4219C13.567 15.4219 12 13.8549 12 11.9219C12 9.98888 13.567 8.42188 15.5 8.42188C17.433 8.42188 19 9.98888 19 11.9219Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bunch3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 11.9px' }" />
            <motion.path d="M12 9.41979C12 9.41979 12 6.72748 14.1538 4.57364C15.1046 3.62293 16.1602 3.09186 17.0429 2.79521C17.7511 2.5572 18.1051 2.4382 18.5434 2.87642C18.9816 3.31464 18.8626 3.66874 18.6246 4.37693C18.3279 5.25962 17.7969 6.31524 16.8462 7.26595C16.4106 7.70155 15.9529 8.04905 15.5 8.32628" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 5.9px' }" />
            <path d="M12 10.4219V6.42188C12 5.95737 12 5.72512 11.9692 5.53079C11.7998 4.46106 10.9608 3.62208 9.89109 3.45265C9.69675 3.42188 9.4645 3.42188 9 3.42188" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
