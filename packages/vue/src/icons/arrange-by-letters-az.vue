<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrangeByLettersAzIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// A sits at the top, Z drops below, and the sort-arrow points down the new order
// authored from scripts/authored
const letterZVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.6px)', 'translateY(-0.3px)', 'translateY(0px)'],
    transition: { duration: 0.58, delay: 0.1, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterAVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'],
    transition: { duration: 0.54, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sortVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.4px)',
      'translate(0px, -0.288px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.08,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M4 14H8.42109C9.35119 14 9.81624 14 9.94012 14.2801C10.064 14.5603 9.74755 14.8963 9.11466 15.5684L5.47691 19.4316C4.84402 20.1037 4.52757 20.4397 4.65145 20.7199C4.77533 21 5.24038 21 6.17048 21H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterZVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 17.5px' }" />
            <motion.path d="M4 9L6.10557 4.30527C6.49585 3.43509 6.69098 3 7 3C7.30902 3 7.50415 3.43509 7.89443 4.30527L10 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 6px' }" />
            <motion.path d="M17.5 20V4M17.5 20C16.7998 20 15.4915 18.0057 15 17.5M17.5 20C18.2002 20 19.5085 18.0057 20 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sortVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 12px' }" />
          </svg>
        </div>
</template>
