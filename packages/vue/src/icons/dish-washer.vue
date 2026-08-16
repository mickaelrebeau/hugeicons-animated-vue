<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DishWasherIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after loading-03: the drum takes a full turn behind the door
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
    transition: {
      duration: 0.17,
    },
  },
  animate: {
    transform: 'rotate(360deg)',
    transition: {
      duration: 0.79,
      ease: 'linear',
      repeat: Infinity,
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M14.5 2.5H9.5C6.20017 2.5 4.55025 2.5 3.52513 3.52513C2.5 4.55025 2.5 6.20017 2.5 9.5V14.5C2.5 17.7998 2.5 19.4497 3.52513 20.4749C4.55025 21.5 6.20017 21.5 9.5 21.5H14.5C17.7998 21.5 19.4497 21.5 20.4749 20.4749C21.5 19.4497 21.5 17.7998 21.5 14.5V9.5C21.5 6.20017 21.5 4.55025 20.4749 3.52513C19.4497 2.5 17.7998 2.5 14.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2.5 8.5H21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 5.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5 18.5C16.433 18.5 18 16.933 18 15C18 13.067 16.433 11.5 14.5 11.5C12.567 11.5 11 13.067 11 15C11 16.933 12.567 18.5 14.5 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 12.5505C11.3647 11.9022 10.4793 11.5 9.5 11.5C7.567 11.5 6 13.067 6 15C6 16.933 7.567 18.5 9.5 18.5C10.4793 18.5 11.3647 18.0978 12 17.4495" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.125 5.5H18M18.25 5.5C18.25 5.63807 18.1381 5.75 18 5.75C17.8619 5.75 17.75 5.63807 17.75 5.5C17.75 5.36193 17.8619 5.25 18 5.25C18.1381 5.25 18.25 5.36193 18.25 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
