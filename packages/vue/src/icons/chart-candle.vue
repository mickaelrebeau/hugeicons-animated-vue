<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartCandleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two candles trade: one climbs on its wick while the other dips
// authored from scripts/authored
const bullVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0.3px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.7, 0.9, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bearVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0px, -0.3px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.7, 0.9, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const wickVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.72px) scaleY(1.08)',
      'translate(0px, 0.18px) scaleY(0.98)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.7, 0.9, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const wick2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.72px) scaleY(1.08)',
      'translate(0px, -0.18px) scaleY(0.98)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.7, 0.9, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M10 9V15C10 15.9319 10 16.3978 9.84776 16.7654C9.64477 17.2554 9.25542 17.6448 8.76537 17.8478C8.39782 18 7.93188 18 7 18C6.06812 18 5.60218 18 5.23463 17.8478C4.74458 17.6448 4.35523 17.2554 4.15224 16.7654C4 16.3978 4 15.9319 4 15V9C4 8.06812 4 7.60218 4.15224 7.23463C4.35523 6.74458 4.74458 6.35523 5.23463 6.15224C5.60218 6 6.06812 6 7 6C7.93188 6 8.39782 6 8.76537 6.15224C9.25542 6.35523 9.64477 6.74458 9.84776 7.23463C10 7.60218 10 8.06812 10 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bullVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M20 14V15C20 15.9319 20 16.3978 19.8478 16.7654C19.6448 17.2554 19.2554 17.6448 18.7654 17.8478C18.3978 18 17.9319 18 17 18C16.0681 18 15.6022 18 15.2346 17.8478C14.7446 17.6448 14.3552 17.2554 14.1522 16.7654C14 16.3978 14 15.9319 14 15V14C14 13.0681 14 12.6022 14.1522 12.2346C14.3552 11.7446 14.7446 11.3552 15.2346 11.1522C15.6022 11 16.0681 11 17 11C17.9319 11 18.3978 11 18.7654 11.1522C19.2554 11.3552 19.6448 11.7446 19.8478 12.2346C20 12.6022 20 13.0681 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bearVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 14.5px' }" />
            <motion.path d="M17 11V3M17 18V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
            <motion.path d="M7 6V3M7 18V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wick2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
          </svg>
        </div>
</template>
