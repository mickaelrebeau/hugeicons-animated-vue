<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DramaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two masks rock against each other
// authored from scripts/authored
const comedyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.01px, -0.00px) rotate(8deg)',
      'translate(0.01px, -0.00px) rotate(-5deg)',
      'translate(-0.00px, -0.00px) rotate(2deg)',
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

const comedy2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.28px, -0.02px) rotate(8deg)',
      'translate(0.17px, -0.01px) rotate(-5deg)',
      'translate(-0.07px, -0.00px) rotate(2deg)',
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

const comedy3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.32px, 0.37px) rotate(8deg)',
      'translate(-0.23px, -0.21px) rotate(-5deg)',
      'translate(0.09px, 0.09px) rotate(2deg)',
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

const comedy4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.37px, -0.32px) rotate(8deg)',
      'translate(-0.21px, 0.23px) rotate(-5deg)',
      'translate(0.09px, -0.09px) rotate(2deg)',
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

const tragedyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.01px, 0.01px) rotate(-8deg)',
      'translate(0.01px, -0.01px) rotate(5deg)',
      'translate(-0.00px, 0.00px) rotate(-2deg)',
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

const tragedy2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.12px, 0.05px) rotate(-8deg)',
      'translate(-0.07px, -0.04px) rotate(5deg)',
      'translate(0.03px, 0.01px) rotate(-2deg)',
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
            <motion.path d="M22 13.9844C22 17.1977 19.4586 19.228 17.2347 20.6198C16.4908 21.1294 15.5092 21.1294 14.7653 20.6198C12.5414 19.228 10 17.1977 10 13.9844V11.7012C10 9.93499 10 9.05189 10.7684 8.19878C11.5369 7.34566 12.2207 7.27251 13.5884 7.1262C14.3394 7.04585 15.1519 7.00195 16 7.00195C16.8481 7.00195 17.6606 7.04585 18.4116 7.1262C19.7793 7.27251 20.4631 7.34566 21.2316 8.19878C22 9.05189 22 9.93499 22 11.7012V13.9844Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="comedyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 14.1px' }" />
            <motion.path d="M18 15.4802C17.6008 16.0765 16.8546 16.4777 16 16.4777C15.1454 16.4777 14.3992 16.0765 14 15.4802" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="comedy2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 16px' }" />
            <motion.path d="M18 11.4902H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="comedy3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 11.5px' }" />
            <motion.path d="M13 11.4902H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="comedy4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 11.5px' }" />
            <motion.path d="M10.2472 16.989C9.93106 17.0237 9.60485 16.9893 9.29198 16.8796C6.81334 16.1238 3.86807 14.8429 3.04447 11.7967L2.45927 9.63216C2.00658 7.95778 1.78024 7.12059 2.29478 6.11712C2.80933 5.11365 3.44306 4.87102 4.71051 4.38578C5.4065 4.11932 6.1705 3.87182 6.97973 3.65693C7.78896 3.44203 8.57547 3.27777 9.31264 3.16365C10.6551 2.95581 11.3263 2.85189 12.2782 3.46595C13.23 4.08 13.4564 4.91719 13.9091 6.59157L14 6.92785" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tragedyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.9px 9.9px' }" />
            <motion.path d="M7.53398 13.0918C7.76753 12.387 8.39125 11.7849 9.22623 11.5559C9.44557 11.4957 9.66486 11.4653 9.87891 11.4621M5.37891 8.85975L6.35592 8.5918" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tragedy2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.6px 10.8px' }" />
          </svg>
        </div>
</template>
