<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CalendarLock01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the corner lock clicks shut and the page takes the knock
// authored from scripts/authored
const pageVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg) scale(1)',
      'translate(0.6px, 0.8px) rotate(2.4deg) scale(0.96)',
      'translate(-0.3px, -0.2px) rotate(-1deg) scale(1.02)',
      'translate(0px, 0px) rotate(0deg) scale(1)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.16,
      times: [0, 0.28, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const lockVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-16deg) scale(0.88)',
      'rotate(6deg) scale(1.08)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.58, times: [0, 0.32, 0.62, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

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
            <path d="M16 2V6M8 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21 12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pageVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <path d="M3 10H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.7355 16.1747L15.7354 14.7843C15.7354 14.5789 15.744 14.371 15.8176 14.1792C16.0136 13.6688 16.5326 13 17.4776 13C18.4225 13 18.962 13.6688 19.1579 14.1792C19.2315 14.371 19.2401 14.5789 19.2401 14.7843L19.2401 16.1747M15.805 21.9976H19.191C20.1878 21.9976 20.9959 21.191 20.9959 20.196V18.1947C20.9959 17.1997 20.1878 16.3931 19.191 16.3931H15.805C14.8081 16.3931 14 17.1997 14 18.1947V20.196C14 21.191 14.8081 21.9976 15.805 21.9976Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
          </svg>
        </div>
</template>
