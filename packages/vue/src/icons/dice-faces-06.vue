<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DiceFaces06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the six pips pop down each column
// authored from scripts/authored
const dieVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.4, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const pipVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.8)', 'scale(0.92)', 'scale(1)'],
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

const pip2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.8)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.16,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pip3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.8)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.32,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pip4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.8)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.24,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pip5Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.8)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.08,
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
            <motion.path d="M12 21C15.7497 21 17.6246 21 18.9389 20.0451C19.3634 19.7367 19.7367 19.3634 20.0451 18.9389C21 17.6246 21 15.7497 21 12C21 8.25027 21 6.3754 20.0451 5.06107C19.7367 4.6366 19.3634 4.26331 18.9389 3.95492C17.6246 3 15.7497 3 12 3C8.25027 3 6.3754 3 5.06107 3.95491C4.6366 4.26331 4.26331 4.6366 3.95492 5.06107C3 6.3754 3 8.25027 3 12C3 15.7497 3 17.6246 3.95491 18.9389C4.26331 19.3634 4.6366 19.7367 5.06107 20.0451C6.3754 21 8.25027 21 12 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dieVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.25 7H9M9.5 7C9.5 7.27614 9.27614 7.5 9 7.5C8.72386 7.5 8.5 7.27614 8.5 7C8.5 6.72386 8.72386 6.5 9 6.5C9.27614 6.5 9.5 6.72386 9.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 7px' }" />
            <motion.path d="M9.25 17H9M9.5 17C9.5 17.2761 9.27614 17.5 9 17.5C8.72386 17.5 8.5 17.2761 8.5 17C8.5 16.7239 8.72386 16.5 9 16.5C9.27614 16.5 9.5 16.7239 9.5 17Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pip2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 17px' }" />
            <motion.path d="M15.25 17H15M15.5 17C15.5 17.2761 15.2761 17.5 15 17.5C14.7239 17.5 14.5 17.2761 14.5 17C14.5 16.7239 14.7239 16.5 15 16.5C15.2761 16.5 15.5 16.7239 15.5 17Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pip3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 17px' }" />
            <motion.path d="M15.25 12H15M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pip4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 12px' }" />
            <motion.path d="M9.25 12H9M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pip5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12px' }" />
            <motion.path d="M15.25 7H15M15.5 7C15.5 7.27614 15.2761 7.5 15 7.5C14.7239 7.5 14.5 7.27614 14.5 7C14.5 6.72386 14.7239 6.5 15 6.5C15.2761 6.5 15.5 6.72386 15.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pip2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 7px' }" />
          </svg>
        </div>
</template>
