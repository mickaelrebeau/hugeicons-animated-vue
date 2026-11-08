<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KettleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the kettle tips to pour
// authored from scripts/authored
const kettleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.07px, 1.79px) rotate(-12deg)',
      'translate(-1.07px, 1.79px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const kettle2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.63px, 1.96px) rotate(-12deg)',
      'translate(-2.63px, 1.96px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const kettle3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.50px, -0.26px) rotate(-12deg)',
      'translate(-1.50px, -0.26px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const kettle4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.67px, 1.96px) rotate(-12deg)',
      'translate(-2.67px, 1.96px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const kettle5Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.59px, 2.37px) rotate(-12deg)',
      'translate(-0.59px, 2.37px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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
            <motion.path d="M2 17C2 18.9497 2.02815 21 4.4 21H15.6C17.9718 21 18 18.9497 18 17C18 12.5817 14.4183 9 10 9C5.58172 9 2 12.5817 2 17Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="kettleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 15px' }" />
            <motion.path d="M8 9V8C8 6.89543 8.89543 6 10 6C11.1046 6 12 6.89543 12 8V9" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="kettle2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 7.5px' }" />
            <motion.path d="M18 17C19.1046 17 20 16.1046 20 15V13C20 11.8954 20.8954 11 22 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="kettle3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 14px' }" />
            <motion.path d="M16 11.5V9C16 5.68629 13.3137 3 10 3C6.68629 3 4 5.68629 4 9V11.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="kettle4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 7.3px' }" />
            <motion.path d="M2 17H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="kettle5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 17px' }" />
          </svg>
        </div>
</template>
