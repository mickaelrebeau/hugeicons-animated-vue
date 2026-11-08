<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TrapezoidLineHorizontalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the trapezoid flips over its horizontal axis
// authored from scripts/authored
const shapeVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(-1)', 'scaleY(1)'],
    transition: { duration: 0.86, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const axisVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
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
            <motion.path d="M5 12C5 9.33466 5 8.00198 5.62726 7.05511C5.69576 6.95171 5.76916 6.85287 5.84711 6.75905C6.56098 5.89991 7.69057 5.71144 9.94975 5.33451L12.1515 4.96715C15.338 4.4355 16.9312 4.16967 17.9656 5.21745C19 6.26523 19 8.14492 19 11.9043V12.0957C19 15.8551 19 17.7348 17.9656 18.7826C16.9312 19.8303 15.338 19.5645 12.1515 19.0328L9.94974 18.6655C7.69057 18.2886 6.56098 18.1001 5.84711 17.2409C5.76916 17.1471 5.69576 17.0483 5.62726 16.9449C5 15.998 5 14.6653 5 12Z" stroke="currentColor" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="axisVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
