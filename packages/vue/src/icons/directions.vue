<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DirectionsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the directions lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.08deg)', 'translateY(0.49px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.49,
      delay: 0.12,
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
            <motion.path d="M4.91872 4.43926C5.46116 3.73152 5.73238 3.37764 6.10315 3.18882C6.47393 3 6.89759 3 7.74491 3H10.1606C11.0277 3 11.4612 3 11.7306 3.29289C12 3.58579 12 4.05719 12 5V9H7.74491C6.89759 9 6.47393 9 6.10315 8.81118C5.73238 8.62236 5.46116 8.26848 4.91872 7.56074L4.70383 7.28037C4.23461 6.66816 4 6.36205 4 6C4 5.63795 4.23461 5.33184 4.70383 4.71963L4.91872 4.43926Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 6px' }" />
            <motion.path d="M19.0813 9.43926C18.5388 8.73152 18.2676 8.37764 17.8968 8.18882C17.5261 8 17.1024 8 16.2551 8H12V14H16.2551C17.1024 14 17.5261 14 17.8968 13.8112C18.2676 13.6224 18.5388 13.2685 19.0813 12.5607L19.2962 12.2804C19.7654 11.6682 20 11.362 20 11C20 10.638 19.7654 10.3318 19.2962 9.71963L19.0813 9.43926Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 11px' }" />
            <motion.path d="M12 21L12 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M9 21H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 21px' }" />
          </svg>
        </div>
</template>
