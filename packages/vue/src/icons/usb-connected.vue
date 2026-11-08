<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UsbConnectedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tick writes in and the plug answers
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.24, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tickVariants: Variants = {
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
            <motion.path d="M10.9838 16.5H9.01625C7.99228 16.5 7.03617 15.9979 6.46881 15.1622L5.86803 14.2773C4.89885 12.8498 4.32041 11.2019 4.18827 9.49197L4.00446 7.11331C3.93719 6.24273 4.63957 5.5 5.53014 5.5H14.4699C15.3604 5.5 16.0628 6.24273 15.9955 7.11331L15.927 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 11px' }" />
            <path d="M13.5 6V5.5C13.5 4.09554 13.5 3.39331 13.1629 2.88886C13.017 2.67048 12.8295 2.48298 12.6111 2.33706C12.1067 2 11.4045 2 10 2C8.59554 2 7.89331 2 7.38886 2.33706C7.17048 2.48298 6.98298 2.67048 6.83706 2.88886C6.5 3.39331 6.5 4.09554 6.5 5.5V6" stroke="currentColor" stroke-width="1.5" />
            <path d="M10 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9 8.5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 13.5C12 13.5 13 13.5 14 15.5C14 15.5 17.1765 10.5 20 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
