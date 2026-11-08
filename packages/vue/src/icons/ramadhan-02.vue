<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Ramadhan02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the crescent on the dome rocks and its star blinks
// authored from scripts/authored
const moonVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-14deg)',
      'translate(0.00px, 0.00px) rotate(9.799999999999999deg)',
      'translate(0.00px, 0.00px) rotate(-4.2deg)',
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

const starVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.14,
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
            <path d="M6.07186 15C-0.34574 7 10.0123 5 12.0001 2C13.9875 5 24.3473 7 17.9267 15V18C17.9267 19.8856 17.9267 20.8284 17.3481 21.4142C16.7695 22 15.8382 22 13.9756 22H10.0236C8.16141 22 7.2303 22 6.65169 21.4144C6.07308 20.8287 6.07289 19.8861 6.07249 18.0009L6.07186 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M11 19L11.2988 18.7828C12.9134 17.6094 13.7206 17.0227 14.6386 17.0008C14.7479 16.9982 14.8573 17.0017 14.9662 17.0112C15.8444 17.0877 16.5 18 17.5 19M6.5 19C8 18 8.66888 17.0254 9.6805 17.0009C9.80096 16.998 9.9215 17.0019 10.0415 17.0125C10.6754 17.0688 11.2447 17.3721 12 17.9447" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15 11.9343C14.4347 12.8725 13.406 13.5 12.2308 13.5C10.4465 13.5 9 12.0535 9 10.2692C9 9.094 9.6275 8.06534 10.5657 7.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="moonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
            <motion.path d="M14.125 8.5H14M14.25 8.5C14.25 8.63807 14.1381 8.75 14 8.75C13.8619 8.75 13.75 8.63807 13.75 8.5C13.75 8.36193 13.8619 8.25 14 8.25C14.1381 8.25 14.25 8.36193 14.25 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="starVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 8.5px' }" />
          </svg>
        </div>
</template>
