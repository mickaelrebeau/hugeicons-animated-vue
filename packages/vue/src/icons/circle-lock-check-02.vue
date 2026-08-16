<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CircleLockCheck02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-check: the confirmation stroke writes from tail to tip and lands once
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.33px) rotate(0.75deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.77,
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
      times: [0, 0.78, 0.9, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    visibility: 'visible',
  },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.84,
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
    },
  },
}

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
            <motion.path d="M10.9635 21.9824C10.7992 21.9941 10.6333 22 10.466 22C6.61877 22 3.5 18.866 3.5 15C3.5 11.134 6.61877 8 10.466 8C12.8331 8 15 9 16 11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.75px 15px' }" />
            <motion.path d="M15 9.5V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 5.75px' }" />
            <motion.circle cx="16.5" cy="18" r="4" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 18px' }" />
            <motion.path d="M15.168 18.4436C15.468 18.5876 15.84 18.9596 16.02 19.2596C16.08 19.6796 16.38 18.0596 17.844 17.0996" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.51px 18.39px' }" />
          </svg>
        </div>
</template>
