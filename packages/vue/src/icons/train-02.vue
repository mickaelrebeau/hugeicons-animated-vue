<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Train02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bullet train nose bobs and its window glints
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.21px)',
      'translate(0px, -0.15px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.24, 0.5, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const body2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.21px)',
      'translate(0px, -0.15px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0.4, 1, 1, 1],
    transition: {
      duration: 0.66,
      times: [0, 0.24, 0.5, 0.74, 1],
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
            <motion.path d="M20 10C20 14.4183 16.4183 20 12 20C7.58172 20 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M8 18C8.93901 16.7807 10.3819 16 12 16C13.6181 16 15.061 16.7807 16 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M9.24863 9.60369C10.1074 9.85527 11.0339 10 12 10C12.9661 10 13.8926 9.85527 14.7514 9.60369C15.9101 9.26423 16.4186 8.6101 15.5953 7.58805C13.8898 5.47065 10.1102 5.47065 8.40466 7.58805C7.5814 8.6101 8.08993 9.26423 9.24863 9.60369Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="body2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.7px' }" />
            <path d="M5 19L3 22M19 19L21 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
