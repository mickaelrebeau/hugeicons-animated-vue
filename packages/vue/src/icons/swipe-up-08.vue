<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwipeUp08Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand lifts and the arrow redraws itself
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.56,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
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
            <motion.path d="M19.5039 1.99805V7.99092M19.5039 1.99805C18.8045 1.99805 17.4977 3.98998 17.0068 4.49508M19.5039 1.99805C20.2033 1.99805 21.51 3.98998 22.001 4.49508" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.53608 14.4444V9.97503M5.53608 9.97503V4.45275C5.53608 3.6321 6.22078 2.9707 7.04241 2.9707C7.86405 2.9707 8.51149 3.6321 8.51149 4.45275V8.45389M5.53608 9.97503C4.21867 11.1674 2.80102 12.6737 2.61011 13.0596C1.72182 14.4101 1.81493 15.0639 2.80486 16.7165C3.64566 18.1201 4.77642 19.6777 4.84243 19.7524C5.51425 20.5129 5.38068 20.5131 6.35443 21.2271C7.22398 21.8299 9.02761 22.2499 13.256 21.8299C16.7006 21.2985 17.5259 18.2952 17.5079 16.86V13.3157C17.7225 10.3699 16.4897 10.2369 14.2513 9.94694M8.51149 8.45389V10.9807M8.51149 8.45389C9.0701 7.54402 11.0989 7.91172 11.4943 9.62987M11.53 10.9767V9.97503C11.53 9.89606 11.5261 9.81684 11.5149 9.73872M11.4943 9.62987C11.496 9.6371 11.4976 9.64436 11.4992 9.65164C11.5056 9.68046 11.5108 9.70951 11.5149 9.73872M11.4943 9.62987C11.4984 9.66488 11.5052 9.70117 11.5149 9.73872M11.4943 9.62987C11.3539 8.43232 14.392 8.72425 14.5157 10.8303V11.975" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.7px 12.6px' }" />
          </svg>
        </div>
</template>
