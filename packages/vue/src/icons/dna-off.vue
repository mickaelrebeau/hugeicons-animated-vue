<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DnaOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after refresh: the strands rotate around the shared axis
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scaleX(1)',
  },
  animate: {
    transform: ['rotate(0deg) scaleX(1)', 'rotate(5.81deg) scaleX(0.82)', 'rotate(-4.84deg) scaleX(0.9)', 'rotate(0deg) scaleX(1)'],
    transition: {
      duration: 0.88,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M7.5 22.002C8 21.502 8.5 20.502 8.5 18.002M7.6671 15.3355C6.33381 10.0023 7.33378 9.00238 7.6671 8.66905M7.6671 15.3355C2.33394 14.0022 1.66664 14.6682 1 15.3349M7.6671 15.3355C13.0003 16.6688 13.9996 15.6682 14.3329 15.3349M21 8.66905C20.3334 9.3357 19.6667 10.0023 14.3336 8.66905M14.3336 8.66905C13.534 8.46916 12.8318 8.32171 12.2146 8.2166M14.3336 8.66905C14.5334 9.46864 14.6809 10.1708 14.786 10.7879M14.3329 2.00195C14 2.50195 13.5 3.50195 13.5 6.00195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M1 2.00195L21 22.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
