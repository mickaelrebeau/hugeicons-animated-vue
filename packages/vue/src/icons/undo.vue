<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UndoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// a complete backward turn reads as undo; the wind-up makes direction immediate
const undoVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', pathLength: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(16deg) scale(0.97)',
      'rotate(-360deg) scale(1)',
      'rotate(-352deg) scale(1.01)',
      'rotate(-360deg) scale(1)',
    ],
    pathLength: [1, 0.82, 1, 1, 1],
    transition: { duration: 0.82, ease: [0.77, 0, 0.175, 1], times: [0, 0.1, 0.68, 0.84, 1] },
    transitionEnd: { transform: 'rotate(0deg) scale(1)' },
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
            <motion.path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.79275 3 5.97733 4.67765 4.38341 7.20327M3.29339 3.00076L3.46556 5.05452C3.58958 6.53384 3.65159 7.27349 4.13359 7.68914C4.61559 8.10479 5.32673 8.03185 6.74899 7.88595L8.79339 7.67625" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="undoVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
