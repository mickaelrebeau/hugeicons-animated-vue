<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowUp04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the filled head leads the lift, the shaft following a beat later
// authored from scripts/authored
const shaftVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(-1.6px) scaleY(0.86)',
      'translateY(0.2px) scaleY(1.04)',
      'translateY(0px) scaleY(1)',
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
            <motion.path d="M12 10L12 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M13.6026 5.41415L14.3639 6.38058C15.5974 7.94638 16.2141 8.72928 15.9328 9.36464C15.6515 10 14.6881 10 12.7613 10H11.2387C9.31191 10 8.34853 10 8.06721 9.36464C7.7859 8.72928 8.40264 7.94638 9.63612 6.38059L10.3974 5.41415C11.1401 4.47138 11.5115 4 12 4C12.4885 4 12.8599 4.47138 13.6026 5.41415Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
          </svg>
        </div>
</template>
