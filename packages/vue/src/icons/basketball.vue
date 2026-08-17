<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BasketballIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball bounces, every seam riding the same squash off the floor
// authored from scripts/authored
const sphereVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1) scaleX(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1) scaleX(1)',
      'translateY(1.6px) scaleY(0.86) scaleX(1.1)',
      'translateY(-2.6px) scaleY(1.08) scaleX(0.94)',
      'translateY(0px) scaleY(1) scaleX(1)',
    ],
    transition: {
      duration: 0.72,
      times: [0, 0.28, 0.64, 1],
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
            <motion.path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M2 12.9506C8.14512 13.5607 13.5577 8.11477 12.9506 2" stroke="currentColor" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M11.0507 22.0012C10.4406 15.856 15.8866 10.4434 22.0013 11.0505" stroke="currentColor" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M17 20C17 12.8203 11.1797 7 4 7" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
