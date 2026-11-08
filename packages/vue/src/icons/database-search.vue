<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatabaseSearchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the loupe circles over the database
// authored from scripts/authored
const loupeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, -0.6px)',
      'translate(0.6px, -0.8px)',
      'translate(0.2px, 0.4px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
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
            <motion.path d="M20 21.002L18.125 19.127M19 17.002C19 18.6588 17.6569 20.002 16 20.002C14.3431 20.002 13 18.6588 13 17.002C13 15.3451 14.3431 14.002 16 14.002C17.6569 14.002 19 15.3451 19 17.002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="loupeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 17.5px' }" />
            <ellipse cx="10" cy="5.00195" rx="8" ry="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 12.002C2 13.5318 5.05369 14.7942 9 14.9787" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 22.002C5.58172 22.002 2 20.6588 2 19.002V5.00195M18 5.00195V10.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
