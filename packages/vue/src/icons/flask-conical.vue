<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlaskConicalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flask swirls and the liquid sloshes
// authored from scripts/authored
const flaskVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.05px, -0.05px) rotate(6deg)',
      'translate(0.70px, -0.02px) rotate(-4deg)',
      'translate(-0.26px, -0.00px) rotate(1.5deg)',
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

const liquidVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0px)',
      'translate(0.6px, 0px)',
      'translate(-0.2px, 0px)',
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

const bubbleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, -2.5px) scale(1)',
      'translate(0px, -5px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      times: [0, 0.16, 0.42, 1],
      ease: [
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
            <motion.path d="M14.4725 2V7.86783C14.4725 8.43028 14.4725 8.71151 14.5473 8.9786C14.6221 9.2457 14.7679 9.48521 15.0594 9.96422L18.6743 15.9036C20.3166 18.602 21.1377 19.9512 20.5716 20.9756C20.0054 22 18.4386 22 15.305 22H8.69496C5.56136 22 3.99455 22 3.42841 20.9756C2.86227 19.9512 3.68343 18.602 5.32575 15.9036L8.94061 9.96422C9.23215 9.48521 9.37792 9.2457 9.45269 8.9786C9.52746 8.71151 9.52746 8.43028 9.52746 7.86783V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flaskVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M8 2H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19 16.7232C18.4694 16.8939 17.8143 17 17 17C14 17 11 14 8 14C7.65244 14 7.31998 14.0181 7 14.0512" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="liquidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 15.5px' }" />
            <motion.circle cx="11" cy="18" r="0.5" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
