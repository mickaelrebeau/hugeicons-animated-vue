<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MagnetIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the magnet tilts to pull
// authored from scripts/authored
const magnetVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.56px, 0.14px) rotate(-10deg)',
      'translate(0.94px, 0.05px) rotate(6deg)',
      'translate(-0.31px, 0.01px) rotate(-2deg)',
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

const magnet2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.38px, 0.21px) rotate(-10deg)',
      'translate(1.43px, 0.08px) rotate(6deg)',
      'translate(-0.48px, 0.01px) rotate(-2deg)',
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
            <motion.path d="M3.925 2.5H9.15C9.15 2.5 8.2 7.7 8.2 10.1C8.2 13.1 10.1 15.5 12 15.5C13.9 15.5 15.8 13.1 15.8 10.1C15.8 7.7 14.85 2.5 14.85 2.5H20.075C20.075 2.5 21.5 7.13842 21.5 11.5C21.5 17 17.7 21.5 12 21.5C6.3 21.5 2.5 17 2.5 11.5C2.5 7.13842 3.925 2.5 3.925 2.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="magnetVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2.97266 7.25H8.19766M15.7977 7.25L21.0227 7.25" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="magnet2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.3px' }" />
          </svg>
        </div>
</template>
