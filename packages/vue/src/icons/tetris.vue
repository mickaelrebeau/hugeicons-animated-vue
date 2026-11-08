<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TetrisIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the falling block drops into the gap and the row settles
// authored from scripts/authored
const blockVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -2px)',
      'translate(0px, 0.4px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.3, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const block2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.3,
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

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.36, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const block3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(0.2px, 0px)',
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
            <motion.path d="M7 5C7 4.05719 7 3.58579 7.29289 3.29289C7.58579 3 8.05719 3 9 3C9.94281 3 10.4142 3 10.7071 3.29289C11 3.58579 11 4.05719 11 5V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11C8.05719 11 7.58579 11 7.29289 10.7071C7 10.4142 7 9.94281 7 9V5Z" stroke="currentColor" stroke-width="1.5" :variants="blockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 7px' }" />
            <motion.path d="M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13C15.9428 13 16.4142 13 16.7071 13.2929C17 13.5858 17 14.0572 17 15C17 15.9428 17 16.4142 16.7071 16.7071C16.4142 17 15.9428 17 15 17C14.0572 17 13.5858 17 13.2929 16.7071C13 16.4142 13 15.9428 13 15Z" stroke="currentColor" stroke-width="1.5" :variants="block2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 15px' }" />
            <motion.path d="M9 19C9 18.0572 9 17.5858 9.29289 17.2929C9.58579 17 10.0572 17 11 17H19C19.9428 17 20.4142 17 20.7071 17.2929C21 17.5858 21 18.0572 21 19C21 19.9428 21 20.4142 20.7071 20.7071C20.4142 21 19.9428 21 19 21H11C10.0572 21 9.58579 21 9.29289 20.7071C9 20.4142 9 19.9428 9 19Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 19px' }" />
            <motion.path d="M3 9C3 8.05719 3 7.58579 3.29289 7.29289C3.58579 7 4.05719 7 5 7C5.94281 7 6.41421 7 6.70711 7.29289C7 7.58579 7 8.05719 7 9V13C7 13.9428 7 14.4142 6.70711 14.7071C6.41421 15 5.94281 15 5 15C4.05719 15 3.58579 15 3.29289 14.7071C3 14.4142 3 13.9428 3 13V9Z" stroke="currentColor" stroke-width="1.5" :variants="block3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 11px' }" />
          </svg>
        </div>
</template>
