<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Chemistry02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flask swirls on its neck and bubbles rise from the bottom
// authored from scripts/authored
const flaskVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.97px, -0.07px) rotate(8deg)',
      'translate(0.73px, -0.04px) rotate(-6deg)',
      'translate(-0.31px, -0.01px) rotate(2.5deg)',
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

const flask2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(8deg)',
      'translate(0.00px, 0.00px) rotate(-6deg)',
      'translate(0.00px, 0.00px) rotate(2.5deg)',
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

const bubbleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, -3px) scale(1)',
      'translate(0px, -6px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bubble2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, -3.25px) scale(1)',
      'translate(0px, -6.5px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.18,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
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
            <path d="M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M3 9L11 9M20 9H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15.2466 4V6.55767C15.2466 7.69966 15.2466 8.27065 15.3937 8.8188C15.5408 9.36696 15.8292 9.87028 16.4059 10.8769L17.1873 12.241C18.6568 14.8062 19.3916 16.0888 18.7888 17.0396L18.7795 17.0541C18.1679 18 16.6119 18 13.5 18C10.3881 18 8.83212 18 8.22055 17.0541L8.21123 17.0396C7.60843 16.0888 8.34319 14.8062 9.8127 12.241L10.5941 10.8769C11.1708 9.87028 11.4592 9.36696 11.6063 8.8188C11.7534 8.27065 11.7534 7.69966 11.7534 6.55767V4" stroke="currentColor" stroke-width="1.5" :variants="flaskVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 11px' }" />
            <motion.path d="M10.5 4L16.5 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flask2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 4px' }" />
            <motion.circle cx="12.4" cy="15.6" r="0.5" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="14.6" cy="15" r="0.5" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="bubble2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
