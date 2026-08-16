<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowBigRightDashIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dash holds the start, then the big arrow slides right away from it
// authored from scripts/authored
const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.4px, 0px)',
      'translate(-0.288px, 0px)',
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

const dashVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.6)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.48, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M18.7236 9.06494L16.0046 6.60723C13.8559 4.66499 12.7816 3.69387 11.8908 4.08568C11 4.47749 11 5.92117 11 8.80852V9H10C8.58579 9 7.87868 9 7.43934 9.43934C7 9.87868 7 10.5858 7 12C7 13.4142 7 14.1213 7.43934 14.5607C7.87868 15 8.58579 15 10 15H11V15.1915C11 18.0788 11 19.5225 11.8908 19.9143C12.7816 20.3061 13.8559 19.335 16.0046 17.3928L18.7236 14.9351C20.2412 13.5633 21 12.8774 21 12C21 11.1226 20.2412 10.4367 18.7236 9.06494Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 12px' }" />
            <motion.path opacity="0.4" d="M3 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
          </svg>
        </div>
</template>
