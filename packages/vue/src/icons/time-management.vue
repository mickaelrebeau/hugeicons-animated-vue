<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TimeManagementIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after clock-01: the hands advance around their actual center and settle on the mark
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(202deg)', 'rotate(177.5deg)', 'rotate(180deg)'],
    transition: {
      duration: 0.9,
      times: [0, 0.72, 0.9, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M2 19.5C2 18.3215 2 17.7322 2.43934 17.3661C2.87868 17 3.58579 17 5 17C6.41421 17 7.12132 17 7.56066 17.3661C8 17.7322 8 18.3215 8 19.5C8 20.6785 8 21.2678 7.56066 21.6339C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.6339C2 21.2678 2 20.6785 2 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 19.5C16 18.3215 16 17.7322 16.4393 17.3661C16.8787 17 17.5858 17 19 17C20.4142 17 21.1213 17 21.5607 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.5607 21.6339C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.6339C16 21.2678 16 20.6785 16 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 17C19 14.518 18.2562 14 14.6923 14H9.30769C5.74379 14 5 14.518 5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 6.5L13 5M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
