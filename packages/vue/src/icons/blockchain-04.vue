<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Blockchain04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four links grow into the still nodes, square assembling
// authored from scripts/authored
const topVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.22)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.52,
      times: [0, 0.14, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const botVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.22)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.52,
      delay: 0.06,
      times: [0, 0.14, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rightVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.22)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.12,
      times: [0, 0.14, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.22)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.18,
      times: [0, 0.14, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M3.43934 8.56066C3.87868 9 4.58579 9 6 9C7.41421 9 8.12132 9 8.56066 8.56066C9 8.12132 9 7.41421 9 6C9 4.58579 9 3.87868 8.56066 3.43934C8.12132 3 7.41421 3 6 3C4.58579 3 3.87868 3 3.43934 3.43934C3 3.87868 3 4.58579 3 6C3 7.41421 3 8.12132 3.43934 8.56066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M15.4393 8.56066C15.8787 9 16.5858 9 18 9C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6C21 4.58579 21 3.87868 20.5607 3.43934C20.1213 3 19.4142 3 18 3C16.5858 3 15.8787 3 15.4393 3.43934C15 3.87868 15 4.58579 15 6C15 7.41421 15 8.12132 15.4393 8.56066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M15.4393 20.5607C15.8787 21 16.5858 21 18 21C19.4142 21 20.1213 21 20.5607 20.5607C21 20.1213 21 19.4142 21 18C21 16.5858 21 15.8787 20.5607 15.4393C20.1213 15 19.4142 15 18 15C16.5858 15 15.8787 15 15.4393 15.4393C15 15.8787 15 16.5858 15 18C15 19.4142 15 20.1213 15.4393 20.5607Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3.43934 20.5607C3.87868 21 4.58579 21 6 21C7.41421 21 8.12132 21 8.56066 20.5607C9 20.1213 9 19.4142 9 18C9 16.5858 9 15.8787 8.56066 15.4393C8.12132 15 7.41421 15 6 15C4.58579 15 3.87868 15 3.43934 15.4393C3 15.8787 3 16.5858 3 18C3 19.4142 3 20.1213 3.43934 20.5607Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 6H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="topVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 6px' }" />
            <motion.path d="M15 18H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="botVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M18 12L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 9px' }" />
            <motion.path d="M6 15L6 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12px' }" />
          </svg>
        </div>
</template>
