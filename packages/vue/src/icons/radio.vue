<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RadioIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the antenna wobbles, the dial pops and the band marks blink
// authored from scripts/authored
const dialVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.14)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const antennaVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.30px, 0.53px) rotate(14deg)',
      'translate(-0.28px, -0.32px) rotate(-9.799999999999999deg)',
      'translate(0.10px, 0.15px) rotate(4.2deg)',
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

const bandVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.14, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.circle cx="14.5" cy="13.5" r="3.5" stroke="currentColor" stroke-width="1.5" :variants="dialVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 13.5px' }" />
            <path d="M2 13.5C2 9.74142 2 7.86213 3.0528 6.60746C3.22119 6.40678 3.40678 6.22119 3.60746 6.0528C4.86213 5 6.74142 5 10.5 5H13.5C17.2586 5 19.1379 5 20.3925 6.0528C20.5932 6.22119 20.7788 6.40678 20.9472 6.60746C22 7.86213 22 9.74142 22 13.5C22 17.2586 22 19.1379 20.9472 20.3925C20.7788 20.5932 20.5932 20.7788 20.3925 20.9472C19.1379 22 17.2586 22 13.5 22H10.5C6.74142 22 4.86213 22 3.60746 20.9472C3.40678 20.7788 3.22119 20.5932 3.0528 20.3925C2 19.1379 2 17.2586 2 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 5L14 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="antennaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <motion.path d="M6 12H7M6 15H7" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
