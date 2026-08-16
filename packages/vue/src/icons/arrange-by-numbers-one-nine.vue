<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrangeByNumbersOneNineIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// one stays on top, nine drops below — ascending — and the sort-arrow confirms
// authored from scripts/authored
const oneVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'],
    transition: { duration: 0.54, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const nineVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.6px)', 'translateY(-0.3px)', 'translateY(0px)'],
    transition: { duration: 0.58, delay: 0.1, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sortVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.4px)',
      'translate(0px, -0.288px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.08,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M7 10.0002V3.94897C7 3.37446 7 3.0872 6.76959 3.01571C6.26306 2.85855 5.5 3.99988 5.5 3.99988M7 10.0002H5.5M7 10.0002H8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="oneVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 6.4px' }" />
            <motion.path d="M9 17.5V15.75C9 14.925 9 14.5126 8.70711 14.2563C8.41421 14 7.94281 14 7 14C6.05719 14 5.58579 14 5.29289 14.2563C5 14.5126 5 14.925 5 15.75C5 16.575 5 16.9874 5.29289 17.2437C5.58579 17.5 6.05719 17.5 7 17.5H9ZM9 17.5V18.375C9 19.6124 9 20.2312 8.56066 20.6156C8.12132 21 7.41421 21 6 21H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 17.5px' }" />
            <motion.path d="M16.5 20V4M16.5 20C15.7998 20 14.4915 18.0057 14 17.5M16.5 20C17.2002 20 18.5085 18.0057 19 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sortVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
          </svg>
        </div>
</template>
