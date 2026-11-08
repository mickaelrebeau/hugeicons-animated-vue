<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse16Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wheel scrolls down under the cord
// authored from scripts/authored
const cableVariants: Variants = {
  normal: { transform: 'skewX(0deg)' },
  animate: {
    transform: ['skewX(0deg)', 'skewX(-14deg)', 'skewX(10deg)', 'skewX(-4deg)', 'skewX(0deg)'],
    transition: { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const wheelVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.8px)',
      'translate(0px, 0px)',
      'translate(0px, 0.8px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <path d="M12 22C17.2 22 18.5 18.392 18.5 14C18.5 9.60799 17.2 6 12 6C6.79994 6 5.5 9.60797 5.5 14C5.5 18.392 6.79994 22 12 22Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M6 2C6 3.80215 7.74439 3.5 9.00657 3.5C11.0476 3.5 11.9337 3.87677 12 6V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cableVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 5.5px' }" />
            <motion.path d="M10.5 10.5C10.5 10.0341 10.5 9.80109 10.5761 9.61732C10.6776 9.37229 10.8723 9.17761 11.1173 9.07612C11.3011 9 11.5341 9 12 9C12.4659 9 12.6989 9 12.8827 9.07612C13.1277 9.17761 13.3224 9.37229 13.4239 9.61732C13.5 9.80109 13.5 10.0341 13.5 10.5V11.5C13.5 11.9659 13.5 12.1989 13.4239 12.3827C13.3224 12.6277 13.1277 12.8224 12.8827 12.9239C12.6989 13 12.4659 13 12 13C11.5341 13 11.3011 13 11.1173 12.9239C10.8723 12.8224 10.6776 12.6277 10.5761 12.3827C10.5 12.1989 10.5 11.9659 10.5 11.5V10.5Z" stroke="currentColor" stroke-width="1.5" :variants="wheelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
          </svg>
        </div>
</template>
