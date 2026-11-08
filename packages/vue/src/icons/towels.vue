<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TowelsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the folded towels sway on the rail
// authored from scripts/authored
const towelVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.65px, -0.03px) rotate(5deg)',
      'translate(0.46px, -0.01px) rotate(-3.5deg)',
      'translate(-0.20px, -0.00px) rotate(1.5deg)',
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

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M6.5 5L15 5C16.8856 5 17.8284 5 18.4142 5.58579C19 6.17157 19 7.11438 19 9V12C19 13.8856 19 14.8284 18.4142 15.4142C17.8284 16 16.8856 16 15 16H12C10.1144 16 9.17157 16 8.58579 15.4142C8 14.8284 8 13.8856 8 12L8 8M6.5 5C5.67157 5 5 5.67157 5 6.5V8H8M6.5 5C7.32843 5 8 5.67157 8 6.5V8M17 16C17 17.8856 17 18.8284 16.4142 19.4142C15.8284 20 14.8856 20 13 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16L5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="towelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M22 4V5C22 5.93188 22 6.39782 21.8478 6.76537C21.6448 7.25542 21.2554 7.64477 20.7654 7.84776C20.3978 8 19.9319 8 19 8M2 4V5C2 5.93188 2 6.39782 2.15224 6.76537C2.35523 7.25542 2.74458 7.64477 3.23463 7.84776C3.60218 8 4.06812 8 5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
          </svg>
        </div>
</template>
