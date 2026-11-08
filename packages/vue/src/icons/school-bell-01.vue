<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SchoolBell01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the handle bell is shaken up and down
// authored from scripts/authored
const bellVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, -0.8px)',
      'translate(-0.4px, 0.4px)',
      'translate(0.6px, -0.6px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.62, times: [0, 0.18, 0.46, 0.74, 1], ease: 'easeInOut' },
  },
};

const clapperVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.34, 0.66, 1],
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
            <motion.path d="M18 7C16.807 4.06817 13.9174 2 10.5423 2C6.10066 2 2.5 5.58172 2.5 10C2.5 14.4183 6.10066 18 10.5423 18C12.2197 18 13.7772 17.4892 15.0661 16.6153" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.3px 10px' }" />
            <motion.path d="M21.5 13C21.5 18.1004 17.1065 21.595 11.4999 21.9671C11.0444 21.9973 10.8167 22.0124 10.6584 21.8642C10.5 21.716 10.5 21.4773 10.5 21V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 17.5px' }" />
            <motion.circle cx="19" cy="12.5" r="2.5" stroke="currentColor" stroke-width="1.5" :variants="bellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12.5px' }" />
            <motion.circle cx="10.5" cy="10" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="clapperVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 10px' }" />
          </svg>
        </div>
</template>
