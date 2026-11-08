<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClaudeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sunburst twists inward and springs back open
// authored from scripts/authored
const burstVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(30deg) scale(0.84)',
      'rotate(-6deg) scale(1.08)',
      'rotate(0deg) scale(1)',
    ],
    transition: {
      duration: 0.72,
      times: [0, 0.38, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M13 12L18.5 5M7.63965 3L12.5 12L13.6865 3M4.48381 6.71679L11.9872 12M3 12L11.9872 12.473M12.2244 13.177L7 20M4.84194 16.8682L11.2824 12.9758M11.5 21L12.665 13.177M21 14L13.1846 12.668M21 10.5788L13 12.3223M16.779 19.646L12.8876 13.3772M19.3566 18.207L13.313 12.9893" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="burstVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
