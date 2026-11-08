<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Chip02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the casino chip spins a quarter turn on its notches and the 8 flips
// authored from scripts/authored
const eightVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const notchVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.86,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
            <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M12 12C11.1716 12 10.5 12.5596 10.5 13.25C10.5 13.9404 11.1716 14.5 12 14.5C12.8284 14.5 13.5 13.9404 13.5 13.25C13.5 12.5596 12.8284 12 12 12ZM12 12C12.8284 12 13.5 11.4404 13.5 10.75C13.5 10.0596 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.0596 10.5 10.75C10.5 11.4404 11.1716 12 12 12Z" stroke="currentColor" stroke-width="1.5" :variants="eightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 2V6M12 18V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="notchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21.9992 12L17.9992 12M6 12.0005L2 12.0005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="notchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
