<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PieIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// steam puffs up through the slits and the crust breathes
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const slitVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 1, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const slit2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.12, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const slit3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.06, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const puffVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, -1.3px) scale(1)',
      'translate(0px, -2.6px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const puff2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(-0.2px, -1.1px) scale(1)',
      'translate(-0.4px, -2.2px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.12,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const puff3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0.2px, -1.1px) scale(1)',
      'translate(0.4px, -2.2px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.2,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
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
            <motion.path d="M20.7578 10.1693C21.5 10.1693 22 11.1878 22 12.027C22 14.3396 18.5658 14.7345 18 12.5287C17.4968 14.4904 14.5032 14.4904 14 12.5287C13.4968 14.4904 10.5032 14.4904 10 12.5287C9.49677 14.4904 6.50323 14.4904 6 12.5287C5.43417 14.7345 2 14.3396 2 12.027C2 11.1878 2.5 10.1693 3.24224 10.1693C4.18202 6.63181 7.74641 4 12 4C16.2536 4 19.818 6.63181 20.7578 10.1693Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.4px' }" />
            <motion.path d="M15 7.5L15.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9 7.5L8.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slit2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 7V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slit3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M3.5 14L3.94872 15.0769C4.94302 17.4632 5.44017 18.6564 6.44787 19.3282C7.45556 20 8.74815 20 11.3333 20H12.6667C15.2518 20 16.5444 20 17.5521 19.3282C18.5598 18.6564 19.057 17.4632 20.0513 15.0769L20.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.circle cx="12" cy="5" r="0.8" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puffVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="9" cy="5.5" r="0.6" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puff2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="15" cy="5.5" r="0.6" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puff3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
