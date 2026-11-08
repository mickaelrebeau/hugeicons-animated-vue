<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KoFiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the heart beats in the cup and the handle answers
// authored from scripts/authored
const handleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.2,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const heartVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'],
    transition: { duration: 0.72, times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut' },
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
            <path d="M17 5.5H4C3.05719 5.5 2.58579 5.5 2.29289 5.79289C2 6.08579 2 6.55719 2 7.5V14.5C2 16.3856 2 17.3284 2.58579 17.9142C3.17157 18.5 4.11438 18.5 6 18.5H13C13.9319 18.5 14.3978 18.5 14.7654 18.3478C15.2554 18.1448 15.6448 17.7554 15.8478 17.2654C16 16.8978 16 16.4319 16 15.5H17C19.7614 15.5 22 13.2614 22 10.5C22 7.73858 19.7614 5.5 17 5.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17 13H16V8H17C18.3807 8 19.5 9.11929 19.5 10.5C19.5 11.8807 18.3807 13 17 13Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 10.5px' }" />
            <motion.path d="M5.58579 9.10051C6.36683 8.29983 7.63317 8.29983 8.41421 9.10051L9 9.70101L9.58579 9.10051C10.3668 8.29983 11.6332 8.29983 12.4142 9.10051C13.1953 9.90118 13.1953 11.1993 12.4142 12L9 15.5L5.58579 12C4.80474 11.1993 4.80474 9.90118 5.58579 9.10051Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 11.9px' }" />
          </svg>
        </div>
</template>
