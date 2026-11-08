<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CurtainsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the curtains sway open from the rod and fall back
// authored from scripts/authored
const curtainVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.10px, -0.07px) rotate(7deg)',
      'translate(0.47px, -0.01px) rotate(-3deg)',
      'translate(-0.16px, -0.00px) rotate(1deg)',
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

const curtain2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.10px, -0.07px) rotate(-7deg)',
      'translate(-0.47px, -0.01px) rotate(3deg)',
      'translate(0.16px, -0.00px) rotate(-1deg)',
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
            <path d="M22 3L2 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M5 14C5.5985 13.2925 6.76719 11.3937 7 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19 14C18.4015 13.2925 17.2328 11.3937 17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M3 3V14.625M3 14.625V16.75C3 18.7535 3 19.7552 3.58579 20.3776C4.17157 21 5.11438 21 7 21H8C8 19.5311 7.6 16.0778 6 14.0154M3 14.625C4.14794 14.5482 5.14101 14.3343 6 14.0154M6 14.0154C9.88075 12.5749 12.0001 7.21447 12 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="curtainVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 12px' }" />
            <motion.path d="M21 3V14.625M21 14.625V16.75C21 18.7535 21 19.7552 20.4142 20.3776C19.8284 21 18.8856 21 17 21H16C16 19.5311 16.4 16.0778 18 14.0154M21 14.625C19.8521 14.5482 18.859 14.3343 18 14.0154M18 14.0154C14.1192 12.5749 11.9999 7.21447 12 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="curtain2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
          </svg>
        </div>
</template>
