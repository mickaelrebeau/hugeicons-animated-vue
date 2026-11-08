<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CameraOff02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash cuts across, the lens collapses and the side light fades
// authored from scripts/authored
const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0, 0, 1],
    transition: { duration: 0.72, times: [0, 0.2, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const slashVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const lensVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-30deg) scale(0.72)', 'rotate(0deg) scale(1)'],
    opacity: [1, 0.45, 1],
    transition: {
      duration: 0.72,
      delay: 0.1,
      times: [0, 0.4, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M5 9H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.4889 16.4889C15.9102 16.8144 15.2423 17 14.531 17C12.3219 17 10.531 15.2091 10.531 13C10.531 12.2887 10.7167 11.6208 11.0421 11.0421M13.2199 9.21983C13.6306 9.07739 14.0718 9 14.531 9C16.7401 9 18.531 10.7909 18.531 13C18.531 13.4592 18.4536 13.9004 18.3112 14.3111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lensVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 13px' }" />
            <path d="M20.5 20.4983H8C5.17157 20.4983 3.75736 20.4983 2.87868 19.6196C2 18.7409 2 17.3267 2 14.4983V11.9983C2 9.16987 2 7.75566 2.87868 6.87698C3.51998 6.23568 4.44655 6.06243 6 6.01562" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M22 18V8.02617C22 6.90715 21.0929 6 19.9738 6C19.3583 6 18.7762 5.72021 18.3917 5.23957L17.8 4.5C17.6049 4.25611 17.5073 4.13416 17.3979 4.03281C17.1031 3.75969 16.7328 3.58172 16.3354 3.52212C16.1879 3.5 16.0317 3.5 15.7194 3.5H13.9225C12.9779 3.5 12.5056 3.5 12.0949 3.69739C11.6842 3.89479 11.3891 4.2636 10.799 5.00122L10 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
