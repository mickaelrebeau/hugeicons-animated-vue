<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserFullViewIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the figure turns around to show itself
// authored from scripts/authored
const figureVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M15 5C15 6.65685 13.2418 8.5 12 8.5C10.7582 8.5 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z" stroke="currentColor" stroke-width="1.5" :variants="figureVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.3px' }" />
            <motion.path d="M16.0415 9C17.5645 10.3353 18.5514 12.5969 17.6652 14.7052C17.4742 15.1594 17.0361 15.4539 16.5514 15.4539C16.0585 15.4539 15.249 15.296 15.0917 15.9374L13.9945 20.4123C13.7657 21.3454 12.9434 22 12.0001 22C11.0567 22 10.2344 21.3454 10.0056 20.4123L8.90839 15.9374C8.7511 15.296 7.94155 15.4539 7.44868 15.4539C6.96396 15.4539 6.52588 15.1594 6.33494 14.7052C5.44873 12.5969 6.43564 10.3353 7.95863 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="figureVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
          </svg>
        </div>
</template>
