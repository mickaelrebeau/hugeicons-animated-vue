<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LaurelWreathIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wreath sways and the ribbon flutters
// authored from scripts/authored
const wreathVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.61px, 0.03px) rotate(-5deg)',
      'translate(0.49px, 0.02px) rotate(4deg)',
      'translate(-0.12px, 0.00px) rotate(-1deg)',
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

const ribbonVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.26px, -0.02px) rotate(10deg)',
      'translate(0.21px, -0.01px) rotate(-8deg)',
      'translate(-0.08px, -0.00px) rotate(3deg)',
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

const wreath2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.28px, -0.39px) rotate(-5deg)',
      'translate(1.00px, 0.39px) rotate(4deg)',
      'translate(-0.25px, -0.09px) rotate(-1deg)',
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

const wreath3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.81px, -0.66px) rotate(-5deg)',
      'translate(0.61px, 0.58px) rotate(4deg)',
      'translate(-0.16px, -0.14px) rotate(-1deg)',
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

const wreath4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.30px, -0.58px) rotate(-5deg)',
      'translate(0.20px, 0.48px) rotate(4deg)',
      'translate(-0.06px, -0.12px) rotate(-1deg)',
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

const wreath5Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.24px, 0.60px) rotate(-5deg)',
      'translate(0.23px, -0.46px) rotate(4deg)',
      'translate(-0.05px, 0.12px) rotate(-1deg)',
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

const wreath6Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.75px, 0.73px) rotate(-5deg)',
      'translate(0.65px, -0.54px) rotate(4deg)',
      'translate(-0.16px, 0.14px) rotate(-1deg)',
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

const wreath7Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.24px, 0.50px) rotate(-5deg)',
      'translate(1.02px, -0.32px) rotate(4deg)',
      'translate(-0.25px, 0.09px) rotate(-1deg)',
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
            <motion.path d="M6.43614 8C6.15488 8.84221 6 9.76282 6 10.7273C6 14.7439 8.68629 18 12 18C15.3137 18 18 14.7439 18 10.7273C18 9.76282 17.8451 8.84221 17.5639 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wreathVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M14.5 21C14.5 21 13.818 18 12 18C10.182 18 9.5 21 9.5 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ribbonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
            <motion.path d="M18.5202 5.22967C18.8121 6.89634 17.5004 8 17.5004 8C17.5004 8 15.8969 7.437 15.605 5.77033C15.3131 4.10366 16.6248 3 16.6248 3C16.6248 3 18.2284 3.56301 18.5202 5.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wreath2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.1px 5.5px' }" />
            <motion.path d="M21.0942 12.1393C19.8128 13.4061 18.0778 12.9003 18.0778 12.9003C18.0778 12.9003 17.6241 11.1276 18.9055 9.86074C20.1868 8.59388 21.9219 9.09972 21.9219 9.09972C21.9219 9.09972 22.3756 10.8724 21.0942 12.1393Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wreath3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 11px' }" />
            <motion.path d="M18.2335 18.1896C16.7335 17.614 16.5 16 16.5 16C16.5 16 17.7665 14.9616 19.2665 15.5372C20.7665 16.1128 21 17.7268 21 17.7268C21 17.7268 19.7335 18.7652 18.2335 18.1896Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wreath4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.8px 16.9px' }" />
            <motion.path d="M5.76651 18.1895C7.26651 17.6139 7.5 15.9999 7.5 15.9999C7.5 15.9999 6.23349 14.9615 4.73349 15.5371C3.23349 16.1127 3 17.7267 3 17.7267C3 17.7267 4.26651 18.7651 5.76651 18.1895Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wreath5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.3px 16.9px' }" />
            <motion.path d="M2.90552 12.1393C4.18688 13.4061 5.92191 12.9003 5.92191 12.9003C5.92191 12.9003 6.37559 11.1276 5.09423 9.86074C3.81288 8.59388 2.07785 9.09972 2.07785 9.09972C2.07785 9.09972 1.62417 10.8724 2.90552 12.1393Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wreath6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 11px' }" />
            <motion.path d="M5.47987 5.22967C5.18799 6.89634 6.49968 8 6.49968 8C6.49968 8 8.10325 7.437 8.39513 5.77033C8.68701 4.10366 7.37532 3 7.37532 3C7.37532 3 5.77175 3.56301 5.47987 5.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wreath7Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.9px 5.5px' }" />
          </svg>
        </div>
</template>
