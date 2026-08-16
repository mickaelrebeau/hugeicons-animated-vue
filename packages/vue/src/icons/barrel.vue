<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BarrelIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the barrel lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.75px) rotate(-0.94deg)', 'translateY(0.42px) rotate(0.47deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.62,
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
      duration: 0.5,
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
            <motion.path d="M14 3C14.9108 5.05228 15.5 8.31975 15.5 12C15.5 15.6803 14.9108 18.9477 14 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.75px 12px' }" />
            <motion.path d="M10 3C9.08916 5.05228 8.5 8.31975 8.5 12C8.5 15.6803 9.08916 18.9477 10 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.25px 12px' }" />
            <motion.path d="M21 12C21 9.64032 20.5156 7.45033 19.6878 5.64155C19.2204 4.62031 18.9867 4.10969 18.1226 3.55485C17.2584 3 16.4568 3 14.8536 3H9.14641C7.54318 3 6.74156 3 5.87743 3.55485C5.01331 4.10969 4.77962 4.62031 4.31223 5.64155C3.48442 7.45033 3 9.64032 3 12C3 14.3597 3.48442 16.5497 4.31223 18.3585C4.77962 19.3797 5.01331 19.8903 5.87743 20.4452C6.74156 21 7.54318 21 9.14641 21H14.8536C16.4568 21 17.2584 21 18.1226 20.4452C18.9867 19.8903 19.2204 19.3797 19.6878 18.3585C20.5156 16.5497 21 14.3597 21 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4 7H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 7px' }" />
            <motion.path d="M4 17H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 17px' }" />
          </svg>
        </div>
</template>
