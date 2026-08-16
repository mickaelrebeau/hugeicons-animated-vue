<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SmilePlusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the existing shape makes room and the new mark stamps into place
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.47,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-9.51deg) scale(0.82)', 'rotate(2.85deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.04,
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
            <motion.path d="M21.3 10.5C21.4311 11.1462 21.5 11.8151 21.5 12.5C21.5 18.0228 17.0228 22.5 11.5 22.5C5.97715 22.5 1.5 18.0228 1.5 12.5C1.5 6.97715 5.97715 2.5 11.5 2.5C12.1849 2.5 12.8538 2.56886 13.5 2.70004" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.5px' }" />
            <motion.path d="M19.494 1.5V7.5M22.5 4.494L16.5 4.494" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 4.5px' }" />
            <motion.path d="M7.5 15.5C8.41212 16.7144 9.86433 17.5 11.5 17.5C13.1357 17.5 14.5879 16.7144 15.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 16.5px' }" />
            <motion.path d="M15.125 8.887V9.41649M7.875 8.887V9.41649M8.25 9.25C8.25 8.83579 8.08211 8.5 7.875 8.5C7.66789 8.5 7.5 8.83579 7.5 9.25C7.5 9.66421 7.66789 10 7.875 10C8.08211 10 8.25 9.66421 8.25 9.25ZM15.5 9.25C15.5 8.83579 15.3321 8.5 15.125 8.5C14.9179 8.5 14.75 8.83579 14.75 9.25C14.75 9.66421 14.9179 10 15.125 10C15.3321 10 15.5 9.66421 15.5 9.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 9.25px' }" />
          </svg>
        </div>
</template>
