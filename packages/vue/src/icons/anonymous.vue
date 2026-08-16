<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AnonymousIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mask drops over the face, then both eye-holes blink together
// authored from scripts/authored
const eyeLeftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bridgeVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.06)', 'scaleX(1)'],
    transition: { duration: 0.5, delay: 0.24, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const browVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'],
    transition: { duration: 0.56, delay: 0.08, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const maskVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(0.3px)', 'translateY(0px)'],
    transition: { duration: 0.6, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M7 14.9999C5.34315 14.9999 4 16.343 4 17.9999C4 19.6567 5.34315 20.9999 7 20.9999C8.65685 20.9999 10 19.6567 10 17.9999C10 16.343 8.65685 14.9999 7 14.9999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18px' }" />
            <motion.path d="M17 14.9999C15.3431 14.9999 14 16.343 14 17.9999C14 19.6567 15.3431 20.9999 17 20.9999C18.6569 20.9999 20 19.6567 20 17.9999C20 16.343 18.6569 14.9999 17 14.9999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
            <motion.path d="M14 17H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bridgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M22 12.9999C19.5434 11.7724 15.9734 10.9999 12 10.9999C8.02658 10.9999 4.45659 11.7724 2 12.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="browVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 11.4999L17.9425 4.71233C17.7268 3.32807 16.2232 2.578 15.0093 3.24907L14.3943 3.58903C12.9019 4.414 11.0981 4.414 9.60574 3.58903L8.99074 3.24907C7.77676 2.578 6.27318 3.32808 6.05751 4.71233L5 11.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="maskVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
          </svg>
        </div>
</template>
