<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorMagicSelection02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pointer clicks and the sparkles twinkle above it
// authored from scripts/authored
const pointerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scale(1)',
      'translate(-0.7px, -0.7px) scale(0.92)',
      'translate(0.1px, 0.1px) scale(1.02)',
      'translate(0px, 0px) scale(1)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.3, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
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
    transition: { duration: 0.62, delay: 0.1, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const spark2Variants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.62, delay: 0.24, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M6.99069 4.56404C5.14721 3.92359 4.06068 3.76816 3.41442 4.41442C2.49121 5.33764 3.20405 7.15934 4.62973 10.8028L6.99069 16.8363C8.35243 20.3163 9.03329 22.0563 10.1133 21.9986C11.1934 21.9409 11.6886 20.125 12.6791 16.4933C12.974 15.4119 13.1215 14.8712 13.4963 14.4963C13.8712 14.1215 14.4119 13.974 15.4933 13.6791C19.125 12.6886 20.9409 12.1934 20.9986 11.1133C21.0428 10.287 20.0346 9.69434 18 8.85164" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pointerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 12.9px' }" />
            <motion.path d="M11.4999 4C12.1 5.62152 13.3784 6.89998 14.9999 7.5C13.3784 8.10002 12.1 9.37848 11.4999 11C10.8999 9.37848 9.62146 8.10002 7.99994 7.5C9.62146 6.89998 10.8999 5.62152 11.4999 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 7.5px' }" />
            <motion.path d="M15.7499 2C15.9642 2.57911 16.4208 3.03571 16.9999 3.25C16.4208 3.46429 15.9642 3.92089 15.7499 4.5C15.5356 3.92089 15.0791 3.46429 14.4999 3.25C15.0791 3.03571 15.5356 2.57911 15.7499 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spark2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.7px 3.3px' }" />
          </svg>
        </div>
</template>
