<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpiralsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spiral winds once around
// authored from scripts/authored
const spiralVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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
            <motion.path d="M11.9532 2.00004C17.5019 2.00004 22 6.47719 22 12C22 17.5229 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01759 11.4985 5.00004C14.8499 5.24714 18.0289 8.41019 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46695 11.0021 9.00004C12.508 9.1028 14.0162 10.3432 14.0162 12C14.0162 13.9279 13 15 11.1211 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spiralVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.1px 12px' }" />
          </svg>
        </div>
</template>
