<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiOff02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash writes across and the wedge dims
// authored from scripts/authored
const dimVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.3, 0.3, 1],
    transition: { duration: 0.7, times: [0, 0.24, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const slashVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
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
            <motion.path d="M2 8.81966C3.05591 7.87522 4.23126 7.09293 5.4875 6.4875M22 8.81966C19.2499 6.35989 15.6897 5 12 5C10.7883 5 9.5905 5.14667 8.4308 5.4308M5 12.8587C6.22581 11.6571 7.72851 10.8022 9.35595 10.3559M19 12.8587C17.3838 11.2744 15.2862 10.2927 13.056 10.056M8.5 16.4287C9.43464 15.5125 10.6912 14.9994 12 14.9994C13.0878 14.9994 14.1392 15.3543 15 16M12.1256 19.75H12.0006M12.2506 19.75C12.2506 19.8881 12.1387 20 12.0006 20C11.8625 20 11.7506 19.8881 11.7506 19.75C11.7506 19.6119 11.8625 19.5 12.0006 19.5C12.1387 19.5 12.2506 19.6119 12.2506 19.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dimVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3 4L19 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
