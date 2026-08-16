<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'StructureAddIcon' })

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
      duration: 0.49,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-10.19deg) scale(0.82)', 'rotate(3.06deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.42,
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
            <motion.path d="M15.002 5C15.002 3.58579 15.002 2.87868 15.5144 2.43934C16.0267 2 16.8515 2 18.5008 2C20.1502 2 20.975 2 21.4873 2.43934C21.9997 2.87868 21.9997 3.58579 21.9997 5C21.9997 6.41421 21.9997 7.12132 21.4873 7.56066C20.975 8 20.1502 8 18.5008 8C16.8515 8 16.0267 8 15.5144 7.56066C15.002 7.12132 15.002 6.41421 15.002 5Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5px' }" />
            <motion.path d="M15.002 19C15.002 17.5858 15.002 16.8787 15.5144 16.4393C16.0267 16 16.8515 16 18.5008 16C20.1502 16 20.975 16 21.4873 16.4393C21.9997 16.8787 21.9997 17.5858 21.9997 19C21.9997 20.4142 21.9997 21.1213 21.4873 21.5607C20.975 22 20.1502 22 18.5008 22C16.8515 22 16.0267 22 15.5144 21.5607C15.002 21.1213 15.002 20.4142 15.002 19Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19px' }" />
            <motion.path d="M7.0224 9.99988L7.0224 14M9.01297 12L4.98828 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M7.02803 17.0364C9.80494 17.0364 12.0561 14.7846 12.0561 12.0068C12.0561 9.22901 9.80494 6.97717 7.02803 6.97717M7.02803 17.0364C4.25113 17.0364 2 14.7846 2 12.0068C2 9.22901 4.25113 6.97717 7.02803 6.97717M7.02803 17.0364C6.95809 19.1663 8.56235 19.9524 9.67527 19.9932H12.0021M7.02803 6.97717C6.95737 4.8171 8.54755 4.05751 9.67528 4.00977H12.0021" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.03px 12px' }" />
          </svg>
        </div>
</template>
