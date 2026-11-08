<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SubnodeDeleteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the X twists and the sub-node drops away and back
// authored from scripts/authored
const nodeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1px)',
      'translate(0px, -0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.14,
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

const xVariants: Variants = {
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
      duration: 0.6,
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
            <path d="M14.5 19.5H13.5C10.6716 19.5 9.25736 19.5 8.37868 18.6213C7.5 17.7426 7.5 16.3284 7.5 13.5V11.5M7.5 8V11.5M7.5 11.5H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.5 19.5C14.5 18.3215 14.5 17.7322 14.8515 17.3661C15.2029 17 15.7686 17 16.9 17H18.1C19.2314 17 19.7971 17 20.1485 17.3661C20.5 17.7322 20.5 18.3215 20.5 19.5C20.5 20.6785 20.5 21.2678 20.1485 21.6339C19.7971 22 19.2314 22 18.1 22H16.9C15.7686 22 15.2029 22 14.8515 21.6339C14.5 21.2678 14.5 20.6785 14.5 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 19.5px' }" />
            <path d="M5.78571 2H9.21429C11.2888 2 11.5 3.10993 11.5 5C11.5 6.89007 11.2888 8 9.21429 8H5.78571C3.7112 8 3.5 6.89007 3.5 5C3.5 3.10993 3.7112 2 5.78571 2Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M19.5 9.5L17.5 11.5M17.5 11.5L15.5 13.5M17.5 11.5L19.5 13.5M17.5 11.5L15.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 11.5px' }" />
          </svg>
        </div>
</template>
