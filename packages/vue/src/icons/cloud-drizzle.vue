<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudDrizzleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the drizzle falls in staggered ticks
// authored from scripts/authored
const dropVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.2,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drop2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drop3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.26,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drop4Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.06,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drop5Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.3,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drop6Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.12,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
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
            <path d="M17.4776 9.00005C17.485 9.00002 17.4925 9 17.5 9C19.9853 9 22 11.0147 22 13.5C22 15.0602 21.206 16.435 20 17.2422M17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227M17.4776 9.00005C17.4466 9.34345 17.3841 9.67773 17.293 10M6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 14.6358 2.78555 16.0882 4 17.0004M6.52042 8.0227C6.67826 8.00768 6.83823 8 7 8C7.7111 8 8.38754 8.14845 9 8.41604" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 18V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 18.5px' }" />
            <motion.path d="M8 13V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drop2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 13.5px' }" />
            <motion.path d="M16 18V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drop3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 18.5px' }" />
            <motion.path d="M16 13V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drop4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 13.5px' }" />
            <motion.path d="M12 20V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drop5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M12 15V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drop6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
          </svg>
        </div>
</template>
