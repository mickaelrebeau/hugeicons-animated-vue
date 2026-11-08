<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three blocks build up from the floor, left, middle, right
// authored from scripts/authored
const barVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 7.20px) scaleY(0.2)',
      'translate(0px, -0.72px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.1,
      times: [0, 0.16, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bar2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 5.20px) scaleY(0.2)',
      'translate(0px, -0.52px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.2,
      times: [0, 0.16, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bar3Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 3.20px) scaleY(0.2)',
      'translate(0px, -0.32px) scaleY(1.08)',
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
            <motion.path d="M15 21V6C15 5.06812 15 4.60218 14.8478 4.23463C14.6448 3.74458 14.2554 3.35523 13.7654 3.15224C13.3978 3 12.9319 3 12 3C11.0681 3 10.6022 3 10.2346 3.15224C9.74458 3.35523 9.35523 3.74458 9.15224 4.23463C9 4.60218 9 5.06812 9 6V21H15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 8H15V21H17C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17V12C21 10.1144 21 9.17157 20.4142 8.58579C19.8284 8 18.8856 8 17 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bar2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 14.5px' }" />
            <motion.path d="M9 13H7C5.11438 13 4.17157 13 3.58579 13.5858C3 14.1716 3 15.1144 3 17C3 18.8856 3 19.8284 3.58579 20.4142C4.17157 21 5.11438 21 7 21H9V13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bar3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 17px' }" />
          </svg>
        </div>
</template>
