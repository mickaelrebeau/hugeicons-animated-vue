<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClipboardPenIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pen scribbles on the corner of the board
// authored from scripts/authored
const penVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0.8px)',
      'translate(0.6px, -0.4px)',
      'translate(-0.4px, 0.4px)',
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
            <motion.path d="M11.5 22V20.4937C11.5 19.8117 11.7709 19.1576 12.2532 18.6754L17.474 13.4546C17.7651 13.1635 18.1598 13 18.5714 13C18.983 13 19.3778 13.1635 19.6689 13.4546L20.0454 13.8311C20.3365 14.1222 20.5 14.517 20.5 14.9286C20.5 15.3402 20.3365 15.7349 20.0454 16.026L14.8246 21.2468C14.3423 21.7291 13.6883 22 13.0063 22H11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="penVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 17.5px' }" />
            <path d="M14 2H9C8.17157 2 7.5 2.67157 7.5 3.5C7.5 4.32843 8.17157 5 9 5H14C14.8284 5 15.5 4.32843 15.5 3.5C15.5 2.67157 14.8284 2 14 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7.4999 21.9821C5.94652 21.9353 5.01998 21.7621 4.37869 21.1208C3.50001 20.2421 3.50001 18.8279 3.5 15.9995L3.50001 9.48269C3.50001 6.65425 3.5 5.24004 4.37868 4.36136C5.01997 3.72007 5.94651 3.54681 7.4999 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19.4998 9C19.497 6.4904 19.4485 5.18857 18.6213 4.36137C17.98 3.72007 17.0534 3.54681 15.5 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
