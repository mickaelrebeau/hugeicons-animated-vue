<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowLeftDoubleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the right chevron slides first, then the left one follows a step behind
// authored from scripts/authored
const leadVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.2px, 0px)',
      'translate(0.264px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const trailVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.2px, 0px)',
      'translate(0.264px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
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
            <motion.path d="M11.5 18C11.5 18 5.50001 13.5811 5.5 12C5.49999 10.4188 11.5 6 11.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leadVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 12px' }" />
            <motion.path d="M18.5 18C18.5 18 12.5 13.5811 12.5 12C12.5 10.4188 18.5 6 18.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 12px' }" />
          </svg>
        </div>
</template>
