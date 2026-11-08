<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChessKingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cross on the crown hops up and gleams
// authored from scripts/authored
const crossVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0.196px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
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

const glintVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(0.2)', opacity: 0 },
  animate: {
    transform: [
      'rotate(0deg) scale(0.2)',
      'rotate(0deg) scale(0.2)',
      'rotate(45deg) scale(1.1)',
      'rotate(90deg) scale(0.2)',
    ],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.8,
      delay: 0.2,
      times: [0, 0.3, 0.6, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
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
            <path d="M17 22H7C6.53501 22 6.30252 22 6.11177 21.9489C5.59413 21.8102 5.18981 21.4059 5.05111 20.8882C5 20.6975 5 20.465 5 20C5 18.8954 5.89543 18 7 18H17C18.1046 18 19 18.8954 19 20C19 20.465 19 20.6975 18.9489 20.8882C18.8102 21.4059 18.4059 21.8102 17.8882 21.9489C17.6975 22 17.465 22 17 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4 11.5833C4 9.05203 5.68421 7 8 7C9.2 7 10.4 7.44118 12 9.20588C13.6 7.44118 14.8 7 16 7C18.3158 7 20 9.05203 20 11.5833C20 13.8457 18.4396 16.1415 16.697 18H7.30298C5.56044 16.1415 4 13.8457 4 11.5833Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 2V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crossVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <motion.path d="M10 4H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crossVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M15.4 1.5V3.3M14.5 2.4H16.3" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="glintVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
