<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HandGrabIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the fingers curl in to grab
// authored from scripts/authored
const fingerVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.88px) scaleY(0.6)',
      'translate(0px, -0.09px) scaleY(1.04)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.06,
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

const finger2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.88px) scaleY(0.6)',
      'translate(0px, -0.09px) scaleY(1.04)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.03,
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

const finger3Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 1.05px) scaleY(0.7)',
      'translate(0px, -0.14px) scaleY(1.04)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
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
            <path d="M17.5 9.5V8.75C17.5 7.7835 18.2835 7 19.25 7C20.2165 7 21 7.7835 21 8.75V12.8C21 16.7765 17.7765 20 13.8 20H10.0588C6.16034 20 3 16.8397 3 12.9412V12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12V12.9412" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17.5 9.5V6.75C17.5 5.7835 16.7165 5 15.75 5C14.7835 5 14 5.7835 14 6.75V8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fingerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.8px 7.3px' }" />
            <motion.path d="M14 8.5V5.75C14 4.7835 13.2165 4 12.25 4C11.2835 4 10.5 4.7835 10.5 5.75V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="finger2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 6.3px' }" />
            <motion.path d="M10.5 8V6.75C10.5 5.7835 9.7165 5 8.75 5C7.7835 5 7 5.7835 7 6.75V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="finger3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.8px 8.5px' }" />
          </svg>
        </div>
</template>
