<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BorderRight02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the named border traces the exact edge it represents
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.5px) scale(0.74)', 'translateY(-0.43px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
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
            <motion.path d="M6.33333 2.75143C5.28498 2.94471 4.51342 3.28657 3.90345 3.89124C3.29347 4.49591 2.94861 5.26076 2.75363 6.3M14 2.50496C13.4105 2.5 12.7732 2.5 12.0833 2.5C11.3934 2.5 10.7562 2.5 10.1666 2.50496M2.505 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.505 13.9001M2.75363 17.7C2.94861 18.7392 3.29347 19.5041 3.90345 20.1088C4.51342 20.7134 5.28498 21.0553 6.33333 21.2486M14 21.495C13.4107 21.5 12.7729 21.5 12.0833 21.5C11.3935 21.5 10.7563 21.5 10.1668 21.495" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '8.25px 12px' }" />
            <motion.path d="M17.5 2.5C18.5939 2.69854 19.399 3.04969 20.0355 3.6708C21.5 5.09987 21.5 7.39991 21.5 12C21.5 16.6001 21.5 18.9001 20.0355 20.3292C19.399 20.9503 18.5939 21.3015 17.5 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 12px' }" />
          </svg>
        </div>
</template>
