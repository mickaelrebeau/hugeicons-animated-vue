<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Grid3X3Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the inner lines rewrite the tic-tac-toe grid
// authored from scripts/authored
const linesVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
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
            <motion.path d="M9.00034 3.50019V20.5311M15.0003 3.03125V20.5311M20.5 15L3.5 15M20.5 9L3.5 9.00004" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="linesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M4.31802 19.682C5.63604 21 7.75736 21 12 21C16.2426 21 18.364 21 19.682 19.682C21 18.364 21 16.2426 21 12C21 7.75736 21 5.63604 19.682 4.31802C18.364 3 16.2426 3 12 3C7.75736 3 5.63604 3 4.31802 4.31802C3 5.63604 3 7.75736 3 12C3 16.2426 3 18.364 4.31802 19.682Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
