<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Robot02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the antenna wobbles with its light blinking, and the eyes blink
// authored from scripts/authored
const antennaVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.36px, 0.04px) rotate(14deg)',
      'translate(-0.26px, 0.02px) rotate(-9.799999999999999deg)',
      'translate(0.11px, 0.00px) rotate(4.2deg)',
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

const antenna2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)', opacity: 1 },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.09px, 0.13px) rotate(14deg)',
      'translate(-0.77px, 0.07px) rotate(-9.799999999999999deg)',
      'translate(0.33px, 0.01px) rotate(4.2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    opacity: [1, 0.3, 1, 0.3, 1],
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

const eyesVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1, 1, 1, 1],
    transition: { duration: 0.6, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M4 16C4 11.5817 7.58172 8 12 8C16.4183 8 20 11.5817 20 16V18.1818C20 18.9423 20 19.3225 19.9314 19.6377C19.6818 20.7854 18.7854 21.6818 17.6377 21.9314C17.3225 22 16.9423 22 16.1818 22H7.81818C7.05771 22 6.67747 22 6.3623 21.9314C5.21464 21.6818 4.31822 20.7854 4.06856 19.6377C4 19.3225 4 18.9423 4 18.1818V16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 8V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="antennaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.circle cx="12" cy="3.5" r="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="antenna2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <motion.path d="M9 13V14M15 13V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M4 18.5H8.09861C8.66175 18.5 9.18763 18.2186 9.5 17.75C9.81237 17.2814 10.3383 17 10.9014 17H13.0986C13.6617 17 14.1876 17.2814 14.5 17.75C14.8124 18.2186 15.3383 18.5 15.9014 18.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
