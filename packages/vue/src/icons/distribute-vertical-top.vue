<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DistributeVerticalTopIcon' })

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
    transform: ['translateY(1.38px) scale(0.74)', 'translateY(-0.39px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.78px) rotate(-2.1deg)', 'translateY(0.42px) rotate(0.73deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M1.99988 2L21.9999 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M1.99988 14L21.9999 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M8.0022 7.5C8.0022 6.65611 7.91882 5.68211 8.7522 5.20096C9.10027 5 9.56758 5 10.5022 5H13.5022C14.4368 5 14.9041 5 15.2522 5.20096C16.0856 5.68211 16.0022 6.65611 16.0022 7.5C16.0022 8.34389 16.0856 9.31789 15.2522 9.79904C14.9041 10 14.4368 10 13.5022 10L10.5022 10C9.56758 10 9.10027 10 8.7522 9.79904C7.91882 9.31789 8.0022 8.34389 8.0022 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.0022 19.5C5.0022 18.6561 4.91882 17.6821 5.7522 17.201C6.10027 17 6.56758 17 7.5022 17L16.5022 17C17.4368 17 17.9041 17 18.2522 17.201C19.0856 17.6821 19.0022 18.6561 19.0022 19.5C19.0022 20.3439 19.0856 21.3179 18.2522 21.799C17.9041 22 17.4368 22 16.5022 22L7.5022 22C6.56758 22 6.10027 22 5.7522 21.799C4.91882 21.3179 5.0022 20.3439 5.0022 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
