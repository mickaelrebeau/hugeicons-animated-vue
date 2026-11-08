<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Comet02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the comet dives down-left and its streaks redraw
// authored from scripts/authored
const streakVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.2,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sparkVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.4)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const cometVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.2px, 1.2px)',
      'translate(0.144px, -0.144px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const streak2Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
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
            <motion.path d="M15 2L13.999 3.00098M9 8L12 5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="streakVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21.4142 10.5858C22.1953 11.3668 22.1953 12.6332 21.4142 13.4142C20.6332 14.1953 19.3668 14.1953 18.5858 13.4142C17.8047 12.6332 17.8047 11.3668 18.5858 10.5858C19.3668 9.80474 20.6332 9.80474 21.4142 10.5858Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12px' }" />
            <motion.path d="M2.12137 16.1631L3.0226 13.3169C3.24284 12.6213 3.74644 12.0437 4.41629 11.7182L5.50816 11.1877C6.36203 10.7728 7.40065 11.0667 7.89181 11.8622L8.91348 13.5168C9.16562 13.9252 9.29169 14.1294 9.45347 14.2345C9.68102 14.3823 9.96665 14.4167 10.2241 14.3272C10.4072 14.2636 10.5803 14.0954 10.9264 13.7591C11.7417 12.9669 13.0989 13.0975 13.7384 14.0296L14.5397 15.1976C14.9857 15.8476 15.1154 16.6552 14.8945 17.4063L14.6604 18.2027C14.4494 18.9204 13.938 19.5191 13.251 19.853L9.41063 21.7189C8.50271 22.16 7.41823 22.0773 6.59222 21.504L3.14778 19.1132C2.18792 18.447 1.77447 17.2586 2.12137 16.1631Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cometVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.4px 16.5px' }" />
            <motion.path d="M22 2L14 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="streak2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
