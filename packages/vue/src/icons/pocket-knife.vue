<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PocketKnifeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after scissor-01: the blade draws through the cut and returns to guard
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-20.71deg)', 'rotate(7.53deg)', 'rotate(-1.88deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.49,
      times: [0, 0.32, 0.55, 0.8, 1],
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
            <motion.path d="M5.25 17.8752V18.0002M5.5 18.0002C5.5 18.1383 5.38807 18.2502 5.25 18.2502C5.11193 18.2502 5 18.1383 5 18.0002C5 17.8621 5.11193 17.7502 5.25 17.7502C5.38807 17.7502 5.5 17.8621 5.5 18.0002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M18.75 17.875V18M19 18C19 18.1381 18.8881 18.25 18.75 18.25C18.6119 18.25 18.5 18.1381 18.5 18C18.5 17.8619 18.6119 17.75 18.75 17.75C18.8881 17.75 19 17.8619 19 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M4.99997 21H19C20.6568 21 22 19.6569 22 18C22 16.3431 20.6568 15 19 15H4.99997C3.34312 15 1.99997 16.3431 1.99997 18C1.99997 19.6569 3.34311 21 4.99997 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M17 3V4C17 5 19 5 19 6C19 7 17 7 17 8C17 9 19 9 19 10C19 11 17 11 17 12C17 13 19 13 19 14V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M3.99997 15V3.5C3.99997 3.22386 4.22383 3 4.49997 3C6.43297 3 7.99997 4.567 7.99997 6.5V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
