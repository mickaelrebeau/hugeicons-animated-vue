<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ServingFoodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cloche lifts off the tray and sets back down
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.5, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.5px)',
      'translate(0px, 0.075px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.5,
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

const clocheVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(-1.6px)', 'translateY(0px)'],
    transition: {
      duration: 0.76,
      times: [0, 0.26, 0.72, 1],
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
            <motion.path d="M4 14H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 14px' }" />
            <motion.path d="M5 22L5.93056 21.0694C6.45933 20.5407 6.72371 20.2763 7.05684 20.126C7.38997 19.9756 7.76314 19.9523 8.50947 19.9057L11.7619 19.7024C13.3604 19.6025 14.1597 19.5525 14.863 19.2148C15.5664 18.877 16.1051 18.2844 17.1824 17.0993L20 14H16.5L14.7071 15.7929C14.5879 15.9121 14.5282 15.9718 14.4662 16.0244C14.1472 16.2954 13.7512 16.4594 13.3341 16.4934C13.2529 16.5 13.1686 16.5 13 16.5M2 19L5.07774 15.9223C5.81669 15.1833 6.18617 14.8138 6.62171 14.5564C6.94612 14.3647 7.29599 14.2198 7.66095 14.126C8.15093 14 8.67345 14 9.71849 14H10.5C10.9647 14 11.197 14 11.3902 14.0384C12.1836 14.1962 12.8038 14.8164 12.9616 15.6098C13 15.803 13 16.0353 13 16.5M13 16.5H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
            <motion.path d="M5 11.5C5 7.08171 8.58171 3.5 13 3.5M13 3.5C17.4183 3.5 21 7.08171 21 11.5M13 3.5V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="clocheVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 6.8px' }" />
          </svg>
        </div>
</template>
