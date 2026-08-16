<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AmericanFootballIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball spirals along its long axis, laces holding the spin
// authored from scripts/authored
const ballVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(3deg)', 'rotate(0deg)'],
    transition: { duration: 0.72, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const seamVariants: Variants = {
  normal: { transform: 'rotate(0deg) scaleX(1)' },
  animate: {
    transform: [
      'rotate(0deg) scaleX(1)',
      'rotate(-8deg) scaleX(0.7)',
      'rotate(3deg) scaleX(1.05)',
      'rotate(0deg) scaleX(1)',
    ],
    transition: { duration: 0.72, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lacesVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(14deg)', 'rotate(-4deg)', 'rotate(0deg)'],
    transition: { duration: 0.72, delay: 0.04, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M21.3006 6.05187C21.1484 5.22701 20.7411 4.45623 20.1372 3.85008C19.5309 3.24641 18.7599 2.83927 17.9348 2.68704C13.7379 1.98816 9.32857 3.26088 6.29895 6.28553C3.27 9.30951 1.9905 13.7155 2.68454 17.9122C2.83679 18.7371 3.24405 19.5079 3.84791 20.114C4.45425 20.7177 5.22527 21.1248 6.0504 21.2771C10.2213 22.0738 14.6996 20.7027 17.6917 17.6794C20.7496 14.6729 22.0291 10.2497 21.3006 6.05187Z" stroke="currentColor" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4 20L20 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9 12L12 15M12 9L15 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lacesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
