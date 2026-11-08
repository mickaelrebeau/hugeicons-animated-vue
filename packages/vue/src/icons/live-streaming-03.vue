<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LiveStreaming03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the camera records: the lens pulses and the side shutter flaps
// authored from scripts/authored
const shutterVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-1.00px, 0px) scaleX(0.6)',
      'translate(0.20px, 0px) scaleX(1.08)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
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

const lensVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.6)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M15.5376 18.592C14.4312 19.5 12.7875 19.5 9.5 19.5C6.21252 19.5 4.56878 19.5 3.46243 18.592C3.25989 18.4258 3.07418 18.2401 2.90796 18.0376C2 16.9312 2 15.2875 2 12C2 8.71252 2 7.06878 2.90796 5.96243C3.07418 5.75989 3.25989 5.57418 3.46243 5.40796C4.56878 4.5 6.21252 4.5 9.5 4.5C12.7875 4.5 14.4312 4.5 15.5376 5.40796C15.7401 5.57418 15.9258 5.75989 16.092 5.96243C17 7.06878 17 8.71252 17 12C17 15.2875 17 16.9312 16.092 18.0376C15.9258 18.2401 15.7401 18.4258 15.5376 18.592Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17 13V11L19.6 7.53333C19.8518 7.19759 20.247 7 20.6667 7C21.403 7 22 7.59695 22 8.33333V15.6667C22 16.403 21.403 17 20.6667 17C20.247 17 19.8518 16.8024 19.6 16.4667L17 13Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="shutterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 12px' }" />
            <motion.path d="M9.5 13.5C10.3284 13.5 11 12.8284 11 12C11 11.1716 10.3284 10.5 9.5 10.5M9.5 13.5C8.67157 13.5 8 12.8284 8 12C8 11.1716 8.67157 10.5 9.5 10.5M9.5 13.5V10.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="lensVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 12px' }" />
          </svg>
        </div>
</template>
