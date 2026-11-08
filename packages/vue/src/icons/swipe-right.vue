<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwipeRightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand swipes right trailing speed lines and the arrow leads
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, 0px)',
      'translate(-0.144px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.08,
      times: [0, 0.44, 0.72, 1],
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
      'translate(1.6px, 0px)',
      'translate(-0.24px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const trailVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(0px)',
      'translateX(-0.5599999999999999px)',
      'translateX(-1.4px)',
      'translateX(-1.4px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.2, 0.46, 0.86, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M21.001 4.49905H15.001M21.001 4.49905C21.001 3.79909 19.0067 2.49134 18.501 2M21.001 4.49905C21.001 5.19901 19.0067 6.50675 18.501 6.9981" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 4.5px' }" />
            <motion.path d="M16.8942 21.9884C16.8424 20.0751 16.9713 19.8448 17.1081 19.4191C17.2448 18.9935 18.2011 17.4587 18.5395 16.3621C19.6342 12.8141 18.6139 12.0595 17.2536 11.0534C15.7451 9.93759 12.8997 9.37252 11.4886 9.49486V3.74359C11.4886 2.78063 10.7077 2 9.74439 2C8.78106 2 8.00014 2.78063 8.00014 3.74359V14.0032L5.93997 11.8238C5.30035 11.1303 4.27243 11.06 3.5709 11.6908C2.90609 12.2886 2.80906 13.2953 3.34749 14.009L4.63984 15.722M7.87078 22.0002L7.85125 20.9498C7.89419 19.7185 6.9982 18.9151 5.82962 17.3089C5.74542 17.1931 5.6635 17.0813 5.58372 16.973M5.58372 16.973C5.22966 16.4926 4.91814 16.0832 4.63984 15.722M5.58372 16.973L6.75315 18.5231M5.58372 16.973L4.63984 15.722M4.63984 15.722C4.06847 14.9802 3.63715 14.4412 3.26531 13.9056" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.2px 12px' }" />
            <motion.path d="M2 13H3.5M2 16H3" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="trailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
