<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BorderBottomIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the named border traces the exact edge it represents
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.83px) rotate(-2.16deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.42px) scale(0.74)', 'translateY(-0.41px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
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
            <motion.path d="M2.5 17.5C2.69854 18.594 3.04969 19.3991 3.6708 20.0356C5.09987 21.5 7.39991 21.5 12 21.5C16.6001 21.5 18.9001 21.5 20.3292 20.0356C20.9503 19.3991 21.3015 18.594 21.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2.75143 6.31038C2.94471 5.26831 3.28657 4.50138 3.89124 3.89506C4.49591 3.28875 5.26076 2.94595 6.3 2.75214M2.50496 14C2.5 13.414 2.5 12.7117 2.5 12.0259C2.5 11.3401 2.5 10.5751 2.50496 9.98913M10.1 2.505C10.6844 2.50003 11.3161 2.50003 12 2.50003C12.6839 2.50003 13.3156 2.50003 13.9001 2.505M17.7 2.75214C18.7392 2.94595 19.5041 3.28874 20.1088 3.89506C20.7134 4.50138 21.0553 5.26831 21.2486 6.31038M21.495 14C21.5 13.414 21.5 12.7117 21.5 12.0259C21.5 11.3402 21.5 10.5751 21.495 9.98913" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.25px' }" />
            <motion.path d="M2.5 12L4 12M20 12L21.5 12M12 15L12 9.00003M12 4.46878L12 3.00003M9 12L15 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
          </svg>
        </div>
</template>
