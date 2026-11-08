<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FilmRoll02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the reel spins a full turn and the tail unwinds
// authored from scripts/authored
const reelVariants: Variants = {
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

const tailVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <circle cx="10.5" cy="10.5" r="8.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10.4998 10.5H10.5075M14 7L13 8M8 13L7 14M14 14L13 13M8 8L7 7" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="reelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 10.5px' }" />
            <motion.path d="M13.5 18.5L19.3225 17.5348C20.7193 17.2917 22 18.3514 22 19.7503C22 20.9928 20.9787 22 19.7189 22H18.7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
