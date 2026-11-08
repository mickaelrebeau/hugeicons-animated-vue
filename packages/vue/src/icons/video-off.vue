<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VideoOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash writes across and the camera dims
// authored from scripts/authored
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

const dimVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.35, 0.35, 1],
    transition: { duration: 0.7, times: [0, 0.24, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M2.00189 1.99988L21.9772 21.9999" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.8516 16.8677C16.7224 17.8061 16.4665 18.4668 15.9595 18.9744C14.9356 19.9996 13.2877 19.9996 9.992 19.9996H8.99323C5.69749 19.9996 4.04961 19.9996 3.02575 18.9744C2.00189 17.9493 2.00189 16.2994 2.00189 12.9996V10.9996C2.00189 7.69971 2.00189 6.04979 3.02575 5.02466C3.36827 4.68172 3.78062 4.45351 4.30114 4.30164" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dimVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.23627 4.0004C8.47815 3.99988 8.72995 3.99988 8.99217 3.99988H9.99093C13.2867 3.99988 14.9346 3.99988 15.9584 5.02501C16.9822 6.05013 16.9822 7.70005 16.9822 10.9999V12.7573M16.9822 9.2313L19.3018 7.52901C20.7729 6.54061 21.4489 7.17184 21.6674 7.64835C22.1191 8.92801 21.9768 11.3935 21.9768 14.5416C21.8703 16.5549 21.5952 16.7718 21.3137 16.9938L21.3107 16.9961" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dimVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
