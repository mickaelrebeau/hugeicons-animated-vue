<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiChemistry02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flask is swirled on its base, the level sloshes with it, and the reaction sparks below
// authored from scripts/authored
const flaskVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(4deg)', 'rotate(-1.5deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.72,
      times: [0, 0.34, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const levelVariants: Variants = {
  normal: { transform: 'rotate(0deg) translateY(0px)' },
  animate: {
    transform: [
      'rotate(0deg) translateY(0px)',
      'rotate(6deg) translateY(-0.7px)',
      'rotate(-2deg) translateY(0.1px)',
      'rotate(0deg) translateY(0px)',
    ],
    transition: {
      duration: 0.72,
      times: [0, 0.34, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sparkVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.62, delay: 0.28, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M14.9998 22H6.40743C5.07774 22 3.99982 20.9221 3.99982 19.5924C3.99982 19.2033 4.09413 18.8199 4.27469 18.4752L9.49982 8.5V2H14.4998V8.5L16.4998 12.3181" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flaskVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.2px 22px' }" />
            <motion.path d="M7.99991 2H15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flaskVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.2px 22px' }" />
            <motion.path d="M7.99991 11.5H15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="levelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
            <motion.path d="M18.4999 15L18.242 15.697C17.9038 16.611 17.7347 17.068 17.4013 17.4014C17.0679 17.7348 16.6109 17.9039 15.6969 18.2421L14.9999 18.5L15.6969 18.7579C16.6109 19.0961 17.0679 19.2652 17.4013 19.5986C17.7347 19.932 17.9038 20.389 18.242 21.303L18.4999 22L18.7578 21.303C19.096 20.389 19.2651 19.932 19.5985 19.5986C19.9319 19.2652 20.3889 19.0961 21.3029 18.7579L21.9999 18.5L21.3029 18.2421C20.3889 17.9039 19.9319 17.7348 19.5985 17.4014C19.2651 17.068 19.096 16.611 18.7578 15.697L18.4999 15Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18.5px' }" />
          </svg>
        </div>
</template>
