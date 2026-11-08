<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WeightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the kettlebell drops and bounces
// authored from scripts/authored
const weightVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -0.5px)',
      'translate(0px, 0.2px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.3, 0.56, 0.8, 1],
      ease: [
        'easeIn',
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
            <motion.path d="M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="weightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
            <motion.path d="M15.0708 9H8.92925C7.55843 9 6.87302 9 6.35701 9.37752C5.841 9.75503 5.62426 10.4151 5.19077 11.7351L3.8772 15.7351C3.08824 18.1376 2.69376 19.3388 3.28353 20.1694C3.87331 21 5.12076 21 7.61568 21H16.3843C18.8792 21 20.1267 21 20.7165 20.1694C21.3062 19.3388 20.9118 18.1376 20.1228 15.7351L18.8092 11.7351C18.3757 10.4151 18.159 9.75503 17.643 9.37752C17.127 9 16.4416 9 15.0708 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="weightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
          </svg>
        </div>
</template>
