<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PieChart09Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slice swells from the centre and the remaining arc rewrites
// authored from scripts/authored
const sliceVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(-0.61px, 0.10px) scale(0.88)',
      'translate(0.41px, -0.06px) scale(1.08)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
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

const arcVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M16.5557 4.61883C15.7488 4.07099 14.8724 3.64848 13.9552 3.3602C12.7981 2.99648 12.2195 2.81462 11.6098 3.2715C11 3.72839 11 4.4705 11 5.95472V10.5064C11 11.7697 11 12.4013 11.2341 12.9676C11.4683 13.534 11.9122 13.9761 12.8 14.8604L15.999 18.0466C17.0421 19.0855 17.5637 19.605 18.3116 19.4823C19.0596 19.3597 19.3367 18.8125 19.8911 17.7182C20.3153 16.881 20.6251 15.9835 20.8079 15.0499C21.1937 13.0788 20.9957 11.0358 20.2388 9.17903C19.4819 7.32232 18.2002 5.73535 16.5557 4.61883Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sliceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.1px 11.2px' }" />
            <motion.path d="M14 20.4184C13.0736 20.7934 12.0609 20.9999 11 20.9999C6.58172 20.9999 3 17.4182 3 12.9999C3 9.56293 5.16736 6.6322 8.20988 5.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
