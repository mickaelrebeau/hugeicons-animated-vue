<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NotificationBlock01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-03: the bell rings from its hanging point and decays naturally
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-15.15deg)', 'rotate(11.91deg)', 'rotate(-8.66deg)', 'rotate(5.41deg)', 'rotate(-2.16deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.94,
      ease: 'easeInOut',
      times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1],
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
            <motion.path d="M15.5 18.5C15.5 20.433 13.933 22 12 22C10.067 22 8.5 20.433 8.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
            <motion.path d="M19 11.5V12.7558C19 13.5514 19.3161 14.3145 19.8787 14.8771L20.4819 15.4803C20.8136 15.8121 21 16.262 21 16.7311C21 17.708 20.208 18.5 19.2311 18.5H4.76887C3.79195 18.5 3 17.708 3 16.7311C3 16.262 3.18636 15.8121 3.51809 15.4803L4.12132 14.8771C4.68393 14.3145 5 13.5514 5 12.7558V10C5 6.13401 8.13401 3 12 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
            <motion.path d="M15.5 3.5L19.5 7.5M21 5.5C21 3.567 19.433 2 17.5 2C15.567 2 14 3.567 14 5.5C14 7.433 15.567 9 17.5 9C19.433 9 21 7.433 21 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
          </svg>
        </div>
</template>
