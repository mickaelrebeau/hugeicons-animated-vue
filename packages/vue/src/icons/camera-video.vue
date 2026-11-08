<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CameraVideoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the film reels spin, the body hums and the lens hood pulses
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.45px)',
      'translate(0px, 0.3px)',
      'translate(0px, -0.35px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const hoodVariants: Variants = {
  normal: { transform: 'scale(1, 1)' },
  animate: {
    transform: ['scale(1, 1)', 'scale(0.86, 1.1)', 'scale(1.04, 0.97)', 'scale(1, 1)'],
    transition: {
      duration: 0.6,
      delay: 0.1,
      times: [0, 0.3, 0.64, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const spokesVariants: Variants = {
  normal: { transform: 'rotate(0deg)', opacity: 0 },
  animate: {
    transform: ['rotate(0deg)', 'rotate(90deg)', 'rotate(270deg)', 'rotate(360deg)'],
    opacity: [0, 1, 1, 0],
    transition: { duration: 0.8, times: [0, 0.16, 0.8, 1], ease: 'linear' },
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
            <path d="M4.5 21.5L8.5 17.5M10.5 17.5L14.5 21.5M9.5 17.5L9.5 22.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 11.875C2 9.81261 2 8.78141 3.02513 8.1407C4.05025 7.5 5.70017 7.5 9 7.5H10C13.2998 7.5 14.9497 7.5 15.9749 8.1407C17 8.78141 17 9.81261 17 11.875V13.125C17 15.1874 17 16.2186 15.9749 16.8593C14.9497 17.5 13.2998 17.5 10 17.5H9C5.70017 17.5 4.05025 17.5 3.02513 16.8593C2 16.2186 2 15.1874 2 13.125V11.875Z" stroke="currentColor" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 12.5px' }" />
            <motion.path d="M17 10.2495L17.1259 10.174C19.2417 8.90435 20.2996 8.26954 21.1498 8.57605C22 8.88257 22 9.89876 22 11.9312V13.0685C22 15.1009 22 16.1171 21.1498 16.4236C20.2996 16.7301 19.2417 16.0953 17.1259 14.8257L17 14.7501" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hoodVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 12.5px' }" />
            <circle cx="12.5" cy="5" r="2.5" stroke="currentColor" stroke-width="1.5" />
            <circle cx="7" cy="4.5" r="3" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M12.5 3.6V6.4M11.1 5H13.9" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="spokesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 5px' }" />
            <motion.path d="M7 2.9V6.1M5.4 4.5H8.6" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="spokesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 4.5px' }" />
          </svg>
        </div>
</template>
