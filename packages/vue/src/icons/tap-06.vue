<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tap06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand lifts and the ripple redraws
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rippleVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.56,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M7.50952 14.3526V6.09638C7.50952 5.27475 8.11882 4.50586 8.94199 4.50586C9.76515 4.50586 10.519 5.15854 10.519 5.98017V10.2612M10.519 10.2612L10.5104 11.437M10.519 10.2612C11.0812 8.14404 13.6712 8.95626 13.5126 10.6167C13.5097 10.6461 13.5126 11.355 13.5126 11.355M13.5126 11.355V12.4956M13.5126 11.355C13.7959 9.44431 16.935 9.39199 16.5347 12.3053M16.5347 12.3053L16.5119 12.9935M16.5347 12.3053C17.0039 10.2952 19.5697 10.7279 19.5016 12.5806V16.2679C19.4989 17.8445 19.1909 18.5983 18.3768 19.547C18.2169 19.7333 18.0613 19.926 17.9447 20.142C17.5165 20.9353 17.7129 21.1529 17.6417 21.9926M7.50952 10.4132C6.18966 11.607 5.30133 12.6969 5.03525 13.0223C4.14531 14.3745 4.37154 15.26 5.63625 17.0622C6.57744 18.4033 7.44202 19.3674 7.50815 19.4422C8.18123 20.2036 8.12175 20.7057 8.12175 22.0006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 13.3px' }" />
            <motion.path d="M13.0343 6C13.0343 3.79086 11.2392 2 9.02494 2C6.81065 2 5.01562 3.79086 5.01562 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rippleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
