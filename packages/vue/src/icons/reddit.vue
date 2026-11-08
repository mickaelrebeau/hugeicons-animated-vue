<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RedditIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the antenna wobbles and the eyes blink
// authored from scripts/authored
const antennaVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.94px, 1.34px) rotate(14deg)',
      'translate(-0.84px, -0.79px) rotate(-9.799999999999999deg)',
      'translate(0.32px, 0.38px) rotate(4.2deg)',
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

const antenna2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.48px, 0.50px) rotate(14deg)',
      'translate(-0.40px, -0.27px) rotate(-9.799999999999999deg)',
      'translate(0.16px, 0.14px) rotate(4.2deg)',
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

const eyeVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1, 1, 1, 1],
    transition: { duration: 0.6, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M15 17C14.1556 17.6293 13.1196 18 12 18C10.8804 18 9.84437 17.6293 8.99998 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18.5 4.5C18.5 5.32843 17.8284 6 17 6C16.1716 6 15.5 5.32843 15.5 4.5C15.5 3.67157 16.1716 3 17 3C17.8284 3 18.5 3.67157 18.5 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="antennaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 4.5px' }" />
            <motion.path d="M15.5 4.5C14.3333 4.66667 12 5.8 12 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="antenna2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.8px 6.8px' }" />
            <path d="M12 21C16.4183 21 20 18.3137 20 15C20 14.6482 19.9573 14.304 19.8799 13.9688C21.0801 13.7856 22 12.7514 22 11.5C22 10.1193 20.8807 9 19.5 9C18.4903 9 17.6221 9.59932 17.2275 10.4609C15.8253 9.55191 13.9989 9 12 9C10.0007 9 8.17381 9.55164 6.77147 10.4609C6.37678 9.59952 5.50951 9 4.49998 9C3.11927 9 1.99998 10.1193 1.99998 11.5C1.99998 12.7511 2.91935 13.7852 4.11913 13.9688C4.04169 14.3039 3.99998 14.6483 3.99998 15C3.99998 18.3137 7.58171 21 12 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.25 13H15M15.5 13C15.5 13.2761 15.2761 13.5 15 13.5C14.7238 13.5 14.5 13.2761 14.5 13C14.5 12.7239 14.7238 12.5 15 12.5C15.2761 12.5 15.5 12.7239 15.5 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.74998 13H9.49998M9.99998 13C9.99998 13.2761 9.77612 13.5 9.49998 13.5C9.22384 13.5 8.99998 13.2761 8.99998 13C8.99998 12.7239 9.22384 12.5 9.49998 12.5C9.77612 12.5 9.99998 12.7239 9.99998 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
