<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Notification03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// decaying pendulum ring; the clapper swings counter-phase, dragged behind
const svgVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, -14, 11, -8, 5, -2, 0],
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
      times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1],
    },
  },
};

const clapperVariants: Variants = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, 2.2, -1.8, 1.2, -0.7, 0.3, 0],
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
      times: [0, 0.24, 0.44, 0.62, 0.78, 0.9, 1],
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
          <motion.svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible" :variants="svgVariants" :animate="controls" initial="normal" :style="{ transformOrigin: 'top center' }">
            <path d="M20 18.5011L18.349 7.93407C17.8603 4.80601 15.166 2.5 12 2.5C8.83398 2.5 6.13971 4.80601 5.65098 7.93407L4 18.5011" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M20 18.5C20 16.8431 16.4183 15.5 12 15.5C7.58172 15.5 4 16.8431 4 18.5C4 20.1569 7.58172 21.5 12 21.5C16.4183 21.5 20 20.1569 20 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13 18.5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="clapperVariants" :animate="controls" initial="normal" />
          </motion.svg>
        </div>
</template>
