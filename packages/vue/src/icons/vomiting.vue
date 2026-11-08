<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VomitingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the face heaves and the drips fall in turn
// authored from scripts/authored
const faceVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const dripVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(2px)', 'translateY(-1px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drip2Variants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(2px)', 'translateY(-1px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.18,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drip3Variants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(2px)', 'translateY(-1px)', 'translateY(0px)'],
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
            <motion.path d="M4.40041 18.5C2.9039 16.752 2 14.4815 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4815 21.0961 16.752 19.5996 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="faceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.3px' }" />
            <motion.path d="M7.5 8C7.97606 8.31737 8.84109 8.70974 8.9506 9.34118C8.95696 9.37783 8.96126 9.41481 8.9635 9.45195C8.98931 9.88051 8.64102 10.2537 7.94444 11M16.5 8C16.0239 8.31738 15.1589 8.70974 15.0494 9.34118C15.043 9.37783 15.0387 9.41481 15.0365 9.45195C15.0107 9.88051 15.359 10.2537 16.0556 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="faceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M7 19C7.47273 16.7178 9.53167 15 12 15C14.4683 15 16.5273 16.7178 17 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="faceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M12 19L12 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dripVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M8.46546 16.5C8.46546 18.4882 8.85751 20.7325 7 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drip2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.9px 19.3px' }" />
            <motion.path d="M15.534 16.5C15.534 18.4808 15.1447 20.7344 17 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drip3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.1px 19.3px' }" />
          </svg>
        </div>
</template>
