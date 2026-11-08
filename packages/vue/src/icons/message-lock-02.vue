<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MessageLock02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dots type and the padlock rattles
// authored from scripts/authored
const dotsVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 0.2, 1, 1],
    transition: { duration: 0.8, times: [0, 0.16, 0.32, 0.48, 0.64, 1], ease: 'linear' },
  },
};

const lockVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, delay: 0.3, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M12 3C4.13281 3 2 7.02944 2 12C2 14.0712 2.37034 15.9791 3.37161 17.5C4.63281 19.5 3.99253 21.3333 3 22C4.61547 22 5.70211 21.4858 6.39239 20.9766C6.88252 20.615 7.50688 20.4364 8.0984 20.5815C9.20689 20.8533 10.4991 21 12 21C18.6478 21 21.6305 17.5 22 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12.1248 12H11.9998M8.125 12H8M12.2498 12C12.2498 12.1381 12.1379 12.25 11.9998 12.25C11.8618 12.25 11.7498 12.1381 11.7498 12C11.7498 11.8619 11.8618 11.75 11.9998 11.75C12.1379 11.75 12.2498 11.8619 12.2498 12ZM8.25 12C8.25 12.1381 8.13807 12.25 8 12.25C7.86193 12.25 7.75 12.1381 7.75 12C7.75 11.8619 7.86193 11.75 8 11.75C8.13807 11.75 8.25 11.8619 8.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.5 5.5H20.5M16.5 5.5V4C16.5 2.89543 17.3954 2 18.5 2C19.6046 2 20.5 2.89543 20.5 4V5.5M16.5 5.5C15.6716 5.5 15 6.17157 15 7V8.5C15 9.32843 15.6716 10 16.5 10H20.5C21.3284 10 22 9.32843 22 8.5V7C22 6.17157 21.3284 5.5 20.5 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 6.5px' }" />
          </svg>
        </div>
</template>
