<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Square01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cube lifts open and the corner arrow kicks back
// authored from scripts/authored
const cubeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.4px, -0.8px)',
      'translate(0.06px, 0.12px)',
      'translate(0px, 0px)',
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

const cube2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.4px, -0.8px)',
      'translate(-0.06px, 0.12px)',
      'translate(0px, 0px)',
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

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.9px, -0.9px)',
      'translate(-0.108px, 0.108px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.12,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M2.71474 7.02474C4.70574 6.91997 5.95498 7.07715 6.73577 8.91069C7.55559 11.111 9.58562 17.2403 10.0931 18.6548C10.6397 20.174 11.3424 21.2218 14.2313 20.9598" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cubeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 14.1px' }" />
            <motion.path d="M14.9999 7.0073C12.137 6.98235 9.7947 11.7222 8.49339 13.9923C7.06196 16.6117 4.6025 21.1519 1.9999 20.9773" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cube2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 14.1px' }" />
            <motion.path d="M22.0001 8.99985H18.0001L21.2002 6.59981C21.7038 6.22212 22.0001 5.62938 22.0001 4.9999C22.0001 3.89538 21.1046 2.99999 20 3C18.8955 3.00001 17.9999 3.89543 17.9999 4.99998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 6px' }" />
          </svg>
        </div>
</template>
