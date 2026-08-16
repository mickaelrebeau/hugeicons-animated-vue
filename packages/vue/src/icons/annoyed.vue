<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AnnoyedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// both lids flatten to dashes and the mouth slides into a straight line
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.1, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const eyeLeftVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.4)', 'scaleX(0.7)', 'scaleX(1)'],
    transition: { duration: 0.5, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const mouthVariants: Variants = {
  normal: { transform: 'scaleX(1) translateY(0px)' },
  animate: {
    transform: [
      'scaleX(1) translateY(0px)',
      'scaleX(0.7) translateY(0.4px)',
      'scaleX(1.08) translateY(0px)',
      'scaleX(1) translateY(0px)',
    ],
    transition: { duration: 0.54, delay: 0.08, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const eyeRightVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.4)', 'scaleX(0.7)', 'scaleX(1)'],
    transition: { duration: 0.5, delay: 0.04, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 9H9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="eyeLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 9px' }" />
            <motion.path d="M8 15H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="mouthVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M15 9H17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="eyeRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 9px' }" />
          </svg>
        </div>
</template>
