<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DoctorIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the clinician nods while the medical detail answers
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.94px)', 'translateY(0px)'],
    transition: {
      duration: 0.3,
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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.43px) scale(1.03)', 'translateY(0.48px) scale(0.98)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const headVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(16.68deg)', 'rotate(-4.17deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.61,
      ease: 'easeInOut',
      times: [0, 0.4, 0.7, 1],
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
            <motion.path d="M20 22V19C20 16.1716 20 14.7574 19.1213 13.8787C18.2426 13 16.8284 13 14 13L12 15L10 13C7.17157 13 5.75736 13 4.87868 13.8787C4 14.7574 4 16.1716 4 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.5px' }" />
            <motion.path d="M16 13V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 15.75px' }" />
            <motion.path d="M8.5 13V17M8.5 17C9.60457 17 10.5 17.8954 10.5 19V20M8.5 17C7.39543 17 6.5 17.8954 6.5 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 16.5px' }" />
            <motion.path d="M15.5 6.5V5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5V6.5C8.5 8.433 10.067 10 12 10C13.933 10 15.5 8.433 15.5 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M16.75 19.25C16.75 19.6642 16.4142 20 16 20C15.5858 20 15.25 19.6642 15.25 19.25C15.25 18.8358 15.5858 18.5 16 18.5C16.4142 18.5 16.75 18.8358 16.75 19.25Z" stroke="currentColor" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 19.25px' }" />
          </svg>
        </div>
</template>
