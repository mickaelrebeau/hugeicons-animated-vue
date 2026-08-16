<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CirclePoundSterlingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the circular boundary absorbs the inner action and returns to round
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.49,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M14.9909 9.73155C14.9479 9.14951 14.6199 7.7393 13.3593 7.21828C11.7836 6.56699 9.70875 7.38656 9.51462 9.4976C9.42353 10.4881 9.93434 11.5267 10.6766 12.0398C11.2647 12.4463 12.115 12.4845 12.9572 12.4874M12.9572 12.4874C13.0918 12.4878 13.2262 12.4874 13.3593 12.4874H12.9572ZM12.9572 12.4874H11.2374M11.2374 12.4874H8M11.2374 12.4874C11.1817 12.6997 10.9579 13.0342 10.6286 13.42C9.49106 14.7522 8.92231 15.4184 9.05637 15.709C9.19042 15.9997 9.98528 15.9995 11.575 15.9992L14.2516 15.9987C14.4753 15.9987 15.1064 16.0534 16 15.4513" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
