<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkflowSquare07Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the side node hops and the connector curves to it
// authored from scripts/authored
const hopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.2,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const lineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
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
            <path d="M3 5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2C7.41421 2 8.12132 2 8.56066 2.43934C9 2.87868 9 3.58579 9 5C9 6.41421 9 7.12132 8.56066 7.56066C8.12132 8 7.41421 8 6 8C4.58579 8 3.87868 8 3.43934 7.56066C3 7.12132 3 6.41421 3 5Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M3 19C3 17.5858 3 16.8787 3.43934 16.4393C3.87868 16 4.58579 16 6 16C7.41421 16 8.12132 16 8.56066 16.4393C9 16.8787 9 17.5858 9 19C9 20.4142 9 21.1213 8.56066 21.5607C8.12132 22 7.41421 22 6 22C4.58579 22 3.87868 22 3.43934 21.5607C3 21.1213 3 20.4142 3 19Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M15 7C15 5.58579 15 4.87868 15.4393 4.43934C15.8787 4 16.5858 4 18 4C19.4142 4 20.1213 4 20.5607 4.43934C21 4.87868 21 5.58579 21 7C21 8.41421 21 9.12132 20.5607 9.56066C20.1213 10 19.4142 10 18 10C16.5858 10 15.8787 10 15.4393 9.56066C15 9.12132 15 8.41421 15 7Z" stroke="currentColor" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 7px' }" />
            <path d="M6 16V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 10C18 11.6569 16.6569 13 15 13H9C7.34315 13 6 14.3431 6 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
