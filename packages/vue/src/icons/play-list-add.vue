<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PlayListAddIcon' })

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
      duration: 0.47,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-9.53deg) scale(0.82)', 'rotate(2.86deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.4,
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
            <motion.path d="M1.99988 7H20.9999" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 7px' }" />
            <motion.path d="M16.4999 2L13.4999 7" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 4.5px' }" />
            <motion.path d="M9.49988 2L6.49988 7" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 4.5px' }" />
            <motion.path d="M11.5001 21C7.02172 21 4.78255 21 3.3913 19.6088C2.00006 18.2175 2.00006 15.9783 2.00006 11.5C2.00006 7.02166 2.00006 4.78249 3.3913 3.39124C4.78255 2 7.02172 2 11.5001 2C15.9784 2 18.2176 2 19.6088 3.39124C21.0001 4.78249 21.0001 7.02166 21.0001 11.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 11.5px' }" />
            <motion.path d="M14 18H22M18 22L18 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18px' }" />
          </svg>
        </div>
</template>
