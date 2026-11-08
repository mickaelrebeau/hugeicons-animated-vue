<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MortarIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pestle grinds in the bowl
// authored from scripts/authored
const bowlVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const pestleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 1.6px)',
      'translate(0.6px, 2.2px)',
      'translate(1.6px, 1.6px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <motion.path d="M4.96256 12H19.0374C20.0144 12 20.5028 12 20.8047 12.3753C21.1065 12.7506 21.0135 13.1617 20.8276 13.984C20.2864 16.3763 18.7876 18.408 16.7527 19.6599C16.3614 19.9006 16.1944 20.3975 16.4056 20.8042C16.689 21.3497 16.2909 22 15.6735 22H8.32647C7.70915 22 7.31104 21.3497 7.5944 20.8042C7.80561 20.3975 7.63863 19.9006 7.24729 19.6599C5.21237 18.408 3.71356 16.3763 3.17245 13.984C2.98645 13.1617 2.89345 12.7506 3.1953 12.3753C3.49715 12 3.98562 12 4.96256 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bowlVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <path d="M17.4588 12L19.0095 8.28104C19.1841 7.86217 19.6148 7.65205 20.047 7.57994C20.4208 7.51758 20.7187 7.3415 20.8785 7.05278C21.2753 6.33534 20.6683 5.1941 19.5226 4.50374C18.3769 3.81338 17.1264 3.83534 16.7295 4.55278C16.5698 4.8415 16.5726 5.19885 16.7078 5.56783C16.864 5.99454 16.905 6.48886 16.6448 6.85615L13 12" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M6.50185 5.50185L10 9M8.60074 3.40297C10.1463 4.94854 9.75993 6.44156 8.60074 7.60074C7.44156 8.75993 5.94854 9.14632 4.40297 7.60074C2.85739 6.05516 3.00371 2.00371 3.00371 2.00371C3.00371 2.00371 7.05516 1.85739 8.60074 3.40297Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pestleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 5.5px' }" />
          </svg>
        </div>
</template>
