<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DistributeHorizontalCenterIcon' })

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
    transform: ['translateY(1.43px) scale(0.74)', 'translateY(-0.41px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.84px) rotate(-2.17deg)', 'translateY(0.43px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M7 5L7 2M7 19L7 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M17 8.00232C17.8439 8.00232 18.8179 7.91895 19.299 8.75232C19.5 9.10039 19.5 9.5677 19.5 10.5023V13.5023C19.5 14.4369 19.5 14.9042 19.299 15.2523C18.8179 16.0857 17.8439 16.0023 17 16.0023C16.1561 16.0023 15.1821 16.0857 14.701 15.2523C14.5 14.9042 14.5 14.4369 14.5 13.5023L14.5 10.5023C14.5 9.5677 14.5 9.10039 14.701 8.75232C15.1821 7.91895 16.1561 8.00232 17 8.00232Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 5.00232C7.84389 5.00232 8.81789 4.91895 9.29904 5.75232C9.5 6.10039 9.5 6.5677 9.5 7.50232L9.5 16.5023C9.5 17.4369 9.5 17.9042 9.29904 18.2523C8.81789 19.0857 7.84389 19.0023 7 19.0023C6.15611 19.0023 5.18211 19.0857 4.70096 18.2523C4.5 17.9042 4.5 17.4369 4.5 16.5023L4.5 7.50232C4.5 6.5677 4.5 6.10039 4.70096 5.75232C5.18211 4.91895 6.15611 5.00232 7 5.00232Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 8V2M17 16V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
          </svg>
        </div>
</template>
