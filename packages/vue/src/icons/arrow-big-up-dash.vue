<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowBigUpDashIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dash holds the start, then the big arrow lifts away from it
// authored from scripts/authored
const dashVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.6)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: { duration: 0.48, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -2.4px)',
      'translate(0px, 0.288px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M9 21H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M14.9351 5.27643L17.3928 7.99539C19.335 10.1441 20.3061 11.2184 19.9143 12.1092C19.5225 13 18.0788 13 15.1915 13H15V14C15 15.4142 15 16.1213 14.5607 16.5607C14.1213 17 13.4142 17 12 17C10.5858 17 9.87868 17 9.43934 16.5607C9 16.1213 9 15.4142 9 14V13H8.80852C5.92117 13 4.47749 13 4.08568 12.1092C3.69387 11.2184 4.66499 10.1441 6.60724 7.99538L9.06495 5.27642C10.4367 3.75881 11.1226 3 12 3C12.8774 3 13.5633 3.75881 14.9351 5.27643Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
