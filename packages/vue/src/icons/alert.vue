<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlertIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the triangle double-shakes — two warnings, one after the other
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(-5deg)',
      'rotate(4deg)',
      'rotate(-4deg)',
      'rotate(1.4deg)',
      'rotate(0deg)',
    ],
    transition: { duration: 0.72, times: [0, 0.16, 0.34, 0.54, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const stemVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.82)', 'scaleY(1.12)', 'scaleY(0.9)', 'scaleY(1)'],
    transition: { duration: 0.72, times: [0, 0.2, 0.42, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.7)', 'scale(1.24)', 'scale(0.82)', 'scale(1)'],
    transition: { duration: 0.72, times: [0, 0.18, 0.4, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M12 17V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M12 9.25H12.125M12.25 9.25C12.25 9.11193 12.1381 9 12 9C11.8619 9 11.75 9.11193 11.75 9.25C11.75 9.38807 11.8619 9.5 12 9.5C12.1381 9.5 12.25 9.38807 12.25 9.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.25px' }" />
          </svg>
        </div>
</template>
