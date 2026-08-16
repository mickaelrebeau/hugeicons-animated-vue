<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowLeft04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the filled head leads left, the shaft following a beat later
// authored from scripts/authored
const shaftVariants: Variants = {
  normal: { transform: 'translateX(0px) scaleX(1)' },
  animate: {
    transform: [
      'translateX(0px) scaleX(1)',
      'translateX(-1.6px) scaleX(0.86)',
      'translateX(0.2px) scaleX(1.04)',
      'translateX(0px) scaleX(1)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.06,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.4px, 0px)',
      'translate(0.288px, 0px)',
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
            <motion.path d="M10 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12px' }" />
            <motion.path d="M5.41418 13.6026L6.38061 14.3639C7.94641 15.5974 8.72931 16.2141 9.36467 15.9328C10 15.6515 10 14.6881 10 12.7613V11.2387C10 9.31191 10 8.34853 9.36467 8.06721C8.72931 7.7859 7.94641 8.40264 6.38062 9.63612L5.41418 10.3974C4.47141 11.1401 4.00003 11.5115 4.00003 12C4.00003 12.4885 4.47141 12.8599 5.41418 13.6026Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
          </svg>
        </div>
</template>
