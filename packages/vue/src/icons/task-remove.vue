<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TaskRemoveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the X twists at the clipboard corner
// authored from scripts/authored
const xVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <path d="M13.498 2H8.49805C7.66962 2 6.99805 2.67157 6.99805 3.5C6.99805 4.32843 7.66962 5 8.49805 5H13.498C14.3265 5 14.998 4.32843 14.998 3.5C14.998 2.67157 14.3265 2 13.498 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6.99805 15H10.4266M6.99805 11H14.998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18.998 13.9995L18.9981 9.48263C18.9981 6.65424 18.9981 5.24004 18.1194 4.36137C17.4781 3.72007 16.5515 3.54681 14.9981 3.5M12.998 21.9995L8.99805 21.9995C6.16963 21.9995 4.75541 21.9995 3.87674 21.1208C2.99806 20.2421 2.99805 18.8279 2.99805 15.9995L2.99806 9.48269C2.99805 6.65425 2.99805 5.24004 3.87673 4.36136C4.51802 3.72007 5.44456 3.54681 6.99795 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.998 17L18.498 19.5M18.498 19.5L15.998 22M18.498 19.5L20.998 22M18.498 19.5L15.998 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19.5px' }" />
          </svg>
        </div>
</template>
