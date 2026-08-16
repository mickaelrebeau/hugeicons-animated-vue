<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartAverageIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the data marks rise in reading order so the chart appears to calculate itself
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.72px) rotate(-2.02deg)', 'translateY(0.4px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
    transform: ['translateY(1.37px) scale(0.74)', 'translateY(-0.39px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
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
            <motion.path d="M20.9877 21H9.9877C6.68787 21 5.03795 21 4.01283 19.9749C2.9877 18.9497 2.9877 17.2998 2.9877 14V3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.9877 7C7.61628 5.87847 8.46901 5 9.781 5C15.3279 5 12.2101 17 18.1708 17C19.4921 17 20.3397 16.1157 20.9877 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.9998 11.0006H10.9873M11.0123 11.0006C11.0123 11.0144 11.0011 11.0256 10.9873 11.0256C10.9735 11.0256 10.9623 11.0144 10.9623 11.0006C10.9623 10.9868 10.9735 10.9756 10.9873 10.9756C11.0011 10.9756 11.0123 10.9868 11.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '10.99px 11px' }" />
            <motion.path d="M6.99981 11.0006H6.98731M7.01231 11.0006C7.01231 11.0144 7.00112 11.0256 6.98731 11.0256C6.9735 11.0256 6.96231 11.0144 6.96231 11.0006C6.96231 10.9868 6.9735 10.9756 6.98731 10.9756C7.00112 10.9756 7.01231 10.9868 7.01231 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6.99px 11px' }" />
            <motion.path d="M20.9998 11.0006H20.9873M21.0123 11.0006C21.0123 11.0144 21.0011 11.0256 20.9873 11.0256C20.9735 11.0256 20.9623 11.0144 20.9623 11.0006C20.9623 10.9868 20.9735 10.9756 20.9873 10.9756C21.0011 10.9756 21.0123 10.9868 21.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '20.99px 11px' }" />
            <motion.path d="M16.9998 11.0006H16.9873M17.0123 11.0006C17.0123 11.0144 17.0011 11.0256 16.9873 11.0256C16.9735 11.0256 16.9623 11.0144 16.9623 11.0006C16.9623 10.9868 16.9735 10.9756 16.9873 10.9756C17.0011 10.9756 17.0123 10.9868 17.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '16.99px 11px' }" />
          </svg>
        </div>
</template>
