<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlphaCircleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the letter writes itself inside a circle that tightens around it
// authored from scripts/authored
const letterVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.86,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.22, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M15.0011 8C15.1077 8.8641 15.0011 10.2323 14.6013 11.8284C14.2548 12.9686 13.1621 16.2569 10.3236 15.9809C7.87156 15.6569 6.84544 13.2566 7.01868 11.6844C7.08531 10.3643 8.07145 8.036 10.6967 8C13.0554 8.20402 13.6551 10.2082 13.9883 11.9004C14.3481 13.4606 14.3081 14.2287 14.9078 15.2968C15.2676 15.8849 15.9472 16.1009 16.4936 15.9569C16.9334 15.7769 17 15.3928 17 15.1048" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
