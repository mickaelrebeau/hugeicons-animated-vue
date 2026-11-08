<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CandelierIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the chandelier swings from its ceiling mount like a pendulum
// authored from scripts/authored
const lampVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.53px, -1.01px) rotate(7deg)',
      'translate(1.16px, 0.60px) rotate(-5deg)',
      'translate(-0.56px, -0.34px) rotate(2.5deg)',
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

const lamp2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.95px, -0.12px) rotate(7deg)',
      'translate(1.39px, -0.06px) rotate(-5deg)',
      'translate(-0.70px, -0.02px) rotate(2.5deg)',
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

const lamp3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.64px, 0.82px) rotate(7deg)',
      'translate(1.10px, -0.70px) rotate(-5deg)',
      'translate(-0.57px, 0.31px) rotate(2.5deg)',
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

const stemVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.85px, -0.05px) rotate(7deg)',
      'translate(0.61px, -0.03px) rotate(-5deg)',
      'translate(-0.31px, -0.01px) rotate(2.5deg)',
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

const armsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.97px, -0.06px) rotate(7deg)',
      'translate(0.70px, -0.03px) rotate(-5deg)',
      'translate(-0.35px, -0.01px) rotate(2.5deg)',
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
            <motion.path d="M6.25874 15.3167C5.89456 14.6299 5.5845 14 4.5 14C3.4155 14 3.10544 14.6299 2.74126 15.3167C2.40259 15.9554 1.6151 16.9661 2.22461 17.6457C2.54234 18 3.19489 18 4.5 18C5.80511 18 6.45766 18 6.77539 17.6457C7.3849 16.9661 6.59741 15.9554 6.25874 15.3167Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lampVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 16px' }" />
            <motion.path d="M13.7587 18.3167C13.3946 17.6299 13.0845 17 12 17C10.9155 17 10.6054 17.6299 10.2413 18.3167C9.90259 18.9554 9.1151 19.9661 9.72461 20.6457C10.0423 21 10.6949 21 12 21C13.3051 21 13.9577 21 14.2754 20.6457C14.8849 19.9661 14.0974 18.9554 13.7587 18.3167Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lamp2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M21.2587 15.3167C20.8945 14.6299 20.5845 14 19.5 14C18.4155 14 18.1054 14.6299 17.7413 15.3167C17.4026 15.9554 16.6151 16.9661 17.2246 17.6457C17.5423 18 18.1949 18 19.5 18C20.8051 18 21.4577 18 21.7754 17.6457C22.3849 16.9661 21.5974 15.9554 21.2587 15.3167Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lamp3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 16px' }" />
            <path d="M9 3H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 3L12 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M4.5 14V11.75C4.5 9.67893 6.17893 8 8.25 8C10.3211 8 12 9.67893 12 11.75C12 9.67893 13.6789 8 15.75 8C17.8211 8 19.5 9.67893 19.5 11.75V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
          </svg>
        </div>
</template>
