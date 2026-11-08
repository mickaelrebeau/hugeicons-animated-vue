<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cylinder04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// a drop falls from the tank tap and refills
// authored from scripts/authored
const dropVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, 2px)', 'translate(0px, -2px)', 'translate(0px, 0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tankVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12 19L9.87868 21.1213M9.87868 21.1213C10.4216 21.6642 11.1716 22 12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 19.8284 9.33579 20.5784 9.87868 21.1213Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M10 16H14C16.8089 16 18.2134 16 19.2223 15.3259C19.659 15.034 20.034 14.659 20.3259 14.2223C21 13.2134 21 11.8089 21 9C21 6.19108 21 4.78661 20.3259 3.77772C20.034 3.34096 19.659 2.96596 19.2223 2.67412C18.2134 2 16.8089 2 14 2H10C7.19108 2 5.78661 2 4.77772 2.67412C4.34096 2.96596 3.96596 3.34096 3.67412 3.77772C3 4.78661 3 6.19108 3 9C3 11.8089 3 13.2134 3.67412 14.2223C3.96596 14.659 4.34096 15.034 4.77772 15.3259C5.78661 16 7.19108 16 10 16Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tankVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
          </svg>
        </div>
</template>
