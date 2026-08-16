<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KeyframeRemoveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after minus-sign-circle: the remove mark pinches short while the host shape recoils
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

const minusVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.35)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.45,
      ease: 'easeOut',
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
            <motion.path d="M6.70914 7.78222C7.76637 6.59403 8.29499 5.99994 9 5.99994C9.70501 5.99994 10.2336 6.59403 11.2909 7.78222L13.891 10.7044C15.297 12.2846 16 13.0747 16 13.9999C16 14.9252 15.297 15.7153 13.891 17.2955L11.2909 20.2177C10.2336 21.4058 9.70501 21.9999 9 21.9999C8.29499 21.9999 7.76637 21.4058 6.70914 20.2177L4.10902 17.2955C2.70301 15.7153 2 14.9252 2 13.9999C2 13.0747 2.70301 12.2846 4.10902 10.7044L6.70914 7.78222Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 14px' }" />
            <motion.path d="M15 4.99994H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5px' }" />
          </svg>
        </div>
</template>
