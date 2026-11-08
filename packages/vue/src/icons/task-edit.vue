<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TaskEditIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pencil scribbles at the clipboard corner
// authored from scripts/authored
const pencilVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.57px, -0.48px) rotate(-10deg)',
      'translate(0.34px, 0.39px) rotate(7deg)',
      'translate(-0.16px, -0.15px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
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
            <path d="M13.5 2H8.5C7.67157 2 7 2.67157 7 3.5C7 4.32843 7.67157 5 8.5 5H13.5C14.3284 5 15 4.32843 15 3.5C15 2.67157 14.3284 2 13.5 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7 15H10.4286M7 11H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19 11.9995L19 9.48263C19 6.65424 19 5.24004 18.1213 4.36137C17.48 3.72007 16.5535 3.54681 15 3.5M11 21.9995L9 21.9995C6.17158 21.9995 4.75737 21.9995 3.87869 21.1208C3.00001 20.2421 3.00001 18.8279 3 15.9995L3.00001 9.48269C3.00001 6.65425 3 5.24004 3.87868 4.36136C4.51997 3.72007 5.44651 3.54681 6.9999 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.7367 21.6527L14 22L14.3473 20.2633C14.4179 19.9106 14.5913 19.5866 14.8456 19.3323L18.9111 15.2668C19.2668 14.9111 19.8437 14.9111 20.1995 15.2668L20.7332 15.8005C21.0889 16.1563 21.0889 16.7332 20.7332 17.0889L16.6677 21.1544C16.4134 21.4087 16.0894 21.5821 15.7367 21.6527Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pencilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18.5px' }" />
          </svg>
        </div>
</template>
