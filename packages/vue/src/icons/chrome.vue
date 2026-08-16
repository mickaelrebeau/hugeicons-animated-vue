<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChromeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the chrome lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.85px) rotate(-1.06deg)', 'translateY(0.48px) rotate(0.53deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
      duration: 0.48,
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
            <motion.circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.53448 14L4.0332 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.28px 10px' }" />
            <motion.path d="M11.5 21.5L15.5 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 17.75px' }" />
            <motion.path d="M12 8H21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
          </svg>
        </div>
</template>
