<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BeanIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cleft highlight rewrites across the still bean
// authored from scripts/authored
const cleftVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.64,
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
            <path d="M16.5751 3.08979C13.6421 2.55106 10.8277 4.49201 10.289 7.42494C10.0234 8.87061 8.87061 10.0234 7.42494 10.289C4.49201 10.8277 2.55106 13.6421 3.08979 16.5751C3.62852 19.508 6.44296 21.4489 9.37589 20.9102C15.2312 19.8347 19.8347 15.2312 20.9102 9.37589C21.4489 6.44296 19.508 3.62852 16.5751 3.08979Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11.1734 5.64062C12.2727 6.35349 13 7.59141 13 8.99919C13 11.2083 11.2091 12.9992 8.99998 12.9992C7.5922 12.9992 6.35428 12.2719 5.64142 11.1726" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cleftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.3px 9.3px' }" />
          </svg>
        </div>
</template>
