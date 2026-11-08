<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpamIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the warning octagon rattles and the bang stretches
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bangVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.40px) scaleY(1.2)',
      'translate(0px, -0.10px) scaleY(0.95)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
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
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M21.5 12.6863V11.3137C21.5 9.67871 21.5 8.8612 21.1955 8.12612C20.891 7.39104 20.313 6.81297 19.1569 5.65685L18.3431 4.84315C17.187 3.68702 16.609 3.10896 15.8739 2.80448C15.1388 2.5 14.3213 2.5 12.6863 2.5H11.3137C9.67871 2.5 8.8612 2.5 8.12612 2.80448C7.39104 3.10896 6.81297 3.68702 5.65685 4.84315L4.84315 5.65685C3.68702 6.81298 3.10896 7.39104 2.80448 8.12612C2.5 8.8612 2.5 9.67871 2.5 11.3137V12.6863C2.5 14.3213 2.5 15.1388 2.80448 15.8739C3.10896 16.609 3.68702 17.187 4.84315 18.3431L5.65685 19.1569C6.81297 20.313 7.39104 20.891 8.12612 21.1955C8.8612 21.5 9.67871 21.5 11.3137 21.5H12.6863C14.3213 21.5 15.1388 21.5 15.8739 21.1955C16.609 20.891 17.187 20.313 18.3431 19.1569L19.1569 18.3431C20.313 17.187 20.891 16.609 21.1955 15.8739C21.5 15.1388 21.5 14.3213 21.5 12.6863Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 8V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bangVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.8px' }" />
          </svg>
        </div>
</template>
