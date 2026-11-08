<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DamIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the water ripples against the dam wall
// authored from scripts/authored
const waterVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0px)',
      'translate(0.6px, 0px)',
      'translate(-0.2px, 0px)',
      'translate(0px, 0px)',
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

const water2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0px)',
      'translate(0.6px, 0px)',
      'translate(-0.2px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
      delay: 0.1,
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
            <path d="M7.81459 17.5873L6.10679 4.84407C6.03723 4.32498 6.00244 4.06544 5.90718 3.85727C5.73457 3.48004 5.41807 3.19444 5.0338 3.06915C4.82173 3 4.56889 3 4.0632 3C3.48991 3 3.20326 3 2.97265 3.08298C2.55422 3.23354 2.22534 3.57437 2.08007 4.00802C2 4.24701 2 4.54408 2 5.13823V18C2 19.4142 2 20.1213 2.42393 20.5607C2.84785 21 3.53831 21 4.91924 21C6.48545 21 7.26855 21 7.70123 20.485C8.13391 19.97 8.02747 19.1758 7.81459 17.5873Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M22 12C21.4 11.5 20.8 11 19.5 11C17 11 17 13 14.5 13C11.9 13 12.1 11 9.5 11C8.57595 11 7.99344 11.2732 7.5 11.6177" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="waterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 12px' }" />
            <motion.path d="M22 18C21.4 17.5 20.8 17 19.5 17C17 17 17 19 14.5 19C11.9 19 12.1 17 9.5 17C8.86664 17 8.39374 17.1284 8 17.3201" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="water2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 18px' }" />
          </svg>
        </div>
</template>
