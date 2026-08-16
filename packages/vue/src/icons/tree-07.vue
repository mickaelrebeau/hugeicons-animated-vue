<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tree07Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after leaf-01: the crown leans on a breeze while the trunk stays planted
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-12.32deg) translateX(1.64px)', 'rotate(5.13deg) translateX(-0.41px)', 'rotate(-2.05deg) translateX(0.21px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M12 22V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M8.59238 7.43436C9.56387 7.79137 10.7369 8 12 8C13.2631 8 14.4361 7.79137 15.4076 7.43436C16.0441 7.20048 16.1801 6.43408 15.7553 5.91561L12.8887 2.41707C12.4331 1.86098 11.5669 1.86098 11.1113 2.41707L8.24472 5.91561C7.81991 6.43408 7.95593 7.20048 8.59238 7.43436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M14.7898 7.62305L17.2408 10.4446C17.674 10.9434 17.5554 11.7064 16.9511 11.9898C15.6018 12.6226 14.0495 12.9999 12 12.9999C9.95052 12.9999 8.39815 12.6226 7.04891 11.9898C6.44464 11.7064 6.326 10.9434 6.75921 10.4446L9.21022 7.62305" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M7.64436 12.3418L5.26271 15.0154C4.84523 15.484 4.92927 16.2074 5.4867 16.504C7.23841 17.4362 9.51345 17.9992 12 17.9992C14.4866 17.9992 16.7616 17.4362 18.5133 16.504C19.0707 16.2074 19.1548 15.484 18.7373 15.0154L16.3556 12.3418" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M10 22H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
