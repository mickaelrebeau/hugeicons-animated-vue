<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClipboardPenLineIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after edit-02: the nib leads a short handwritten stroke and lifts
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.84px) rotate(-1.06deg)', 'translateY(0.48px) rotate(0.53deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const nibVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
  animate: {
    transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-7.96deg) translate(-0.4px, 0.6px)', 'rotate(3.98deg) translate(0.3px, -0.3px)', 'rotate(0deg) translate(0px, 0px)'],
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
            <motion.path d="M13 22V20.6611C13 20.0548 13.2408 19.4735 13.6695 19.0448L18.3102 14.4041C18.5689 14.1453 18.9198 14 19.2857 14C19.6516 14 20.0025 14.1453 20.2612 14.4041L20.5959 14.7388C20.8547 14.9975 21 15.3484 21 15.7143C21 16.0802 20.8547 16.4311 20.5959 16.6898L15.9552 21.3305C15.5265 21.7592 14.9452 22 14.3389 22H13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
            <motion.path d="M8 22H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 22px' }" />
            <motion.path d="M13.5 2H8.5C7.67157 2 7 2.67157 7 3.5C7 4.32843 7.67157 5 8.5 5H13.5C14.3284 5 15 4.32843 15 3.5C15 2.67157 14.3284 2 13.5 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 3.5px' }" />
            <motion.path d="M6.9999 3.5C5.44651 3.54681 4.51997 3.72007 3.87868 4.36136C3 5.24004 3.00001 6.65425 3.00001 9.48269L3 15.9995C3.00001 18.8279 3.00001 20.2421 3.87869 21.1208C4.17848 21.4206 4.54062 21.6181 5 21.7482" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 12.62px' }" />
            <motion.path d="M18.9998 9C18.997 6.4904 18.9485 5.18857 18.1213 4.36137C17.48 3.72007 16.5534 3.54681 15 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 6.25px' }" />
          </svg>
        </div>
</template>
