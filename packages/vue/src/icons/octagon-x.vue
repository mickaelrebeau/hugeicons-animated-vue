<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OctagonXIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-x: the octagon x strikes its two crossing strokes and recoils
// generated from @hugeicons/core-free-icons
const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-1.9deg)', 'scale(1.08) rotate(0.76deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.49,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.48,
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
            <motion.path d="M14.9999 9L8.99994 15M8.99994 9L14.9999 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.6863 22H11.3137C9.67871 22 8.8612 22 8.12612 21.6955C7.39104 21.391 6.81297 20.813 5.65685 19.6569L4.34315 18.3431C3.18702 17.187 2.60896 16.609 2.30448 15.8739C2 15.1388 2 14.3213 2 12.6863V11.3137C2 9.67871 2 8.8612 2.30448 8.12612C2.60896 7.39104 3.18702 6.81298 4.34315 5.65685L5.65685 4.34315C6.81297 3.18702 7.39104 2.60896 8.12612 2.30448C8.8612 2 9.67871 2 11.3137 2H12.6863C14.3213 2 15.1388 2 15.8739 2.30448C16.609 2.60896 17.187 3.18702 18.3431 4.34315L19.6569 5.65685C20.813 6.81297 21.391 7.39104 21.6955 8.12612C22 8.8612 22 9.67871 22 11.3137V12.6863C22 14.3213 22 15.1388 21.6955 15.8739C21.391 16.609 20.813 17.187 19.6569 18.3431L18.3431 19.6569C17.187 20.813 16.609 21.391 15.8739 21.6955C15.1388 22 14.3213 22 12.6863 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
