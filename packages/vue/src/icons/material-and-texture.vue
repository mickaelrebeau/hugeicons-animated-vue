<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MaterialAndTextureIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the layers of fabric lift one by one
// authored from scripts/authored
const layerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.18px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.2,
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

const layer2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.1,
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

const weaveVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const layer3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.4px)',
      'translate(0px, 0.06px)',
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
            <motion.path d="M17.7705 4.99408L14.3145 3.66279C13.1674 3.22093 12.5939 3 12.0001 3C11.4062 3 10.8327 3.22093 9.68561 3.66279L6.22941 4.99417C4.07647 5.82351 2.99999 6.23818 3 7.00021C3.00001 7.76225 4.07649 8.17688 6.22946 9.00616L9.68542 10.3373C10.8324 10.7791 11.4058 11 11.9996 11C12.5934 11 13.1668 10.7791 14.3138 10.3374L17.7704 9.0061C19.9235 8.17685 21 7.76223 21 7.00018C21 6.23814 19.9235 5.82345 17.7705 4.99408Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="layerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M16.5 9.50488L17.7705 9.99429C19.9235 10.8237 21 11.2383 21 12.0004C21 12.7624 19.9235 13.1771 17.7704 14.0063L14.3138 15.3376C13.1668 15.7793 12.5934 16.0002 11.9996 16.0002C11.4058 16.0002 10.8324 15.7793 9.68542 15.3375L6.22946 14.0064C4.07649 13.1771 3.00001 12.7625 3 12.0004C2.99999 11.2384 4.07647 10.8237 6.22941 9.99437L7.50011 9.50488" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="layer2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.8px' }" />
            <motion.path d="M19 10.5L8.76086 14.8882M5 13.5L10.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="weaveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.6352 14.5566L17.7705 14.9939C19.9235 15.8233 21 16.238 21 17.0001C21 17.7621 19.9235 18.1767 17.7704 19.006L14.3138 20.3373C13.1668 20.779 12.5934 20.9999 11.9996 20.9999C11.4058 20.9999 10.8324 20.779 9.68542 20.3372L6.22946 19.006C4.07649 18.1768 3.00001 17.7621 3 17.0001C2.99999 16.238 4.07647 15.8234 6.22941 14.994L7.36476 14.5567" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="layer3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.8px' }" />
          </svg>
        </div>
</template>
