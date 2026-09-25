<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BounceRightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the trail writes from the far bounce back to the ball, which lands and rebounds
// authored from scripts/authored
const trailVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    pathOffset: [0, 0.999, 0.999, 0],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.14, 0.2, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const ballVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(1, 1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scale(1, 1)',
      'translate(-0.8px, 1.4px) scale(1.16, 0.8)',
      'translate(0.4px, -0.84px) scale(0.92, 1.08)',
      'translate(0px, 0px) scale(1, 1)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.36,
      times: [0, 0.3, 0.62, 1],
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
            <motion.path d="M15 10C12.8847 13.01 11.8945 17.1528 11.248 20.086C11.1165 20.6824 11.0508 20.9806 10.9128 20.9991C10.7748 21.0177 10.6338 20.7339 10.3518 20.1662C9.00614 17.4579 6.21729 15.062 4 17.1079" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 15.5px' }" />
            <motion.circle cx="18" cy="5" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 5px' }" />
          </svg>
        </div>
</template>
