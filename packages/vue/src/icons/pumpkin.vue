<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PumpkinIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pumpkin bulges at its sides and the stem wiggles
// authored from scripts/authored
const sideVariants: Variants = {
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

const side2Variants: Variants = {
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

const stemVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.44px, 0.42px) rotate(14deg)',
      'translate(-0.36px, -0.23px) rotate(-9.799999999999999deg)',
      'translate(0.14px, 0.12px) rotate(4.2deg)',
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
            <path d="M16 18C16 20 14 22 12 22C10 22 8 20 8 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M15 8C14.4012 6.8044 13.2819 6 12 6C10.7181 6 9.59883 6.8044 9 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15.4118 19.4077C19.6471 21.8019 22 16.4063 22 12.7038C22 9.00141 19.7754 6 17.0313 6C16.0946 6 14.9412 6.47885 14 7.43654" stroke="currentColor" stroke-width="1.5" :variants="sideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 13.9px' }" />
            <motion.path d="M8.58824 19.4077C4.35294 21.8019 2 16.4063 2 12.7038C2 9.00141 4.22456 6 6.9687 6C7.90542 6 9.05882 6.47885 10 7.43654" stroke="currentColor" stroke-width="1.5" :variants="side2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 13.9px' }" />
            <motion.path d="M12 6C12 4.66667 12.6 2 15 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 4px' }" />
          </svg>
        </div>
</template>
