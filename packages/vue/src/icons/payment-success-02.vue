<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PaymentSuccess02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-check: the confirmation stroke writes from tail to tip and lands once
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
      duration: 0.86,
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
            <motion.path d="M14.4998 11C14.4998 12.3807 13.3805 13.5 11.9998 13.5C10.619 13.5 9.49976 12.3807 9.49976 11C9.49976 9.61929 10.619 8.5 11.9998 8.5C13.3805 8.5 14.4998 9.61929 14.4998 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M22 11V5.92705C22 5.35889 21.6756 4.84452 21.1329 4.67632C20.1903 4.38421 18.4794 4 16 4C11.4209 4 10.1967 5.67747 3.87798 4.42361C2.92079 4.23366 2 4.94531 2 5.92116V15.9382C2 16.6265 2.47265 17.231 3.1448 17.3792C7.02975 18.2359 9.10222 18.0529 11 17.7236" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.12px' }" />
            <motion.path d="M2 8C3.95133 8 5.70483 6.40507 5.92901 4.75417M18.5005 4.5C18.5005 6.53964 20.2655 8.46899 22 8.46899M6.00049 17.4961C6.00049 15.287 4.20963 13.4961 2.00049 13.4961" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M14 18C14 18 15 18 16 20C16 20 19.1765 15 22 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17px' }" />
          </svg>
        </div>
</template>
