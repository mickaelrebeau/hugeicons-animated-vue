<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DonutIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the donut rolls a full turn on its hole
// authored from scripts/authored
const holeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const icingVariants: Variants = {
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
      duration: 0.9,
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
            <motion.circle cx="12" cy="12.002" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="holeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 2.00195C17.5228 2.00195 22 6.47911 22 12.002C22 17.5248 17.5228 22.002 12 22.002C6.47715 22.002 2 17.5248 2 12.002C2 11.3409 2.06448 10.6949 2.18717 10.0698C2.23327 9.83495 2.25632 9.71751 2.29108 9.63061C2.45182 9.22868 2.60865 9.09965 3.03401 9.01932C3.12598 9.00195 3.41732 9.00195 4 9.00195C5.31297 9.00195 6.42895 8.15849 6.83563 6.98385C7.00941 6.4819 7.0963 6.23093 7.19132 6.14492C7.28634 6.05892 7.52149 6.00292 7.99178 5.89092C9.16127 5.6124 10 4.81124 10 3.50195C10 3.14893 10 2.97242 10.0133 2.8917C10.0842 2.46114 10.3323 2.1913 10.7555 2.08458C10.8348 2.06458 10.9439 2.05541 11.1622 2.03707C11.4384 2.01387 11.7178 2.00195 12 2.00195Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="icingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
