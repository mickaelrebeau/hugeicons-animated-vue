<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserDollarIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the head reacts first; the shoulders follow with human weight
// generated from @hugeicons/core-free-icons
const headVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(14.9deg)', 'rotate(-3.72deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.64,
      ease: 'easeInOut',
      times: [0, 0.4, 0.7, 1],
    },
  },
}

const bodyVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.84px)', 'translateY(0px)'],
    transition: {
      duration: 0.32,
      ease: 'easeOut',
      delay: 0.28,
    },
  },
}

const personVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-1.53px) scale(1.03)', 'translateY(0.51px) scale(0.98)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C5 9.76142 7.23858 12 10 12C12.7614 12 15 9.76142 15 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 12px' }" />
            <motion.path d="M21 14.5H16.5C15.6716 14.5 15 15.1716 15 16C15 16.8284 15.6716 17.5 16.5 17.5H19.5C20.3284 17.5 21 18.1716 21 19C21 19.8284 20.3284 20.5 19.5 20.5H15M18 13V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17.5px' }" />
            <motion.path d="M3 19C3 15.134 6.13401 12 10 12C11.0736 12 12.0907 12.2417 13 12.6736" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 15.5px' }" />
          </svg>
        </div>
</template>
