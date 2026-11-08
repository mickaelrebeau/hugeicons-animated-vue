<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CitrusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wedge is squeezed: it twists and a drop of juice falls
// authored from scripts/authored
const wedgeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.14px, -0.11px) rotate(-12deg)',
      'translate(0.07px, 0.08px) rotate(7deg)',
      'translate(-0.02px, -0.02px) rotate(-2deg)',
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

const wedge2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.07px, 0.04px) rotate(-12deg)',
      'translate(-0.04px, -0.03px) rotate(7deg)',
      'translate(0.01px, 0.01px) rotate(-2deg)',
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

const wedge3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.34px, 0.28px) rotate(-12deg)',
      'translate(-0.17px, -0.19px) rotate(7deg)',
      'translate(0.05px, 0.05px) rotate(-2deg)',
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

const wedge4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.07px, 0.06px) rotate(-12deg)',
      'translate(-0.03px, -0.04px) rotate(7deg)',
      'translate(0.01px, 0.01px) rotate(-2deg)',
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

const juiceVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 0 },
  animate: {
    transform: ['translateY(0px)', 'translateY(0px)', 'translateY(1.2px)', 'translateY(3px)'],
    opacity: [0, 0, 1, 0],
    transition: { duration: 0.8, times: [0, 0.3, 0.5, 1], ease: ['linear', 'easeIn', 'easeIn'] },
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
            <motion.path d="M8.93718 5.16602C6.31712 7.90764 6.35481 12.2544 9.05025 14.9499C11.7457 17.6453 16.0925 17.683 18.8341 15.0629" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wedgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.6px 11.4px' }" />
            <motion.path d="M14 10L9.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wedge2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 12.3px' }" />
            <motion.path d="M14 17V10H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wedge3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 13.5px' }" />
            <motion.path d="M6.26567 17.7343C9.54361 21.0123 14.3548 21.8225 18.3907 20.1651C19.9481 19.5255 20.7269 19.2057 20.9588 18.0486C21.1908 16.8914 20.4329 16.1335 18.9169 14.6175L9.38247 5.08306C7.86654 3.56713 7.10858 2.80917 5.95145 3.04116C4.79431 3.27315 4.47451 4.05187 3.83491 5.60933C2.17749 9.64524 2.98774 14.4564 6.26567 17.7343Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wedge4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.7px 12.3px' }" />
            <motion.circle cx="5" cy="19" r="0.7" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="juiceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
