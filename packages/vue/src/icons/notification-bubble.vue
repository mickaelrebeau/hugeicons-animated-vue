<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NotificationBubbleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-03: the bell rings from its hanging point and decays naturally
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-15.31deg)', 'rotate(12.03deg)', 'rotate(-8.75deg)', 'rotate(5.47deg)', 'rotate(-2.19deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.95,
      ease: 'easeInOut',
      times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1],
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
            <motion.path d="M21.5 11.9961C21.5 17.2428 17.2467 21.4961 12 21.4961C10.3446 21.4961 8.78814 21.0727 7.43293 20.3283C6.87976 20.0244 6.22839 19.9176 5.62966 20.1171L3.00001 20.9937L3.87695 18.3629C4.07645 17.7644 3.96974 17.1133 3.66622 16.5603C2.92279 15.2057 2.5 13.6503 2.5 11.9961C2.5 6.74939 6.75329 2.49609 12 2.49609" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2.5px' }" />
            <motion.path d="M18.0001 9.49609C19.9331 9.49609 21.5001 7.92909 21.5001 5.99609C21.5001 4.06309 19.9331 2.49609 18.0001 2.49609C16.0671 2.49609 14.5001 4.06309 14.5001 5.99609C14.5001 7.92909 16.0671 9.49609 18.0001 9.49609Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2.5px' }" />
          </svg>
        </div>
</template>
