<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Fuel01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the can tips to pour and a drop falls
// authored from scripts/authored
const canVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.63px, -1.26px) rotate(10deg)',
      'translate(1.63px, -1.26px) rotate(10deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const dropVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, 3px)', 'translate(0px, -3px)', 'translate(0px, 0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.16,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const can2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(2.34px, -0.76px) rotate(10deg)',
      'translate(2.34px, -0.76px) rotate(10deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const can3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(3.43px, -1.83px) rotate(10deg)',
      'translate(3.43px, -1.83px) rotate(10deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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
            <motion.path d="M10.1115 4.5H8C6.11438 4.5 5.17157 4.5 4.58579 5.08579C4 5.67157 4 6.61438 4 8.5V16C4 18.8284 4 20.2426 4.87868 21.1213C5.75736 22 7.17157 22 10 22H14C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V13.4443C20 11.0386 20 9.83582 19.4026 8.86921C18.8052 7.9026 17.7294 7.36469 15.5777 6.28885L13.6892 5.34458C12.8484 4.9242 12.428 4.71401 11.9747 4.607C11.5215 4.5 11.0515 4.5 10.1115 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="canVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.3px' }" />
            <motion.path d="M12 18C13.1046 18 14 17.1605 14 16.125C14 14.875 12 13 12 13C12 13 10 14.875 10 16.125C10 17.1605 10.8954 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
            <motion.path d="M12.5 8L16.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="can2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 9px' }" />
            <motion.path d="M6 4.5V3.75C6 3.04777 6 2.69665 6.16853 2.44443C6.24149 2.33524 6.33524 2.24149 6.44443 2.16853C6.69665 2 7.04777 2 7.75 2C8.45223 2 8.80335 2 9.05557 2.16853C9.16476 2.24149 9.25851 2.33524 9.33147 2.44443C9.5 2.69665 9.5 3.04777 9.5 3.75V4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="can3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 3.3px' }" />
          </svg>
        </div>
</template>
