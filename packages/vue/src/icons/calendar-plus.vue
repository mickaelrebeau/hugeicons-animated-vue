<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CalendarPlusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plus spins in and the page pops open under it
// authored from scripts/authored
const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-40deg) scale(0.4)',
      'rotate(12deg) scale(1.22)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.62, times: [0, 0.28, 0.62, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

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
      delay: 0.22,
      times: [0, 0.28, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M15.5 18.995H21.5M18.495 22L18.495 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19px' }" />
            <path d="M15.5 2V6M7.5 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2.5 10H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.5 13C20.5 9.22876 20.5 6.34315 19.3284 5.17157C18.1569 4 16.2712 4 12.5 4H10.5C6.72876 4 4.84315 4 3.67157 5.17157C2.5 6.34315 2.5 8.22876 2.5 12V14C2.5 17.7712 2.5 19.6569 3.67157 20.8284C4.84315 22 6.72876 22 10.5 22H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pageVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
