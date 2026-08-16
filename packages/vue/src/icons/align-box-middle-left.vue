<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignBoxMiddleLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the block slides left to the midline of the box
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const blockVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.6px, 0px)',
      'translate(-0.36400000000000005px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M3 11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 9.5L7 9.5M10 14.5H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="blockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
          </svg>
        </div>
</template>
