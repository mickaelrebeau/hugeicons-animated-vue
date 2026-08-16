<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkflowCircle04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the workflow propagates from one node to the next
// generated from @hugeicons/core-free-icons
const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.45, ease: 'easeInOut', delay: i * 0.12 },
  }),
}

const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
    transition: {
      duration: 0.45,
      ease: 'easeOut',
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
            <motion.path d="M9 5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 5px' }" />
            <motion.path d="M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 5px' }" />
            <motion.path d="M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 19px' }" />
            <motion.path d="M6 16V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12px' }" />
            <motion.path d="M18 8C18 8.93188 18 11.3978 17.8478 11.7654C17.6448 12.2554 17.2554 12.6448 16.7654 12.8478C16.3978 13 15.9319 13 15 13H9C8.06812 13 7.60218 13 7.23463 13.1522C6.74458 13.3552 6.35523 13.7446 6.15224 14.2346C6 14.6022 6 15.0681 6 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
