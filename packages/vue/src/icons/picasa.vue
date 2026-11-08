<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PicasaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pinwheel spins one full turn inside the ring
// authored from scripts/authored
const wheelVariants: Variants = {
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
            <motion.g :variants="wheelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px', transformBox: 'view-box' }">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
              <path d="M8 16L21 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M16 16L16 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M8 21L8 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M16 10L9 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M3 15L12 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
