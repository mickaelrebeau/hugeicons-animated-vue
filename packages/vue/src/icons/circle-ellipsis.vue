<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CircleEllipsisIcon' })

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
      duration: 0.46,
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
            <motion.path d="M12.0002 22.0001C17.523 22.0001 22.0002 17.5229 22.0002 12.0001C22.0002 6.47721 17.523 2.00006 12.0002 2.00006C6.47734 2.00006 2.00018 6.47721 2.00018 12.0001C2.00018 17.5229 6.47734 22.0001 12.0002 22.0001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.0002 11.8751V12.0001M12.2502 12.0001C12.2502 12.1381 12.1383 12.2501 12.0002 12.2501C11.8621 12.2501 11.7502 12.1381 11.7502 12.0001C11.7502 11.862 11.8621 11.7501 12.0002 11.7501C12.1383 11.7501 12.2502 11.862 12.2502 12.0001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.0002 11.8751V12.0001M17.2502 12.0001C17.2502 12.1381 17.1383 12.2501 17.0002 12.2501C16.8621 12.2501 16.7502 12.1381 16.7502 12.0001C16.7502 11.862 16.8621 11.7501 17.0002 11.7501C17.1383 11.7501 17.2502 11.862 17.2502 12.0001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.00018 11.8751V12.0001M7.25018 12.0001C7.25018 12.1381 7.13825 12.2501 7.00018 12.2501C6.86211 12.2501 6.75018 12.1381 6.75018 12.0001C6.75018 11.862 6.86211 11.7501 7.00018 11.7501C7.13825 11.7501 7.25018 11.862 7.25018 12.0001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
