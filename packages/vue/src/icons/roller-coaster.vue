<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RollerCoasterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the roller coaster take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.76px) rotate(-2.07deg)', 'translateY(0.41px) rotate(0.72deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.17deg)', 'scale(1.1) rotate(2.07deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M14.5 7C13 5.5 11 4 8 4C4.5 4 2 6 2 9C2 12 4.68629 14 8 14C11.3137 14 17 12 22 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 5V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 12.5px' }" />
            <motion.path d="M18 10L18 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 15px' }" />
            <motion.path d="M14 12.5L14 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 16.25px' }" />
            <motion.path d="M10 14L10 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="7" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 17px' }" />
            <motion.path d="M6 14L6 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="6" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 17px' }" />
            <motion.path d="M10 4.5L10 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 7px' }" />
            <motion.path d="M6 4.5L6 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 7px' }" />
            <motion.path d="M2 9L2 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.5px' }" />
          </svg>
        </div>
</template>
