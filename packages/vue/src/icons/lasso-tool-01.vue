<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LassoTool01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lasso loop twirls
// authored from scripts/authored
const lassoVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.02px, -1.45px) rotate(-14deg)',
      'translate(1.20px, 1.31px) rotate(10deg)',
      'translate(-0.54px, -0.46px) rotate(-4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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
            <motion.path d="M17.3003 15.5116C20.3416 12.9804 22.6484 9.95901 21.8354 6.92985C20.7852 3.01732 15.5349 1.02232 10.1083 2.4739C4.68179 3.92547 1.13402 8.27394 2.18415 12.1865C3.03697 15.3638 5.88849 16.9746 10.3503 16.42M17.3003 15.5116C15.9161 11.5244 9.71766 12.8164 10.002 15.5116C10.2129 17.5105 14.9298 17.5105 17.3003 15.5116ZM17.3003 15.5116C18.1269 18.2959 16.2449 21.4457 12.9572 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lassoVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 11.5px' }" />
          </svg>
        </div>
</template>
