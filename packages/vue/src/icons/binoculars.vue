<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BinocularsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// both barrels toe in from the hinge to focus, the bridge holding
// authored from scripts/authored
const rightVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.05px, 0.76px) rotate(7deg)',
      'translate(-0.01px, -0.32px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.64,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leftVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.05px, 0.76px) rotate(-7deg)',
      'translate(0.01px, -0.32px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.64,
      times: [0, 0.4, 0.72, 1],
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
            <motion.path d="M21.8551 15.5L18.9298 5.60666C18.6485 4.65457 17.7646 4 16.7601 4C15.475 4 14.4485 5.05662 14.502 6.32437L15 16M22 16.5C22 18.433 20.433 20 18.5 20C16.567 20 15 18.433 15 16.5C15 14.567 16.567 13 18.5 13C20.433 13 22 14.567 22 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.2px 12px' }" />
            <path d="M10 8H14M9 16H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2.14494 15.5L5.07067 5.60666C5.35192 4.65457 6.23586 4 7.24034 4C8.52545 4 9.55194 5.05662 9.49844 6.32437L9.00044 16M9 16.5C9 18.433 7.433 20 5.5 20C3.567 20 2 18.433 2 16.5C2 14.567 3.567 13 5.5 13C7.433 13 9 14.567 9 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.8px 12px' }" />
          </svg>
        </div>
</template>
