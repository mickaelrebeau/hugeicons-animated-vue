<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LabsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the liquid in the tube swirls and the flask bubbles
// authored from scripts/authored
const flaskVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, delay: 0.1, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const liquidVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(6deg)', 'rotate(-2deg)', 'rotate(0deg)'],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <path d="M17.5 21C15.567 21 14 19.433 14 17.5L14 3L21 3L21 17.5C21 19.433 19.433 21 17.5 21Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M22 3L13 3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M17 7H14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M10 16.875C10 19.9126 8 21 6 21C4 21 2 19.9126 2 16.875C2 13.8374 6 10 6 10C6 10 10 13.8374 10 16.875Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="flaskVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 15.5px' }" />
            <motion.path d="M14 12C15.083 11.1336 16.2974 9.87843 17.771 10.7626C19.0014 11.5009 20.0342 10.7244 21 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="liquidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 10.9px' }" />
          </svg>
        </div>
</template>
