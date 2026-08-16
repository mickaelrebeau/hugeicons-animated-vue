<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowBigLeftDashIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dash holds the start, then the big arrow slides left away from it
// authored from scripts/authored
const dashVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.6)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.48, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.4px, 0px)',
      'translate(0.288px, 0px)',
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
            <motion.path d="M21 9L21 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 12px' }" />
            <motion.path d="M5.27643 14.9351L7.99539 17.3928C10.1441 19.335 11.2184 20.3061 12.1092 19.9143C13 19.5225 13 18.0788 13 15.1915V15H14C15.4142 15 16.1213 15 16.5607 14.5607C17 14.1213 17 13.4142 17 12C17 10.5858 17 9.87868 16.5607 9.43934C16.1213 9 15.4142 9 14 9H13V8.80852C13 5.92117 13 4.47749 12.1092 4.08568C11.2184 3.69387 10.1441 4.66499 7.99538 6.60723L5.27642 9.06495C3.75881 10.4367 3 11.1226 3 12C3 12.8774 3.75881 13.5633 5.27643 14.9351Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 12px' }" />
          </svg>
        </div>
</template>
