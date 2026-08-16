<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiBrowserIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the address bar fills left to right as the page loads, then the spark fires in the corner
// authored from scripts/authored
const sparkVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.62, delay: 0.34, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const addressBarVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.08)', 'scaleX(1)'],
    transition: { duration: 0.6, times: [0, 0.24, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const windowVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.56, delay: 0.08, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M18.4737 15.5215C18.4795 15.4928 18.5205 15.4928 18.5263 15.5215C18.8302 17.0081 19.9919 18.1698 21.4785 18.4737C21.5072 18.4795 21.5072 18.5205 21.4785 18.5263C19.9919 18.8302 18.8302 19.9919 18.5263 21.4785C18.5205 21.5072 18.4795 21.5072 18.4737 21.4785C18.1698 19.9919 17.0081 18.8302 15.5215 18.5263C15.4928 18.5205 15.4928 18.4795 15.5215 18.4737C17.0081 18.1698 18.1698 17.0081 18.4737 15.5215Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18.5px' }" />
            <motion.path d="M3 7.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="addressBarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 7.5px' }" />
            <motion.path d="M12.5 20.5H10.5C6.72876 20.5 4.84315 20.5 3.67157 19.3284C2.5 18.1569 2.5 16.2712 2.5 12.5V10.5C2.5 6.72876 2.5 4.84315 3.67157 3.67157C4.84315 2.5 6.72876 2.5 10.5 2.5H12.5C16.2712 2.5 18.1569 2.5 19.3284 3.67157C20.5 4.84315 20.5 6.72876 20.5 10.5V12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 11.5px' }" />
          </svg>
        </div>
</template>
