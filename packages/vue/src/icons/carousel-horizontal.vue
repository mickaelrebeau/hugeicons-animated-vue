<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CarouselHorizontalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the carousel turns: the slide narrows as if rotating and the side slides open out
// authored from scripts/authored
const slideVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.66)', 'scaleX(1.04)', 'scaleX(1)'],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sideVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.3px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.72, 0.9, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const side2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.6px, 0px)',
      'translate(0.3px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.72, 0.9, 1],
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
            <motion.path d="M7 8C7 5.64298 7 4.46447 7.73223 3.73223C8.46447 3 9.64298 3 12 3C14.357 3 15.5355 3 16.2678 3.73223C17 4.46447 17 5.64298 17 8V16C17 18.357 17 19.5355 16.2678 20.2678C15.5355 21 14.357 21 12 21C9.64298 21 8.46447 21 7.73223 20.2678C7 19.5355 7 18.357 7 16V8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 7C2.54697 7.10449 2.94952 7.28931 3.26777 7.61621C4 8.36835 4 9.5789 4 12C4 14.4211 4 15.6316 3.26777 16.3838C2.94952 16.7107 2.54697 16.8955 2 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M22 7C21.453 7.10449 21.0505 7.28931 20.7322 7.61621C20 8.36835 20 9.5789 20 12C20 14.4211 20 15.6316 20.7322 16.3838C21.0505 16.7107 21.453 16.8955 22 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="side2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 12px' }" />
          </svg>
        </div>
</template>
