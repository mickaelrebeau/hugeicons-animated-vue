<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DistributeHorizontalLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the pieces spread to equal spacing, then return
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.44px) scale(0.74)', 'translateY(-0.41px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.85px) rotate(-2.18deg)', 'translateY(0.44px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M2 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 12px' }" />
            <motion.path d="M14 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 12px' }" />
            <motion.path d="M19.5 8.00232C18.6561 8.00232 17.6821 7.91895 17.201 8.75232C17 9.10039 17 9.5677 17 10.5023V13.5023C17 14.4369 17 14.9042 17.201 15.2523C17.6821 16.0857 18.6561 16.0023 19.5 16.0023C20.3439 16.0023 21.3179 16.0857 21.799 15.2523C22 14.9042 22 14.4369 22 13.5023V10.5023C22 9.5677 22 9.10039 21.799 8.75232C21.3179 7.91895 20.3439 8.00232 19.5 8.00232Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.49805 5.00232C6.65415 5.00232 5.68016 4.91895 5.19901 5.75232C4.99805 6.10039 4.99805 6.5677 4.99805 7.50232L4.99805 16.5023C4.99805 17.4369 4.99805 17.9042 5.19901 18.2523C5.68016 19.0857 6.65415 19.0023 7.49805 19.0023C8.34194 19.0023 9.31594 19.0857 9.79709 18.2523C9.99805 17.9042 9.99805 17.4369 9.99805 16.5023L9.99805 7.50232C9.99805 6.5677 9.99805 6.10039 9.79708 5.75232C9.31594 4.91895 8.34194 5.00232 7.49805 5.00232Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
