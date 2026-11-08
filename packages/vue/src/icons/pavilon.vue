<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PavilonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pavilion roof lifts and settles
// authored from scripts/authored
const pavilionVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.38px) scaleY(1.04)',
      'translate(0px, 0.19px) scaleY(0.98)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M6 11.3338V21.5M18 11.3361V21.5M9.5 21.5L10.0065 18.4592C10.1261 17.741 10.1859 17.3819 10.3463 17.1165C10.7446 16.4571 11.3843 16.4969 12 16.4969C12.6157 16.4969 13.2554 16.4571 13.6537 17.1165C13.8141 17.3819 13.8739 17.741 13.9935 18.4592L14.5 21.5M3 21.5H21M7.12038 11.4811C5.81567 11.4811 3.90987 10.864 3.03476 8.51048C5.33669 8.37831 10.2316 7.831 12.0044 2.5C13.8535 7.91432 18.672 8.37831 20.9739 8.51048C20.0988 10.864 18.193 11.4811 16.8883 11.4811H7.12038Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pavilionVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
