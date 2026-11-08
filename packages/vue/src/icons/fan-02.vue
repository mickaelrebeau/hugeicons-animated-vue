<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Fan02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four blades spin a full turn
// authored from scripts/authored
const bladeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.41px, -6.11px) rotate(72deg)',
      'translate(8.41px, -4.69px) rotate(252deg)',
      'translate(-0.97px, -0.56px) rotate(370.8deg)',
      'translate(0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.8,
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

const blade2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(6.11px, -3.41px) rotate(72deg)',
      'translate(4.69px, 8.41px) rotate(252deg)',
      'translate(0.56px, -0.97px) rotate(370.8deg)',
      'translate(-0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.8,
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

const blade3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(3.41px, 6.11px) rotate(72deg)',
      'translate(-8.41px, 4.69px) rotate(252deg)',
      'translate(0.97px, 0.56px) rotate(370.8deg)',
      'translate(-0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.8,
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

const blade4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-6.11px, 3.41px) rotate(72deg)',
      'translate(-4.69px, -8.41px) rotate(252deg)',
      'translate(-0.56px, 0.97px) rotate(370.8deg)',
      'translate(0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.8,
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
            <motion.path d="M9.57978 12.6289C8.04139 13.4886 7 15.1426 7 17.0418C7 19.1298 8.25861 20.9213 10.0525 21.687C10.754 21.9864 11.1047 22.1361 11.5524 21.837C12 21.5379 12 21.0476 12 20.067V14.4999C10.8365 14.4999 9.85868 13.7052 9.57978 12.6289Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bladeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 17.4px' }" />
            <motion.path d="M9.5 12H3.93298C2.95237 12 2.46206 12 2.16297 11.5524C1.86387 11.1047 2.01357 10.754 2.31298 10.0525C3.07868 8.25861 4.87018 7 6.95811 7C8.85734 7 10.5113 8.04139 11.371 9.57979C10.2948 9.85869 9.5 10.8365 9.5 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="blade2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.6px 9.5px' }" />
            <motion.path d="M12 9.5V3.93298C12 2.95237 12 2.46206 12.4476 2.16297C12.8953 1.86387 13.246 2.01357 13.9475 2.31298C15.7414 3.07868 17 4.87018 17 6.95811C17 8.85734 15.9586 10.5113 14.4202 11.371C14.1413 10.2948 13.1635 9.5 12 9.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="blade3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 6.6px' }" />
            <motion.path d="M12.629 14.4202C13.7052 14.1413 14.5 13.1635 14.5 12H20.067C21.0476 12 21.5379 12 21.837 12.4476C22.1361 12.8953 21.9864 13.246 21.687 13.9475C20.9213 15.7414 19.1298 17 17.0419 17C15.1427 17 13.4887 15.9586 12.629 14.4202Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="blade4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.4px 14.5px' }" />
            <path d="M14.4998 11.9993C14.4998 13.38 13.3805 14.4993 11.9998 14.4993C10.6191 14.4993 9.49982 13.38 9.49982 11.9993C9.49982 10.6186 10.6191 9.49927 11.9998 9.49927C13.3805 9.49927 14.4998 10.6186 14.4998 11.9993Z" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
