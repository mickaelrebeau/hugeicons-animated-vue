<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BrainCircuitIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// signals run out along the three traces, each node lighting on arrival
// authored from scripts/authored
const traceMVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.5,
      delay: 0.05,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const nodeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.3, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const traceTVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.5,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const traceBVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.5,
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

const node2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.4, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const node3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.35, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M10.2222 22C10.5126 22 10.7972 21.9626 11.074 21.897C11.7831 21.729 12.1377 21.6449 12.5688 21.0996C13 20.5543 13 19.9909 13 18.864V4.80464C13 3.71729 13 3.17361 12.4167 2.58825L12.4117 2.58333C11.8264 2 11.4768 2 10.7778 2C8.94375 2 7.36918 3.11089 6.69025 4.6965C6.54998 5.02409 6.47984 5.18789 6.39638 5.26209C6.31291 5.33629 6.13704 5.38825 5.78531 5.49215C4.17506 5.96781 3 7.45779 3 9.22223C3 9.94404 3.19666 10.6199 3.53931 11.1992C3.80114 11.6419 3.93205 11.8632 3.93205 12C3.93205 12.1368 3.80114 12.3581 3.53931 12.8008C3.19666 13.3801 3 14.0559 3 14.7777C3 16.2312 3.79726 17.4983 4.97829 18.1658C5.20609 18.2945 5.31999 18.3589 5.37635 18.4236C5.43272 18.4884 5.47857 18.6044 5.57028 18.8365C6.30231 20.6893 8.10921 22 10.2222 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M13 9C13 11.2091 11.2091 13 9 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13 12H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="traceMVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.8px 12px' }" />
            <motion.path d="M18.5 3.25V3.5M19 3.5C19 3.77614 18.7761 4 18.5 4C18.2239 4 18 3.77614 18 3.5C18 3.22386 18.2239 3 18.5 3C18.7761 3 19 3.22386 19 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 3.5px' }" />
            <motion.path d="M13 8H14C15.3978 8 16.0967 8 16.6481 7.77164C17.3831 7.46716 17.9672 6.88313 18.2716 6.14805C18.5 5.59674 18.5 4.89782 18.5 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="traceTVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.8px 5.8px' }" />
            <motion.path d="M13 16H14C15.3978 16 16.0967 16 16.6481 16.2284C17.3831 16.5328 17.9672 17.1169 18.2716 17.8519C18.5 18.4033 18.5 19.1022 18.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="traceBVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.8px 18.3px' }" />
            <motion.path d="M18.5 20.75V20.5M19 20.5C19 20.2239 18.7761 20 18.5 20C18.2239 20 18 20.2239 18 20.5C18 20.7761 18.2239 21 18.5 21C18.7761 21 19 20.7761 19 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="node2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 20.5px' }" />
            <motion.path d="M20.5 11.75V12M21 12C21 12.2761 20.7761 12.5 20.5 12.5C20.2239 12.5 20 12.2761 20 12C20 11.7239 20.2239 11.5 20.5 11.5C20.7761 11.5 21 11.7239 21 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="node3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 12px' }" />
          </svg>
        </div>
</template>
