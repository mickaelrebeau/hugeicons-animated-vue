<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CampfireIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flames flicker out of phase and sparks drift up off the top
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.70px) scaleY(1.1)',
      'translate(0px, 0.49px) scaleY(0.93)',
      'translate(0px, -0.35px) scaleY(1.05)',
      'translate(0px, 0.00px) scaleY(1)',
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

const coreVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.45px) scaleY(0.82)',
      'translate(0px, -0.40px) scaleY(1.16)',
      'translate(0px, 0.15px) scaleY(0.94)',
      'translate(0px, 0.00px) scaleY(1)',
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

const sparkVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0px)',
      'translate(-0.6px, -2.2px)',
      'translate(-0.4px, -3.4px)',
    ],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.12, 0.5, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        'easeIn',
      ],
    },
  },
};

const spark2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0px)',
      'translate(0.7px, -2.4px)',
      'translate(0.5px, -3.6px)',
    ],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.3, 0.64, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        'easeIn',
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
            <motion.path d="M17.6709 16C18.5134 14.8191 19 13.4095 19 12C19 8 17.5 7 17.5 7C16.9615 8.5 15.5 9 15.5 9C15.5 3.5 12 2 12 2C12 2 8.5 3.5 8.5 9C8.5 9 7.03846 8.5 6.5 7C6.5 7 5 8 5 12C5 13.4095 5.48656 14.8191 6.32905 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <path d="M19 19H5C4.44772 19 4 19.4477 4 20V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V20C20 19.4477 19.5523 19 19 19Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.5 16C14.5 13.5 12 11 12 11C12 11 9.5 13.5 9.5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coreVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
            <motion.circle cx="9.2" cy="4.6" r="0.45" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="15.2" cy="5.4" r="0.45" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="spark2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
