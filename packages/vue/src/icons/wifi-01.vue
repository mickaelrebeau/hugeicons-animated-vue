<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Wifi01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the signal physically expands from its source; visibility only supports the motion
const arcVariants: Variants = {
  normal: { visibility: 'visible', transform: 'translateY(0px) scale(1)', transition: { duration: 0.22 } },
  animate: (i: number) => ({
    visibility: ['visible', 'visible', 'visible'],
    transform: [
      'translateY(0.8px) scale(0.82)',
      'translateY(0px) scale(1.06)',
      'translateY(0px) scale(1)',
    ],
    transition: {
      duration: 0.95,
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.08,
      delay: i * 0.12,
    },
  }),
};

const sourceVariants: Variants = {
  normal: { transform: 'scale(1)', transition: { duration: 0.2 } },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.18)', 'scale(1)'],
    transition: { duration: 0.95, ease: [0.23, 1, 0.32, 1], repeat: Infinity, repeatDelay: 0.08 },
  },
};

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M8.25 14.5C10.25 12.5 13.75 12.5 15.75 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M18.5 11.5C14.7324 8.16667 9.5 8.16667 5.5 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M2 8.5C8.31579 3.16669 15.6842 3.16668 22 8.49989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.circle cx="12" cy="18" r="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sourceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
