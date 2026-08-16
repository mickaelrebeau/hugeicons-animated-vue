<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlarmClockOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-off-01: the slash cuts through and the rest of the glyph recoils
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.4deg) translateY(0.42px)', 'rotate(0deg) translateY(1.26px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.71,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-1.91deg)', 'scale(1.08) rotate(0.77deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M9.40379 4.40379C10.2222 4.14157 11.0946 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5C20.5 13.4054 20.3584 14.2778 20.0962 15.0962M6.24476 6.24476C4.5573 7.79814 3.5 10.0256 3.5 12.5C3.5 17.1944 7.30558 21 12 21C14.4744 21 16.7019 19.9427 18.2552 18.2552" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M5.88 18.7031L3.5 21.0031" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.69px 19.85px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4 4L2 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 5px' }" />
            <motion.path d="M22 6L19 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 4.5px' }" />
          </svg>
        </div>
</template>
