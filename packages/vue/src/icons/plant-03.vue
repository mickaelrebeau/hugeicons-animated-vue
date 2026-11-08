<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Plant03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sprout grows up out of the ground
// authored from scripts/authored
const sproutVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(-0.91px, 1.89px) scale(0.3)',
      'translate(0.10px, -0.22px) scale(1.08)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
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

const sprout2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(3.15px, 7.35px) scale(0.3)',
      'translate(-0.36px, -0.84px) scale(1.08)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
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

const sprout3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(-3.50px, 5.60px) scale(0.3)',
      'translate(0.40px, -0.64px) scale(1.08)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
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

const sprout4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.70px, 2.66px) scale(0.3)',
      'translate(-0.08px, -0.30px) scale(1.08)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
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
            <motion.path d="M14.5 11.5C14.5 11.5 12 13.5 12 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sproutVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 14.3px' }" />
            <motion.path d="M10.063 9.06301C11.3123 7.8137 11.3123 5.78815 10.063 4.53884C8.17794 2.65376 4.03078 3.03078 4.03078 3.03078C4.03078 3.03078 3.65376 7.17794 5.53884 9.06301C6.78815 10.3123 8.8137 10.3123 10.063 9.06301Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sprout2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 6.5px' }" />
            <motion.path d="M14.8031 11.1969C15.874 12.2677 17.6102 12.2677 18.681 11.1969C20.2968 9.58109 19.9736 6.02638 19.9736 6.02638C19.9736 6.02638 16.4189 5.70322 14.8031 7.319C13.7323 8.38985 13.7323 10.126 14.8031 11.1969Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sprout3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 9px' }" />
            <motion.path d="M10 9.5C10 9.5 12 12 12 16.9993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sprout4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 13.2px' }" />
            <path d="M21 21C18.8012 18.5471 15.5841 17 12 17C8.41592 17 5.19883 18.5471 3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
