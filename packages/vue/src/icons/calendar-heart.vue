<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CalendarHeartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the corner heart squashes, and the page flinches
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
      delay: 0.12,
      times: [0, 0.28, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const heartVariants: Variants = {
  normal: { transform: 'scale(1, 1)' },
  animate: {
    transform: ['scale(1, 1)', 'scale(1.28, 0.78)', 'scale(0.9, 1.2)', 'scale(1.08, 0.94)', 'scale(1, 1)'],
    transition: { duration: 0.64, times: [0, 0.18, 0.4, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M15.5 2V6M7.5 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2.5 10H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.5 12C20.5 8.22876 20.5 6.34315 19.3284 5.17157C18.1569 4 16.2712 4 12.5 4H10.5C6.72876 4 4.84315 4 3.67157 5.17157C2.5 6.34315 2.5 8.22876 2.5 12V14C2.5 17.7712 2.5 19.6569 3.67157 20.8284C4.84315 22 6.72876 22 10.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pageVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 13px' }" />
            <motion.path d="M14.515 15.3866C15.5876 14.7469 16.5238 15.0047 17.0863 15.4153C17.3169 15.5837 17.4322 15.6679 17.5 15.6679C17.5678 15.6679 17.6831 15.5837 17.9137 15.4153C18.4762 15.0047 19.4124 14.7469 20.485 15.3866C21.8928 16.2261 22.2113 18.9958 18.9642 21.3324C18.3457 21.7775 18.0365 22 17.5 22C16.9635 22 16.6543 21.7775 16.0358 21.3324C12.7887 18.9958 13.1072 16.2261 14.515 15.3866Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18.4px' }" />
          </svg>
        </div>
</template>
