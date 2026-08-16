<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatevIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the datev take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.41deg)', 'scale(1.1) rotate(2.17deg)', 'scale(1) rotate(0deg)'],
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
            <motion.path d="M1.25 14.5V9.5H2.25C3.63071 9.5 4.75 10.6193 4.75 12C4.75 13.3807 3.63071 14.5 2.25 14.5H1.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M5.75 14.5L7.75 9.5L9.75 14.5H8.03571" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 12px' }" />
            <motion.path d="M18.75 9.5L20.75 14.5L22.75 9.5H21.0357" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="cellVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '20.75px 12px' }" />
            <motion.path d="M10.25 9.5H11.75M13.25 9.5H11.75M11.75 9.5V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 12px' }" />
            <motion.path d="M17.25 14.5H14.75V12M17.25 9.5H14.75V12M14.75 12H17.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12px' }" />
          </svg>
        </div>
</template>
