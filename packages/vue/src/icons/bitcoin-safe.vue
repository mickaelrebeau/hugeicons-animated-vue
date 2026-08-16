<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BitcoinSafeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after square-lock-01: the dial turns and the door breaks its seal
// generated from @hugeicons/core-free-icons
const shackleVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-18.4deg)', 'rotate(-16.35deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.82,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-0.93deg) scale(0.985)', 'rotate(1.31deg) scale(1.018)', 'rotate(-0.33deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.77,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.69px) rotate(-1.99deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M11 2H13C17.2426 2 19.364 2 20.682 3.31802C22 4.63604 22 6.75736 22 11C22 15.2426 22 17.364 20.682 18.682C19.364 20 17.2426 20 13 20H11C6.75736 20 4.63604 20 3.31802 18.682C2 17.364 2 15.2426 2 11C2 6.75736 2 4.63604 3.31802 3.31802C4.63604 2 6.75736 2 11 2Z" stroke="currentColor" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 11px' }" />
            <motion.path d="M7 15C6 14.4692 6 13.6148 6 11.9062V10.0938C6 8.38516 6 7.53082 7 7" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 11px' }" />
            <motion.path d="M18 22V20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 22V20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.9375 13.6667L12.9375 8.33333M14.5 8.33333V7M14.5 15V13.6667M12.9375 11H16.0625M16.0625 11C16.5803 11 17 11.4477 17 12V12.6667C17 13.219 16.5803 13.6667 16.0625 13.6667H12M16.0625 11C16.5803 11 17 10.5523 17 10V9.33333C17 8.78105 16.5803 8.33333 16.0625 8.33333H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
