<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ContactIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the binder rings pop and the contact nods
// authored from scripts/authored
const ringVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.4)', 'scale(0.92)', 'scale(1)'],
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

const ring2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.4)', 'scale(0.92)', 'scale(1)'],
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

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.16,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M12 22C7.99306 22 5.98959 22 4.7448 20.682C3.5 19.364 3.5 17.2426 3.5 13C3.5 8.75736 3.5 6.63604 4.7448 5.31802C5.98959 4 7.99306 4 12 4C16.0069 4 18.0104 4 19.2552 5.31802C20.5 6.63604 20.5 8.75736 20.5 13C20.5 17.2426 20.5 19.364 19.2552 20.682C18.0104 22 16.0069 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 4V2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="ringVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 3px' }" />
            <motion.path d="M16 4V2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="ring2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 3px' }" />
            <motion.path d="M14.018 9.49261C14.018 10.5972 13.1226 11.4926 12.0181 11.4926C10.9135 11.4926 10.0181 10.5972 10.0181 9.49261C10.0181 8.38808 10.9135 7.49268 12.0181 7.49268C13.1226 7.49268 14.018 8.38808 14.018 9.49261Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <path d="M8.06298 16.7161C9.12133 15.0868 10.802 14.4762 12.0181 14.4774C13.2341 14.4787 14.8656 15.0868 15.9239 16.7161C15.9923 16.8215 16.0112 16.9512 15.9494 17.0607C15.7019 17.4996 14.9334 18.3705 14.3784 18.4296C13.7406 18.4974 12.0723 18.5069 12.0194 18.5072C11.9664 18.5069 10.2466 18.4974 9.60851 18.4296C9.05345 18.3705 8.28496 17.4996 8.03745 17.0607C7.9757 16.9512 7.99456 16.8215 8.06298 16.7161Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
