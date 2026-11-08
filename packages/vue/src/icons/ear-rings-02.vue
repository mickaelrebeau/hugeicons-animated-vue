<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'EarRings02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the drop earrings swing from their studs
// authored from scripts/authored
const earringVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.87px, -0.20px) rotate(12deg)',
      'translate(1.25px, -0.09px) rotate(-8deg)',
      'translate(-0.47px, -0.01px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const earring2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.87px, -0.20px) rotate(12deg)',
      'translate(1.25px, -0.09px) rotate(-8deg)',
      'translate(-0.47px, -0.01px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
      delay: 0.1,
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

const earring3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.77px, -0.19px) rotate(12deg)',
      'translate(1.18px, -0.08px) rotate(-8deg)',
      'translate(-0.44px, -0.01px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const earring4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.77px, -0.19px) rotate(12deg)',
      'translate(1.18px, -0.08px) rotate(-8deg)',
      'translate(-0.44px, -0.01px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
      delay: 0.1,
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
            <motion.path d="M4 14.0056C7.6 14.0056 6.4 18.0056 10 18.0056" stroke="currentColor" stroke-width="1.5" :variants="earringVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 16px' }" />
            <motion.path d="M14 14.0056C17.6 14.0056 16.4 18.0056 20 18.0056" stroke="currentColor" stroke-width="1.5" :variants="earring2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 16px' }" />
            <motion.path d="M7 20.9998C8.65685 20.9998 10 18.5382 10 15.5016C10 12.4651 8.65685 10.0035 7 10.0035C5.34315 10.0035 4 12.4651 4 15.5016C4 18.5382 5.34315 20.9998 7 20.9998Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="earring3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 15.5px' }" />
            <motion.path d="M17 20.9999C18.6569 20.9999 20 18.5383 20 15.5018C20 12.4653 18.6569 10.0037 17 10.0037C15.3431 10.0037 14 12.4653 14 15.5018C14 18.5383 15.3431 20.9999 17 20.9999Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="earring4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 15.5px' }" />
            <path d="M9.95511 7.2344C9.60461 7.03294 9.06061 6.71307 8.93297 4.78798C8.81979 3.08095 7.26883 2.90969 6.67606 3.03009C6.11908 3.14328 5.07565 3.73133 5.00769 4.95443C4.96211 5.77417 5.47047 6.56049 6.67279 7.03896C6.87541 7.1196 7.0183 7.30991 7.0183 7.52792V9.76224" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19.937 7.2344C19.5865 7.03294 19.0425 6.71307 18.9149 4.78798C18.8017 3.08095 17.2508 2.90969 16.658 3.03009C16.101 3.14328 15.0576 3.73133 14.9896 4.95443C14.944 5.77417 15.4524 6.56049 16.6547 7.03896C16.8573 7.1196 17.0002 7.30991 17.0002 7.52792V9.76224" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
