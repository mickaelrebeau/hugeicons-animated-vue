<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserCheck01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the profile nods while the confirmation stroke draws and lands beside it
const userVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.1px)', 'translateY(0.45px)', 'translateY(0px)'],
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

const checkVariants: Variants = {
  normal: { transform: 'scale(1)', pathLength: 1 },
  animate: {
    transform: ['scale(0.72)', 'scale(1.13)', 'scale(0.97)', 'scale(1)'],
    pathLength: [0, 1, 1, 1],
    transition: { duration: 0.5, delay: 0.08, ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="userVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 8px' }" />
            <motion.path d="M3 20C3 16.134 6.13401 13 10 13C11.9587 13 13.7295 13.8045 15 15.101" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="userVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 18px' }" />
            <motion.path d="M13 18.5C13 18.5 14.3485 19.0067 15 21C15 21 18.1765 16 21 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="checkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
          </svg>
        </div>
</template>
