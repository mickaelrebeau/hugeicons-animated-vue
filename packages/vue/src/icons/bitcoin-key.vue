<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BitcoinKeyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the key turns in the still hole, bow bit and ward riding together
// authored from scripts/authored
const bowVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.21px, -0.15px) rotate(14deg)',
      'translate(0.70px, -0.05px) rotate(-8deg)',
      'translate(-0.26px, -0.01px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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

const bitVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.47px, 2.15px) rotate(14deg)',
      'translate(1.16px, -1.48px) rotate(-8deg)',
      'translate(-0.48px, 0.51px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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

const wardVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(14deg)',
      'translate(0.00px, 0.00px) rotate(-8deg)',
      'translate(0.00px, 0.00px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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
            <motion.path d="M8 2C5.23858 2 3 4.23858 3 7C3 9.05032 4.2341 10.8124 6 11.584V19.375C6 19.6639 6 19.8084 6.03937 19.9445C6.04682 19.9703 6.0553 19.9957 6.0648 20.0208C6.11498 20.1533 6.20165 20.2689 6.375 20.5L7.2 21.6C7.38885 21.8518 7.68524 22 8 22C8.31476 22 8.61115 21.8518 8.8 21.6L9.625 20.5C9.79835 20.2689 9.88502 20.1533 9.9352 20.0208C9.9447 19.9957 9.95318 19.9703 9.96063 19.9445C10 19.8084 10 19.6639 10 19.375V19.0364C10 18.6277 10 18.4233 9.92388 18.2396C9.84776 18.0558 9.70324 17.9113 9.41421 17.6222L8.79198 17L9.41421 16.3778C9.70324 16.0887 9.84776 15.9442 9.92388 15.7604C10 15.5767 10 15.3723 10 14.9636V11.584C11.7659 10.8124 13 9.05032 13 7C13 4.23858 10.7614 2 8 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 12px' }" />
            <motion.path d="M16 12.5H19C19.8284 12.5 20.5 13.1716 20.5 14V14.5C20.5 15.3284 19.8284 16 19 16H16M16 12.5V16M16 12.5H15M16 16H19.5C20.3284 16 21 16.6716 21 17.5V18C21 18.8284 20.3284 19.5 19.5 19.5H16M16 16V19.5M18 12.5V11M18 19.5V21M16 19.5H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 16px' }" />
            <motion.path d="M8.25 7H8M8.5 7C8.5 7.27614 8.27614 7.5 8 7.5C7.72386 7.5 7.5 7.27614 7.5 7C7.5 6.72386 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.72386 8.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wardVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 7px' }" />
          </svg>
        </div>
</template>
