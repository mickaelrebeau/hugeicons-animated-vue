<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileCheckCornerIcon' })

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
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.34px) rotate(0.78deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.79,
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
      duration: 0.86,
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
            <motion.path d="M12.5 2.5V3C12.5 5.82843 12.5 7.24264 13.3787 8.12132C14.2574 9 15.6716 9 18.5 9H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.75px 5.75px' }" />
            <motion.path d="M9.5 21.9913C7.02043 21.9554 5.61466 21.7715 4.67157 20.8284C3.5 19.6569 3.5 17.7712 3.5 14V9.45584C3.5 6.21082 3.5 4.58831 4.38607 3.48933C4.56508 3.26731 4.76731 3.06508 4.98933 2.88607C6.08831 2 7.71082 2 10.9558 2C11.6614 2 12.0141 2 12.3372 2.11401C12.4044 2.13772 12.4702 2.165 12.5345 2.19575C12.8436 2.34355 13.093 2.593 13.5919 3.09188L18.3284 7.82843C18.9065 8.40649 19.1955 8.69552 19.3478 9.06306C19.5 9.4306 19.5 9.83935 19.5 10.6569V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12px' }" />
            <motion.path d="M13.5 20C13.5 20 14.5 20.5 15.25 22C15.25 22 18.0294 17.8333 20.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19.5px' }" />
          </svg>
        </div>
</template>
