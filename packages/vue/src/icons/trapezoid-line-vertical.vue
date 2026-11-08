<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TrapezoidLineVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the trapezoid flips over its vertical axis
// authored from scripts/authored
const shapeVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M12 5C14.6653 5 15.998 5 16.9449 5.62726C17.0483 5.69576 17.1471 5.76916 17.2409 5.84711C18.1001 6.56098 18.2886 7.69057 18.6655 9.94975L19.0328 12.1515C19.5645 15.338 19.8303 16.9312 18.7825 17.9656C17.7348 19 15.8551 19 12.0957 19H11.9043C8.14492 19 6.26523 19 5.21745 17.9656C4.16967 16.9312 4.4355 15.338 4.96716 12.1515L5.33451 9.94974C5.71144 7.69057 5.89991 6.56098 6.75905 5.84711C6.85287 5.76915 6.95171 5.69576 7.05511 5.62726C8.00198 5 9.33465 5 12 5Z" stroke="currentColor" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 22L12 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="axisVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
