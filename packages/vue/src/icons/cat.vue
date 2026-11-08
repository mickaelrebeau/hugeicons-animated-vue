<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CatIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cat blinks slowly, cocks its head and twitches its whiskers
// authored from scripts/authored
const eyeVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(0.1)', 'scaleY(1)', 'scaleY(1)'],
    transition: { duration: 0.8, times: [0, 0.2, 0.42, 0.6, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const noseVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.36,
      delay: 0.4,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const headVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-7deg)', 'rotate(-7deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.8,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const whiskersVariants: Variants = {
  normal: { transform: 'scaleX(0.8)', opacity: 0 },
  animate: {
    transform: ['scaleX(0.8)', 'scaleX(0.8)', 'scaleX(1.06)', 'scaleX(0.96)', 'scaleX(1.06)', 'scaleX(0.8)'],
    opacity: [0, 0, 1, 1, 1, 0],
    transition: { duration: 0.9, times: [0, 0.3, 0.46, 0.6, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M8 11.0059V11.5059" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 11.3px' }" />
            <motion.path d="M16 11.0059V11.5059" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 11.3px' }" />
            <motion.path d="M11 15.0039H13L12 16.0039L11 15.0039Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="noseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
            <motion.path d="M12 21C7.02944 21 3 17.4204 3 13.0048C3 12.0531 3.18719 11.1402 3.53066 10.2936C3.73678 9.78553 3.83984 9.5315 3.85136 9.37485C3.86289 9.2182 3.79135 8.92393 3.64826 8.3354L3.64826 8.33539C3.48638 7.66957 3.4236 6.9388 3.42029 6.21803C3.41215 4.45075 3.40808 3.56711 4.21032 3.14258C5.01255 2.71805 5.82239 3.27349 7.44206 4.38436C7.57926 4.47847 7.71208 4.56999 7.83857 4.65769L7.83858 4.65769C8.41215 5.05532 8.69893 5.25414 8.88778 5.29711C9.07663 5.34007 9.51313 5.27022 10.3861 5.13051L10.3861 5.13051C10.8215 5.06083 11.3595 5.00958 12 5.00958C12.6405 5.00958 13.1785 5.06083 13.6139 5.13051L13.6139 5.13051C14.4869 5.27022 14.9234 5.34007 15.1122 5.29711C15.3011 5.25414 15.5878 5.05533 16.1614 4.6577L16.1614 4.65769C16.2879 4.56999 16.4207 4.47847 16.5579 4.38436C18.1776 3.27349 18.9874 2.71805 19.7897 3.14258C20.5919 3.56711 20.5878 4.45075 20.5797 6.21803C20.5764 6.9388 20.5136 7.66957 20.3517 8.33539C20.2087 8.92393 20.1371 9.2182 20.1486 9.37485C20.1602 9.5315 20.2632 9.78553 20.4693 10.2936C20.8128 11.1402 21 12.0531 21 13.0048C21 17.4204 16.9706 21 12 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.9px' }" />
            <motion.path d="M4.6 14.6L8 15.3M4.8 17L8 16.4M19.4 14.6L16 15.3M19.2 17L16 16.4" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="whiskersVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.8px' }" />
          </svg>
        </div>
</template>
