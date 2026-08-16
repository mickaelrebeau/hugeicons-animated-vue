<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PhoneLockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after call-02: the handset rocks against its cradle and settles
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-9.35deg)', 'rotate(7.48deg)', 'rotate(-4.67deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.75,
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
            <motion.path d="M12.5 2H8.5L9 3H12L12.5 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 2px' }" />
            <motion.path d="M15.5 11V10C15.5 9.17157 16.1716 8.5 17 8.5C17.8284 8.5 18.5 9.17157 18.5 10V11.0003M15 15.5H19C19.5523 15.5 20 15.0523 20 14.5V12.5C20 11.9477 19.5523 11.5 19 11.5L15 11.5C14.4477 11.5 14 11.9477 14 12.5V14.5C14 15.0523 14.4477 15.5 15 15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 2px' }" />
            <motion.path d="M16.9974 6C16.9829 4.29344 16.8882 3.35264 16.2678 2.73223C15.5355 2 14.357 2 12 2H9C6.64298 2 5.46447 2 4.73223 2.73223C4 3.46447 4 4.64298 4 7V17C4 19.357 4 20.5355 4.73223 21.2678C5.46447 22 6.64298 22 9 22H12C14.357 22 15.5355 22 16.2678 21.2678C16.8882 20.6474 16.9829 19.7066 16.9974 18.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 2px' }" />
          </svg>
        </div>
</template>
