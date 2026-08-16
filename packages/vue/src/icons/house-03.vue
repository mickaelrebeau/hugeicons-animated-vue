<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'House03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the house gives a welcoming hop and lands on its foundation
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.93px)', 'translateY(0px)'],
    transition: {
      duration: 0.48,
      ease: 'easeInOut',
      times: [0, 0.35, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: ['hidden', 'visible'],
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: 0.2,
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
            <motion.path d="M1.5 10.002L7 4.00195M7 4.00195L11.311 8.70485C11.8967 9.34385 12.1896 9.66335 12.5745 9.83265C12.9593 10.002 13.3928 10.002 14.2596 10.002H22.5L18.189 5.29905C17.6033 4.66006 17.3104 4.34056 16.9255 4.17126C16.5407 4.00195 16.1072 4.00195 15.2404 4.00195H7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M11 8.50028V19.9997H7C5.11438 19.9997 4.17157 19.9997 3.58579 19.4139C3 18.8281 3 17.8853 3 15.9997V8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 14.25px' }" />
            <motion.path d="M11 19.9997H17C18.8856 19.9997 19.8284 19.9997 20.4142 19.4139C21 18.8281 21 17.8853 21 15.9997V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M4 7V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M7.125 11.25H7M7.25 11.25C7.25 11.3881 7.13807 11.5 7 11.5C6.86193 11.5 6.75 11.3881 6.75 11.25C6.75 11.1119 6.86193 11 7 11C7.13807 11 7.25 11.1119 7.25 11.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M7 20V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M15 14L17 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
