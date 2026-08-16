<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BinaryCodeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the separate cells of the binary code assemble from top-left to bottom-right
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.47px) scale(0.74)', 'translateY(-0.42px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.49, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.58px) rotate(-1.86deg)', 'translateY(0.37px) rotate(0.65deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M2 6C2 5.05719 2 4.58579 2.29289 4.29289C2.58579 4 3.05719 4 4 4C4.94281 4 5.41421 4 5.70711 4.29289C6 4.58579 6 5.05719 6 6V8C6 8.94281 6 9.41421 5.70711 9.70711C5.41421 10 4.94281 10 4 10C3.05719 10 2.58579 10 2.29289 9.70711C2 9.41421 2 8.94281 2 8V6Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 7px' }" />
            <motion.path d="M6.5 16C6.5 15.0572 6.5 14.5858 6.79289 14.2929C7.08579 14 7.55719 14 8.5 14C9.44281 14 9.91421 14 10.2071 14.2929C10.5 14.5858 10.5 15.0572 10.5 16V18C10.5 18.9428 10.5 19.4142 10.2071 19.7071C9.91421 20 9.44281 20 8.5 20C7.55719 20 7.08579 20 6.79289 19.7071C6.5 19.4142 6.5 18.9428 6.5 18V16Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 17px' }" />
            <motion.path d="M13.5 6C13.5 5.05719 13.5 4.58579 13.7929 4.29289C14.0858 4 14.5572 4 15.5 4C16.4428 4 16.9142 4 17.2071 4.29289C17.5 4.58579 17.5 5.05719 17.5 6V8C17.5 8.94281 17.5 9.41421 17.2071 9.70711C16.9142 10 16.4428 10 15.5 10C14.5572 10 14.0858 10 13.7929 9.70711C13.5 9.41421 13.5 8.94281 13.5 8V6Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 7px' }" />
            <motion.path d="M13.5 16C13.5 15.0572 13.5 14.5858 13.7929 14.2929C14.0858 14 14.5572 14 15.5 14C16.4428 14 16.9142 14 17.2071 14.2929C17.5 14.5858 17.5 15.0572 17.5 16V18C17.5 18.9428 17.5 19.4142 17.2071 19.7071C16.9142 20 16.4428 20 15.5 20C14.5572 20 14.0858 20 13.7929 19.7071C13.5 19.4142 13.5 18.9428 13.5 18V16Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 17px' }" />
            <motion.path d="M9 5L10.5 4V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 15L3.5 14V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.5 5L22 4V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.5 15L22 14V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
