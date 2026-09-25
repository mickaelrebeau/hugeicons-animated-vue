<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BugIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shell squashes and the tail rewrites, the legs staying put
// authored from scripts/authored
const shellVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 1.04px) scaleY(0.86)',
      'translate(0px, -0.30px) scaleY(1.04)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.58,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tailVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.6,
      delay: 0.08,
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
            <path d="M3.01309 4.99084C2.89323 6.05084 3.55249 8.42285 6.48923 8.42285" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M17.5951 8.38081C18.8357 8.57881 21.1132 7.49881 20.9957 5.00281" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M20.9928 20.9989C21.0528 19.9429 20.1777 17.5549 17.599 17.4229" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6.45163 17.4708C5.65013 17.2308 3.01306 18.3348 3.01306 20.9988" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M9.3299 6.11884C9.35388 5.09884 9.84533 2.99884 12.0029 2.99884C13.9208 2.99884 14.5861 4.61884 14.676 6.11884M6.26131 9.41884C6.38118 8.63884 7.29216 6.81484 9.36586 6.63484C11.4635 6.55564 14.3403 6.58684 14.8797 6.67084C15.5869 6.73377 17.2951 7.43884 17.7506 9.41884C17.9124 10.4388 17.8285 11.8788 17.8524 12.7188C17.8165 13.5588 17.9207 15.2623 17.7565 16.1388C17.6367 17.0988 16.9894 18.4668 16.1024 19.3068C14.7838 20.7228 11.1639 22.2108 8.03534 19.4508C6.41713 17.8908 6.30925 16.3788 6.18939 15.7788C6.15725 15.4571 6.15875 13.8763 6.16541 12.3588C6.14144 11.046 6.17235 9.78063 6.26131 9.41884Z" stroke="currentColor" stroke-width="1.5" :variants="shellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.6px' }" />
            <path d="M3.01306 12.8988H5.9498" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M20.9929 12.8988L18.1161 12.8988" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M12.0033 16.4988L12.0033 20.2788" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.4px' }" />
          </svg>
        </div>
</template>
