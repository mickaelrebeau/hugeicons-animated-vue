<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MaskTheaterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after eye: the eye openings narrow while the mask itself stays still
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scaleY(1)',
  },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.39,
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
            <motion.path d="M12 4.5C15.0776 4.5 17.8526 3.77588 19.8097 2.61579C19.9349 2.54155 20.0772 2.5 20.2228 2.5C20.652 2.5 21 2.84797 21 3.27722V9.5C21 16.5 16.5 21.5 12 21.5C7.5 21.5 3 16.5 3 9.5V3.27722C3 2.84797 3.34797 2.5 3.77722 2.5C3.92281 2.5 4.06506 2.54155 4.1903 2.61579C6.14736 3.77588 8.92241 4.5 12 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.5 9.5C6.86849 9.19313 7.40399 9 8 9C8.59601 9 9.13151 9.19313 9.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 15.2C13.192 15.2 14.263 14.9296 15 14.5C15 14.5 14.5 17.5 12 17.5C9.5 17.5 9 14.5 9 14.5C9.73698 14.9296 10.808 15.2 12 15.2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5 9.5C14.8685 9.19313 15.404 9 16 9C16.596 9 17.1315 9.19313 17.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
