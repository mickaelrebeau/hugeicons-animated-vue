<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RealEstate02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tree sways and the windows blink
// authored from scripts/authored
const windowVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const window2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const treeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.42px, 0.04px) rotate(-12deg)',
      'translate(0.29px, 0.02px) rotate(8.399999999999999deg)',
      'translate(-0.13px, 0.00px) rotate(-3.5999999999999996deg)',
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
            <path d="M21 22V7.4849C21 6.38738 21 5.83862 20.6845 5.37551C20.3689 4.9124 19.7876 4.608 18.6251 3.99921L17.1459 3.22461C15.3209 2.26893 14.4084 1.7911 13.7042 2.08712C13 2.38315 13 3.24459 13 4.96746V9" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M22 22H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21 8H19M21 11H19M21 14H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M8 13C8 11.1144 8 10.1716 8.58579 9.58579C9.17157 9 10.1144 9 12 9C13.8856 9 14.8284 9 15.4142 9.58579C16 10.1716 16 11.1144 16 13V22H8V13Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11.5 13H12.5M11.5 16H12.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="window2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.ellipse cx="3.5" cy="14" rx="1.5" ry="2" stroke="currentColor" stroke-width="1.5" :variants="treeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 14px' }" />
            <path d="M3.5 16V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
