<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CharityIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the giving hand drops a coin into the box and the box catches it
// authored from scripts/authored
const boxVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.42, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const slotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.12)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.42,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
      'translate(0px, 1px)',
      'translate(0px, 1px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.24, 0.4, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const coinVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateY(0px)',
      'translateY(0px)',
      'translateY(3.6px)',
      'translateY(4.4px)',
      'translateY(4.4px)',
    ],
    opacity: [0, 1, 1, 0, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.24, 0.5, 0.6, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        'easeIn',
        'linear',
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
            <path d="M7 19H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19 16C19.7767 16.0234 20.24 16.1102 20.5607 16.4313C21 16.8713 21 17.5794 21 18.9957C21 20.4119 21 21.12 20.5607 21.56C20.1213 22 19.4142 22 18 22H6C4.58579 22 3.87868 22 3.43934 21.56C3 21.12 3 20.4119 3 18.9957C3 17.5794 3 16.8713 3.43934 16.4313C3.75999 16.1102 4.22328 16.0234 5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boxVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M14.3151 19C15.0417 18.3718 15.5 17.4526 15.5 16.4286C15.5 14.535 13.933 13 12 13C10.067 13 8.5 14.535 8.5 16.4286C8.5 17.4526 8.95829 18.3718 9.6849 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="slotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M20 10L17.6052 10C17.311 10 17.0209 9.93373 16.7578 9.80643L14.7159 8.81844C14.4528 8.69114 14.1627 8.62487 13.8685 8.62487L12.8259 8.62487C11.8175 8.62487 11 7.83382 11 6.858C11 6.81856 11.027 6.7839 11.0662 6.77306L13.6071 6.07055C14.0629 5.94453 14.551 5.98842 14.975 6.19357L17.1579 7.24974M11 7.5L6.40723 8.91108C5.59303 9.16476 4.71292 8.86396 4.2029 8.1577C3.83414 7.64706 3.98428 6.91581 4.52154 6.60583L12.0371 2.26947C12.5151 1.99367 13.0791 1.92638 13.6048 2.08239L20 3.98005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 6px' }" />
            <motion.circle cx="12" cy="11" r="1.2" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
