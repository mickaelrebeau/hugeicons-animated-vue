<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Chemistry03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the round flask boils: it rattles and bubbles stream up the neck
// authored from scripts/authored
const boilVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.5px, 0px)',
      'translate(0.5px, 0px)',
      'translate(-0.2px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
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
      'translate(0px, -3px) scale(1)',
      'translate(0px, -6px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.14,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bubble3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, -2.7px) scale(1)',
      'translate(0px, -5.4px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.28,
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
            <motion.path d="M10.5 4L16.5 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 4px' }" />
            <motion.path d="M11.7 4V8.95233C11.7 9.35352 11.4544 9.70728 11.1119 9.91618C9.84338 10.6899 9 12.0617 9 13.625C9 16.0412 11.0147 18 13.5 18C15.9853 18 18 16.0412 18 13.625C18 12.0617 17.1566 10.6899 15.8881 9.91618C15.5456 9.70728 15.3 9.35352 15.3 8.95233V4" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="boilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 11px' }" />
            <motion.circle cx="12.4" cy="15" r="0.5" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="14.6" cy="14.6" r="0.5" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="bubble2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="13.5" cy="13.4" r="0.5" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="bubble3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
