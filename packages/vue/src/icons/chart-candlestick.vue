<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartCandlestickIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the data marks rise in reading order so the chart appears to calculate itself
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.34px) scale(0.74)', 'translateY(-0.38px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.67px) rotate(-1.97deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M11 13V11C11 10.535 11 10.3025 10.9489 10.1118C10.8102 9.59413 10.4059 9.18981 9.88823 9.05111C9.69748 9 9.46499 9 9 9C8.53501 9 8.30252 9 8.11177 9.05111C7.59413 9.18981 7.18981 9.59413 7.05111 10.1118C7 10.3025 7 10.535 7 11V13C7 13.465 7 13.6975 7.05111 13.8882C7.18981 14.4059 7.59413 14.8102 8.11177 14.9489C8.30252 15 8.53501 15 9 15C9.46499 15 9.69748 15 9.88823 14.9489C10.4059 14.8102 10.8102 14.4059 10.9489 13.8882C11 13.6975 11 13.465 11 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12px' }" />
            <motion.path d="M19 12V8C19 7.53501 19 7.30252 18.9489 7.11177C18.8102 6.59413 18.4059 6.18981 17.8882 6.05111C17.6975 6 17.465 6 17 6C16.535 6 16.3025 6 16.1118 6.05111C15.5941 6.18981 15.1898 6.59413 15.0511 7.11177C15 7.30252 15 7.53501 15 8V12C15 12.465 15 12.6975 15.0511 12.8882C15.1898 13.4059 15.5941 13.8102 16.1118 13.9489C16.3025 14 16.535 14 17 14C17.465 14 17.6975 14 17.8882 13.9489C18.4059 13.8102 18.8102 13.4059 18.9489 12.8882C19 12.6975 19 12.465 19 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 10px' }" />
            <motion.path d="M9 9V5M9 15V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 6V3M17 14V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3 3V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
