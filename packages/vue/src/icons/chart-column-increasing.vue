<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartColumnIncreasingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// each column stretches past its height in a rising stair, then settles
// authored from scripts/authored
const columnVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.75px) scaleY(1.5)',
      'translate(0px, 0.08px) scaleY(0.95)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.36, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const column2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -1.00px) scaleY(1.25)',
      'translate(0px, 0.12px) scaleY(0.97)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
      times: [0, 0.36, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const column3Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.84px) scaleY(1.14)',
      'translate(0px, 0.12px) scaleY(0.98)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.2,
      times: [0, 0.36, 0.68, 1],
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
            <motion.path d="M8 14V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="columnVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 15.5px' }" />
            <motion.path d="M13 9V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="column2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 13px' }" />
            <motion.path d="M18 5V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="column3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 11px' }" />
            <path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
