<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpeechIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the speaker head nods as the sound arcs pulse
// authored from scripts/authored
const soundVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.1, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.70px, 0.03px) rotate(-5deg)',
      'translate(0.49px, 0.01px) rotate(3.5deg)',
      'translate(-0.21px, 0.00px) rotate(-1.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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
            <motion.path d="M20.0001 7C21.2358 8.27961 22.0001 10.0474 22.0001 12C22.0001 13.9526 21.2358 15.7204 20.0001 17M17.1214 9.87868C17.6643 10.4216 18.0001 11.1716 18.0001 12C18.0001 12.8284 17.6643 13.5784 17.1214 14.1213" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="soundVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.6px 12px' }" />
            <motion.path d="M9.00012 20V19C9.00012 18.0572 9.00012 17.5858 9.29302 17.2929C9.58591 17 10.0573 17 11.0001 17C12.1047 17 13.0001 16.1046 13.0001 15V9.5C13.0001 6.46243 10.5377 4 7.50012 4C4.46256 4 2.00012 6.46243 2.00012 9.5C2.00012 10.3907 2.21187 11.232 2.58777 11.9763C3.03678 12.8652 3.37022 13.8573 3.15341 14.8294L2.00012 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 12px' }" />
          </svg>
        </div>
</template>
