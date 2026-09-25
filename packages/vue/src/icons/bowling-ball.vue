<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BowlingBallIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball rocks forward and back, its finger holes circling the center
// authored from scripts/authored
const ballVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(1.8px)',
      'translateX(-0.5px)',
      'translateX(0.15px)',
      'translateX(0px)',
    ],
    transition: {
      duration: 0.8,
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

const holeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.24px, 5.45px) rotate(48deg)',
      'translate(-0.90px, -1.36px) rotate(-14deg)',
      'translate(0.19px, 0.43px) rotate(4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const hole2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(3.47px, 4.21px) rotate(48deg)',
      'translate(-1.54px, -0.55px) rotate(-14deg)',
      'translate(0.41px, 0.22px) rotate(4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const hole3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.82px, 2.15px) rotate(48deg)',
      'translate(-0.54px, -0.42px) rotate(-14deg)',
      'translate(0.13px, 0.14px) rotate(4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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
            <motion.g :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px', transformBox: 'view-box' }">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
              <motion.path d="M18.125 9H18M18.25 9C18.25 9.13807 18.1381 9.25 18 9.25C17.8619 9.25 17.75 9.13807 17.75 9C17.75 8.86193 17.8619 8.75 18 8.75C18.1381 8.75 18.25 8.86193 18.25 9Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="holeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 9px' }" />
              <motion.path d="M15.125 6H15M15.25 6C15.25 6.13807 15.1381 6.25 15 6.25C14.8619 6.25 14.75 6.13807 14.75 6C14.75 5.86193 14.8619 5.75 15 5.75C15.1381 5.75 15.25 5.86193 15.25 6Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hole2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 6px' }" />
              <motion.path d="M14.125 10H14M14.25 10C14.25 10.1381 14.1381 10.25 14 10.25C13.8619 10.25 13.75 10.1381 13.75 10C13.75 9.86193 13.8619 9.75 14 9.75C14.1381 9.75 14.25 9.86193 14.25 10Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hole3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 10px' }" />
            </motion.g>
          </svg>
        </div>
</template>
