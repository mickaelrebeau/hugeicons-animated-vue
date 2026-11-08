<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'QuestionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the thought bubble pops above the head and its dots blink
// authored from scripts/authored
const dotsVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 0.1, 1, 1],
    transition: { duration: 0.6, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const bubbleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(-2.40px, 2.10px) scale(0.7)',
      'translate(0.64px, -0.56px) scale(1.08)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
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
            <motion.path d="M15.4 7.49944H15.35M18.7 7.4996H18.65M15.45 7.49944C15.45 7.55467 15.4052 7.59944 15.35 7.59944C15.2948 7.59944 15.25 7.55467 15.25 7.49944C15.25 7.44422 15.2948 7.39944 15.35 7.39944C15.4052 7.39944 15.45 7.44422 15.45 7.49944ZM18.75 7.4996C18.75 7.55483 18.7052 7.5996 18.65 7.5996C18.5948 7.5996 18.55 7.55483 18.55 7.4996C18.55 7.44437 18.5948 7.3996 18.65 7.3996C18.7052 7.3996 18.75 7.44437 18.75 7.4996Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 12.5667C19.7611 12.5667 22 10.425 22 7.78339C22 5.14181 19.7611 3.00003 17 3.00003C14.2389 3.00003 12 5.14181 12 7.78339C12 9.05257 12.5167 10.2058 13.3594 11.0616C13.545 11.25 13.6689 11.5074 13.6189 11.7724C13.5364 12.2056 13.3494 12.6097 13.0756 12.9465C13.796 13.0805 14.5451 12.9598 15.1875 12.6182L15.1881 12.6179C15.4148 12.4973 15.5282 12.437 15.6083 12.4248C15.6884 12.4126 15.8032 12.4341 16.0327 12.4772C16.3516 12.5371 16.6753 12.5671 17 12.5667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 8px' }" />
            <path d="M10 13C10 14.6569 8.65685 16 7 16C5.34315 16 4 14.6569 4 13C4 11.3432 5.34315 10 7 10C8.65685 10 10 11.3432 10 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 21C12 18.2386 9.76142 16 7 16C4.23858 16 2 18.2386 2 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
