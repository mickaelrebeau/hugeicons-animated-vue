<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailValidation01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flap folds down and the seal stamps
// authored from scripts/authored
const flapVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.56,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sealVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.2, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M6.91211 6.83789L9.85413 8.57732C11.5693 9.59141 12.2549 9.59141 13.9701 8.57732L16.9121 6.83789" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M14.9121 17.3379C14.9121 17.3379 15.4121 17.3379 15.9121 18.3379C15.9121 18.3379 17.5003 15.8379 18.9121 15.3379" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M22 10.3118L21.9589 6.43829C21.9478 4.96285 21.1512 2.01198 18.0539 2.01198H6.10527C4.73685 1.91134 2 2.34718 2 7.1423V14.2514C2.00001 15.472 2.27229 17.115 3.61079 18.1055C4.47577 18.7456 5.61117 18.8049 6.68416 18.858L8.93115 18.9692" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21.9809 16.9588C21.9809 19.7427 19.7346 21.9995 16.9636 21.9995C14.1926 21.9995 11.9463 19.7427 11.9463 16.9588C11.9463 14.1748 14.1926 11.918 16.9636 11.918C19.7346 11.918 21.9809 14.1748 21.9809 16.9588Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sealVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 17px' }" />
          </svg>
        </div>
</template>
