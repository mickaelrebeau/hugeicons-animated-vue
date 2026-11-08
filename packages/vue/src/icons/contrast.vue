<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ContrastIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dark half turns a full revolution inside the circle
// authored from scripts/authored
const halfVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.42px, 3.33px) rotate(72deg)',
      'translate(-4.58px, -3.33px) rotate(252deg)',
      'translate(-0.06px, 0.66px) rotate(370.8deg)',
      'translate(0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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
            <circle cx="12" cy="12.002" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.9097 18.3695C17.3232 17.265 19 14.8288 19 12.001C19 9.17321 17.3232 6.73703 14.9097 5.63253C13.8893 5.16557 13.3791 4.93208 12.6895 5.37484C12 5.81759 12 6.5454 12 8.00102V16.001C12 17.4566 12 18.1845 12.6895 18.6272C13.3791 19.07 13.8893 18.8365 14.9097 18.3695Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="halfVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 12px' }" />
          </svg>
        </div>
</template>
