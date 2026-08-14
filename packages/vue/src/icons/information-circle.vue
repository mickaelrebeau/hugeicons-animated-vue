<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InformationCircleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

const circleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.975)', 'scale(1.02)', 'scale(0.996)', 'scale(1)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
      times: [0, 0.2, 0.5, 0.76, 1],
    },
  },
};

const stemVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(0.5px) scaleY(0.78)', 'translateY(-0.7px) scaleY(1.08)', 'translateY(0.18px) scaleY(0.98)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
      times: [0, 0.2, 0.5, 0.76, 1],
    },
  },
};

const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(0.6px) scale(0.9)', 'translateY(-1.4px) scale(1.16)', 'translateY(0.2px) scale(0.94)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
      times: [0, 0.2, 0.5, 0.76, 1],
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
          <motion.path d="M12 12V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :style="{ transformOrigin: '12px 16px' }" :animate="controls" initial="normal" />
          <motion.path d="M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :style="{ transformOrigin: '12px 8.25px' }" :animate="controls" initial="normal" />
        </svg>
      </div>
</template>
