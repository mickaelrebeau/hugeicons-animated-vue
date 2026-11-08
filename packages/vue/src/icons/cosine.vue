<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CosineIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cosine curve damps flat against the axis and swings back out
// authored from scripts/authored
const curveVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.48px) scaleY(0.4)',
      'translate(0px, 0.10px) scaleY(1.12)',
      'translate(0px, -0.03px) scaleY(0.96)',
      'translate(0px, 0.00px) scaleY(1)',
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
            <motion.path d="M22 20.7288C18 22.6651 16.5884 13.6549 16.3311 12.0453C15.4666 6.63802 14.1205 3 12 3C9.87955 3 8.53343 6.63802 7.66891 12.0453C7.41158 13.6549 6 22.6651 2 20.7288" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="curveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.8px' }" />
            <path d="M2 12H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19.5 12H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10.5 12H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
