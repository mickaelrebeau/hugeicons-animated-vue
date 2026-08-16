<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MessageSearch02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after search-01: the lens leans in, scans, and settles back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg) scale(1)', 'translate(1.37px, -0.6px) rotate(15.3deg) scale(0.78)', 'translate(0.44px, -0.87px) rotate(6.56deg) scale(0.76)', 'translate(-0.71px, 0.27px) rotate(-8.74deg) scale(0.8)', 'translate(-0.16px, 0.11px) rotate(-2.73deg) scale(1.08)', 'translate(0px, 0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 1.3,
      times: [0, 0.32, 0.48, 0.64, 0.84, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
}

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
            <motion.path d="M22 12C22 16.9706 19.1328 21 12 21C10.4991 21 9.20689 20.8533 8.0984 20.5814C7.50688 20.4364 6.88252 20.615 6.39239 20.9766C5.70211 21.4858 4.61547 22 3 22C3.99253 21.3333 4.63281 19.5 3.37161 17.5C2.37034 15.979 2 14.0712 2 12C2 7.02943 4.13281 2.99999 12 2.99999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M12.1248 12H11.9998M16.125 12H16M8.125 12H8M12.2498 12C12.2498 12.1381 12.1379 12.25 11.9998 12.25C11.8618 12.25 11.7498 12.1381 11.7498 12C11.7498 11.8619 11.8618 11.75 11.9998 11.75C12.1379 11.75 12.2498 11.8619 12.2498 12ZM16.25 12C16.25 12.1381 16.1381 12.25 16 12.25C15.8619 12.25 15.75 12.1381 15.75 12C15.75 11.8619 15.8619 11.75 16 11.75C16.1381 11.75 16.25 11.8619 16.25 12ZM8.25 12C8.25 12.1381 8.13807 12.25 8 12.25C7.86193 12.25 7.75 12.1381 7.75 12C7.75 11.8619 7.86193 11.75 8 11.75C8.13807 11.75 8.25 11.8619 8.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M22 8.99999L20.5 7.49999M21 4.99999C21 3.34313 19.6569 1.99999 18 1.99999C16.3431 1.99999 15 3.34313 15 4.99999C15 6.65684 16.3431 7.99999 18 7.99999C19.6569 7.99999 21 6.65684 21 4.99999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
          </svg>
        </div>
</template>
