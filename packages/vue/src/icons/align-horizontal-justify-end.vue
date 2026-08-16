<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignHorizontalJustifyEndIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// both columns pack right until they rest against the end guide
// authored from scripts/authored
const guideVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const tallVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.6px, 0px)',
      'translate(0.36400000000000005px, 0px)',
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

const shortVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.6px, 0px)',
      'translate(0.36400000000000005px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.08,
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
            <motion.path d="M21 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 7.5V16.497C17 16.9617 17 17.194 16.9616 17.3872C16.8038 18.1806 16.1836 18.8008 15.3902 18.9586C15.197 18.997 14.9647 18.997 14.5 18.997C14.0353 18.997 13.803 18.997 13.6098 18.9586C12.8164 18.8008 12.1962 18.1806 12.0384 17.3872C12 17.194 12 16.9617 12 16.497V7.5C12 7.03534 12 6.80302 12.0384 6.60982C12.1962 5.81644 12.8164 5.19624 13.6098 5.03843C13.803 5 14.0353 5 14.5 5C14.9647 5 15.197 5 15.3902 5.03843C16.1836 5.19624 16.8038 5.81644 16.9616 6.60982C17 6.80302 17 7.03534 17 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tallVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
            <motion.path d="M8 10.5V13.497C8 13.9617 8 14.194 7.96157 14.3872C7.80376 15.1806 7.18356 15.8008 6.39018 15.9586C6.19698 15.997 5.96466 15.997 5.5 15.997C5.03534 15.997 4.80302 15.997 4.60982 15.9586C3.81644 15.8008 3.19624 15.1806 3.03843 14.3872C3 14.194 3 13.9617 3 13.497V10.5C3 10.0353 3 9.80302 3.03843 9.60982C3.19624 8.81644 3.81644 8.19624 4.60982 8.03843C4.80302 8 5.03534 8 5.5 8C5.96466 8 6.19698 8 6.39018 8.03843C7.18356 8.19624 7.80376 8.81644 7.96157 9.60982C8 9.80302 8 10.0353 8 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shortVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 12px' }" />
          </svg>
        </div>
</template>
