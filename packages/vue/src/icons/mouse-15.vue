<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse15Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mouse slides right and the cord follows
// authored from scripts/authored
const cableVariants: Variants = {
  normal: { transform: 'skewX(0deg)' },
  animate: {
    transform: ['skewX(0deg)', 'skewX(-14deg)', 'skewX(10deg)', 'skewX(-4deg)', 'skewX(0deg)'],
    transition: { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const mouseVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 0px)',
      'translate(-0.84px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, times: [0, 0.18, 0.46, 0.74, 1], ease: 'easeInOut' },
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
            <motion.path d="M6 2C6 3.80215 7.74439 3.5 9.00657 3.5C11.0476 3.5 11.9337 3.87677 12 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cableVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 4px' }" />
            <motion.path d="M12 22C17.2 22 18.5 18.392 18.5 14C18.5 9.60799 17.2 6 12 6C6.79994 6 5.5 9.60797 5.5 14C5.5 18.392 6.79994 22 12 22Z" stroke="currentColor" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M12 9V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
