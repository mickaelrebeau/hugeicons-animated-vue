<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FireSecurityIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame flickers and the shield stamps
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1) skewX(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
      'translate(0px, -0.80px) scaleY(1.08) skewX(-4deg)',
      'translate(0px, 0.60px) scaleY(0.94) skewX(3deg)',
      'translate(0px, -0.50px) scaleY(1.05) skewX(-2deg)',
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M10.945 22C6.55709 22 2.99998 18.4183 2.99998 14C2.99998 11.9162 3.95827 9.83244 5.20922 8C5.46594 9.5 6.57524 12.4 8.95876 12C6.33496 6.5 10.945 2 10.945 2C10.945 2 11.4416 5.5 15.9107 9C16.3245 9.32407 16.6857 9.65805 17 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 12px' }" />
            <motion.path d="M15.5354 16.2023C15.5354 15.5078 15.4277 14.5459 15.836 13.9207C16.7377 12.5397 18.6013 12.7799 19.2625 14.1008C19.5631 14.7612 19.4516 15.538 19.4669 16.1931M15.5354 16.2023C14.6863 16.2902 14.3202 16.8422 14.1768 17.2829C14.0325 17.8233 13.9123 19.1442 14.1046 20.5852C14.2729 21.4858 14.9066 21.9039 15.4724 21.9541C16.0134 22.0021 18.2978 21.9901 18.9591 21.9901C19.9839 21.9901 20.5851 21.7259 20.8857 20.6452C21.0299 19.8046 21.066 18.2436 20.8255 17.2829C20.5597 16.4813 19.9245 16.2483 19.4669 16.1931M15.5354 16.2023C16.8165 16.0696 18.1849 16.0385 19.4669 16.1931" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shieldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.3px' }" />
          </svg>
        </div>
</template>
