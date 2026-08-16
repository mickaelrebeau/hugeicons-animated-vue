<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HangoutIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the hangout separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.8px) rotate(-1.01deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.41px, -1.21px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
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
            <motion.path d="M12 22C16 22 21 16 21 11C21 6 16.9706 2 12 2C7.02944 2 3 6 3 11C3 16 7.02944 20 12 20V22Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.5 11.5V10C10.5 9.05719 10.5 8.58579 10.2071 8.29289C9.91421 8 9.44281 8 8.5 8C7.55719 8 7.08579 8 6.79289 8.29289C6.5 8.58579 6.5 9.05719 6.5 10V10.5C6.5 10.9659 6.5 11.1989 6.57612 11.3827C6.67761 11.6277 6.87229 11.8224 7.11732 11.9239C7.30109 12 7.8312 12 8.29714 12C8.51058 12.9056 8 14 8 14C9.38071 14 10.5 12.8807 10.5 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 11px' }" />
            <motion.path d="M17.5 11.5V10C17.5 9.05719 17.5 8.58579 17.2071 8.29289C16.9142 8 16.4428 8 15.5 8C14.5572 8 14.0858 8 13.7929 8.29289C13.5 8.58579 13.5 9.05719 13.5 10V10.5C13.5 10.9659 13.5 11.1989 13.5761 11.3827C13.6776 11.6277 13.8723 11.8224 14.1173 11.9239C14.3011 12 14.8312 12 15.2971 12C15.5106 12.9056 15 14 15 14C16.3807 14 17.5 12.8807 17.5 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 11px' }" />
          </svg>
        </div>
</template>
