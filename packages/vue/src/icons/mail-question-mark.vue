<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailQuestionMarkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the question mark tilts and its dot bounces
// authored from scripts/authored
const questionVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.60px, 0.07px) rotate(-14deg)',
      'translate(0.43px, 0.04px) rotate(10deg)',
      'translate(-0.17px, 0.01px) rotate(-4deg)',
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

const dotVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.14,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <path d="M2.50006 6L9.06743 9.91697C11.4886 11.361 12.5115 11.361 14.9327 9.91697L21.5001 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 15C18 13.8954 18.8954 13 20 13C21.1046 13 22 13.8954 22 15C22 15.7571 21.5793 16.4159 20.959 16.7555C20.4745 17.0207 20 17.4477 20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="questionVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 15.5px' }" />
            <motion.path d="M20.125 20.75H20M20.25 20.75C20.25 20.8881 20.1381 21 20 21C19.8619 21 19.75 20.8881 19.75 20.75C19.75 20.6119 19.8619 20.5 20 20.5C20.1381 20.5 20.25 20.6119 20.25 20.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 20.8px' }" />
            <path d="M15.0001 18.9991C14.6823 19 14.3493 19 14.0001 19H10.0001C6.22882 19 4.34321 19 3.17163 17.8284C2.00006 16.6569 2.00006 14.7712 2.00006 11C2.00006 7.22876 2.00006 5.34315 3.17163 4.17157C4.34321 3 6.22882 3 10.0001 3H14.0001C17.7713 3 19.6569 3 20.8285 4.17157C21.8916 5.23467 21.99 6.8857 21.9991 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
