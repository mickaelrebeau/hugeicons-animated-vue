<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'EditTableIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pencil scribbles and the table rows draw
// authored from scripts/authored
const rowVariants: Variants = {
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

const row2Variants: Variants = {
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

const penVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0.6px)',
      'translate(0.6px, -0.3px)',
      'translate(-0.4px, 0.3px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <path d="M12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2.5 9L21.5 9" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M2.5 13L16.5 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2.5 17H12" stroke="currentColor" stroke-width="1.5" :variants="row2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M12 21.5L12 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M18.6014 19.6832L20.8308 17.4538C21.1423 17.1424 21.298 16.9867 21.3812 16.8187C21.5396 16.4991 21.5396 16.1239 21.3812 15.8043C21.298 15.6363 21.1423 15.4806 20.8308 15.1692C20.5194 14.8577 20.3637 14.702 20.1957 14.6188C19.8761 14.4604 19.5009 14.4604 19.1813 14.6188C19.0133 14.702 18.8576 14.8577 18.5462 15.1692L16.1155 17.5999C15.4028 18.3126 15.0464 18.6689 14.8262 19.1056C14.7582 19.2404 14.7003 19.3802 14.6531 19.5237C14.5 19.9881 14.5 20.4921 14.5 21.5L15.155 21.4064C16.1514 21.2641 16.6496 21.1929 17.0917 20.9718C17.5339 20.7508 17.8897 20.3949 18.6014 19.6832Z" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" :variants="penVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18px' }" />
          </svg>
        </div>
</template>
