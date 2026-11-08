<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MousePointerOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash cuts across and the pointer fades
// authored from scripts/authored
const pointerVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 0.2, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.24, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M15.7419 7.25809L16.3363 7.49069C19.8163 8.85243 21.5563 9.53329 21.4986 10.6133C21.4409 11.6934 19.625 12.1886 15.9933 13.1791C14.9119 13.474 14.3712 13.6215 13.9963 13.9963C13.6215 14.3712 13.474 14.9119 13.1791 15.9933C12.1886 19.625 11.6934 21.4409 10.6133 21.4986C9.53329 21.5563 8.85243 19.8163 7.49069 16.3363L7.25809 15.7419M5.85184 12.1482L5.12973 10.3028C3.70405 6.65934 2.99121 4.83764 3.91442 3.91442C4.83764 2.99121 6.65934 3.70405 10.3028 5.12973L12.1482 5.85184" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pointerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.5 2.5L2.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
