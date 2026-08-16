<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GooglePhotosIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after search-01: the search mark leans in, scans, and recenters
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg) scale(1)', 'translate(1.32px, -0.58px) rotate(14.79deg) scale(0.78)', 'translate(0.42px, -0.85px) rotate(6.34deg) scale(0.76)', 'translate(-0.69px, 0.26px) rotate(-8.45deg) scale(0.8)', 'translate(-0.16px, 0.11px) rotate(-2.64deg) scale(1.08)', 'translate(0px, 0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 1.27,
      times: [0, 0.32, 0.48, 0.64, 0.84, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
}

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
            <motion.path d="M12 12C14.7614 12 17 9.74267 17 6.95811C17 4.87018 15.7414 3.07868 13.9475 2.31298C13.246 2.01357 12.8953 1.86387 12.4476 2.16297C12 2.46206 12 2.95237 12 3.93298V12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 6.93px' }" />
            <motion.path d="M12 12C9.23858 12 7 14.2573 7 17.0419C7 19.1298 8.25861 20.9213 10.0525 21.687C10.754 21.9864 11.1047 22.1361 11.5524 21.837C12 21.5379 12 21.0476 12 20.067V12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 6.93px' }" />
            <motion.path d="M12 12C12 14.7614 14.2573 17 17.0419 17C19.1298 17 20.9213 15.7414 21.687 13.9475C21.9864 13.246 22.1361 12.8953 21.837 12.4476C21.5379 12 21.0476 12 20.067 12L12 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 6.93px' }" />
            <motion.path d="M12 12C12 9.23858 9.74267 7 6.95811 7C4.87018 7 3.07868 8.25861 2.31298 10.0525C2.01357 10.754 1.86387 11.1047 2.16297 11.5524C2.46206 12 2.95237 12 3.93298 12H12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 6.93px' }" />
          </svg>
        </div>
</template>
