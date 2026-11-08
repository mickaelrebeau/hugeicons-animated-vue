<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileClockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clock hands sweep a full turn on the file
// authored from scripts/authored
const dialVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.5, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const handsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.11px, 1.24px) rotate(72deg)',
      'translate(-1.71px, 0.16px) rotate(252deg)',
      'translate(0.12px, 0.16px) rotate(370.8deg)',
      'translate(-0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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
            <motion.circle cx="8" cy="17" r="5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dialVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 17px' }" />
            <motion.path d="M8 15V17L9.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.8px 16.3px' }" />
            <path d="M14 2.50022V3.00043C14 5.83009 14 7.24492 14.8786 8.12398C15.7573 9.00304 17.1715 9.00304 20 9.00304H20.5M5 9.00304C5.00194 6.05815 5.0424 4.5367 5.88598 3.48998C6.06499 3.26787 6.26722 3.06554 6.48924 2.88646C7.58822 2 9.21075 2 12.4558 2C13.1613 2 13.5141 2 13.8371 2.11406C13.9043 2.13778 13.9702 2.16508 14.0345 2.19583C14.3435 2.3437 14.593 2.59325 15.0918 3.09236L19.8284 7.83096C20.4065 8.40927 20.6955 8.69843 20.8478 9.06613C21 9.43383 21 9.84276 21 10.6606V14.0052C21 17.7781 21 19.6645 19.8284 20.8366C18.8853 21.7801 17.4795 21.9641 15 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
