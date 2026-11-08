<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GravityIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball drops on its line and bounces
// authored from scripts/authored
const ballVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.2px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.3, 0.56, 0.8, 1],
      ease: ['easeIn', 'easeOut', 'easeIn', 'easeOut'],
    },
  },
};

const stringVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.84px) scaleY(1.3)',
      'translate(0px, -0.28px) scaleY(0.9)',
      'translate(0px, 0.14px) scaleY(1.05)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 0.56, 0.8, 1],
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
            <motion.path d="M12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16C6 19.3137 8.68629 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <path d="M7 2V4M17 2V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12.0006 2V7.5M12.0006 7.5C12.5005 7.4925 13.135 6.56222 14.0605 5.50277M12.0006 7.5C11.5005 7.4925 11.1849 6.81248 10.0605 5.50277" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stringVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.8px' }" />
          </svg>
        </div>
</template>
