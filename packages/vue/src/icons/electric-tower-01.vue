<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ElectricTower01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after flash: the charge stores tension and discharges along the bolt
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(1.08) rotate(-2.99deg)', 'scale(0.96) rotate(2deg)', 'scale(1.04) rotate(-1deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M9 6L9.39981 8.21413C9.46594 8.64819 9.42564 9.08872 9.2813 9.50982L5 22M15 6L14.6002 8.21413C14.5341 8.64819 14.5744 9.08872 14.7187 9.50982L19 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M3 11L3.32375 9.92082C3.41097 9.63011 3.45457 9.48476 3.55302 9.36314C3.65148 9.24153 3.79688 9.1534 4.08769 8.97715L8.47402 6.31877C8.73481 6.16072 8.8652 6.0817 9.01594 6.04085C9.16668 6 9.32791 6 9.65037 6H14.3496C14.6721 6 14.8333 6 14.9841 6.04085C15.1348 6.0817 15.2652 6.16073 15.526 6.31877L19.9123 8.97715C20.2031 9.1534 20.3485 9.24153 20.447 9.36314C20.5454 9.48475 20.589 9.63012 20.6762 9.92082L21 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M3 22H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M4 9H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M9.5 10L16 14.5L5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M14.5 10L8 14.5L19 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M9 6L10.4 3.76C11.1333 2.58667 11.5 2 12 2C12.5 2 12.8667 2.58667 13.6 3.76L15 6" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
