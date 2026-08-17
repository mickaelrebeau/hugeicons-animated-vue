<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BarCode02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the thin guards scan while the two thick bars hold as anchors
// authored from scripts/authored
const g0Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const g1Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.06,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const g2Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.18,
      times: [0, 0.28, 0.68, 1],
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
            <motion.path d="M2 4V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="g0Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 20px' }" />
            <motion.path d="M5 4V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="g1Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 20px' }" />
            <motion.path d="M15 4V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="g2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 20px' }" />
            <path d="M8 18V6C8 5.05719 8 4.58579 8.29289 4.29289C8.58579 4 9.05719 4 10 4C10.9428 4 11.4142 4 11.7071 4.29289C12 4.58579 12 5.05719 12 6V18C12 18.9428 12 19.4142 11.7071 19.7071C11.4142 20 10.9428 20 10 20C9.05719 20 8.58579 20 8.29289 19.7071C8 19.4142 8 18.9428 8 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 18V6C18 5.05719 18 4.58579 18.2929 4.29289C18.5858 4 19.0572 4 20 4C20.9428 4 21.4142 4 21.7071 4.29289C22 4.58579 22 5.05719 22 6V18C22 18.9428 22 19.4142 21.7071 19.7071C21.4142 20 20.9428 20 20 20C19.0572 20 18.5858 20 18.2929 19.7071C18 19.4142 18 18.9428 18 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
