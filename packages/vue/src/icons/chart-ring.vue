<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartRingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ring segments turn a full lap around the hole
// authored from scripts/authored
const dividersVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.09px, 0.54px) rotate(61.2deg)',
      'translate(-1.17px, 0.60px) rotate(396.00000000000006deg)',
      'translate(0.25px, -0.31px) rotate(349.2deg)',
      'translate(0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.86,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const holeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(0.92)', 'scale(1)'],
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
            <motion.path d="M9 9L5 5M16 12H22M12 16V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dividersVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 13.5px' }" />
            <motion.circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" :variants="holeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
