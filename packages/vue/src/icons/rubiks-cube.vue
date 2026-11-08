<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RubiksCubeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the top layer twists and the middle seam shifts
// authored from scripts/authored
const topVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(8.399999999999999deg)',
      'translate(0.00px, 0.00px) rotate(-3.5999999999999996deg)',
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

const seamVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, 0px)',
      'translate(-0.09px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.1,
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
            <motion.path d="M8.64298 3.5853C10.2952 2.86177 11.1214 2.5 12 2.5C12.8786 2.5 13.7048 2.86177 15.357 3.5853L17.0618 4.33185C19.6873 5.48154 21 6.05639 21 7C21 7.94361 19.6873 8.51846 17.0618 9.66815L15.357 10.4147C13.7048 11.1382 12.8786 11.5 12 11.5C11.1214 11.5 10.2952 11.1382 8.64298 10.4147L6.93817 9.66815C4.31272 8.51846 3 7.94361 3 7C3 6.05639 4.31272 5.48154 6.93816 4.33185L8.64298 3.5853Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="topVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <path d="M21 7V18C21 18.9436 19.6873 19.5185 17.0618 20.6682L15.357 21.4147C13.7048 22.1382 12.8786 22.5 12 22.5C11.1214 22.5 10.2952 22.1382 8.64298 21.4147L6.93817 20.6682C4.31272 19.5185 3 18.9436 3 18V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21 13L12 17.5L3 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.3px' }" />
            <path d="M12 22.5V11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16.5 20.5V9.5L7 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7.5 20.5V9.5L17 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
