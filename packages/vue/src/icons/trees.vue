<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TreesIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the trees take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.21deg)', 'scale(1.1) rotate(2.08deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.82px) rotate(-2.15deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M3 13V9C3 7.34315 4.34315 6 6 6H8C9.65685 6 11 7.34315 11 9V13C11 14.6569 9.65685 16 8 16H6C4.34315 16 3 14.6569 3 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 11px' }" />
            <motion.path d="M10 3.5L11.1599 2.34017C11.3777 2.12236 11.6731 2 11.9811 2C12.3113 2 12.6259 2.14057 12.8462 2.38654L16.7929 6.79289C16.9255 6.9255 17 7.10536 17 7.29289C17 7.68342 16.6834 8 16.2929 8H15L18.7929 11.7929C18.9255 11.9255 19 12.1054 19 12.2929C19 12.6834 18.6834 13 18.2929 13H17L20.7929 16.7929C20.9255 16.9255 21 17.1054 21 17.2929C21 17.6834 20.6834 18 20.2929 18H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 10px' }" />
            <motion.path d="M13 18V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.00003 11V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
