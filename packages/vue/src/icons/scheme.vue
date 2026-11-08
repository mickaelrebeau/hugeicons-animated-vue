<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SchemeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four corner nodes pulse out from the hub in turn
// authored from scripts/authored
const nodeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.08,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const hubVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.14)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const node2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.16,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const node3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.24,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const node4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const linksVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.6,
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
            <motion.path d="M17 4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2H20C20.9428 2 21.4142 2 21.7071 2.29289C22 2.58579 22 3.05719 22 4V5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H19C18.0572 7 17.5858 7 17.2929 6.70711C17 6.41421 17 5.94281 17 5V4Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 4.5px' }" />
            <motion.path d="M9.5 11.5C9.5 10.5572 9.5 10.0858 9.79289 9.79289C10.0858 9.5 10.5572 9.5 11.5 9.5H12.5C13.4428 9.5 13.9142 9.5 14.2071 9.79289C14.5 10.0858 14.5 10.5572 14.5 11.5V12.5C14.5 13.4428 14.5 13.9142 14.2071 14.2071C13.9142 14.5 13.4428 14.5 12.5 14.5H11.5C10.5572 14.5 10.0858 14.5 9.79289 14.2071C9.5 13.9142 9.5 13.4428 9.5 12.5V11.5Z" stroke="currentColor" stroke-width="1.5" :variants="hubVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 19C17 18.0572 17 17.5858 17.2929 17.2929C17.5858 17 18.0572 17 19 17H20C20.9428 17 21.4142 17 21.7071 17.2929C22 17.5858 22 18.0572 22 19V20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22H19C18.0572 22 17.5858 22 17.2929 21.7071C17 21.4142 17 20.9428 17 20V19Z" stroke="currentColor" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 19.5px' }" />
            <motion.path d="M2 19C2 18.0572 2 17.5858 2.29289 17.2929C2.58579 17 3.05719 17 4 17H5C5.94281 17 6.41421 17 6.70711 17.2929C7 17.5858 7 18.0572 7 19V20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22H4C3.05719 22 2.58579 22 2.29289 21.7071C2 21.4142 2 20.9428 2 20V19Z" stroke="currentColor" stroke-width="1.5" :variants="node3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 19.5px' }" />
            <motion.path d="M2 4C2 3.05719 2 2.58579 2.29289 2.29289C2.58579 2 3.05719 2 4 2H5C5.94281 2 6.41421 2 6.70711 2.29289C7 2.58579 7 3.05719 7 4V5C7 5.94281 7 6.41421 6.70711 6.70711C6.41421 7 5.94281 7 5 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5V4Z" stroke="currentColor" stroke-width="1.5" :variants="node4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 4.5px' }" />
            <motion.path d="M4.5 13V7.04545M11 4.5H17M19.5 11V17M15.5 15.5L14.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="linksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
