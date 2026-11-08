<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PrescriptionsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pill tumbles a half turn beside the script
// authored from scripts/authored
const lineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line2Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.08,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line3Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.16,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pillVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(36deg)',
      'rotate(125.99999999999999deg)',
      'rotate(185.4deg)',
      'rotate(180deg)',
    ],
    transition: {
      duration: 0.72,
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
            <path d="M10 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V8C3 5.17157 3 3.75736 3.87868 2.87868C4.75736 2 6.17157 2 9 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 7H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 11H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="line2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 15H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="line3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.6213 21.3787L20.3787 17.6213C20.7765 17.2235 21 16.6839 21 16.1213C21 14.9497 20.0503 14 18.8787 14C18.3161 14 17.7765 14.2235 17.3787 14.6213L13.6213 18.3787C13.2235 18.7765 13 19.3161 13 19.8787C13 21.0503 13.9497 22 15.1213 22C15.6839 22 16.2235 21.7765 16.6213 21.3787Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pillVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
            <motion.path d="M15.5 16.5L18.5 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pillVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
          </svg>
        </div>
</template>
