<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChildIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the child tilts their head side to side with a giggle
// authored from scripts/authored
const headVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.84px, 0.06px) rotate(-6deg)',
      'translate(0.70px, 0.01px) rotate(5deg)',
      'translate(-0.28px, 0.01px) rotate(-2deg)',
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

const head2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.34px, 0.46px) rotate(-6deg)',
      'translate(1.15px, -0.27px) rotate(5deg)',
      'translate(-0.45px, 0.14px) rotate(-2deg)',
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

const head3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.38px, -0.33px) rotate(-6deg)',
      'translate(1.12px, 0.38px) rotate(5deg)',
      'translate(-0.46px, -0.12px) rotate(-2deg)',
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

const head4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.73px, 0.04px) rotate(-6deg)',
      'translate(0.61px, 0.03px) rotate(5deg)',
      'translate(-0.24px, 0.00px) rotate(-2deg)',
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

const head5Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.37px, 0.02px) rotate(-6deg)',
      'translate(0.31px, 0.01px) rotate(5deg)',
      'translate(-0.12px, 0.00px) rotate(-2deg)',
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
            <motion.path d="M3.5 11C2.67157 11 2 10.3284 2 9.5C2 8.67157 2.67157 8 3.5 8H4.25203C5.14012 4.54955 8.27232 2 12 2C15.7277 2 18.8599 4.54955 19.748 8H20C20.8284 8 21.5 8.67157 21.5 9.5C21.5 10.3284 20.8284 11 20 11H19.9381C19.446 14.9463 16.0796 18 12 18C7.92038 18 4.55399 14.9463 4.06189 11H3.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 10px' }" />
            <motion.path d="M4.5 8H6C9.31371 8 12 5.31371 12 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="head2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.3px 5px' }" />
            <motion.path d="M19.5 8H18C14.6863 8 12 5.31371 12 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="head3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.8px 5px' }" />
            <path d="M18 22C18 20.208 17.2144 18.5994 15.9687 17.5M6 22C6 20.208 6.78563 18.5994 8.03126 17.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M8.375 11H8.25M15.625 11H15.75M8.5 11C8.5 11.1381 8.38807 11.25 8.25 11.25C8.11193 11.25 8 11.1381 8 11C8 10.8619 8.11193 10.75 8.25 10.75C8.38807 10.75 8.5 10.8619 8.5 11ZM15.5 11C15.5 11.1381 15.6119 11.25 15.75 11.25C15.8881 11.25 16 11.1381 16 11C16 10.8619 15.8881 10.75 15.75 10.75C15.6119 10.75 15.5 10.8619 15.5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="head4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M12 15C12.5523 15 13 14.5523 13 14H11C11 14.5523 11.4477 15 12 15Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="head5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
          </svg>
        </div>
</template>
