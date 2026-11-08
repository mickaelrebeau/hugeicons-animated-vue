<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FinsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two fins paddle in turn
// authored from scripts/authored
const finVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.18px, 0.71px) rotate(-8deg)',
      'translate(0.62px, -0.29px) rotate(4deg)',
      'translate(-0.15px, 0.08px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const fin2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.18px, -0.71px) rotate(-8deg)',
      'translate(-0.62px, 0.29px) rotate(4deg)',
      'translate(0.15px, -0.08px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.12,
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
            <motion.path d="M8.4711 19.9634C10.8851 15.8356 11.4912 7.3524 10.6271 3.69484L9 4.5C9 4.5 7.76992 3 6.49953 3C5.22914 3 4 4.5 4 4.5L2.3727 3.69484C1.5086 7.35252 2.11482 15.8358 4.52945 19.9634C5.33792 21.3455 7.66279 21.3456 8.4711 19.9634Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="finVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 12.2px' }" />
            <motion.path d="M15.5289 4.03657C13.1149 8.1644 12.5088 16.6476 13.3729 20.3052L15 19.5C15 19.5 16.2301 21 17.5005 21C18.7709 21 20 19.5 20 19.5L21.6273 20.3052C22.4914 16.6475 21.8852 8.16425 19.4706 4.03657C18.6621 2.65454 16.3372 2.6544 15.5289 4.03657Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fin2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 11.8px' }" />
            <path d="M6.5 17V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17.5 8V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
