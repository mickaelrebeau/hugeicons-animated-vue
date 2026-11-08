<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'More01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dots ripple out from the center
// authored from scripts/authored
const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.6)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dot2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.6)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dot3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.6)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
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
            <motion.path d="M6.00449 6.5V6M7.00449 6.5C7.00449 5.94772 6.55677 5.5 6.00449 5.5C5.4522 5.5 5.00449 5.94772 5.00449 6.5C5.00449 7.05228 5.4522 7.5 6.00449 7.5C6.55677 7.5 7.00449 7.05228 7.00449 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 6.5px' }" />
            <motion.path d="M6.00449 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12.5px' }" />
            <motion.path d="M6.00449 18.5V18M7.00449 18.5C7.00449 17.9477 6.55677 17.5 6.00449 17.5C5.4522 17.5 5.00449 17.9477 5.00449 18.5C5.00449 19.0523 5.4522 19.5 6.00449 19.5C6.55677 19.5 7.00449 19.0523 7.00449 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 18.5px' }" />
            <motion.path d="M18.0045 6.5V6M19.0045 6.5C19.0045 5.94772 18.5568 5.5 18.0045 5.5C17.4522 5.5 17.0045 5.94772 17.0045 6.5C17.0045 7.05228 17.4522 7.5 18.0045 7.5C18.5568 7.5 19.0045 7.05228 19.0045 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 6.5px' }" />
            <motion.path d="M18.0045 12.5V12M19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 12.5px' }" />
            <motion.path d="M12.0045 12.5V12M13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M12.0045 6.5V6M13.0045 6.5C13.0045 5.94772 12.5568 5.5 12.0045 5.5C11.4522 5.5 11.0045 5.94772 11.0045 6.5C11.0045 7.05228 11.4522 7.5 12.0045 7.5C12.5568 7.5 13.0045 7.05228 13.0045 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.path d="M18.0045 18.5V18M19.0045 18.5C19.0045 17.9477 18.5568 17.5 18.0045 17.5C17.4522 17.5 17.0045 17.9477 17.0045 18.5C17.0045 19.0523 17.4522 19.5 18.0045 19.5C18.5568 19.5 19.0045 19.0523 19.0045 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18.5px' }" />
            <motion.path d="M12.0045 18.5V18M13.0045 18.5C13.0045 17.9477 12.5568 17.5 12.0045 17.5C11.4522 17.5 11.0045 17.9477 11.0045 18.5C11.0045 19.0523 11.4522 19.5 12.0045 19.5C12.5568 19.5 13.0045 19.0523 13.0045 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.5px' }" />
          </svg>
        </div>
</template>
