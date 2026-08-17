<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BookmarkXIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the x wipes inside the still ribbon
// authored from scripts/authored
const xVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.64,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
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
            <path d="M13 2.5H11C8.17157 2.5 6.75736 2.5 5.87868 3.38489C5 4.26977 5 5.69397 5 8.54238V16.9288C5 19.631 5 20.9822 5.84429 21.3954C6.68859 21.8087 7.74355 20.9739 9.85346 19.3044L10.1465 19.0725C11.0363 18.3685 11.4812 18.0164 12 18.0164C12.5188 18.0164 12.9637 18.3685 13.8535 19.0725L14.1465 19.3044C16.2565 20.9739 17.3114 21.8087 18.1557 21.3954C19 20.9822 19 19.631 19 16.9288V8.54238C19 5.69397 19 4.26977 18.1213 3.38489C17.2426 2.5 15.8284 2.5 13 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.4839 7L11.9922 9.49583M11.9922 9.49583L9.4922 12M11.9922 9.49583L14.4922 12M11.9922 9.49583L9.50052 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
          </svg>
        </div>
</template>
