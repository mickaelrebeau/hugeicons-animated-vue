<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mushroom01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cap bounces on the stem and its spots twinkle
// authored from scripts/authored
const capVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
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

const spotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const spot2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.4)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
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
            <motion.path d="M17 15C19.412 14.6082 21 13.9411 21 13.1839C21 11.9778 16.9706 11 12 11C7.02944 11 3 11.9778 3 13.1839C3 13.9411 4.58803 14.6082 7 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="capVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M21 13C21 6.92487 16.9706 2 12 2C7.02944 2 3 6.92487 3 13" stroke="currentColor" stroke-width="1.5" :variants="capVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
            <motion.path d="M18 4.76514C17.5348 5.50377 16.671 6 15.6823 6C14.2009 6 13 4.88603 13 3.51187C13 2.94318 13.2057 2.41905 13.5518 2" stroke="currentColor" stroke-width="1.5" :variants="spotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 4px' }" />
            <path d="M10 11.5C9.99527 14.9495 9.90043 20.1752 8 22M14 11.5C14.0047 14.9495 14.0996 20.1752 16 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.125 7H9M9.25 7C9.25 7.13807 9.13807 7.25 9 7.25C8.86193 7.25 8.75 7.13807 8.75 7C8.75 6.86193 8.86193 6.75 9 6.75C9.13807 6.75 9.25 6.86193 9.25 7Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="spot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 7px' }" />
          </svg>
        </div>
</template>
