<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DropletsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the small drop falls and the big one wobbles
// authored from scripts/authored
const dropVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.54px) scale(0.94)',
      'translate(0.00px, -0.36px) scale(1.04)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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

const drop2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.4px)',
      'translate(0px, -2.4px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.2,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M16 18.3375C14.7182 19.9602 12.731 21.002 10.5 21.002C6.63401 21.002 3.5 17.8738 3.5 14.015C3.5 10.7847 6.4327 6.71808 8.50161 4.25113C8.99925 3.65774 9.24808 3.36104 9.64473 3.17374C10.1298 2.94467 10.8704 2.94469 11.3554 3.17379C11.7521 3.36111 12.0014 3.65842 12.5 4.25304" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.8px 12px' }" />
            <motion.path d="M17 15.0347C18.933 15.0347 20.5 13.3853 20.5 11.3505C20.5 10.4291 20.0709 9.37872 19.5133 8.40256C18.6116 6.82429 18.1608 6.03516 17 6.03516C15.8392 6.03516 15.3884 6.82429 14.4867 8.40256C13.9291 9.37872 13.5 10.4291 13.5 11.3505C13.5 13.3853 15.067 15.0347 17 15.0347Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="drop2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 10.5px' }" />
            <motion.path d="M10.5 17.0352C8.84315 17.0352 7.5 15.692 7.5 14.0352" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
