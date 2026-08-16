<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirplaneModeOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bar strikes down across the aircraft and both halves dim under it
// authored from scripts/authored
const lowerHalfVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.93)', 'scale(0.94)', 'scale(1)'],
    opacity: [1, 1, 0.35, 0.4, 1],
    transition: {
      duration: 0.86,
      times: [0, 0.3, 0.5, 0.72, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const barVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.86,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
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
            <motion.path d="M13.1795 13.8261L12.9201 16.1149C12.8261 16.9448 12.779 17.3598 12.915 17.7398C13.2335 18.63 14.3149 19.3591 14.9753 20.0066C15.3403 20.3644 15.7386 21.3934 15.3224 21.8613C15.0655 22.1503 14.6481 21.9157 14.3609 21.803L11.5952 20.7184C11.2645 20.5887 11.0991 20.5239 10.9255 20.5239C10.7519 20.5239 10.5865 20.5887 10.2558 20.7184L7.49016 21.803C7.20291 21.9157 6.78553 22.1503 6.52858 21.8613C6.11239 21.3934 6.51073 20.3644 6.87572 20.0066C7.53614 19.3591 8.61751 18.63 8.936 17.7398C9.07199 17.3598 9.02496 16.9448 8.93091 16.1149L8.67153 13.8261L2.89514 15.1587C2.29655 15.2968 1.99982 15.1155 2 14.4391C2.00033 13.1971 2.39739 12.537 3.40543 11.9183L6.6995 9.89656C7.25228 9.55783 7.52868 9.38846 7.71947 9.15616C7.99925 8.81552 8 8 8 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lowerHalfVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.9px 15.1px' }" />
            <motion.path d="M8.50006 4C8.97205 3.18656 9.71858 2.43508 10.4364 2.11845C10.7944 1.96052 11.2051 1.96052 11.5631 2.11845C12.7264 2.63158 13.8804 4.28671 14.0089 5.49686C14.1331 6.66595 13.3999 8.15082 14.2325 9.15616C14.4248 9.38846 14.7035 9.55783 15.2609 9.89656L18.5827 11.9182C19.5993 12.5369 19.9998 13.1973 19.9998 14.4395C19.9998 14.9429 19.5001 15.5 19.5001 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lowerHalfVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.2px 8.7px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
