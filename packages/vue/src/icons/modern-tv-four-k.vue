<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ModernTvFourKIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the 4K label flips on the screen
// authored from scripts/authored
const fourVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const kVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, delay: 0.1, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const standVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.8)',
      'translate(0.00px, 0px) scaleX(1.04)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.2,
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
            <path d="M16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6 7V9C6 9.55228 6.44772 10 7 10H9.5M10 7V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fourVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 10px' }" />
            <motion.path d="M14 7V13M18 7L14.5 10L18 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="kVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 10px' }" />
            <motion.path d="M16 21C14.8233 20.364 13.4571 20 12 20C10.5429 20 9.17669 20.364 8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="standVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
          </svg>
        </div>
</template>
