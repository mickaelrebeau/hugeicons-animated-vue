<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BubbleTea01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the straw tilts in the lid and the pearls pop
// authored from scripts/authored
const strawVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.80px, 0.47px) rotate(14deg)',
      'translate(-0.37px, -0.14px) rotate(-6deg)',
      'translate(0.12px, 0.05px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const nodeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.08, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const node2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.16, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const node3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.24, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M18 9L16.5218 18.4136C16.2728 19.9992 16.1483 20.7921 15.5864 21.2644C14.3865 22.273 9.54699 22.217 8.41358 21.2644C7.85167 20.7921 7.72718 19.9992 7.47819 18.4136L6 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6 9L6.51444 7.71391C7.41167 5.47084 9.58414 4 12 4C14.4159 4 16.5883 5.47084 17.4856 7.71391L18 9" stroke="currentColor" stroke-width="1.5" />
            <path d="M5 9H19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M13 9L16 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="strawVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 5.5px' }" />
            <motion.path d="M13.125 13H13M13.25 13C13.25 13.1381 13.1381 13.25 13 13.25C12.8619 13.25 12.75 13.1381 12.75 13C12.75 12.8619 12.8619 12.75 13 12.75C13.1381 12.75 13.25 12.8619 13.25 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 13px' }" />
            <motion.path d="M13.625 18H13.5M13.75 18C13.75 18.1381 13.6381 18.25 13.5 18.25C13.3619 18.25 13.25 18.1381 13.25 18C13.25 17.8619 13.3619 17.75 13.5 17.75C13.6381 17.75 13.75 17.8619 13.75 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 18px' }" />
            <motion.path d="M10.125 15.5H10M10.25 15.5C10.25 15.6381 10.1381 15.75 10 15.75C9.86193 15.75 9.75 15.6381 9.75 15.5C9.75 15.3619 9.86193 15.25 10 15.25C10.1381 15.25 10.25 15.3619 10.25 15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="node3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 15.5px' }" />
          </svg>
        </div>
</template>
