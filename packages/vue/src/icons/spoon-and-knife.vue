<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpoonAndKnifeIcon' })

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
    transform: ['rotate(0deg)', 'rotate(-22.74deg)', 'rotate(8.27deg)', 'rotate(-2.07deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M6.5 17.3306C7.78183 18.9563 9.76903 20 12 20C13.9587 20 15.7295 19.1955 17 17.8989M8.5 6.93647C9.52961 6.34088 10.725 6 12 6C13.9587 6 15.7295 6.80446 17 8.10101" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 20px' }" />
            <motion.path d="M16 13C16 15.2091 14.2091 17 12 17C9.79085 17 8 15.2091 8 13C8 10.7909 9.79085 9 12 9C14.2091 9 16 10.7909 16 13Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 20px' }" />
            <motion.path d="M6 7C6 8.38067 5.10457 9 4 9C2.89543 9 2 8.38067 2 7C2 5.61928 2.89543 4 4 4C5.10457 4 6 5.61928 6 7Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 20px' }" />
            <motion.path d="M19.5 13V4H20C21.1046 4 22 4.89543 22 6V13H19.5ZM19.5 13V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 20px' }" />
            <motion.path d="M4 9V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 20px' }" />
          </svg>
        </div>
</template>
