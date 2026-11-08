<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DoorIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the window cross turns a quarter in the door
// authored from scripts/authored
const windowVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const crossVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const knobVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
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
            <path d="M5 22V8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V22H5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 11V7C8 5.34533 8.34533 5 10 5H14C15.6547 5 16 5.34533 16 7V11C16 12.6547 15.6547 13 14 13H10C8.34533 13 8 12.6547 8 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <path d="M3 22H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 5V13M16 9L8 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crossVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M8.125 17H8M8.25 17C8.25 17.1381 8.13807 17.25 8 17.25C7.86193 17.25 7.75 17.1381 7.75 17C7.75 16.8619 7.86193 16.75 8 16.75C8.13807 16.75 8.25 16.8619 8.25 17Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="knobVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 17px' }" />
          </svg>
        </div>
</template>
