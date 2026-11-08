<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FirstAidKitIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cross turns a quarter and the handle lifts
// authored from scripts/authored
const caseVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const crossVariants: Variants = {
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
      duration: 0.62,
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

const handleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M2 12.5625C2 9.46891 2 7.92211 3.02513 6.96106C4.05025 6 5.70017 6 9 6H15C18.2998 6 19.9497 6 20.9749 6.96106C22 7.92211 22 9.46891 22 12.5625V14.4375C22 17.5311 22 19.0779 20.9749 20.0389C19.9497 21 18.2998 21 15 21H9C5.70017 21 4.05025 21 3.02513 20.0389C2 19.0779 2 17.5311 2 14.4375V12.5625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="caseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
            <motion.path d="M9 13.5H15M12 10.5L12 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crossVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
            <motion.path d="M17 6C17 3.518 16.482 3 14 3H10C7.518 3 7 3.518 7 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
          </svg>
        </div>
</template>
