<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BiscuitIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the biscuit tilts from its bite, chips and crumbs riding with the cookie
// authored from scripts/authored
const chipAVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.43px, 0.64px) rotate(-7deg)',
      'translate(1.06px, -0.35px) rotate(5deg)',
      'translate(-0.42px, 0.16px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.74,
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

const chipBVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.69px, -0.26px) rotate(-7deg)',
      'translate(0.47px, 0.24px) rotate(5deg)',
      'translate(-0.19px, -0.08px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.74,
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

const cookieVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.22px, 0.07px) rotate(-7deg)',
      'translate(0.87px, 0.04px) rotate(5deg)',
      'translate(-0.35px, 0.01px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.74,
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

const dotAVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.36px, -0.16px) rotate(-7deg)',
      'translate(0.95px, 0.22px) rotate(5deg)',
      'translate(-0.39px, -0.06px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.74,
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

const dotBVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.70px, 0.53px) rotate(-7deg)',
      'translate(0.54px, -0.33px) rotate(5deg)',
      'translate(-0.21px, 0.14px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.74,
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
            <motion.path d="M6.24887 9.30307C5.79205 10.3381 5.98187 11.4892 6.67285 11.8741C7.36383 12.259 8.29431 11.7319 8.75113 10.6969C9.20795 9.66191 9.01813 8.51084 8.32715 8.12594C7.63617 7.74103 6.70569 8.26805 6.24887 9.30307Z" stroke="currentColor" stroke-width="1.5" :variants="chipAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 10px' }" />
            <motion.path d="M13.1766 15.8719C12.787 16.624 13.0636 17.5149 13.7945 17.8618C14.5254 18.2087 15.4338 17.8802 15.8234 17.1281C16.213 16.376 15.9364 15.4851 15.2055 15.1382C14.4746 14.7913 13.5662 15.1198 13.1766 15.8719Z" stroke="currentColor" stroke-width="1.5" :variants="chipBVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
            <motion.path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.2417 2 12.3874 2.26355 12.2959 2.48729C12.1052 2.95395 12 3.4647 12 4C12 6.20914 13.7909 8 16 8C16.5478 8 17.0699 7.88988 17.5453 7.69056C17.7487 7.60533 18 7.77954 18 8C18 9.65685 19.3431 11 21 11C21.1138 11 21.2261 10.9937 21.3365 10.9813C21.6512 10.9462 21.9691 11.1463 21.9858 11.4625C21.9952 11.6405 22 11.8197 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cookieVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.125 11H14M14.25 11C14.25 11.1381 14.1381 11.25 14 11.25C13.8619 11.25 13.75 11.1381 13.75 11C13.75 10.8619 13.8619 10.75 14 10.75C14.1381 10.75 14.25 10.8619 14.25 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 11px' }" />
            <motion.path d="M8.125 16H8M8.25 16C8.25 16.1381 8.13807 16.25 8 16.25C7.86193 16.25 7.75 16.1381 7.75 16C7.75 15.8619 7.86193 15.75 8 15.75C8.13807 15.75 8.25 15.8619 8.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotBVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 16px' }" />
          </svg>
        </div>
</template>
