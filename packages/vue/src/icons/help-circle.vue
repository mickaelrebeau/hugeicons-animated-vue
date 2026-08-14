<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HelpCircleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

const circleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.98)', 'scale(1.018)', 'scale(0.996)', 'scale(1)'],
    transition: {
      duration: 0.62,
      ease: [0.23, 1, 0.32, 1],
      times: [0, 0.2, 0.5, 0.76, 1],
    },
  },
};

const questionVariants: Variants = {
  normal: { transform: 'rotate(0deg) translateY(0px)' },
  animate: {
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-10deg) translateY(-0.2px)', 'rotate(7deg) translateY(0.1px)', 'rotate(-2deg) translateY(0px)', 'rotate(0deg) translateY(0px)'],
    transition: {
      duration: 0.62,
      ease: [0.23, 1, 0.32, 1],
      times: [0, 0.2, 0.48, 0.74, 1],
    },
  },
};

const questionDotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.88)', 'scale(1.16)', 'scale(0.94)', 'scale(1)'],
    transition: {
      duration: 0.62,
      ease: [0.23, 1, 0.32, 1],
      times: [0, 0.2, 0.48, 0.74, 1],
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
          <motion.circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="circleVariants" :style="{ transformOrigin: '12px 12px' }" :animate="controls" initial="normal" />
          <motion.path d="M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="questionVariants" :style="{ transformOrigin: '12px 16.75px' }" :animate="controls" initial="normal" />
          <motion.path d="M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="questionDotVariants" :style="{ transformOrigin: '12px 16.75px' }" :animate="controls" initial="normal" />
        </svg>
      </div>
</template>
