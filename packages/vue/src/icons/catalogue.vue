<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CatalogueIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two pages fan apart from their shared corner and close again
// authored from scripts/authored
const frontVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.63px, -0.50px) rotate(-5deg)',
      'translate(0.15px, 0.13px) rotate(1.2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const backVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.63px, 0.50px) rotate(-5deg)',
      'translate(-0.15px, -0.13px) rotate(1.2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const foldVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.6,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M14.5 17.5V7.5H7.5001C5.1431 7.5 3.9646 7.5 3.23237 8.23222C2.50013 8.96445 2.50012 10.1429 2.5001 12.5L2.50006 16.5C2.50004 18.857 2.50003 20.0355 3.23226 20.7678C3.9645 21.5 5.14302 21.5 7.50006 21.5H10.5C12.3856 21.5 13.3284 21.5 13.9142 20.9142C14.5 20.3284 14.5 19.3856 14.5 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 14.5px' }" />
            <motion.path d="M14.4999 16.5H16.4999C18.8569 16.5 20.0355 16.5 20.7677 15.7678C21.4999 15.0355 21.4999 13.857 21.4999 11.5V7.5C21.4999 5.14298 21.4999 3.96447 20.7677 3.23223C20.0355 2.5 18.8569 2.5 16.4999 2.5H9.50006L9.5002 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="backVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 9.5px' }" />
            <motion.path d="M5.50006 12.5H9.00006M5.50006 16.5H11.5001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 14.5px' }" />
            <motion.path d="M9.50006 2.5L14.5001 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="foldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
