<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RoadIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lane dashes stream toward the viewer and the far bend rewrites
// authored from scripts/authored
const dashVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.8px)',
      'translate(0px, -0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.08,
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

const dash2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.8px)',
      'translate(0px, -0.12px)',
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

const bendVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.66,
      delay: 0.1,
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
            <path d="M2 21.9979V11.9955" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M22 21.9979V11.9955" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 21.9974V20.9977" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M12 17.9964V16.9967" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dash2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.5px' }" />
            <motion.path d="M5.72533 5.65438L6.55526 6.41335M6.55526 6.41335C6.71446 6.14502 6.99041 5.67493 7.08183 5.38084C7.88067 2.81094 7.95145 2.10297 9.18504 2.00183H14.8119C16.0455 2.10297 16.1163 2.81094 16.9151 5.38084C17.0065 5.67493 17.2326 6.14502 17.3918 6.41335M6.55526 6.41335C5.95054 7.43262 5.1493 8.09969 5.02924 8.98037C5.0096 9.12441 5.02924 10.7318 5.02924 11.898C5.02924 12.7742 5.87312 12.7475 6.69535 12.8157C7.21787 12.859 7.74116 12.9538 8.26545 12.9592C11.1713 12.9888 13.0926 12.9919 15.9671 12.9606C16.5229 12.9545 17.083 12.85 17.637 12.803C18.2625 12.7499 18.9165 12.6794 18.9677 11.898C19.044 10.733 18.9873 9.12441 18.9677 8.98037C18.8476 8.09969 17.9965 7.43262 17.3918 6.41335M6.55526 6.41335H17.3918M17.3918 6.41335L18.364 5.65438M5.20362 8.42936L6.41209 9.34913M10.5581 10.5112L13.4968 10.5112M17.6201 9.32635L18.9548 8.90078M7.08183 12.855L7.00382 14.4987M16.9822 12.8755V14.4987" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bendVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
