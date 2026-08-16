<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CannabisOffIcon' })

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
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.72deg) translateY(0.44px)', 'rotate(0deg) translateY(1.31px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.73,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-2deg)', 'scale(1.08) rotate(0.8deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M10.1206 5.12057C10.2879 4.28979 10.5471 3.48584 10.9007 2.71887C11.3427 1.76038 12.6574 1.76038 13.0993 2.71887C13.7787 4.19236 14.1096 5.80231 14.1096 7.47689C15.2211 6.34797 17.0072 5.43119 18.8663 5.08315C19.7241 4.92255 20.421 5.63107 20.0928 6.41249C19.4034 8.05354 17.8305 9.79631 16.7466 10.5303C17.8039 10.5303 19.6462 11.4163 20.7192 12.4646C21.283 13.0154 20.9439 13.8345 20.1821 14.0776C19.8843 14.1726 19.5966 14.2529 19.3205 14.3205M5.07324 5.07321C4.24359 4.95609 3.58679 5.64954 3.90729 6.41249C4.59666 8.05354 6.16954 9.79631 7.25348 10.5303C6.19619 10.5303 4.35386 11.4163 3.28086 12.4646C2.71709 13.0154 3.05621 13.8345 3.81794 14.0776C6.46084 14.9209 8.30827 14.6015 8.30827 14.6015C7.35926 15.5654 6.78505 16.6364 6.50758 17.6718C6.28881 18.4881 7.02733 19.1988 7.86204 18.9493C9.52329 18.4529 10.9026 17.2428 12 16.1282C13.0974 17.2428 14.4768 18.4529 16.138 18.9493C16.9727 19.1988 17.7113 18.4881 17.4925 17.6718C17.47 17.5877 17.4455 17.5034 17.419 17.419" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.48px' }" />
            <motion.path d="M12 16.5V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.25px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
