<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FireworksIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after more-horizontal: the repeated points of the fireworks answer in spatial order
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.7px) rotate(-2deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.63px) scale(1.2)', 'translateY(0.38px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.44, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M19 18C17.5 12.5 12 11 12 11C12 11 8 14.5 8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 10.0249C3.33333 9.01472 7.2 7.80245 12 11.0352C13.1667 9.35033 16.8 6.38511 22 8.00281" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 5C14 5.66667 12 7.8 12 11C11.6667 9.33333 10 5.6 6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 14C6.98663 13 9.55185 11 11.9198 11C12.9064 12.1667 13.8069 14 13.3997 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3.15 3.1H3.1M3.2 3.1C3.2 3.15523 3.15523 3.2 3.1 3.2C3.04477 3.2 3 3.15523 3 3.1C3 3.04477 3.04477 3 3.1 3C3.15523 3 3.2 3.04477 3.2 3.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3.1px 3.1px' }" />
            <motion.path d="M16.9508 3.1H16.9008M17.0008 3.1C17.0008 3.15523 16.956 3.2 16.9008 3.2C16.8456 3.2 16.8008 3.15523 16.8008 3.1C16.8008 3.04477 16.8456 3 16.9008 3C16.956 3 17.0008 3.04477 17.0008 3.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '16.9px 3.1px' }" />
            <motion.path d="M20.5504 12.5014H20.5004M20.6004 12.5014C20.6004 12.5566 20.5556 12.6014 20.5004 12.6014C20.4452 12.6014 20.4004 12.5566 20.4004 12.5014C20.4004 12.4461 20.4452 12.4014 20.5004 12.4014C20.5556 12.4014 20.6004 12.4461 20.6004 12.5014Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="6" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 12.5px' }" />
            <motion.path d="M13.0345 20.9H12.9845M13.0845 20.9C13.0845 20.9552 13.0398 21 12.9845 21C12.9293 21 12.8845 20.9552 12.8845 20.9C12.8845 20.8448 12.9293 20.8 12.9845 20.8C13.0398 20.8 13.0845 20.8448 13.0845 20.9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12.98px 20.9px' }" />
            <motion.path d="M4.15 15.9H4.1M4.2 15.9C4.2 15.9552 4.15523 16 4.1 16C4.04477 16 4 15.9552 4 15.9C4 15.8448 4.04477 15.8 4.1 15.8C4.15523 15.8 4.2 15.8448 4.2 15.9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '4.1px 15.9px' }" />
            <motion.path d="M17.9508 11.1H17.9008M18.0008 11.1C18.0008 11.1552 17.956 11.2 17.9008 11.2C17.8456 11.2 17.8008 11.1552 17.8008 11.1C17.8008 11.0448 17.8456 11 17.9008 11C17.956 11 18.0008 11.0448 18.0008 11.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '17.9px 11.1px' }" />
            <motion.path d="M11.0504 4.1H11.0004M11.1004 4.1C11.1004 4.15523 11.0556 4.2 11.0004 4.2C10.9452 4.2 10.9004 4.15523 10.9004 4.1C10.9004 4.04477 10.9452 4 11.0004 4C11.0556 4 11.1004 4.04477 11.1004 4.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 4.1px' }" />
          </svg>
        </div>
</template>
