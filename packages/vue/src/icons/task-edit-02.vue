<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TaskEdit02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lines rewrite, then the pencil scribbles
// authored from scripts/authored
const lineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pencilVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.57px, -0.48px) rotate(-10deg)',
      'translate(0.34px, 0.39px) rotate(7deg)',
      'translate(-0.16px, -0.15px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
      delay: 0.28,
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
            <path d="M19 11.9999V7.99994C19 5.17151 19 3.7573 18.1213 2.87862C17.2426 1.99994 15.8284 1.99994 13 1.99994H9C6.17157 1.99994 4.75736 1.99994 3.87868 2.87862C3 3.7573 3 5.17151 3 7.99994V15.9999C3 18.8284 3 20.2426 3.87868 21.1213C4.75736 21.9999 6.17157 21.9999 9 21.9999H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14.5 1.99994H7.5C7.5 3.41415 7.5 4.12126 7.93934 4.5606C8.37868 4.99994 9.08579 4.99994 10.5 4.99994H11.5C12.9142 4.99994 13.6213 4.99994 14.0607 4.5606C14.5 4.12126 14.5 3.41415 14.5 1.99994Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 14.9999H11M7 10.9999H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.7367 21.6526L14 21.9999L14.3473 20.2633C14.4179 19.9105 14.5913 19.5866 14.8456 19.3322L18.9111 15.2668C19.2668 14.911 19.8437 14.911 20.1995 15.2668L20.7332 15.8005C21.0889 16.1563 21.0889 16.7331 20.7332 17.0889L16.6677 21.1543C16.4134 21.4087 16.0894 21.5821 15.7367 21.6526Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pencilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18.5px' }" />
          </svg>
        </div>
</template>
