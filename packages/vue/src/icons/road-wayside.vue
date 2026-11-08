<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RoadWaysideIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the roundabout turns a quarter around its island
// authored from scripts/authored
const roundaboutVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.8,
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
            <motion.g :variants="roundaboutVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px', transformBox: 'view-box' }">
              <path d="M15.5 2.5C15.5 5.32843 15.5 6.74264 16.3787 7.62132C17.2574 8.5 18.6716 8.5 21.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
              <path d="M15.5 21.5C15.5 18.6716 15.5 17.2574 16.3787 16.3787C17.2574 15.5 18.6716 15.5 21.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
              <path d="M8.5 2.5C8.5 5.32843 8.5 6.74264 7.62132 7.62132C6.74264 8.5 5.32843 8.5 2.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
              <path d="M8.5 21.5C8.5 18.6716 8.5 17.2574 7.62132 16.3787C6.74264 15.5 5.32843 15.5 2.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
              <path d="M15 12.0001C15 13.657 13.6569 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 10.3433 10.3431 9.00012 12 9.00012C13.6569 9.00012 15 10.3433 15 12.0001Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
              <path d="M12 2.5V4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M21.5 12L19.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M12 19.5V21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M4.5 12L2.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
