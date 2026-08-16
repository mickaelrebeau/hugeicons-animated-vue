<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AbsoluteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two bars clamp inward on the value, which compresses and springs back
// authored from scripts/authored
const barsVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.9)', 'scaleX(1.03)', 'scaleX(1)'],
    transition: {
      duration: 0.6,
      times: [0, 0.36, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const valueVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.84)', 'scaleX(1.05)', 'scaleX(1)'],
    transition: {
      duration: 0.6,
      delay: 0.04,
      times: [0, 0.36, 0.7, 1],
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
            <motion.path d="M17.725 2.5C19.1145 2.65381 20.0498 3.00143 20.7479 3.78705C22 5.19617 22 7.46411 22 12C22 16.5359 22 18.8038 20.7479 20.213C20.0498 20.9986 19.1145 21.3462 17.725 21.5M6.27501 21.5C4.88551 21.3462 3.95021 20.9986 3.25212 20.213C2 18.8038 2 16.5359 2 12C2 7.46411 2 5.19617 3.25212 3.78705C3.95021 3.00143 4.88551 2.65381 6.27501 2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.56055 8.01026C9.09055 7.95026 10.0505 8.04027 10.6505 9.09026C11.2805 10.3503 12.8405 13.8603 13.2305 14.6703C13.6505 15.5403 14.1905 16.1403 16.4105 15.9903" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="valueVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.9998 8C14.7998 7.98571 12.9998 10.7 11.9998 12C10.8998 13.5 9.00977 16.1 7.00977 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="valueVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
