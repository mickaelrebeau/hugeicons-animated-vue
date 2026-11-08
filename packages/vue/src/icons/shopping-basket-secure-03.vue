<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShoppingBasketSecure03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slats blink in turn, then the shield rattles
// authored from scripts/authored
const slatVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const slat2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.08, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const shieldVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, delay: 0.28, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12 12V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 12V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slat2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M22.5 8H1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 8L15 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6 8L9 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M13.5 20H9.58276C7.15525 20 5.94149 20 5.10226 19.2891C4.26302 18.5781 4.06348 17.3809 3.6644 14.9864L2.5 8H21.5L21 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21.2363 14.5234C20.6055 14.1938 19.8336 14 19 14C18.1664 14 17.3945 14.1938 16.7637 14.5234C16.4544 14.685 16.2997 14.7658 16.1499 15.0198C16 15.2739 16 15.5199 16 16.0118V17.233C16 19.2222 17.5141 20.3281 18.391 20.8018C18.6356 20.9339 18.7578 21 19 21C19.2422 21 19.3644 20.9339 19.609 20.8018C20.4859 20.3281 22 19.2222 22 17.233L22 16.0119C22 15.5199 22 15.2739 21.8501 15.0198C21.7003 14.7658 21.5456 14.685 21.2363 14.5234Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shieldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 17.5px' }" />
          </svg>
        </div>
</template>
