<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlipVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two triangles swap across the axis
// authored from scripts/authored
const triVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -0.18px)',
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

const tri2Variants: Variants = {
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

const axisVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M9.57959 6.29516C10.5332 7.65364 11.01 8.33288 11.6564 8.46522C11.8828 8.51159 12.1172 8.51159 12.3436 8.46522C12.99 8.33288 13.4668 7.65364 14.4204 6.29516C15.5752 4.65002 16.1527 3.82745 15.9652 3.15323C15.9002 2.91938 15.7784 2.70324 15.6096 2.52214C15.1229 2 14.0819 2 12 2C9.9181 2 8.87715 2 8.39045 2.52214C8.22164 2.70324 8.09984 2.91938 8.03482 3.15323C7.84734 3.82745 8.42476 4.65003 9.57959 6.29516Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="triVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.3px' }" />
            <motion.path d="M14.4204 17.7048C13.4668 16.3464 12.99 15.6671 12.3436 15.5348C12.1172 15.4884 11.8828 15.4884 11.6564 15.5348C11.01 15.6671 10.5332 16.3464 9.57959 17.7048C8.42475 19.35 7.84734 20.1725 8.03482 20.8468C8.09984 21.0806 8.22164 21.2968 8.39045 21.4779C8.87715 22 9.9181 22 12 22C14.0819 22 15.1229 22 15.6095 21.4779C15.7784 21.2968 15.9002 21.0806 15.9652 20.8468C16.1527 20.1725 15.5752 19.35 14.4204 17.7048Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tri2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.7px' }" />
            <motion.path d="M10 12H14M17.5 12H21M3 12H6.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="axisVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
