<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Male02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the man straightens his shoulders
// authored from scripts/authored
const manVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
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
            <motion.path d="M14.5 16.5001L18.216 17.6178C19.6034 18.0424 20.6341 19.1553 20.9763 20.51C21.1115 21.0457 20.6489 21.5001 20.0936 21.5001H3.90639C3.35107 21.5001 2.88845 21.0457 3.02375 20.51C3.36593 19.1553 4.39659 18.0424 5.78401 17.6178L9.5 16.5001V14.5623C7.71916 13.1685 6.5 11.4999 6.5 7.91674C6.5 4.32689 8.45474 2.49993 11.4923 2.49993C13.6433 2.49993 14.5385 3.49993 14.5385 3.49993C17.0769 3.49993 17.5 5.59712 17.5 7.91674C17.5 11.4999 16.2808 13.1685 14.5 14.5623V16.5001Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="manVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
