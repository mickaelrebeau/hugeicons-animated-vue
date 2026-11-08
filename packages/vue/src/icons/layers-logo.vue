<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LayersLogoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the layered squares slide back into place
// authored from scripts/authored
const squareVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, 0.8px)',
      'translate(-0.12px, -0.12px)',
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

const square2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.4px, 0.4px)',
      'translate(-0.06px, -0.06px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.06,
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
            <motion.path d="M9.87868 20.1214C10.7574 21.0001 12.1716 21.0001 15 21.0001C17.8284 21.0001 19.2426 21.0001 20.1213 20.1214C21 19.2428 21 17.8285 21 15.0001C21 12.1717 21 10.7575 20.1213 9.8788C19.2426 9.00012 17.8284 9.00012 15 9.00012C12.1716 9.00012 10.7574 9.00012 9.87868 9.8788C9 10.7575 9 12.1717 9 15.0001C9 17.8285 9 19.2428 9.87868 20.1214Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="squareVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 15px' }" />
            <motion.path d="M17.9239 9.00012C17.828 8.02504 17.6112 7.36869 17.1213 6.8788C16.2426 6.00012 14.8284 6.00012 12 6.00012C9.17157 6.00012 7.75736 6.00012 6.87868 6.8788C6 7.75748 6 9.17169 6 12.0001C6 14.8285 6 16.2428 6.87868 17.1214C7.36857 17.6113 8.02491 17.8281 9 17.924" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="square2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M14.9239 6.00012C14.828 5.02504 14.6112 4.36869 14.1213 3.8788C13.2426 3.00012 11.8284 3.00012 9 3.00012C6.17157 3.00012 4.75736 3.00012 3.87868 3.8788C3 4.75748 3 6.17169 3 9.00012C3 11.8285 3 13.2428 3.87868 14.1214C4.36857 14.6113 5.02491 14.8281 6 14.924" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
