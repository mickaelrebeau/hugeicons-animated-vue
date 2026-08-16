<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TestTube03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-check: the result resolves into a check and lands
// generated from @hugeicons/core-free-icons
const markVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    visibility: 'visible',
  },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.87,
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.34px) rotate(0.78deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.79,
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
      times: [0, 0.78, 0.9, 1],
    },
  },
}

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
            <motion.path d="M7.99988 2.00079H15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M5.53308 11.1509C5.53308 11.1509 8.53308 10.225 11.0331 13.0025M18.5331 11.6138C18.5331 11.6138 17.9215 12.593 17.0331 13.0027" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.03px 11.61px' }" />
            <motion.path d="M9.52681 2.00085V6.25825C9.52681 6.92021 9.17507 7.49098 8.59392 7.80244C5.60873 9.40225 2.80483 13.9348 5.74597 18.5801C6.40428 19.7196 8.57672 21.9987 12 21.9987C15.4232 21.9987 17.5956 19.7196 18.2539 18.5801C21.1951 13.9348 18.3912 9.40225 15.406 7.80243C14.8248 7.49098 14.4724 6.92021 14.4724 6.25825V2.00085" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.1249 14.0008H13.9999M14.2499 14.0008C14.2499 14.1389 14.1379 14.2508 13.9999 14.2508C13.8618 14.2508 13.7499 14.1389 13.7499 14.0008C13.7499 13.8627 13.8618 13.7508 13.9999 13.7508C14.1379 13.7508 14.2499 13.8627 14.2499 14.0008Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 14px' }" />
            <motion.path d="M10.1249 18.0008H9.99988M10.2499 18.0008C10.2499 18.1389 10.1379 18.2508 9.99988 18.2508C9.86181 18.2508 9.74988 18.1389 9.74988 18.0008C9.74988 17.8627 9.86181 17.7508 9.99988 17.7508C10.1379 17.7508 10.2499 17.8627 10.2499 18.0008Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 18px' }" />
          </svg>
        </div>
</template>
