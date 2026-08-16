<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BathIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud-rain: water runs down out of the fitting and the fixture holds
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.29px)', 'translateY(0.32px)', 'translateY(0px)'],
    transition: {
      duration: 0.73,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const dropVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(3.65px)', 'translateY(-2.61px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.71,
      times: [0, 0.42, 0.5, 1],
      ease: ['easeIn', 'linear', 'easeOut'],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M19.4 11H4.6C4.50715 11 4.46072 11 4.4215 11.0021C3.65482 11.0422 3.04224 11.6548 3.00206 12.4215C3 12.4607 3 12.5071 3 12.6C3 12.9714 3 13.1571 3.00822 13.314C3.16894 16.3807 5.61928 18.8311 8.68598 18.9918C8.84288 19 9.02859 19 9.4 19H14.6C14.9714 19 15.1571 19 15.314 18.9918C18.3807 18.8311 20.8311 16.3807 20.9918 13.314C21 13.1571 21 12.9714 21 12.6C21 12.5071 21 12.4607 20.9979 12.4215C20.9578 11.6548 20.3452 11.0422 19.5785 11.0021C19.5393 11 19.4929 11 19.4 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M5 11V5.12132C5 5.00867 5 4.95235 5.00227 4.90475C5.05136 3.87506 5.87506 3.05136 6.90475 3.00227C6.95235 3 7.00867 3 7.12132 3C7.1707 3 7.1954 3 7.21921 3.00057C7.71656 3.01242 8.19164 3.2092 8.5517 3.5525C8.56894 3.56894 8.5864 3.5864 8.62132 3.62132L10 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 7px' }" />
            <motion.path d="M9 6L11 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 5px' }" />
            <motion.path d="M7 19L6 21M17 19L18 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
          </svg>
        </div>
</template>
