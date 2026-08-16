<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AnchorPointIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the centre holds, then the four corners ping along the bezier from top-right to bottom-left
// authored from scripts/authored
const endRightVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.46, delay: 0.18, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const endLeftVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.46, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const centreVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const cornerTRVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.46, delay: 0.06, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const cornerBLVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.46, delay: 0.24, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const armLeftVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
      delay: 0.08,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const armRightVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
      delay: 0.14,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const curveTRVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.72,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const curveBLVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.72,
      delay: 0.18,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M19 12C19 11.1716 19.6716 10.5 20.5 10.5C21.3284 10.5 22 11.1716 22 12C22 12.8284 21.3284 13.5 20.5 13.5C19.6716 13.5 19 12.8284 19 12Z" stroke="currentColor" stroke-width="1.5" :variants="endRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 12px' }" />
            <motion.path d="M2 12C2 11.1716 2.67157 10.5 3.5 10.5C4.32843 10.5 5 11.1716 5 12C5 12.8284 4.32843 13.5 3.5 13.5C2.67157 13.5 2 12.8284 2 12Z" stroke="currentColor" stroke-width="1.5" :variants="endLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12px' }" />
            <motion.path d="M13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929M13.7071 10.2929C14 10.5858 14 11.0572 14 12C14 12.9428 14 13.4142 13.7071 13.7071M13.7071 10.2929C13.7071 10.2929 13.7071 10.2929 13.7071 10.2929ZM10.2929 10.2929C10 10.5858 10 11.0572 10 12C10 12.9428 10 13.4142 10.2929 13.7071M10.2929 10.2929C10.2929 10.2929 10.2929 10.2929 10.2929 10.2929ZM10.2929 13.7071C10.5858 14 11.0572 14 12 14C12.9428 14 13.4142 14 13.7071 13.7071M10.2929 13.7071C10.2929 13.7071 10.2929 13.7071 10.2929 13.7071ZM13.7071 13.7071C13.7071 13.7071 13.7071 13.7071 13.7071 13.7071Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="centreVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289M20.7071 2.29289C21 2.58579 21 3.05719 21 4C21 4.94281 21 5.41421 20.7071 5.70711M20.7071 2.29289C20.7071 2.29289 20.7071 2.29289 20.7071 2.29289ZM17.2929 2.29289C17 2.58579 17 3.05719 17 4C17 4.94281 17 5.41421 17.2929 5.70711M17.2929 2.29289C17.2929 2.29289 17.2929 2.29289 17.2929 2.29289ZM17.2929 5.70711C17.5858 6 18.0572 6 19 6C19.9428 6 20.4142 6 20.7071 5.70711M17.2929 5.70711C17.2929 5.70711 17.2929 5.70711 17.2929 5.70711ZM20.7071 5.70711C20.7071 5.70711 20.7071 5.70711 20.7071 5.70711Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cornerTRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 4px' }" />
            <motion.path d="M6.70711 18.2929C6.41421 18 5.94281 18 5 18C4.05719 18 3.58579 18 3.29289 18.2929M6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071M6.70711 18.2929C6.70711 18.2929 6.70711 18.2929 6.70711 18.2929ZM3.29289 18.2929C3 18.5858 3 19.0572 3 20C3 20.9428 3 21.4142 3.29289 21.7071M3.29289 18.2929C3.29289 18.2929 3.29289 18.2929 3.29289 18.2929ZM3.29289 21.7071C3.58579 22 4.05719 22 5 22C5.94281 22 6.41421 22 6.70711 21.7071M3.29289 21.7071C3.29289 21.7071 3.29289 21.7071 3.29289 21.7071ZM6.70711 21.7071C6.70711 21.7071 6.70711 21.7071 6.70711 21.7071Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cornerBLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 20px' }" />
            <motion.path d="M5 12H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 10C12 8 12.8333 4 17 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="curveTRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 14C12 16 11.1667 20 7 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="curveBLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
