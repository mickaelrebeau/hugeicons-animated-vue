<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LollipopIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lollipop twirls on its stick
// authored from scripts/authored
const candyVariants: Variants = {
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
            <motion.circle cx="12" cy="8" r="6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="candyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <path d="M12 14V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M6 7.96552C7 6.49994 9 5.66926 10.2857 6.12258C11.7609 6.6427 12.0271 8.38074 13.5 8.90693C15 9.4428 15.5 7.46972 18 7.93534" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="candyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
          </svg>
        </div>
</template>
