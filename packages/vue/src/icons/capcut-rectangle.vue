<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CapcutRectangleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cut mark retraces its blades inside the frame, and the frame clicks
// authored from scripts/authored
const markVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.74,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.42, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M10.8 11.9999L6 14.4999C6 15.6784 6 15.7676 6.35155 16.1338C6.7031 16.4999 7.2689 16.4999 8.40052 16.4999H13.2016C14.3332 16.4999 14.899 16.4999 15.2505 16.1338C15.6021 15.7676 15.6021 15.6784 15.6021 14.4999M10.8 11.9999L18 8.24988M10.8 11.9999L6 9.49988C6 8.32137 6 8.23211 6.35155 7.86599C6.7031 7.49988 7.2689 7.49988 8.40052 7.49988H13.2016C14.3332 7.49988 14.899 7.49988 15.2505 7.86599C15.6021 8.23211 15.6021 8.32137 15.6021 9.49988M10.8 11.9999L18 15.7499" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2.4978 11.9999C2.4978 7.52154 2.4978 5.28236 3.88905 3.89112C5.28029 2.49988 7.51946 2.49988 11.9978 2.49988C16.4761 2.49988 18.7153 2.49988 20.1066 3.89112C21.4978 5.28236 21.4978 7.52154 21.4978 11.9999C21.4978 16.4782 21.4978 18.7174 20.1066 20.1086C18.7153 21.4999 16.4761 21.4999 11.9978 21.4999C7.51946 21.4999 5.28029 21.4999 3.88905 20.1086C2.4978 18.7174 2.4978 16.4782 2.4978 11.9999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
