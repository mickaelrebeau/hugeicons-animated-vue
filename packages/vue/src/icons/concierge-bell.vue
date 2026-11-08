<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ConciergeBellIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bell button is pressed and the bell rings out
// authored from scripts/authored
const domeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.16, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const buttonVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1px)',
      'translate(0px, -0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.4,
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

const burstVariants: Variants = {
  normal: { transform: 'scale(0.4)', opacity: 0 },
  animate: {
    transform: ['scale(0.4)', 'scale(0.4)', 'scale(1)', 'scale(1.22)'],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.7,
      delay: 0.04,
      times: [0, 0.3, 0.46, 1],
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
            <path d="M3.5 20.5H20.5C20.9659 20.5 21.1989 20.5 21.3827 20.4239C21.6277 20.3224 21.8224 20.1277 21.9239 19.8827C22 19.6989 22 19.4659 22 19C22 18.5341 22 18.3011 21.9239 18.1173C21.8224 17.8723 21.6277 17.6776 21.3827 17.5761C21.1989 17.5 20.9659 17.5 20.5 17.5H3.5C3.03406 17.5 2.80109 17.5 2.61732 17.5761C2.37229 17.6776 2.17761 17.8723 2.07612 18.1173C2 18.3011 2 18.5341 2 19C2 19.4659 2 19.6989 2.07612 19.8827C2.17761 20.1277 2.37229 20.3224 2.61732 20.4239C2.80109 20.5 3.03406 20.5 3.5 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20 14.5C20 10.0817 16.4183 6.5 12 6.5C7.58172 6.5 4 10.0817 4 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="domeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
            <motion.path d="M12 3.50195V6.50195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="buttonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <motion.path d="M10 3.50195L14 3.50158" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="buttonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <motion.path d="M9.8 3.5L8.6 3.5M10.9 1.59L10.3 0.56M13.1 1.59L13.7 0.56M14.2 3.5L15.4 3.5M13.1 5.41L13.7 6.44M10.9 5.41L10.3 6.44" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="burstVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
