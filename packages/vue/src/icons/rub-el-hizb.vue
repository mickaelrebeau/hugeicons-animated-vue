<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RubElHizbIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two squares turn against each other around the centre circle
// authored from scripts/authored
const squareVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const square2Variants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(-18deg)',
      'rotate(-62.99999999999999deg)',
      'rotate(-92.7deg)',
      'rotate(-90deg)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const centreVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
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
            <motion.path d="M4.5 6.64286C4.5 5.6327 4.5 5.12763 4.81381 4.81381C5.12763 4.5 5.6327 4.5 6.64286 4.5H17.3571C18.3673 4.5 18.8724 4.5 19.1862 4.81381C19.5 5.12763 19.5 5.6327 19.5 6.64286V17.3571C19.5 18.3673 19.5 18.8724 19.1862 19.1862C18.8724 19.5 18.3673 19.5 17.3571 19.5H6.64286C5.6327 19.5 5.12763 19.5 4.81381 19.1862C4.5 18.8724 4.5 18.3673 4.5 17.3571V6.64286Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="squareVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.509 3.05426C11.2119 2.35142 11.5633 2 12 2C12.4367 2 12.7881 2.35142 13.491 3.05427L20.9457 10.509C21.6486 11.2119 22 11.5633 22 12C22 12.4367 21.6486 12.7881 20.9457 13.491L13.491 20.9457C12.7881 21.6486 12.4367 22 12 22C11.5633 22 11.2119 21.6486 10.509 20.9457L3.05426 13.491C2.35142 12.7881 2 12.4367 2 12C2 11.5633 2.35142 11.2119 3.05427 10.509L10.509 3.05426Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="square2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="12" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="centreVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
