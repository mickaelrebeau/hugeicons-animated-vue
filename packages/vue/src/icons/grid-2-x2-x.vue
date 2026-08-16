<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Grid2X2XIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the cells assemble from top-left to bottom-right
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.22deg)', 'scale(1.1) rotate(2.09deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M21.2417 16.25L18.75 18.7458M18.75 18.7458L16.25 21.25M18.75 18.7458L21.25 21.25M18.75 18.7458L16.2583 16.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18.75px 18.75px' }" />
            <motion.path d="M11.75 20.75C7.50736 20.75 5.38604 20.75 4.06802 19.432C2.75 18.114 2.75 15.9926 2.75 11.75C2.75 7.50736 2.75 5.38604 4.06802 4.06802C5.38604 2.75 7.50736 2.75 11.75 2.75C15.9926 2.75 18.114 2.75 19.432 4.06802C20.75 5.38604 20.75 7.50736 20.75 11.75" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 11.75px' }" />
            <motion.path d="M11.75 2.75V20.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 11.75px' }" />
            <motion.path d="M20.7509 11.7422H2.75586" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 11.74px' }" />
          </svg>
        </div>
</template>
