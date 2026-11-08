<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CentralShaheedMinarIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pillars rise from the ground in turn and the crown bows its head
// authored from scripts/authored
const pillarVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 4.80px) scaleY(0.2)',
      'translate(0px, -0.48px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.08,
      times: [0, 0.16, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pillar2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 4.80px) scaleY(0.2)',
      'translate(0px, -0.48px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.16,
      times: [0, 0.16, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pillar3Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 5.60px) scaleY(0.2)',
      'translate(0px, -0.56px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.16, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const crownVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.73px, 0.09px) rotate(14deg)',
      'translate(0.73px, 0.09px) rotate(14deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.3, 0.5, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
        'linear',
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M3 22V10.2014C3 10.0655 3.13111 9.96866 3.25997 10.0094L6.35997 10.9896C6.4433 11.0159 6.5 11.0937 6.5 11.1816V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pillarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.8px 16px' }" />
            <motion.path d="M21 21.9999V10.2012C21 10.0653 20.8689 9.96853 20.74 10.0093L17.64 10.9895C17.5567 11.0158 17.5 11.0935 17.5 11.1814V21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pillar2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.3px 16px' }" />
            <motion.path d="M9 21.9999V7.99988H15V21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pillar3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <path d="M2 21.9999L22 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9 7.99988L7.17245 3.31611C6.79764 2.25369 6.99125 1.99988 8.17652 1.99988H15.8235C17.0087 1.99988 17.2024 2.25369 16.8275 3.31611L15 7.99988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crownVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
          </svg>
        </div>
</template>
