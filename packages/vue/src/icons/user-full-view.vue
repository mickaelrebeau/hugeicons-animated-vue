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

// after user: the head reacts first; the shoulders follow with human weight
// generated from @hugeicons/core-free-icons
const headVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(15.33deg)', 'rotate(-3.83deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: 'easeInOut',
      times: [0, 0.4, 0.7, 1],
    },
  },
}

const bodyVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.86px)', 'translateY(0px)'],
    transition: {
      duration: 0.29,
      ease: 'easeOut',
      delay: 0.28,
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
            <motion.path d="M15 5C15 6.65685 13.2418 8.5 12 8.5C10.7582 8.5 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z" stroke="currentColor" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
            <motion.path d="M16.0415 9C17.5645 10.3353 18.5514 12.5969 17.6652 14.7052C17.4742 15.1594 17.0361 15.4539 16.5514 15.4539C16.0585 15.4539 15.249 15.296 15.0917 15.9374L13.9945 20.4123C13.7657 21.3454 12.9434 22 12.0001 22C11.0567 22 10.2344 21.3454 10.0056 20.4123L8.90839 15.9374C8.7511 15.296 7.94155 15.4539 7.44868 15.4539C6.96396 15.4539 6.52588 15.1594 6.33494 14.7052C5.44873 12.5969 6.43564 10.3353 7.95863 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
          </svg>
        </div>
</template>
