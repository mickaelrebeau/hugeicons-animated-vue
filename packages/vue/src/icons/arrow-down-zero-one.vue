<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowDownZeroOneIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow drops, then 0 sits above 1 — ascending digits under a down sort
// authored from scripts/authored
const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.6px)',
      'translate(0px, -0.312px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shaftVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.4px)',
      'translate(0px, -0.288px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.04,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const oneStemVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'],
    transition: { duration: 0.56, delay: 0.16, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const oneBarVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.3)', 'scaleX(1.06)', 'scaleX(1)'],
    transition: { duration: 0.5, delay: 0.2, times: [0, 0.16, 0.6, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const zeroVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'],
    transition: { duration: 0.52, delay: 0.1, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M4 16C4 16 6.94596 20 8.00003 20C9.05411 20 12 16 12 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 18px' }" />
            <motion.path d="M8 19V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 11.5px' }" />
            <motion.path d="M18 20V15.4878C18 14.6127 18 14.1752 17.7236 14.0367C17.4472 13.8981 17.0981 14.1606 16.4 14.6856L16 14.9864" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="oneStemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 16.9px' }" />
            <motion.path d="M16 20H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="oneBarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 20px' }" />
            <motion.path d="M20 8V6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6V8C16 9.10457 16.8954 10 18 10C19.1046 10 20 9.10457 20 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="zeroVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 7px' }" />
          </svg>
        </div>
</template>
