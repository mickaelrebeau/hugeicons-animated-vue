<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SeoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the trend line rewrites and the magnifier scans
// authored from scripts/authored
const lensVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, -0.6px)',
      'translate(0.6px, -0.8px)',
      'translate(0.3px, 0.4px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const trendVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.7,
      delay: 0,
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
            <motion.path d="M5 20L7.41286 17.5871M7.41286 17.5871C8.21715 18.3914 9.32826 18.8889 10.5556 18.8889C13.0102 18.8889 15 16.899 15 14.4444C15 11.9898 13.0102 10 10.5556 10C8.10096 10 6.11111 11.9898 6.11111 14.4444C6.11111 15.6717 6.60857 16.7829 7.41286 17.5871Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lensVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 15px' }" />
            <motion.path d="M3 15.1877C2.36394 14.0914 2 12.8191 2 11.4623C2 7.34099 5.35786 4 9.5 4H14.5C18.6421 4 22 7.34099 22 11.4623C22 14.7114 19.913 17.4756 17 18.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="trendVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
