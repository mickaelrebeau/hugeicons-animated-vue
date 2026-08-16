<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiMailIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the letter slides up out of the envelope, its lettering arriving with it
// authored from scripts/authored
const flapVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.88)', 'scaleY(1)'],
    transition: { duration: 0.54, delay: 0.1, times: [0, 0.36, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-2.4px)', 'translateY(0.2px)', 'translateY(0px)'],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const letteringVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'translateY(0px) scale(1)',
      'translateY(-2.4px) scale(0.9)',
      'translateY(0.2px) scale(1.04)',
      'translateY(0px) scale(1)',
    ],
    opacity: [1, 0.55, 1, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.23, 1, 0.32, 1],
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
            <path d="M5.00035 7L3.78154 7.81253C2.90783 8.39501 2.47097 8.68625 2.23422 9.13041C1.99747 9.57457 1.99923 10.0966 2.00273 11.1406C2.00696 12.3975 2.01864 13.6782 2.05099 14.9741C2.12773 18.0487 2.16611 19.586 3.29651 20.7164C4.42691 21.8469 5.98497 21.8858 9.10108 21.9637C11.0397 22.0121 12.9611 22.0121 14.8996 21.9637C18.0158 21.8858 19.5738 21.8469 20.7042 20.7164C21.8346 19.586 21.873 18.0487 21.9497 14.9741C21.9821 13.6782 21.9937 12.3975 21.998 11.1406C22.0015 10.0966 22.0032 9.57456 21.7665 9.13041C21.5297 8.68625 21.0929 8.39501 20.2191 7.81253L19.0003 7" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 10L8.91302 14.1478C10.417 15.0502 11.169 15.5014 12 15.5014C12.831 15.5014 13.583 15.0502 15.087 14.1478L22 10" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="flapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M4.99998 12V6C4.99998 4.11438 4.99998 3.17157 5.58577 2.58579C6.17156 2 7.11437 2 8.99998 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V12" stroke="currentColor" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 10L9.61165 5.39528C9.69427 5.15922 9.92623 5 10.1875 5C10.4488 5 10.6807 5.15922 10.7633 5.39528L12.375 10M15 5V10M8.875 8.33333H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letteringVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 7.5px' }" />
          </svg>
        </div>
</template>
