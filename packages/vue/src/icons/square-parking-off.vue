<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SquareParkingOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash cuts across and the P dims
// authored from scripts/authored
const dimVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.25, 0.25, 1],
    transition: { duration: 0.8, delay: 0.14, times: [0, 0.24, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const slashVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
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
            <motion.path d="M8.5 8.5V12.5M8.5 12.5V17.5M8.5 12.5H12.5M11.5 6.5H12.5C14.1569 6.5 15.5 7.84315 15.5 9.5C15.5 9.80309 15.4551 10.0957 15.3715 10.3715" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dimVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M20.1088 20.1088C18.7175 21.5 16.4784 21.5 12 21.5C7.52169 21.5 5.28252 21.5 3.89127 20.1088C2.50003 18.7175 2.50003 16.4783 2.50003 12C2.50003 7.52166 2.50003 5.28249 3.89127 3.89124M7.5907 2.59066C8.7583 2.5 10.1979 2.5 12 2.5C16.4784 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 13.8022 21.5 15.2417 21.4094 16.4093" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
