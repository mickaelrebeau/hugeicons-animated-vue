<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RowDeleteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the X twists and the top row lifts away and back
// authored from scripts/authored
const rowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.14,
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

const xVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
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
            <path d="M21 18.5C21 19.9045 21 20.6067 20.6208 21.1111C20.4567 21.3295 20.2457 21.517 20 21.6629C19.4325 22 18.6425 22 17.0625 22L6.9375 22C5.35748 22 4.56747 22 3.99997 21.6629C3.75429 21.517 3.54335 21.3295 3.37919 21.1111C3 20.6067 3 19.9045 3 18.5C3 17.0955 3 16.3933 3.37919 15.8889C3.54335 15.6705 3.75429 15.483 3.99997 15.3371C4.56747 15 5.35748 15 6.9375 15L17.0625 15C18.6425 15 19.4325 15 20 15.3371C20.2457 15.483 20.4567 15.6705 20.6208 15.8889C21 16.3933 21 17.0955 21 18.5Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M12.0625 4L6.9375 4C5.35748 4 4.56747 4 3.99997 4.33706C3.75429 4.48298 3.54335 4.67048 3.37919 4.88886C3 5.39331 3 6.09554 3 7.5C3 8.90446 3 9.60669 3.37919 10.1111C3.54335 10.3295 3.75429 10.517 3.99997 10.6629C4.56747 11 5.35748 11 6.9375 11L17.0625 11C18.6425 11 19.4325 11 20 10.6629" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 7.5px' }" />
            <motion.path d="M21 7.99936L15 2M21 2.00064L15 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 5px' }" />
          </svg>
        </div>
</template>
