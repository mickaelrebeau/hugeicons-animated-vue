<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShowerHeadIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shower head tilts and water drops stream out
// authored from scripts/authored
const headVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.70px, 0.67px) rotate(-5deg)',
      'translate(-0.46px, -0.50px) rotate(3.5deg)',
      'translate(0.20px, 0.21px) rotate(-1.5deg)',
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

const dropVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0px)',
      'translate(-0.8px, 1.6px)',
      'translate(-1.2px, 2.4px)',
      'translate(-1.2px, 2.4px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.8,
      delay: 0,
      times: [0, 0.15, 0.5, 0.9, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        'linear',
        'linear',
      ],
    },
  },
};

const drop2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0px)',
      'translate(-0.8px, 1.6px)',
      'translate(-1.2px, 2.4px)',
      'translate(-1.2px, 2.4px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.8,
      delay: 0.12,
      times: [0, 0.15, 0.5, 0.9, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        'linear',
        'linear',
      ],
    },
  },
};

const drop3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0px)',
      'translate(-0.8px, 1.6px)',
      'translate(-1.2px, 2.4px)',
      'translate(-1.2px, 2.4px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.8,
      delay: 0.24,
      times: [0, 0.15, 0.5, 0.9, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        'linear',
        'linear',
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
            <motion.path d="M6.13225 16.6536C6.93769 16.9301 7.81546 16.5033 8.09279 15.7002L9.2645 12.3072C9.44939 11.7718 10.0346 11.4873 10.5715 11.6716L11.5438 12.0054C12.0807 12.1898 12.6659 11.9052 12.8508 11.3698L15.1942 4.5839C15.3791 4.04851 15.0937 3.46504 14.5567 3.28069C11.8719 2.35893 8.94606 3.78182 8.02161 6.45878L5.17603 14.6988C4.89869 15.5019 5.32681 16.3771 6.13225 16.6536ZM6.13225 16.6536L5.39668 18.7836C5.01963 19.8755 4.12026 20.7072 3 21M18.0832 5.91908L21 6.92047M17.0789 8.82733L19.9957 9.82872M16.0746 11.7356L18.9914 12.737" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.7px' }" />
            <motion.path d="M5.5 19L4.5 20.5" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.5 20.5L7.5 22" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="drop2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3 16.5L2 18" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="drop3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
