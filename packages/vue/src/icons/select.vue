<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SelectIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plus spins at the corner and the dashed box traces
// authored from scripts/authored
const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(46deg) scale(0.66)',
      'rotate(90deg) scale(1.12)',
      'rotate(90deg) scale(1)',
    ],
    transition: { duration: 0.78, times: [0, 0.36, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const boxVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.3, 1],
    pathOffset: [0, 1, 2],
    transition: { duration: 1, delay: 0.1, times: [0, 0.5, 1], ease: 'easeInOut' },
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
            <motion.path d="M5 2V8M2 5H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 5px' }" />
            <motion.path d="M12 5H15M12 22H15M18 5H18.5C20.433 5 22 6.567 22 8.5V9M22 18V18.5C22 20.433 20.433 22 18.5 22H18M9 22H8.5C6.567 22 5 20.433 5 18.5L5 18M22 12V15M5 12L5 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="boxVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
