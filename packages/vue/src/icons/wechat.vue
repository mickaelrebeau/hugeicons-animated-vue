<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WechatIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the front bubble hops and the eyes blink
// authored from scripts/authored
const eyeVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const eye2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.5, delay: 0.24, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const hopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.9px)',
      'translate(0px, 0.12600000000000003px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
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
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M7.375 7H7.25M7.5 7C7.5 7.13807 7.38807 7.25 7.25 7.25C7.11193 7.25 7 7.13807 7 7C7 6.86193 7.11193 6.75 7.25 6.75C7.38807 6.75 7.5 6.86193 7.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.875 7H12.75M13 7C13 7.13807 12.8881 7.25 12.75 7.25C12.6119 7.25 12.5 7.13807 12.5 7C12.5 6.86193 12.6119 6.75 12.75 6.75C12.8881 6.75 13 6.86193 13 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.875 15H13.75M18.375 15H18.25M14 15C14 15.1381 13.8881 15.25 13.75 15.25C13.6119 15.25 13.5 15.1381 13.5 15C13.5 14.8619 13.6119 14.75 13.75 14.75C13.8881 14.75 14 14.8619 14 15ZM18.5 15C18.5 15.1381 18.3881 15.25 18.25 15.25C18.1119 15.25 18 15.1381 18 15C18 14.8619 18.1119 14.75 18.25 14.75C18.3881 14.75 18.5 14.8619 18.5 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eye2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10 16C10 18.7614 12.6863 21 16 21C16.9072 21 17.7673 20.8322 18.5382 20.5319C18.7266 20.4585 18.9312 20.4321 19.13 20.4689L22 21L21.3483 18.9702C21.2531 18.6738 21.3075 18.3533 21.4575 18.0805C21.8058 17.447 22 16.7424 22 16C22 13.2386 19.3137 11 16 11C12.6863 11 10 13.2386 10 16Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 16px' }" />
            <motion.path d="M17.8731 11.2485C17.9565 10.8434 18 10.4261 18 10C18 6.13401 14.4183 3 10 3C5.58172 3 2 6.13401 2 10C2 11.1124 2.29653 12.1641 2.8242 13.0981C2.97102 13.358 3.01971 13.6653 2.93243 13.9507L2 17L5.91414 16.2394C6.12183 16.199 6.33621 16.2273 6.53119 16.3094C7.61561 16.7662 8.84138 17.0157 10.1198 16.9992" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 10px' }" />
          </svg>
        </div>
</template>
