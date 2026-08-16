<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignHorizontalDistributeEndIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// each column slides until its right edge sits on its own end-guide
// authored from scripts/authored
const tallVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.2px, 0px)',
      'translate(-0.30800000000000005px, 0px)',
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
      'translate(2.2px, 0px)',
      'translate(-0.30800000000000005px, 0px)',
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

const guideLeftVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
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

const guideRightVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
      delay: 0.08,
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
            <motion.path d="M5 7.5V16.497C5 16.9617 5 17.194 5.03843 17.3872C5.19624 18.1806 5.81644 18.8008 6.60982 18.9586C6.80302 18.997 7.03534 18.997 7.5 18.997C7.96466 18.997 8.19698 18.997 8.39018 18.9586C9.18356 18.8008 9.80376 18.1806 9.96157 17.3872C10 17.194 10 16.9617 10 16.497V7.5C10 7.03534 10 6.80302 9.96157 6.60982C9.80376 5.81644 9.18356 5.19624 8.39018 5.03843C8.19698 5 7.96466 5 7.5 5C7.03534 5 6.80302 5 6.60982 5.03843C5.81644 5.19624 5.19624 5.81644 5.03843 6.60982C5 6.80302 5 7.03534 5 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tallVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 12px' }" />
            <motion.path d="M14 10.5V13.497C14 13.9617 14 14.194 14.0384 14.3872C14.1962 15.1806 14.8164 15.8008 15.6098 15.9586C15.803 15.997 16.0353 15.997 16.5 15.997C16.9647 15.997 17.197 15.997 17.3902 15.9586C18.1836 15.8008 18.8038 15.1806 18.9616 14.3872C19 14.194 19 13.9617 19 13.497V10.5C19 10.0353 19 9.80302 18.9616 9.60982C18.8038 8.81644 18.1836 8.19624 17.3902 8.03843C17.197 8 16.9647 8 16.5 8C16.0353 8 15.803 8 15.6098 8.03843C14.8164 8.19624 14.1962 8.81644 14.0384 9.60982C14 9.80302 14 10.0353 14 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shortVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12px' }" />
            <motion.path d="M10 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guideLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guideRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
