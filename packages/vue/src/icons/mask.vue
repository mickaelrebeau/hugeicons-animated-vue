<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MaskIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mask pleats breathe in and out
// authored from scripts/authored
const pleatVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.9)',
      'translate(0.00px, 0px) scaleX(1.04)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.9,
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

const pleat2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.9)',
      'translate(0.00px, 0px) scaleX(1.04)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.9,
      delay: 0.06,
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

const pleat3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.9)',
      'translate(0.00px, 0px) scaleX(1.04)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.9,
      delay: 0.12,
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

const maskVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.25px) scaleY(1.1)',
      'translate(0px, -0.10px) scaleY(0.96)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.9,
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
            <motion.path d="M6 9C7.46589 8.38677 9.61061 8 12 8C14.3894 8 16.5341 8.38677 18 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pleatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
            <motion.path d="M9 11.5C9.93974 11.176 10.9492 11 12 11C13.0508 11 14.0603 11.176 15 11.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pleat2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.3px' }" />
            <motion.path d="M8 15C9.17669 15.636 10.5429 16 12 16C13.4571 16 14.8233 15.636 16 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pleat3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
            <path d="M6 10C6 13.2571 4.1688 14.9419 3.05731 14.9985C3.02153 15.0003 2.98891 14.9808 2.97139 14.9496C2.15656 13.4966 2 11.7879 2 10C2 6.68629 2.89543 4 4 4C5.10457 4 6 6.68629 6 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 10C18 13.2571 19.8312 14.9419 20.9427 14.9985C20.9785 15.0003 21.0111 14.9808 21.0286 14.9496C21.8434 13.4966 22 11.7879 22 10C22 6.68629 21.1046 4 20 4C18.8954 4 18 6.68629 18 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21 15C19.2035 17.989 15.8458 20 12 20C8.15423 20 4.79648 17.989 3 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="maskVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.5px' }" />
          </svg>
        </div>
</template>
