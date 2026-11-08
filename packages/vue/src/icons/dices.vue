<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DicesIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two dice tumble against each other
// authored from scripts/authored
const dieVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.42px, 0.46px) rotate(-8deg)',
      'translate(-0.27px, -0.38px) rotate(6deg)',
      'translate(0.10px, 0.12px) rotate(-2deg)',
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

const die2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.53px, 0.43px) rotate(8deg)',
      'translate(-0.43px, -0.27px) rotate(-6deg)',
      'translate(0.14px, 0.10px) rotate(2deg)',
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

const die3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.10px, 0.83px) rotate(-8deg)',
      'translate(0.00px, -0.63px) rotate(6deg)',
      'translate(0.01px, 0.21px) rotate(-2deg)',
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

const die4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.75px, 0.09px) rotate(-8deg)',
      'translate(-0.55px, -0.13px) rotate(6deg)',
      'translate(0.19px, 0.03px) rotate(-2deg)',
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
            <motion.path d="M2.17412 19.9742C1.5 18.9653 1.5 17.5609 1.5 14.752C1.5 11.943 1.5 10.5386 2.17412 9.52967C2.46596 9.09291 2.84096 8.71791 3.27772 8.42607C4.28661 7.75195 5.69108 7.75195 8.5 7.75195C11.3089 7.75195 12.7134 7.75195 13.7223 8.42607C14.159 8.71791 14.534 9.09291 14.8259 9.52967C15.5 10.5386 15.5 11.943 15.5 14.752C15.5 17.5609 15.5 18.9653 14.8259 19.9742C14.534 20.411 14.159 20.786 13.7223 21.0778C12.7134 21.752 11.3089 21.752 8.5 21.752C5.69108 21.752 4.28661 21.752 3.27772 21.0778C2.84096 20.786 2.46596 20.411 2.17412 19.9742Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dieVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 14.8px' }" />
            <motion.path d="M18.7488 13.752C19.7285 12.7137 20.2601 11.9852 20.4241 11.161C20.5253 10.6523 20.5253 10.1287 20.4241 9.61997C20.1903 8.44493 19.2094 7.46437 17.2476 5.50325C15.2858 3.54213 14.3048 2.56157 13.1294 2.32784C12.6205 2.22666 12.0967 2.22666 11.5878 2.32784C10.7644 2.49157 10.0365 3.02176 9 3.99875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="die2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 8px' }" />
            <motion.path d="M6 12.002V12.252M6.5 12.252C6.5 12.5281 6.27614 12.752 6 12.752C5.72386 12.752 5.5 12.5281 5.5 12.252C5.5 11.9758 5.72386 11.752 6 11.752C6.27614 11.752 6.5 11.9758 6.5 12.252Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="die3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12.3px' }" />
            <motion.path d="M11 17.002V17.252M11.5 17.252C11.5 17.5281 11.2761 17.752 11 17.752C10.7239 17.752 10.5 17.5281 10.5 17.252C10.5 16.9758 10.7239 16.752 11 16.752C11.2761 16.752 11.5 16.9758 11.5 17.252Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="die4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 17.3px' }" />
          </svg>
        </div>
</template>
