<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InsertPiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after login-01: the object lines up, enters its slot, and seats
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(-2.85px)', 'translateX(0.95px)', 'translateX(-0.28px)', 'translateX(0px)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.77px) scaleX(0.96)', 'translateX(-0.22px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
    transition: {
      duration: 0.59,
      delay: 0.08,
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
            <motion.path d="M3 8.8C3 7 5.06126 5.2 7.68468 5.2L16.9574 5.2C19.2 5.2 21 3.85 21 2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.65px' }" />
            <motion.path d="M16.5 5.5L16 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 8.25px' }" />
            <motion.path d="M10 5.5C9.86667 8.5625 9.6 14.25 9.2 16C8.8 17.75 8 19.5 6 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12.5px' }" />
            <motion.path d="M17 16.1667V17.5M17 17.5V18.8333M17 17.5H18.3333M17 17.5H15.6667M21 17.5C21 19.7091 19.2091 21.5 17 21.5C14.7909 21.5 13 19.7091 13 17.5C13 15.2909 14.7909 13.5 17 13.5C19.2091 13.5 21 15.2909 21 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 17.5px' }" />
          </svg>
        </div>
</template>
