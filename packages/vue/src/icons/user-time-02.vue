<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserTime02Icon' })

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
    transform: ['rotate(0deg)', 'rotate(15.01deg)', 'rotate(-3.75deg)', 'rotate(0deg)'],
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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.55px) scale(1.03)', 'translateY(0.52px) scale(0.98)', 'translateY(0px) scale(1)'],
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
            <motion.circle cx="9.5" cy="6" r="3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 9.5px' }" />
            <motion.path d="M18.5 18.5L17 17.9V15.5M13 17.5C13 19.7091 14.7909 21.5 17 21.5C19.2091 21.5 21 19.7091 21 17.5C21 15.2909 19.2091 13.5 17 13.5C14.7909 13.5 13 15.2909 13 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 17.5px' }" />
            <motion.path d="M3 18.5V16.4704C3 15.2281 3.55927 14.0099 4.68968 13.4946C6.0685 12.8661 7.72212 12.5 9.5 12.5C10.5541 12.5 11.5646 12.6287 12.5 12.8645" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 15.5px' }" />
          </svg>
        </div>
</template>
