<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Contact01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the contact card flips over on its rings
// authored from scripts/authored
const cardVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.06)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.5, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const card2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-0.19px, 0px) scaleX(0.06)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.5, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const card3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(8.46px, 0px) scaleX(0.06)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.5, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.rect x="4" y="2" width="17.5" height="20" rx="4" stroke="currentColor" stroke-width="1.5" :variants="cardVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.8px 12px' }" />
            <motion.path d="M10.59 13.7408C9.96125 14.162 8.31261 15.0221 9.31674 16.0983C9.80725 16.624 10.3536 17 11.0404 17H14.9596C15.6464 17 16.1928 16.624 16.6833 16.0983C17.6874 15.0221 16.0388 14.162 15.41 13.7408C13.9355 12.7531 12.0645 12.7531 10.59 13.7408Z" stroke="currentColor" stroke-width="1.5" :variants="card2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 14.9px' }" />
            <motion.path d="M15 9C15 10.1046 14.1046 11 13 11C11.8954 11 11 10.1046 11 9C11 7.89543 11.8954 7 13 7C14.1046 7 15 7.89543 15 9Z" stroke="currentColor" stroke-width="1.5" :variants="card2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 9px' }" />
            <motion.path d="M5 6L2.5 6M5 12L2.5 12M5 18H2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="card3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.8px 12px' }" />
          </svg>
        </div>
</template>
