<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Quran03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the crescent rocks and the star twinkles beside it
// authored from scripts/authored
const moonVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-14deg)',
      'translate(0.00px, 0.00px) rotate(9.799999999999999deg)',
      'translate(0.00px, 0.00px) rotate(-4.2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const starVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.14,
      times: [0, 0.34, 0.66, 1],
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
            <motion.path d="M14.9336 11.0007C14.3683 11.9389 13.3396 12.5664 12.1644 12.5664C10.3801 12.5664 8.93359 11.1199 8.93359 9.33564C8.93359 8.16041 9.56109 7.13174 10.4993 6.56641" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="moonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 9.6px' }" />
            <path d="M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H20V6C20 4.11438 20 3.17157 19.4142 2.58579C18.8284 2 17.8856 2 16 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13.625 8H13.5M13.75 8C13.75 8.13807 13.6381 8.25 13.5 8.25C13.3619 8.25 13.25 8.13807 13.25 8C13.25 7.86193 13.3619 7.75 13.5 7.75C13.6381 7.75 13.75 7.86193 13.75 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="starVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 8px' }" />
          </svg>
        </div>
</template>
