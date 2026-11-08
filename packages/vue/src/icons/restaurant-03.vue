<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Restaurant03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the knife slices down past the fork and back
// authored from scripts/authored
const knifeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, 0.8px)',
      'translate(-0.12px, -0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M4 21.001L7.00071 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knifeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 19.5px' }" />
            <motion.path d="M15 10.001L14 11.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knifeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 10.5px' }" />
            <path d="M17.9999 3.00098L14.9999 6.00098C14.4547 6.54623 14.1821 6.81885 14.0363 7.11295C13.759 7.6725 13.759 8.32945 14.0363 8.88901C14.1821 9.1831 14.4547 9.45573 14.9999 10.001C15.5452 10.5462 15.8178 10.8189 16.1119 10.9646C16.6715 11.2419 17.3284 11.2419 17.888 10.9646C18.1821 10.8189 18.4547 10.5462 18.9999 10.001L21.9999 7.00098" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M20 5L17 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20 21L12 13M12 13L2 3C2 6.84174 3.52612 10.5261 6.24264 13.2426L9 16L12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knifeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
          </svg>
        </div>
</template>
