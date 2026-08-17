<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BikeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the motorbike wheelies from the rear contact, lamp frame and front wheel riding together
// authored from scripts/authored
const wheelRVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.73px, 0.08px) rotate(-12deg)',
      'translate(0.31px, 0.01px) rotate(5deg)',
      'translate(-0.12px, 0.00px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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

const wheelFVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.01px, -2.63px) rotate(-12deg)',
      'translate(0.26px, 1.15px) rotate(5deg)',
      'translate(-0.13px, -0.45px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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

const lampVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.53px, -1.63px) rotate(-12deg)',
      'translate(1.36px, 0.89px) rotate(5deg)',
      'translate(-0.56px, -0.32px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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

const frameVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.75px, -1.60px) rotate(-12deg)',
      'translate(0.62px, 0.77px) rotate(5deg)',
      'translate(-0.27px, -0.29px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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
            <motion.path d="M5.5 20.5C7.433 20.5 9 18.933 9 17C9 15.067 7.433 13.5 5.5 13.5C3.567 13.5 2 15.067 2 17C2 18.933 3.567 20.5 5.5 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wheelRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 17px' }" />
            <motion.path d="M18.5 20.5C20.433 20.5 22 18.933 22 17C22 15.067 20.433 13.5 18.5 13.5C16.567 13.5 15 15.067 15 17C15 18.933 16.567 20.5 18.5 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wheelFVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17px' }" />
            <motion.path d="M15 4V4.5M16 4.5C16 5.05228 15.5523 5.5 15 5.5C14.4477 5.5 14 5.05228 14 4.5C14 3.94772 14.4477 3.5 15 3.5C15.5523 3.5 16 3.94772 16 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lampVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 4.5px' }" />
            <motion.path d="M12 18.4998V16.1567C12 15.3392 12 14.9305 11.8478 14.5629C11.6955 14.1954 11.4065 13.9063 10.8284 13.3283L9.91421 12.4141C9.24755 11.7474 8.91422 11.4141 8.91422 10.9998C8.91422 10.5856 9.24755 10.2523 9.91422 9.58564L11.0858 8.41406C11.7525 7.7474 12.0858 7.41406 12.5 7.41406C12.9142 7.41406 13.2475 7.7474 13.9142 8.41406L14.8284 9.32828C15.4065 9.90634 15.6955 10.1954 16.0631 10.3476C16.4306 10.4998 16.8394 10.4998 17.6569 10.4998H19M13.5 8.49985L10 11.9998M12.5 8.49985L10 10.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 13px' }" />
          </svg>
        </div>
</template>
