<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Forward02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two triangles fast-forward one after the other
// authored from scripts/authored
const triangleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.24px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.08,
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

const triangle2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.24px, 0px)',
      'translate(0px, 0px)',
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

const trailVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(0px)',
      'translateX(-0.5599999999999999px)',
      'translateX(-1.4px)',
      'translateX(-1.4px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.2, 0.46, 0.86, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M21.8371 12.9178C21.5547 13.6884 20.7014 14.3047 18.9948 15.5372C16.6677 17.218 15.5041 18.0583 14.5312 17.9969C13.7882 17.9499 13.0976 17.6007 12.6223 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 12.6223 6.96846C13.0976 6.39933 13.7882 6.0501 14.5312 6.00315C15.5041 5.94167 16.6677 6.78203 18.9948 8.46275C20.7014 9.6953 21.5547 10.3116 21.8371 11.0822C22.0543 11.675 22.0543 12.325 21.8371 12.9178Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="triangleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
            <motion.path d="M11.8371 12.9178C11.5547 13.6884 10.7014 14.3047 8.99482 15.5372C6.66769 17.218 5.50413 18.0583 4.5312 17.9969C3.78818 17.9499 3.09758 17.6007 2.62232 17.0315C2 16.2863 2 14.8575 2 12C2 9.14246 2 7.71369 2.62232 6.96846C3.09758 6.39933 3.78818 6.0501 4.5312 6.00315C5.50413 5.94167 6.66769 6.78203 8.99482 8.46275C10.7014 9.6953 11.5547 10.3116 11.8371 11.0822C12.0543 11.675 12.0543 12.325 11.8371 12.9178Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="triangle2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M1 9H3M1 15H3" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="trailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
