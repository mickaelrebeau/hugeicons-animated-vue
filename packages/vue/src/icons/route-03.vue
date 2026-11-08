<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Route03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the path draws out to the pin, which drops in
// authored from scripts/authored
const pathVariants: Variants = {
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

const pinVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0.3px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.26,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
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
            <circle cx="5" cy="18.9668" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11.5 6.9668H9.5C7.567 6.9668 6 8.30994 6 9.9668C6 11.6237 7.567 12.9668 9.5 12.9668H12.5C14.433 12.9668 16 14.3099 16 15.9668C16 17.6237 14.433 18.9668 12.5 18.9668H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pathVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.25 2.0332C16.1789 2.0332 14.5 3.66124 14.5 5.66952C14.5 6.81786 14.9688 7.71074 15.9062 8.50829C16.5671 9.07045 17.7694 10.2763 18.25 11.0332C18.755 10.2914 19.9329 9.07045 20.5938 8.50829C21.5312 7.71074 22 6.81786 22 5.66952C22 3.66124 20.3211 2.0332 18.25 2.0332Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.3px 6.5px' }" />
            <motion.path d="M18.3848 5.5332H18.2598M18.5098 5.5332C18.5098 5.67127 18.3978 5.7832 18.2598 5.7832C18.1217 5.7832 18.0098 5.67127 18.0098 5.5332C18.0098 5.39513 18.1217 5.2832 18.2598 5.2832C18.3978 5.2832 18.5098 5.39513 18.5098 5.5332Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.3px 5.5px' }" />
          </svg>
        </div>
</template>
