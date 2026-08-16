<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BookSearchIcon' })

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
    transform: ['translate(0px, 0px) rotate(0deg) scale(1)', 'translate(1.23px, -0.54px) rotate(13.81deg) scale(0.78)', 'translate(0.39px, -0.79px) rotate(5.92deg) scale(0.76)', 'translate(-0.64px, 0.25px) rotate(-7.89deg) scale(0.8)', 'translate(-0.15px, 0.1px) rotate(-2.47deg) scale(1.08)', 'translate(0px, 0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 1.21,
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
            <motion.path d="M18.5 17.5L21 20M19 15C19 16.6569 17.6569 18 16 18C14.3431 18 13 16.6569 13 15C13 13.3431 14.3431 12 16 12C17.6569 12 19 13.3431 19 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M17 22H5C3.89543 22 3 21.1046 3 20M10 18H5C3.89543 18 3 18.8954 3 20M3 20V8C3 5.17157 3 3.75736 3.87868 2.87868C4.75736 2 6.17157 2 9 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
          </svg>
        </div>
</template>
