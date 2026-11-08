<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneySend01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the coin flips and the arrow lifts
// authored from scripts/authored
const coinVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.2,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <path d="M2.01733 17.4993C4.2169 17.4993 6.00001 19.2824 6.00001 21.4819" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 21.4819V21.39C18 19.2412 19.742 17.4993 21.8908 17.4993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6.00001 7.5166C6.00001 9.71617 4.2169 11.4993 2.01733 11.4993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 7.5166C18 9.69692 19.769 11.468 21.9423 11.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17 7.50098C19.175 7.51308 20.3529 7.60953 21.1213 8.37792C22 9.2566 22 10.6708 22 13.4992V15.4992C22 18.3277 22 19.7419 21.1213 20.6206C20.2426 21.4992 18.8284 21.4992 16 21.4992H8C5.17157 21.4992 3.75736 21.4992 2.87868 20.6206C2 19.7419 2 18.3277 2 15.4992V13.4992C2 10.6708 2 9.2566 2.87868 8.37792C3.64706 7.60953 4.82497 7.51308 7 7.50098" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15 14.4993C15 16.1561 13.6569 17.4993 12 17.4993C10.3431 17.4993 9 16.1561 9 14.4993C9 12.8424 10.3431 11.4993 12 11.4993C13.6569 11.4993 15 12.8424 15 14.4993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M9.5 5.00098C9.5 5.00098 11.2998 2.50098 12 2.50098C12.7002 2.50098 14.5 5.00098 14.5 5.00098M12 8.00098V3.00098" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.3px' }" />
          </svg>
        </div>
</template>
