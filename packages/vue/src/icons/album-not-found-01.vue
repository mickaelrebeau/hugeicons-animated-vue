<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlbumNotFound01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bar strikes across the stack and both prints recoil and go dim
// authored from scripts/authored
const printBackVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.95)', 'scale(0.96)', 'scale(1)'],
    opacity: [1, 1, 0.35, 0.4, 1],
    transition: {
      duration: 0.88,
      delay: 0.04,
      times: [0, 0.3, 0.5, 0.72, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const printFrontVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.95)', 'scale(0.96)', 'scale(1)'],
    opacity: [1, 1, 0.35, 0.4, 1],
    transition: {
      duration: 0.88,
      times: [0, 0.3, 0.5, 0.72, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const ridgeVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.93)', 'scale(0.94)', 'scale(1)'],
    opacity: [1, 1, 0.3, 0.35, 1],
    transition: {
      duration: 0.88,
      times: [0, 0.3, 0.5, 0.72, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const barVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.88,
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
            <motion.path d="M20.8209 20.8209C19.6419 22 17.7442 22 13.9489 22C10.1536 22 8.25596 22 7.07691 20.8209C6.41956 20.1636 6.1287 19.2829 6 17.9745M17.9745 6C19.2829 6.1287 20.1636 6.41956 20.8209 7.07691C22 8.25596 22 10.1536 22 13.9489C22 15.382 22 16.5446 21.9365 17.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="printBackVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 14px' }" />
            <motion.path d="M16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10C2 6.22876 2 4.34315 3.17157 3.17157M6.5 2.0612C7.44397 2 8.59023 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 11.4098 18 12.556 17.9388 13.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="printFrontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 10px' }" />
            <motion.path d="M5 17C6.8176 14.6361 8.72306 12.4166 11 11M18 11.5443C16.7483 10.5786 15.5868 10.1046 14.5 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="ridgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 13.5px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
