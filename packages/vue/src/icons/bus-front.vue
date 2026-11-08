<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BusFrontIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the headlights blink and the windshield line rewrites
// authored from scripts/authored
const glassVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.64,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const lampVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.04, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lamp2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.12, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M14 3H10C7.17157 3 5.75736 3 4.87868 3.87868C4 4.75736 4 6.17157 4 9V19.25C4 19.9522 4 20.3033 4.16853 20.5556C4.24149 20.6648 4.33524 20.7585 4.44443 20.8315C4.69665 21 5.04777 21 5.75 21C6.45223 21 6.80335 21 7.05557 20.8315C7.16476 20.7585 7.25851 20.6648 7.33147 20.5556C7.5 20.3033 7.5 19.9522 7.5 19.25V19H16.5V19.25C16.5 19.9522 16.5 20.3033 16.6685 20.5556C16.7415 20.6648 16.8352 20.7585 16.9444 20.8315C17.1967 21 17.5478 21 18.25 21C18.9522 21 19.3033 21 19.5556 20.8315C19.6648 20.7585 19.7585 20.6648 19.8315 20.5556C20 20.3033 20 19.9522 20 19.25V9C20 6.17157 20 4.75736 19.1213 3.87868C18.2426 3 16.8284 3 14 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 6H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4 7L2 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M20 7L22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M4 13H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="glassVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M7 16H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lampVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 16px' }" />
            <motion.path d="M16 16H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lamp2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 16px' }" />
          </svg>
        </div>
</template>
