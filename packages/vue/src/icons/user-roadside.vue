<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserRoadsideIcon' })

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
    transform: ['rotate(0deg)', 'rotate(17.08deg)', 'rotate(-4.27deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.62,
      ease: 'easeInOut',
      times: [0, 0.4, 0.7, 1],
    },
  },
}

const personVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-1.47px) scale(1.03)', 'translateY(0.49px) scale(0.98)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.54,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const bodyVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.96px)', 'translateY(0px)'],
    transition: {
      duration: 0.31,
      ease: 'easeOut',
      delay: 0.28,
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
            <motion.path d="M12.9981 6.5H11.0019C8.13196 6.5 6.19701 9.56909 7.32753 12.328C7.48501 12.7124 7.84633 12.9615 8.24612 12.9615H8.9491C9.18605 12.9615 9.39259 13.1302 9.45006 13.3706L10.3551 17.1567C10.5438 17.9462 11.222 18.5 12 18.5C12.778 18.5 13.4562 17.9462 13.6449 17.1567L14.5499 13.3706C14.6074 13.1302 14.814 12.9615 15.0509 12.9615H15.7539C16.1537 12.9615 16.515 12.7124 16.6725 12.328C17.803 9.56909 15.868 6.5 12.9981 6.5Z" stroke="currentColor" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.5px' }" />
            <motion.path d="M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z" stroke="currentColor" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M7 16.5L6 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 16.5px' }" />
            <motion.path d="M12 21.5L12 22.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M18 16.5L17 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 16.5px' }" />
          </svg>
        </div>
</template>
