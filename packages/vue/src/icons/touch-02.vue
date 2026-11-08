<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Touch02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the finger nudges up
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, -2px)', 'translate(0px, 0.24px)', 'translate(0px, 0px)'],
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
            <motion.path d="M17.1422 21.998C17.0905 20.084 17.2194 19.8535 17.3561 19.4277C17.4929 19.002 18.4492 17.4665 18.7875 16.3695C19.8823 12.8202 18.862 12.0653 17.5016 11.0588C15.9931 9.94257 13.1478 9.37728 11.7367 9.49966V3.7462C11.7367 2.78288 10.9558 2.00195 9.99246 2.00195C9.02914 2.00195 8.24821 2.78288 8.24821 3.7462V9.96607M8.24872 21.9988V20.9854C8.18426 20.041 7.24627 18.9235 6.0777 17.3166C4.87607 15.576 4.61785 14.6973 4.80689 13.8848C4.90426 13.4694 5.15692 12.7832 6.39745 11.6104L8.24821 9.96607M8.24821 14.0323V9.96607" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 12px' }" />
          </svg>
        </div>
</template>
