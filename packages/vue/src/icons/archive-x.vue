<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArchiveXIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the X stamps on the box, and the lid flinches
// authored from scripts/authored
const boxVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.02)', 'scale(1)'],
    transition: { duration: 0.54, delay: 0.1, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const markVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.04, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lidVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-3deg)', 'rotate(1deg)', 'rotate(0deg)'],
    transition: { duration: 0.52, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M4 8V15C4 17.8284 4 19.2426 4.87868 20.1213C5.75736 21 7.17157 21 10 21H14C16.8284 21 18.2426 21 19.1213 20.1213C20 19.2426 20 17.8284 20 15V8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="boxVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M9.5 12L14.5 17M14.5 12L9.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M2 5.50002C2 5.0354 2 4.80309 2.03842 4.60991C2.19623 3.81651 2.81644 3.19629 3.60984 3.03848C3.80302 3.00006 4.03533 3.00006 4.49995 3.00006L19.5 3C19.9646 3 20.197 3 20.3902 3.03843C21.1836 3.19623 21.8038 3.81643 21.9616 4.60982C22 4.80302 22 5.03534 22 5.49999C22 5.96464 22 6.19696 21.9616 6.39016C21.8038 7.18355 21.1836 7.80374 20.3902 7.96156C20.197 7.99998 19.9647 7.99998 19.5 7.99998H4.49996C4.03534 7.99998 3.80303 7.99998 3.60985 7.96156C2.81644 7.80375 2.19623 7.18354 2.03842 6.39014C2 6.19695 2 5.96464 2 5.50002Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.5px' }" />
          </svg>
        </div>
</template>
