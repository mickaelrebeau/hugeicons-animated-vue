<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SocksIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two socks kick one after the other
// authored from scripts/authored
const rightVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-8deg)',
      'translate(0.00px, 0.00px) rotate(5.6deg)',
      'translate(0.00px, 0.00px) rotate(-2.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.18,
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

const right2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.30px, 0.22px) rotate(-8deg)',
      'translate(-0.89px, -0.26px) rotate(5.6deg)',
      'translate(0.39px, 0.08px) rotate(-2.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.18,
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

const leftVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(8deg)',
      'translate(0.00px, 0.00px) rotate(-5.6deg)',
      'translate(0.00px, 0.00px) rotate(2.4deg)',
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

const left2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.23px, -0.60px) rotate(8deg)',
      'translate(0.91px, 0.32px) rotate(-5.6deg)',
      'translate(-0.38px, -0.16px) rotate(2.4deg)',
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

const right3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.77px, 0.37px) rotate(-8deg)',
      'translate(-1.20px, -0.40px) rotate(5.6deg)',
      'translate(0.53px, 0.14px) rotate(-2.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.18,
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

const left3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.50px, -0.52px) rotate(8deg)',
      'translate(1.09px, 0.24px) rotate(-5.6deg)',
      'translate(-0.46px, -0.14px) rotate(2.4deg)',
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

const right4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.37px, -0.38px) rotate(-8deg)',
      'translate(-0.99px, 0.15px) rotate(5.6deg)',
      'translate(0.42px, -0.09px) rotate(-2.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.18,
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
            <motion.path d="M13.5 6V5C13.5 4.05719 13.5 3.58579 13.7929 3.29289C14.0858 3 14.5572 3 15.5 3H18.5C19.4428 3 19.9142 3 20.2071 3.29289C20.5 3.58579 20.5 4.05719 20.5 5V6H13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 4.5px' }" />
            <motion.path d="M20.5 6V13.3395C20.5 14.4025 20.0769 15.4218 19.3241 16.1723L15.5161 19.9685C14.1398 21.3438 11.9085 21.3438 10.5322 19.9685C9.15593 18.5933 9.15594 16.3635 10.5322 14.9882L13.5 12V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="right2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 13.7px' }" />
            <motion.path d="M10.5 6H7.5V5C7.5 4.05719 7.5 3.58579 7.79289 3.29289C8.08579 3 8.55719 3 9.5 3H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 4.5px' }" />
            <motion.path d="M7.5 6V12L4.5322 14.9882C3.15594 16.3635 3.15593 18.5933 4.5322 19.9685C5.34165 20.7774 6.4469 21.1105 7.5 20.9679" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="left2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.3px 13.6px' }" />
            <motion.path d="M11 14.5L16 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="right3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 17px' }" />
            <motion.path d="M5 14.5L7 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="left3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 15.5px' }" />
            <motion.path d="M20.5 12C18.8431 12 17.5 13.3431 17.5 15C17.5 15.7684 17.7889 16.4692 18.2639 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="right4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 14.5px' }" />
          </svg>
        </div>
</template>
