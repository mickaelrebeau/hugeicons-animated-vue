<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BicycleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the whole bicycle leans from the rear tyre, both wheels riding with the frame
// authored from scripts/authored
const wheelLVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.56px, 0.04px) rotate(-8deg)',
      'translate(0.42px, 0.02px) rotate(6deg)',
      'translate(-0.14px, 0.00px) rotate(-2deg)',
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

const wheelRVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.67px, -1.63px) rotate(-8deg)',
      'translate(0.35px, 1.28px) rotate(6deg)',
      'translate(-0.15px, -0.42px) rotate(-2deg)',
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

const frameVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.16px, -0.59px) rotate(-8deg)',
      'translate(0.81px, 0.55px) rotate(6deg)',
      'translate(-0.28px, -0.16px) rotate(-2deg)',
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

const crankVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.42px, -0.25px) rotate(-8deg)',
      'translate(1.03px, 0.32px) rotate(6deg)',
      'translate(-0.35px, -0.08px) rotate(-2deg)',
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

const barsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.52px, -1.49px) rotate(-8deg)',
      'translate(0.99px, 1.25px) rotate(6deg)',
      'translate(-0.36px, -0.39px) rotate(-2deg)',
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
            <motion.path d="M6 19.9986C8.20914 19.9986 10 18.2112 10 16.0063C10 13.8014 8.20914 12.0139 6 12.0139C3.79086 12.0139 2 13.8014 2 16.0063C2 18.2112 3.79086 19.9986 6 19.9986Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wheelLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 16px' }" />
            <motion.path d="M18 19.9986C20.2091 19.9986 22 18.2112 22 16.0063C22 13.8014 20.2091 12.0139 18 12.0139C15.7909 12.0139 14 13.8014 14 16.0063C14 18.2112 15.7909 19.9986 18 19.9986Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wheelRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 16px' }" />
            <motion.path d="M6 16.0062H10.3706C10.7302 16.0062 11.0622 15.8135 11.2399 15.5014L15.5 8.02148" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.8px 12px' }" />
            <motion.path d="M12 13.012L7 7.02344M7 7.02344H5M7 7.02344H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crankVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 10px' }" />
            <motion.path d="M18.0531 15.9709L14.8057 4.03097C16.2565 3.96037 19.3585 3.83085 19.9908 6.21002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.4px 9.9px' }" />
          </svg>
        </div>
</template>
