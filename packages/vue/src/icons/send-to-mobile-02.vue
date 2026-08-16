<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SendToMobile02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after call-02: the phone gives one tactile ring and settles in the hand
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-9.66deg)', 'rotate(7.73deg)', 'rotate(-4.83deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.67,
      ease: 'easeInOut',
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
            <motion.path d="M17 6C16.9855 4.29344 16.8908 3.35264 16.2702 2.73223C15.5378 2 14.3591 2 12.0016 2H9.001C6.64351 2 5.46476 2 4.73238 2.73223C4 3.46447 4 4.64298 4 7V17C4 19.357 4 20.5355 4.73238 21.2678C5.46476 22 6.64351 22 9.001 22H12.0016C14.3591 22 15.5378 22 16.2702 21.2678C16.8908 20.6473 16.9855 19.7065 17 17.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 2px' }" />
            <motion.path d="M12.5 2H8.5L9 3H12L12.5 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 2px' }" />
            <motion.path d="M19 12.0337H12M17 9C17 9 19.0371 10.6469 19.8208 11.5533C19.9468 11.6991 20.0064 11.8627 19.9995 12.0253C19.9933 12.1711 19.9337 12.3162 19.8207 12.4468C19.0368 13.3531 17 15 17 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 2px' }" />
          </svg>
        </div>
</template>
