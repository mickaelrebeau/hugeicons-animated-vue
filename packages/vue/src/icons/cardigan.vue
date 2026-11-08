<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CardiganIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cardigan shrugs on and its buttons pop down the placket
// authored from scripts/authored
const knitVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(1, 1)' },
  animate: {
    transform: [
      'translateY(0px) scale(1, 1)',
      'translateY(-0.6px) scale(1.03, 0.97)',
      'translateY(0.15px) scale(0.99, 1.01)',
      'translateY(0px) scale(1, 1)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.3, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const buttonVariants: Variants = {
  normal: { transform: 'scale(0)', opacity: 0 },
  animate: {
    transform: ['scale(0)', 'scale(0)', 'scale(1.5)', 'scale(1)', 'scale(1)'],
    opacity: [0, 0, 1, 1, 0],
    transition: {
      duration: 0.9,
      delay: 0,
      times: [0, 0.2, 0.34, 0.5, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'easeIn',
      ],
    },
  },
};

const button2Variants: Variants = {
  normal: { transform: 'scale(0)', opacity: 0 },
  animate: {
    transform: ['scale(0)', 'scale(0)', 'scale(1.5)', 'scale(1)', 'scale(1)'],
    opacity: [0, 0, 1, 1, 0],
    transition: {
      duration: 0.9,
      delay: 0.08,
      times: [0, 0.2, 0.34, 0.5, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'easeIn',
      ],
    },
  },
};

const button3Variants: Variants = {
  normal: { transform: 'scale(0)', opacity: 0 },
  animate: {
    transform: ['scale(0)', 'scale(0)', 'scale(1.5)', 'scale(1)', 'scale(1)'],
    opacity: [0, 0, 1, 1, 0],
    transition: {
      duration: 0.9,
      delay: 0.16,
      times: [0, 0.2, 0.34, 0.5, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'easeIn',
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
            <motion.path d="M6.5 16L5 21H2L2.88566 7.71504C2.95649 6.65269 3.58507 5.70746 4.53738 5.23131L9 3C10.4175 4.59466 13.5825 4.59466 15 3L19.4626 5.23131C20.4149 5.70746 21.0435 6.65269 21.1143 7.71504L22 21H19L17.5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M6 9L7 19L8 21H16L17 19L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8.5 3.5C8.5 3.5 8.5 7.37324 11.2949 8.73146C11.6964 8.92661 12 9.30782 12 9.7543V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M15.5 3.5C15.5 3.5 15.5 8 12 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.circle cx="13.6" cy="12.2" r="0.4" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="buttonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="13.6" cy="15" r="0.4" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="button2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="13.6" cy="17.8" r="0.4" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="button3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
