<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CreditCardFreezeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the snowflake turns a sixth of a turn beside the card
// authored from scripts/authored
const cardVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.36, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const flakeVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(12deg)',
      'rotate(42deg)',
      'rotate(61.800000000000004deg)',
      'rotate(60deg)',
    ],
    transition: {
      duration: 0.72,
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
            <motion.path d="M22 9C21.9635 6.74771 21.7892 5.44656 20.9564 4.5129C20.7879 4.32403 20.6022 4.14935 20.4014 3.99087C19.1461 3 17.2659 3 13.5056 3H10.5041C6.74371 3 4.86352 3 3.60823 3.99087C3.40746 4.14935 3.22178 4.32403 3.05331 4.5129C2 5.69377 2 7.46252 2 11C2 14.5375 2 16.3062 3.05331 17.4871C3.22178 17.676 3.40746 17.8506 3.60823 18.0091C4.86352 19 6.74371 19 10.5041 19H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cardVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M2 8H22" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 13V14.7778M18 14.7778V19.2222M18 14.7778L19.5 14M18 14.7778L16.5 14M18 19.2222L18 21M18 19.2222L16.5 20M18 19.2222L19.5 20M22 17L20.2222 17M20.2222 17L15.7778 17M20.2222 17L21 18.5M20.2222 17L21 15.5M15.7778 17L14 17M15.7778 17L15 15.5M15.7778 17L15 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flakeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17px' }" />
          </svg>
        </div>
</template>
