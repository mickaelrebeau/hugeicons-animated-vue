<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AmieIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four lobes pinch in around the pill, then the pill stands up
// authored from scripts/authored
const cloverVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.94) rotate(-4deg)', 'scale(1.03) rotate(1.2deg)', 'scale(1) rotate(0deg)'],
    transition: { duration: 0.64, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const pillVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.56, delay: 0.1, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M3 8.5C3 9.82963 3.47182 11.0491 4.25716 12C3.47182 12.9509 3 14.1704 3 15.5C3 18.5376 5.46243 21 8.5 21C9.82963 21 11.0491 20.5282 12 19.7428C12.9509 20.5282 14.1704 21 15.5 21C18.5376 21 21 18.5376 21 15.5C21 14.1704 20.5282 12.9509 19.7428 12C20.5282 11.0491 21 9.82963 21 8.5C21 5.46243 18.5376 3 15.5 3C14.1704 3 12.9509 3.47182 12 4.25716C11.0491 3.47182 9.82963 3 8.5 3C5.46243 3 3 5.46243 3 8.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cloverVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.5 9.5C10.5 8.67157 11.1716 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5V14.5C13.5 15.3284 12.8284 16 12 16C11.1716 16 10.5 15.3284 10.5 14.5V9.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="pillVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
