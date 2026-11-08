<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RainbowIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bands light up from the inside out and the cloud bobs
// authored from scripts/authored
const bandVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.16, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const band2Variants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.08, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const band3Variants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const cloudVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
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
            <motion.path d="M2 15V12C2 7.58172 5.58172 4 10 4C13.3574 4 16.3229 6.06817 17.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.8px 9.5px' }" />
            <motion.path d="M5 15V12C5 9.23858 7.23858 7 10 7C11.8507 7 13.6488 8.0055 14.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="band2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.8px 11px' }" />
            <motion.path d="M8 15V12C8 10.8954 8.89543 10 10 10C10.9319 10 11.778 10.6374 12 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="band3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 12.5px' }" />
            <motion.path d="M19.5127 15.2C19.5168 15.2 19.5209 15.2 19.525 15.2C20.8919 15.2 22 16.2745 22 17.6C22 18.9255 20.8919 20 19.525 20H13.75C12.2312 20 11 18.8061 11 17.3333C11 15.9469 12.0912 14.8075 13.4862 14.6788M19.5127 15.2C19.5208 15.1122 19.525 15.0232 19.525 14.9333C19.525 13.3133 18.1707 12 16.5 12C14.9178 12 13.6193 13.1779 13.4862 14.6788M19.5127 15.2C19.4564 15.8051 19.2107 16.3571 18.8336 16.8M13.4862 14.6788C13.573 14.6708 13.661 14.6667 13.75 14.6667C14.3692 14.6667 14.9406 14.8651 15.4003 15.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cloudVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 16px' }" />
          </svg>
        </div>
</template>
