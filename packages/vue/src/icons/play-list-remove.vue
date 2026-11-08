<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PlayListRemoveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the X twists a quarter turn at the corner
// authored from scripts/authored
const xVariants: Variants = {
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
      duration: 0.6,
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
            <path d="M2 7H21" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16.5 2L13.5 7" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9.5 2L6.5 7" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15 15L18.5 18.5M18.5 18.5L22 22M18.5 18.5L15 22M18.5 18.5L22 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18.5px' }" />
          </svg>
        </div>
</template>
