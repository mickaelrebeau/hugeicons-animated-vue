<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HorseSaddleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the horse rears with its saddle
// authored from scripts/authored
const horseVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.62px, -1.96px) rotate(-10deg)',
      'translate(0.48px, 0.44px) rotate(2deg)',
      'translate(-0.25px, -0.22px) rotate(-1deg)',
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

const horse2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.71px, -0.60px) rotate(-10deg)',
      'translate(0.33px, 0.16px) rotate(2deg)',
      'translate(-0.17px, -0.07px) rotate(-1deg)',
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

const tailVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.87px, -0.05px) rotate(20deg)',
      'translate(0.43px, -0.09px) rotate(-10deg)',
      'translate(-0.18px, 0.01px) rotate(4deg)',
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

const horse3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.31px, -1.55px) rotate(-10deg)',
      'translate(0.23px, 0.34px) rotate(2deg)',
      'translate(-0.12px, -0.16px) rotate(-1deg)',
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

const horse4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.61px, -1.00px) rotate(-10deg)',
      'translate(0.10px, 0.21px) rotate(2deg)',
      'translate(-0.05px, -0.10px) rotate(-1deg)',
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

const horse5Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.82px, -0.54px) rotate(-10deg)',
      'translate(0.15px, 0.12px) rotate(2deg)',
      'translate(-0.08px, -0.06px) rotate(-1deg)',
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

const horse6Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.81px, -0.28px) rotate(-10deg)',
      'translate(0.35px, 0.09px) rotate(2deg)',
      'translate(-0.18px, -0.04px) rotate(-1deg)',
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
            <motion.path d="M19.5 4.5L22 8.5C21.7259 9.04816 21.1129 9.5 20.5 9.5L19 8C18.1042 8 17.2833 7.34982 17 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 7px' }" />
            <motion.path d="M18.5 2L17.5 3C15.5 3.5 14.1879 4.93621 13.666 6.50196L13 8.5C10.8481 10.0371 9.31821 9.68408 7.68856 9.18411C6.65537 8.86714 5.47314 9.02686 4.70896 9.79104C4.25502 10.245 4 10.8607 4 11.5026V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horse2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.3px 11.5px' }" />
            <motion.path d="M4.5 9.5L3.75623 9.12812C3.58773 9.04386 3.40192 9 3.21353 9C2.54331 9 2 9.54331 2 10.2135V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.3px 11.5px' }" />
            <motion.path d="M17.5 7.5L17.4027 7.64596C16.8376 8.49359 16.726 9.56509 17.1044 10.511C17.3625 11.1564 17.4274 11.8629 17.2911 12.5445C17.1047 13.4765 16.2908 14.4728 15.5 15V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horse3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 14.3px' }" />
            <motion.path d="M13 21V15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="horse4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 18px' }" />
            <motion.path d="M8 16C8 16 10.3077 17.125 13 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horse5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 16.6px' }" />
            <path d="M8.5 15C8 16.5 6.5 17 6.5 17V21.0005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6.5 9.5C6.5 11.1569 7.84315 12.5 9.5 12.5C11.1569 12.5 12.5 11.1569 12.5 9.5V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horse6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 10.8px' }" />
          </svg>
        </div>
</template>
