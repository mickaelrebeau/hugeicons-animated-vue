<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Coffee03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after coffee-02: the cup tips just enough for the liquid gesture, then rights itself
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(19.19deg)', 'rotate(23.45deg)', 'rotate(-2.13deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.81,
      times: [0, 0.28, 0.55, 0.82, 1],
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M17 11H18C18.9319 11 19.3978 11 19.7654 11.1522C20.2554 11.3552 20.6448 11.7446 20.8478 12.2346C21 12.6022 21 13.0681 21 14C21 14.9319 21 15.3978 20.8478 15.7654C20.6448 16.2554 20.2554 16.6448 19.7654 16.8478C19.3978 17 18.9319 17 18 17H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
            <motion.path d="M15 9H5C4.05719 9 3.58579 9 3.29289 9.29289C3 9.58579 3 10.0572 3 11V14C3 16.8089 3 18.2134 3.67412 19.2223C3.96596 19.659 4.34096 20.034 4.77772 20.3259C5.78661 21 7.19108 21 10 21C12.8089 21 14.2134 21 15.2223 20.3259C15.659 20.034 16.034 19.659 16.3259 19.2223C17 18.2134 17 16.8089 17 14V11C17 10.0572 17 9.58579 16.7071 9.29289C16.4142 9 15.9428 9 15 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
            <motion.path d="M10 3V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
            <motion.path d="M14 3V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
            <motion.path d="M6 3V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
          </svg>
        </div>
</template>
