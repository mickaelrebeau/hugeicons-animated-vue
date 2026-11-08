<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NotificationSnooze02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bell dozes and the Z floats up
// authored from scripts/authored
const bellVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.54px, -0.02px) rotate(4deg)',
      'translate(-0.54px, -0.02px) rotate(4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const zVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(1)',
      'translate(0.8px, -1.6px) scale(0.8)',
      'translate(0px, 0px) scale(1)',
    ],
    opacity: [1, 0.2, 1],
    transition: { duration: 0.9, times: [0, 0.5, 1], ease: 'easeInOut' },
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
            <motion.path d="M19 11V18.5M5 18.5V10C5 6.13401 8.13401 3 12 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.8px' }" />
            <path d="M20.5 18.5H3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M13.5 20.5C13.5 21.3284 12.8284 22 12 22M10.5 20.5C10.5 21.3284 11.1716 22 12 22M12 22V20.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.016 2H18.6884C19.4611 2 19.8474 2 19.9503 2.24011C20.0532 2.48023 19.7903 2.76827 19.2646 3.34436L15.8469 6.65564C15.3211 7.23173 14.9131 7.51977 15.016 7.75989C15.1189 8 15.6504 8 16.423 8H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="zVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 5px' }" />
          </svg>
        </div>
</template>
