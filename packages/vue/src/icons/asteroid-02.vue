<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Asteroid02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the rock and its speed lines streak up-right as one meteor, then settle back
// authored from scripts/authored
const rockVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.5px, 1.4px) translate(0.00px, 0.00px) rotate(-14deg)',
      'translate(3px, -2.8px) translate(0.00px, 0.00px) rotate(10deg)',
      'translate(0.7px, -0.6px) translate(0.00px, 0.00px) rotate(2deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.76,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const trailsVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.5px, 1.4px) translate(-1.48px, -1.05px) rotate(-14deg)',
      'translate(3px, -2.8px) translate(0.88px, 0.95px) rotate(10deg)',
      'translate(0.7px, -0.6px) translate(0.19px, 0.18px) rotate(2deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.76,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
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
            <motion.path d="M17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 10.3579 5.35786 7 9.5 7C13.6421 7 17 10.3579 17 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 14.5px' }" />
            <motion.path d="M7 13L14.5 5.50003M18 2L16.5 3.5M22 6.00003L19 9M11 16L14 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="trailsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 9px' }" />
          </svg>
        </div>
</template>
