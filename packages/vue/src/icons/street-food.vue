<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'StreetFoodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two skewers hop and their sticks wobble
// authored from scripts/authored
const steamVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 1, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const steam2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const skewerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
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

const skewer2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.12,
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
            <motion.path d="M7 4.5C7 5.5 8 5.5 8 6.5C8 7.5 7 7.5 7 8.5C7 9.5 8 9.5 8 10.5C8 11.5 7 11.5 7 12.5C7 13.5 8 13.5 8 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="steamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 4.5C16 5.5 17 5.5 17 6.5C17 7.5 16 7.5 16 8.5C16 9.5 17 9.5 17 10.5C17 11.5 16 11.5 16 12.5C16 13.5 17 13.5 17 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="steam2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M7.5 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16.5 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M4.5 5C4.5 3.34315 5.84315 2 7.5 2C9.15685 2 10.5 3.34315 10.5 5V14C10.5 15.6569 9.15685 17 7.5 17C5.84315 17 4.5 15.6569 4.5 14V5Z" stroke="currentColor" stroke-width="1.5" :variants="skewerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 9.5px' }" />
            <motion.path d="M13.5 5C13.5 3.34315 14.8431 2 16.5 2C18.1569 2 19.5 3.34315 19.5 5V14C19.5 15.6569 18.1569 17 16.5 17C14.8431 17 13.5 15.6569 13.5 14V5Z" stroke="currentColor" stroke-width="1.5" :variants="skewer2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 9.5px' }" />
          </svg>
        </div>
</template>
