<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MicrosoftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four tiles pop in a clockwise round
// authored from scripts/authored
const tileVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.12)', 'scale(0.92)', 'scale(1)'],
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

const tile2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.12)', 'scale(0.92)', 'scale(1)'],
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

const tile3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.12)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.36,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tile4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.12)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.12,
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
            <motion.path d="M13.5 15.5C13.5 14.5572 13.5 14.0858 13.7929 13.7929C14.0858 13.5 14.5572 13.5 15.5 13.5H20C20.9428 13.5 21.4142 13.5 21.7071 13.7929C22 14.0858 22 14.5572 22 15.5V20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22H15.5C14.5572 22 14.0858 22 13.7929 21.7071C13.5 21.4142 13.5 20.9428 13.5 20V15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 17.8px' }" />
            <motion.path d="M2 4C2 3.05719 2 2.58579 2.29289 2.29289C2.58579 2 3.05719 2 4 2H8.5C9.44281 2 9.91421 2 10.2071 2.29289C10.5 2.58579 10.5 3.05719 10.5 4V8.5C10.5 9.44281 10.5 9.91421 10.2071 10.2071C9.91421 10.5 9.44281 10.5 8.5 10.5H4C3.05719 10.5 2.58579 10.5 2.29289 10.2071C2 9.91421 2 9.44281 2 8.5V4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tile2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.3px 6.3px' }" />
            <motion.path d="M2 15.5C2 14.5572 2 14.0858 2.29289 13.7929C2.58579 13.5 3.05719 13.5 4 13.5H8.5C9.44281 13.5 9.91421 13.5 10.2071 13.7929C10.5 14.0858 10.5 14.5572 10.5 15.5V20C10.5 20.9428 10.5 21.4142 10.2071 21.7071C9.91421 22 9.44281 22 8.5 22H4C3.05719 22 2.58579 22 2.29289 21.7071C2 21.4142 2 20.9428 2 20V15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tile3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.3px 17.8px' }" />
            <motion.path d="M13.5 4C13.5 3.05719 13.5 2.58579 13.7929 2.29289C14.0858 2 14.5572 2 15.5 2H20C20.9428 2 21.4142 2 21.7071 2.29289C22 2.58579 22 3.05719 22 4V8.5C22 9.44281 22 9.91421 21.7071 10.2071C21.4142 10.5 20.9428 10.5 20 10.5H15.5C14.5572 10.5 14.0858 10.5 13.7929 10.2071C13.5 9.91421 13.5 9.44281 13.5 8.5V4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tile4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 6.3px' }" />
          </svg>
        </div>
</template>
