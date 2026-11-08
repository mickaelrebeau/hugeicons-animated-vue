<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ColorsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the color wheel spins a full turn
// authored from scripts/authored
const wheelVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 1,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M17.5798 9.71016C17.0765 9.57314 16.5468 9.5 16 9.5C13.4668 9.5 11.3002 11.0699 10.4202 13.2898M17.5798 9.71016C20.1271 10.4036 22 12.7331 22 15.5C22 18.8137 19.3137 21.5 16 21.5C14.4633 21.5 13.0615 20.9223 12 19.9722M17.5798 9.71016C17.851 9.02618 18 8.2805 18 7.5C18 4.18629 15.3137 1.5 12 1.5C8.68629 1.5 6 4.18629 6 7.5C6 8.2805 6.14903 9.02618 6.42018 9.71016M10.4202 13.2898C10.149 13.9738 10 14.7195 10 15.5C10 17.277 10.7725 18.8736 12 19.9722M10.4202 13.2898C8.59146 12.792 7.11029 11.451 6.42018 9.71016M6.42018 9.71016C3.87294 10.4036 2 12.7331 2 15.5C2 18.8137 4.68629 21.5 8 21.5C9.53671 21.5 10.9385 20.9223 12 19.9722" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="wheelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
          </svg>
        </div>
</template>
