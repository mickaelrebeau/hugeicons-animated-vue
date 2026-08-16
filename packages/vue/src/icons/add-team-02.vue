<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AddTeam02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the newcomer leans into the group, the group nods back, and the add mark is stamped between them
// authored from scripts/authored
const groupVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.94)', 'scaleX(1.02)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const memberVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.6px)', 'translateY(0px)'],
    transition: { duration: 0.54, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const newcomerVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(-1.1px)', 'translateX(0px)'],
    transition: { duration: 0.6, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.16, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M3 20V17.9704C3 16.7281 3.55927 15.5099 4.68968 14.9946C6.0685 14.3661 7.72212 14 9.5 14C10.7448 14 11.9287 14.1795 13 14.5028" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="groupVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 20px' }" />
            <motion.circle cx="9.5" cy="7.5" r="3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="memberVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 7.5px' }" />
            <motion.path d="M14.5 4.14453C15.9457 4.57481 17 5.91408 17 7.49959C17 9.0851 15.9457 10.4244 14.5 10.8547" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="newcomerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 7.5px' }" />
            <motion.path d="M18 14V20M15 17H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17px' }" />
          </svg>
        </div>
</template>
