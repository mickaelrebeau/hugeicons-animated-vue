<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Backpack02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the whole pack is picked up from the handle as one rigid body, straps pocket and button riding with it
// authored from scripts/authored
const strapRVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.6px) translate(1.14px, -0.80px) rotate(-5deg)',
      'translate(0px, -2.4px) translate(-0.96px, 0.57px) rotate(4deg)',
      'translate(0px, 0.25px) translate(0.35px, -0.23px) rotate(-1.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
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

const strapLVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.6px) translate(1.21px, 0.70px) rotate(-5deg)',
      'translate(0px, -2.4px) translate(-0.92px, -0.63px) rotate(4deg)',
      'translate(0px, 0.25px) translate(0.36px, 0.22px) rotate(-1.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
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

const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.6px) translate(1.11px, -0.05px) rotate(-5deg)',
      'translate(0px, -2.4px) translate(-0.89px, -0.03px) rotate(4deg)',
      'translate(0px, 0.25px) translate(0.33px, -0.00px) rotate(-1.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
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

const handleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.6px) translate(0.00px, 0.00px) rotate(-5deg)',
      'translate(0px, -2.4px) translate(0.00px, 0.00px) rotate(4deg)',
      'translate(0px, 0.25px) translate(0.00px, 0.00px) rotate(-1.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
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

const pocketVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.6px) translate(0.48px, -0.02px) rotate(-5deg)',
      'translate(0px, -2.4px) translate(-0.38px, -0.01px) rotate(4deg)',
      'translate(0px, 0.25px) translate(0.14px, -0.00px) rotate(-1.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
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

const buttonVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.6px) translate(0.57px, -0.02px) rotate(-5deg)',
      'translate(0px, -2.4px) translate(-0.45px, -0.02px) rotate(4deg)',
      'translate(0px, 0.25px) translate(0.17px, -0.00px) rotate(-1.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
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
            <motion.path d="M19 14H20.2389C21.3498 14 22.1831 15.0805 21.9652 16.2386L21.7003 17.6466C21.4429 19.015 20.3127 20 19 20" stroke="currentColor" stroke-width="1.5" :variants="strapRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.6px 17px' }" />
            <motion.path d="M5 14H3.76113C2.65015 14 1.81691 15.0805 2.03479 16.2386L2.29967 17.6466C2.55711 19.015 3.68731 20 5 20" stroke="currentColor" stroke-width="1.5" :variants="strapLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.4px 17px' }" />
            <motion.path d="M18.2696 10.5L18.7911 15.1967C19.071 18.379 19.211 19.9701 18.2696 20.985C17.3283 22 15.7125 22 12.481 22H11.519C8.2875 22 6.67174 22 5.73038 20.985C4.78901 19.9701 4.92899 18.379 5.20893 15.1967L5.73038 10.4999" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.2px' }" />
            <motion.path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5" stroke="currentColor" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <motion.path d="M5.2617 8.86971C5.01152 7.45403 4.88643 6.74619 5.13559 6.20431C5.30195 5.84248 5.57803 5.53512 5.9291 5.32087C6.45489 5 7.21577 5 8.73753 5H15.2625C16.7842 5 17.5451 5 18.0709 5.32087C18.422 5.53512 18.698 5.84248 18.8644 6.20431C19.1136 6.74619 18.9885 7.45403 18.7383 8.86971L18.6872 9.15901C18.5902 9.70796 18.5417 9.98243 18.446 10.2349C18.2806 10.671 18.0104 11.0651 17.6565 11.3863C17.4517 11.5722 17.2062 11.7266 16.7153 12.0353C16.2537 12.3255 16.0229 12.4706 15.779 12.5845C15.3579 12.7812 14.905 12.9105 14.439 12.9672C14.169 13 13.8916 13 13.3369 13H10.6631C10.1084 13 9.831 13 9.56102 12.9672C9.09497 12.9105 8.64214 12.7812 8.22104 12.5845C7.9771 12.4706 7.74632 12.3255 7.28474 12.0353C6.79376 11.7266 6.54827 11.5722 6.34346 11.3863C5.98959 11.0651 5.7194 10.671 5.55404 10.2349C5.45833 9.98243 5.40983 9.70796 5.31282 9.15901L5.2617 8.86971Z" stroke="currentColor" stroke-width="1.5" :variants="pocketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M12.125 10H12M12.25 10C12.25 10.1381 12.1381 10.25 12 10.25C11.8619 10.25 11.75 10.1381 11.75 10C11.75 9.86193 11.8619 9.75 12 9.75C12.1381 9.75 12.25 9.86193 12.25 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="buttonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
