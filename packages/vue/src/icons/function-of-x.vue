<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FunctionOfXIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the f rewrites and the brackets close on the x
// authored from scripts/authored
const fVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.82,
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

const parenVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0px)',
      'translate(0.096px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const paren2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, 0px)',
      'translate(-0.096px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const xVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.1,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M2 18.2222C2.18866 19.0724 2.56908 20 3.56235 20C5.28118 20 5.71088 18.2222 7 12C8.28912 5.77778 8.71882 4 10.4376 4C11.4309 4 11.8113 4.92763 12 5.77778M4.91667 9.77778H10.4376" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21 12C22.3804 15.253 22.2854 16.9808 21 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="parenVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '21.7px 16px' }" />
            <motion.path d="M12 12C10.6196 15.253 10.7146 16.9808 12 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="paren2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.3px 16px' }" />
            <motion.path d="M14.2891 13.9992C15.093 13.9692 15.5515 14.064 15.8227 14.5459C16.1515 15.216 16.9785 17.0679 17.1835 17.472C17.3073 17.6489 17.4715 17.904 17.9995 17.9875L18.7099 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 16px' }" />
            <motion.path d="M19.0025 14C17.8793 14 17.0873 15.288 16.5593 15.936C15.7913 16.944 14.927 18.05 13.9961 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 16px' }" />
          </svg>
        </div>
</template>
