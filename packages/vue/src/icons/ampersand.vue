<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AmpersandIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the loop tightens around itself then opens back into the mark
// authored from scripts/authored
const markVariants: Variants = {
  normal: { transform: 'scale(1) rotate(0deg)' },
  animate: {
    transform: [
      'scale(1) rotate(0deg)',
      'scale(0.9) rotate(-6deg)',
      'scale(1.05) rotate(2deg)',
      'scale(1) rotate(0deg)',
    ],
    transition: { duration: 0.68, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17 20C17 20 6.5 11 6.5 7C6.5 5.34315 7.84315 4 9.5 4C11.1569 4 12.5 5.34315 12.5 7C12.5 9 9.5 10 9.5 10C9.5 10 5 11.5 5 15.5C5 17.9853 7.01472 20 9.5 20C13.2504 20 15.9589 17.2217 16.7572 13.9805C17.0125 12.944 17.1401 12.4257 17.4118 12.2129C17.6834 12 18.1223 12 19 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
