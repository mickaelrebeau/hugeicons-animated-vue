<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SquareLockRemove01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shackle lifts, then the X pops
// authored from scripts/authored
const xVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.28,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shackleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.18px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M14 22L17.5 18.5M17.5 18.5L21 15M17.5 18.5L14 15M17.5 18.5L21 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18.5px' }" />
            <path d="M11 22C9.38582 22 8.06885 21.966 6.62588 21.9009C4.91103 21.8235 3.50186 20.515 3.27279 18.8447C3.1233 17.7547 3 16.6376 3 15.5C3 14.3624 3.1233 13.2453 3.27279 12.1553C3.50186 10.485 4.91103 9.17649 6.62588 9.09909C8.06885 9.03397 9.53465 9 11.1488 9C12.763 9 14.2288 9.03397 15.6718 9.09909C17.3331 9.17407 18.7076 10.4046 19 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 5.5px' }" />
          </svg>
        </div>
</template>
