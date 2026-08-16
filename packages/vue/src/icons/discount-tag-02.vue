<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DiscountTag02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after credit-card: the discount badge flips to reveal the deal and faces forward again
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateY(0deg)',
  },
  animate: {
    transform: ['rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(270deg)', 'rotateY(360deg)'],
    transition: {
      duration: 0.73,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M13 16.5L13 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.41925 2H5.94918C4.08752 2 3.15669 2 2.57834 2.57834C2 3.15669 2 4.08752 2 5.94918V9.41925C2 10.6299 2 11.2353 2.22546 11.7796C2.45092 12.3239 2.87896 12.7519 3.73503 13.608L9.16516 19.0381C11.1398 21.0127 12.127 22 13.3539 22C14.5808 22 15.568 21.0127 17.5426 19.0381L19.0381 17.5426C21.0127 15.568 22 14.5808 22 13.3539C22 12.127 21.0127 11.1398 19.0381 9.16516L13.608 3.73503C12.7519 2.87896 12.3239 2.45092 11.7796 2.22546C11.2353 2 10.6299 2 9.41925 2Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.875 12.5H16.75M17 12.5C17 12.6381 16.8881 12.75 16.75 12.75C16.6119 12.75 16.5 12.6381 16.5 12.5C16.5 12.3619 16.6119 12.25 16.75 12.25C16.8881 12.25 17 12.3619 17 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.375 12.5H9.25M9.5 12.5C9.5 12.6381 9.38807 12.75 9.25 12.75C9.11193 12.75 9 12.6381 9 12.5C9 12.3619 9.11193 12.25 9.25 12.25C9.38807 12.25 9.5 12.3619 9.5 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.75 6.5H6.5M7 6.5C7 6.77614 6.77614 7 6.5 7C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6C6.77614 6 7 6.22386 7 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
