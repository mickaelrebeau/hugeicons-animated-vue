<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LockerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the handles twist and the door swings
// authored from scripts/authored
const handleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.6px, 0px)',
      'translate(0.09px, 0px)',
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

const handle2Variants: Variants = {
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
            <path d="M2 11C2 6.75736 2 4.63604 3.17157 3.31802C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.31802C22 4.63604 22 6.75736 22 11C22 15.2426 22 17.364 20.8284 18.682C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.682C2 17.364 2 15.2426 2 11Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6 20V22M18 20V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 7V20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M9 13V14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 13.5px' }" />
            <motion.path d="M15 13V14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handle2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 13.5px' }" />
            <path d="M2 7H22" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
