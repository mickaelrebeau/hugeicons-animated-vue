<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BorderLeft01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the left edge commits outward, dashes and ticks holding
// authored from scripts/authored
const edgeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.6px, 0px)',
      'translate(-1.6px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.68,
      times: [0, 0.26, 0.72, 1],
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
            <motion.path d="M6.5 2.5C5.40606 2.69854 4.60096 3.04969 3.96447 3.6708C2.5 5.09987 2.5 7.39991 2.5 12C2.5 16.6001 2.5 18.9001 3.96447 20.3292C4.60096 20.9503 5.40606 21.3015 6.5 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="edgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 12px' }" />
            <path d="M17.6896 2.75143C18.7317 2.94471 19.4986 3.28657 20.105 3.89124C20.7113 4.49591 21.0541 5.26076 21.2479 6.3M10 2.50495C10.586 2.5 11.2883 2.5 11.9741 2.5C12.6599 2.5 13.4249 2.5 14.0109 2.50495M21.495 10.1C21.5 10.6844 21.5 11.3161 21.5 12C21.5 12.6839 21.5 13.3156 21.495 13.9001M21.2479 17.7C21.0541 18.7392 20.7113 19.5041 20.105 20.1088C19.4986 20.7134 18.7317 21.0553 17.6896 21.2486M10 21.495C10.586 21.5 11.2883 21.5 11.9741 21.5C12.6598 21.5 13.4249 21.5 14.0109 21.495" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 2.5V4M12 20V21.5M9 12H15M19.5312 12H21M12 9L12 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
