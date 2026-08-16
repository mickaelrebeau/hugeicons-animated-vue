<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NodeAddIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the existing shape makes room and the new mark stamps into place
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

const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-10.22deg) scale(0.82)', 'rotate(3.07deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.42,
      delay: 0.04,
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
            <motion.path d="M13.5 19.5H13C10.1716 19.5 8.75736 19.5 7.87868 18.6213C7 17.7426 7 16.3284 7 13.5V11.5M7 10.5V11.5M7 11.5H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.25px 15px' }" />
            <motion.path d="M13.5 11.5C13.5 10.3215 13.5 9.73223 13.8515 9.36612C14.2029 9 14.7686 9 15.9 9H17.1C18.2314 9 18.7971 9 19.1485 9.36612C19.5 9.73223 19.5 10.3215 19.5 11.5C19.5 12.6785 19.5 13.2678 19.1485 13.6339C18.7971 14 18.2314 14 17.1 14H15.9C14.7686 14 14.2029 14 13.8515 13.6339C13.5 13.2678 13.5 12.6785 13.5 11.5Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 11.5px' }" />
            <motion.path d="M13.5 19.5C13.5 18.3215 13.5 17.7322 13.8515 17.3661C14.2029 17 14.7686 17 15.9 17H17.1C18.2314 17 18.7971 17 19.1485 17.3661C19.5 17.7322 19.5 18.3215 19.5 19.5C19.5 20.6785 19.5 21.2678 19.1485 21.6339C18.7971 22 18.2314 22 17.1 22H15.9C14.7686 22 14.2029 22 13.8515 21.6339C13.5 21.2678 13.5 20.6785 13.5 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 19.5px' }" />
            <motion.path d="M7 2V8M10 5L4 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 5px' }" />
          </svg>
        </div>
</template>
