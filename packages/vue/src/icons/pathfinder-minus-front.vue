<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PathfinderMinusFrontIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the front square slides away from the back one
// authored from scripts/authored
const shapeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, -1px)',
      'translate(0.15px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M9 14.9998C8.83843 15 8.67184 15 8.5 15C5.68353 15 4.2753 15 3.31779 14.2364C3.11289 14.073 2.92699 13.8871 2.76359 13.6822C2 12.7247 2 11.3165 2 8.5C2 5.68353 2 4.2753 2.76359 3.31779C2.92699 3.11289 3.11289 2.92699 3.31779 2.76359C4.2753 2 5.68353 2 8.5 2C11.3165 2 12.7247 2 13.6822 2.76359C13.8871 2.92699 14.073 3.11289 14.2364 3.31779C15 4.2753 15 5.68353 15 8.5C15 8.67184 15 8.83843 14.9998 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 8.5px' }" />
            <motion.path d="M9 14.9998C9.00267 12.5132 9.04641 11.2167 9.76342 10.3176C9.92682 10.1127 10.1127 9.92682 10.3176 9.76342C11.2167 9.04641 12.5132 9.00267 14.9998 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M22 14.5V16.5M16.5 22H14.5M22 12C21.9345 11.1196 21.7782 10.5249 21.4047 10.0579C21.2673 9.88599 21.1109 9.73003 20.9385 9.59294C20.4718 9.22181 19.8778 9.06568 19 9H18.5M22 19C21.9343 19.8778 21.7782 20.4718 21.4071 20.9385C21.27 21.1109 21.114 21.2673 20.9421 21.4047C20.4751 21.7782 19.8804 21.9345 19 22M12 22C11.1222 21.9343 10.5282 21.7782 10.0615 21.4071C9.88914 21.27 9.73274 21.114 9.59527 20.9421C9.22182 20.4751 9.06547 19.8804 9 19L9 18.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
