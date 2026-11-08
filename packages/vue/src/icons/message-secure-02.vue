<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MessageSecure02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dots type and the shield stamps
// authored from scripts/authored
const dotsVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 0.2, 1, 1],
    transition: { duration: 0.8, times: [0, 0.16, 0.32, 0.48, 0.64, 1], ease: 'linear' },
  },
};

const shieldVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.3, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M22 12C22 16.9706 19.1328 21 12 21C10.4991 21 9.20689 20.8533 8.0984 20.5815C7.50688 20.4364 6.88252 20.615 6.39239 20.9766C5.70211 21.4858 4.61547 22 3 22C3.99253 21.3333 4.63281 19.5 3.37161 17.5C2.37034 15.9791 2 14.0712 2 12C2 7.02944 4.13281 3 12 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12.1248 12H11.9998M8.125 12H8M12.2498 12C12.2498 12.1381 12.1379 12.25 11.9998 12.25C11.8618 12.25 11.7498 12.1381 11.7498 12C11.7498 11.8619 11.8618 11.75 11.9998 11.75C12.1379 11.75 12.2498 11.8619 12.2498 12ZM8.25 12C8.25 12.1381 8.13807 12.25 8 12.25C7.86193 12.25 7.75 12.1381 7.75 12C7.75 11.8619 7.86193 11.75 8 11.75C8.13807 11.75 8.25 11.8619 8.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 5.62043V3.6493C22 3.3393 21.7723 3.08201 21.477 3.02921C20.2869 2.81643 19.299 2.34309 18.817 2.08062C18.6197 1.97313 18.3803 1.97313 18.183 2.08062C17.701 2.34309 16.7131 2.81643 15.523 3.02921C15.2277 3.08201 15 3.3393 15 3.6493V5.62043C15 8.19182 17.5424 9.59437 18.2935 9.9526C18.426 10.0158 18.574 10.0158 18.7065 9.9526C19.4576 9.59437 22 8.19182 22 5.62043Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shieldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 6px' }" />
          </svg>
        </div>
</template>
