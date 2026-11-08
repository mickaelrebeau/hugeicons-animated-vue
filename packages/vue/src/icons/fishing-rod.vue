<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FishingRodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the rod flexes and the reel spins
// authored from scripts/authored
const reelVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rodVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.66px, -0.61px) rotate(-4deg)',
      'translate(0.32px, 0.32px) rotate(2deg)',
      'translate(-0.16px, -0.16px) rotate(-1deg)',
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
            <motion.path d="M9 18C10.1046 18 11 17.1046 11 16C11 14.8954 10.1046 14 9 14C7.89543 14 7 14.8954 7 16C7 17.1046 7.89543 18 9 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="reelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 16px' }" />
            <path d="M21 15H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17 18.9821C17 20.0966 17.8954 21 19 21C20.1046 21 21 20.0966 21 18.9821V8.12841C21 5.01842 21 3.46342 20.074 3.07643C19.1481 2.68945 18.0583 3.789 15.8787 5.98809L3.41421 18.5642C3.149 18.8318 3 19.1947 3 19.5731C3 20.3612 3.63317 21 4.41421 21C4.78929 21 5.149 20.8497 5.41421 20.5821L8 17.9731" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rodVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.8px' }" />
          </svg>
        </div>
</template>
