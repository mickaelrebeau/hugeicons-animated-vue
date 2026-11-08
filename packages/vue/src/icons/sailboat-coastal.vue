<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SailboatCoastalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the boat bobs while the waterline slides past
// authored from scripts/authored
const boatVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.22px, 0.01px) rotate(5deg)',
      'translate(-0.15px, 0.00px) rotate(-3.5deg)',
      'translate(0.07px, 0.00px) rotate(1.5deg)',
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

const boat2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.09px, 0.13px) rotate(5deg)',
      'translate(-0.76px, -0.04px) rotate(-3.5deg)',
      'translate(0.33px, 0.03px) rotate(1.5deg)',
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

const boat3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.91px, 0.21px) rotate(5deg)',
      'translate(-0.64px, -0.10px) rotate(-3.5deg)',
      'translate(0.27px, 0.06px) rotate(1.5deg)',
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

const waterVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M6 18C4.59373 17.0625 3.80546 15.9647 3.39377 14.9482C3.10599 14.2376 2.96211 13.8823 3.2594 13.4411C3.55669 13 4.0378 13 5 13L19 13C19.9622 13 20.4433 13 20.7406 13.4411C21.0379 13.8823 20.894 14.2376 20.6062 14.9482C20.1945 15.9647 19.4063 17.0625 18 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="boatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
            <motion.path d="M15.8417 3.46469L17.9109 6.30956C18.7796 7.50391 19.2139 8.10108 18.896 8.55054C18.5782 9 17.7215 9 16.0082 9L10.6283 9C8.44171 9 7.3484 9 7.06067 8.46141C6.77293 7.92283 7.52225 7.27894 9.02088 5.99117L12.3316 3.1463C13.2563 2.35171 13.7186 1.95441 14.2671 2.00416C14.8156 2.05391 15.1576 2.52417 15.8417 3.46469Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="boat2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 5.5px' }" />
            <motion.path d="M14 13L14 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="boat3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 7.5px' }" />
            <motion.path d="M2 21L22 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="waterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
