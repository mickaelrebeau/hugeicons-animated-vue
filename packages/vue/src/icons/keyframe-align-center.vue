<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KeyframeAlignCenterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four guides pull in on the diamond
// authored from scripts/authored
const keyVariants: Variants = {
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
      duration: 0.62,
      delay: 0.16,
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

const guideVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1px, 0px)', 'translate(-0.12px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const guide2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-1px, 0px)', 'translate(0.12px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const guide3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, -1px)', 'translate(0px, 0.12px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const guide4Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, 1px)', 'translate(0px, -0.12px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M10.8546 8.89114C11.3832 8.29705 11.6475 8 12 8C12.3525 8 12.6168 8.29705 13.1454 8.89114L14.4455 10.3522C15.1485 11.1423 15.5 11.5374 15.5 12C15.5 12.4626 15.1485 12.8577 14.4455 13.6478L13.1454 15.1089C12.6168 15.703 12.3525 16 12 16C11.6475 16 11.3832 15.703 10.8546 15.1089L9.55451 13.6478C8.8515 12.8577 8.5 12.4626 8.5 12C8.5 11.5374 8.8515 11.1423 9.55451 10.3522L10.8546 8.89114Z" stroke="currentColor" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12px' }" />
            <motion.path d="M22 12L19 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guide2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 12px' }" />
            <motion.path d="M12 19L12 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guide3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M12 2L12 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="guide4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
          </svg>
        </div>
</template>
