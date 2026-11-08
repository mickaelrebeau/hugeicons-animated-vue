<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartUpIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bars grow in turn, the trend line rewrites upward and its head pushes up
// authored from scripts/authored
const barVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 4.80px) scaleY(0.2)',
      'translate(0px, -0.48px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.16,
      times: [0, 0.16, 0.62, 1],
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
      'translate(0.8px, -0.8px)',
      'translate(-0.096px, 0.096px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.46,
      delay: 0.3,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const trendVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bar2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 3.36px) scaleY(0.2)',
      'translate(0px, -0.34px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.08,
      times: [0, 0.16, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bar3Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 2.40px) scaleY(0.2)',
      'translate(0px, -0.24px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.16, 0.62, 1],
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
            <motion.path d="M20.5 10.5V19.5C20.5 19.9659 20.5 20.1989 20.4239 20.3827C20.3224 20.6277 20.1277 20.8224 19.8827 20.9239C19.6989 21 19.4659 21 19 21C18.5341 21 18.3011 21 18.1173 20.9239C17.8723 20.8224 17.6776 20.6277 17.5761 20.3827C17.5 20.1989 17.5 19.9659 17.5 19.5V10.5C17.5 10.0341 17.5 9.80109 17.5761 9.61732C17.6776 9.37229 17.8723 9.17761 18.1173 9.07612C18.3011 9 18.5341 9 19 9C19.4659 9 19.6989 9 19.8827 9.07612C20.1277 9.17761 20.3224 9.37229 20.4239 9.61732C20.5 9.80109 20.5 10.0341 20.5 10.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 15px' }" />
            <motion.path d="M16.5 3H19.5V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 4.5px' }" />
            <motion.path d="M19 3.5C19 3.5 15 8.5 4.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trendVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.5 14V19.5C13.5 19.9659 13.5 20.1989 13.4239 20.3827C13.3224 20.6277 13.1277 20.8224 12.8827 20.9239C12.6989 21 12.4659 21 12 21C11.5341 21 11.3011 21 11.1173 20.9239C10.8723 20.8224 10.6776 20.6277 10.5761 20.3827C10.5 20.1989 10.5 19.9659 10.5 19.5V14C10.5 13.5341 10.5 13.3011 10.5761 13.1173C10.6776 12.8723 10.8723 12.6776 11.1173 12.5761C11.3011 12.5 11.5341 12.5 12 12.5C12.4659 12.5 12.6989 12.5 12.8827 12.5761C13.1277 12.6776 13.3224 12.8723 13.4239 13.1173C13.5 13.3011 13.5 13.5341 13.5 14Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bar2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.8px' }" />
            <motion.path d="M6.5 16.5V19.5C6.5 19.9659 6.5 20.1989 6.42388 20.3827C6.32239 20.6277 6.12771 20.8224 5.88268 20.9239C5.69891 21 5.46594 21 5 21C4.53406 21 4.30109 21 4.11732 20.9239C3.87229 20.8224 3.67761 20.6277 3.57612 20.3827C3.5 20.1989 3.5 19.9659 3.5 19.5V16.5C3.5 16.0341 3.5 15.8011 3.57612 15.6173C3.67761 15.3723 3.87229 15.1776 4.11732 15.0761C4.30109 15 4.53406 15 5 15C5.46594 15 5.69891 15 5.88268 15.0761C6.12771 15.1776 6.32239 15.3723 6.42388 15.6173C6.5 15.8011 6.5 16.0341 6.5 16.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bar3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 18px' }" />
          </svg>
        </div>
</template>
