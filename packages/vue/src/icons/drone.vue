<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DroneIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the drone take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.34deg)', 'scale(1.1) rotate(2.14deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M14 6.01527C14.2438 4.31049 15.71 3 17.4822 3C19.425 3 21 4.57498 21 6.51781C21 8.29002 19.6895 9.75615 17.9847 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 6.5px' }" />
            <motion.path d="M10 6.01527C9.75615 4.31049 8.29002 3 6.51781 3C4.57498 3 3 4.57498 3 6.51781C3 8.29002 4.31049 9.75615 6.01527 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 6.5px' }" />
            <motion.path d="M14 17.9847C14.2438 19.6895 15.71 21 17.4822 21C19.425 21 21 19.425 21 17.4822C21 15.71 19.6895 14.2438 17.9847 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
            <motion.path d="M10 17.9847C9.75615 19.6895 8.29002 21 6.51781 21C4.57498 21 3 19.425 3 17.4822C3 15.71 4.31049 14.2438 6.01527 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17.5px' }" />
            <motion.path d="M10.2346 14.8478C10.6022 15 11.0681 15 12 15C12.9319 15 13.3978 15 13.7654 14.8478C14.2554 14.6448 14.6448 14.2554 14.8478 13.7654C15 13.3978 15 12.9319 15 12C15 11.0681 15 10.6022 14.8478 10.2346C14.6448 9.74458 14.2554 9.35523 13.7654 9.15224C13.3978 9 12.9319 9 12 9C11.0681 9 10.6022 9 10.2346 9.15224C9.74458 9.35523 9.35523 9.74458 9.15224 10.2346C9 10.6022 9 11.0681 9 12C9 12.9319 9 13.3978 9.15224 13.7654C9.35523 14.2554 9.74458 14.6448 10.2346 14.8478Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5 14.5L17 17M9.5 14.5L7 17M14.5 9.5L17 7M9.5 9.5L7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
