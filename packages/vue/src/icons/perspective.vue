<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PerspectiveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plane skews to a new viewpoint and back across the axes
// authored from scripts/authored
const planeVariants: Variants = {
  normal: { transform: 'skewX(0deg)' },
  animate: {
    transform: ['skewX(0deg)', 'skewX(-12deg)', 'skewX(6deg)', 'skewX(0deg)'],
    transition: {
      duration: 0.7,
      times: [0, 0.34, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M4.5 11.9999C4.5 9.51223 4.5 8.2684 5.17206 7.38465C5.24545 7.28814 5.32409 7.19589 5.40762 7.10833C6.17248 6.30646 7.38276 6.13056 9.8033 5.77875L12.1623 5.43589C15.5764 4.93968 17.2834 4.69157 18.3917 5.6695C19.5 6.64743 19.5 8.4018 19.5 11.9106V12.0892C19.5 15.598 19.5 17.3523 18.3917 18.3303C17.2834 19.3082 15.5764 19.0601 12.1623 18.5639L9.80329 18.221C7.38275 17.8692 6.17248 17.6933 5.40762 16.8914C5.32409 16.8039 5.24545 16.7116 5.17206 16.6151C4.5 15.7314 4.5 14.4875 4.5 11.9999Z" stroke="currentColor" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M12 22L12 2M2 12H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
