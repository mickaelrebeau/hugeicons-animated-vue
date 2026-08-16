<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatabaseSyncIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after database: a read head scans each platter from top to bottom
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.81px) rotate(-1.01deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.43, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
  }),
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
            <motion.path d="M10.9999 20C6.7573 20 4.63598 20 3.31796 18.682C1.99994 17.364 1.99994 15.2426 1.99994 11C1.99994 6.75736 1.99994 4.63604 3.31796 3.31802C4.63598 2 6.7573 2 10.9999 2C15.2426 2 17.3639 2 18.6819 3.31802C19.892 4.52814 19.9911 6.41543 19.9992 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 11px' }" />
            <motion.path d="M1.99994 11H10.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 11px' }" />
            <motion.path d="M9.99994 6.5L15.9999 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 6.5px' }" />
            <motion.path d="M6.12494 6.5H5.99994M6.24994 6.5C6.24994 6.63807 6.13801 6.75 5.99994 6.75C5.86187 6.75 5.74994 6.63807 5.74994 6.5C5.74994 6.36193 5.86187 6.25 5.99994 6.25C6.13801 6.25 6.24994 6.36193 6.24994 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 6.5px' }" />
            <motion.path d="M6.12494 15.5H5.99994M6.24994 15.5C6.24994 15.6381 6.13801 15.75 5.99994 15.75C5.86187 15.75 5.74994 15.6381 5.74994 15.5C5.74994 15.3619 5.86187 15.25 5.99994 15.25C6.13801 15.25 6.24994 15.3619 6.24994 15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 15.5px' }" />
            <motion.path d="M14.2907 16C14.8841 14.5341 16.3212 13.5 17.9999 13.5C19.4805 13.5 20.7732 14.3044 21.4648 15.5M21.7092 19C21.1158 20.4659 19.6786 21.5 17.9999 21.5C16.5194 21.5 15.2267 20.6956 14.5351 19.5M16.9999 16H13.9999V13M18.9999 19H21.9999V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17.5px' }" />
          </svg>
        </div>
</template>
