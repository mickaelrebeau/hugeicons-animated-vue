<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UsbConnected01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plug pushes down into the port and the tick pops
// authored from scripts/authored
const plugVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1px)',
      'translate(0px, -0.2px)',
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

const cableVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.50px) scaleY(0.8)',
      'translate(0px, -0.10px) scaleY(1.04)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: { duration: 0.62, times: [0, 0.18, 0.46, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tickVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
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
            <motion.path d="M10.9838 16.5H9.01625C7.99228 16.5 7.03617 15.9979 6.46881 15.1622L5.86803 14.2773C4.89885 12.8498 4.32041 11.2019 4.18827 9.49197L4.00446 7.11331C3.93719 6.24273 4.63957 5.5 5.53014 5.5H14.4699C15.3604 5.5 16.0628 6.24273 15.9955 7.11331L15.927 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plugVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 11px' }" />
            <motion.path d="M13.5 6V5.5C13.5 4.09554 13.5 3.39331 13.1629 2.88886C13.017 2.67048 12.8295 2.48298 12.6111 2.33706C12.1067 2 11.4045 2 10 2C8.59554 2 7.89331 2 7.38886 2.33706C7.17048 2.48298 6.98298 2.67048 6.83706 2.88886C6.5 3.39331 6.5 4.09554 6.5 5.5V6" stroke="currentColor" stroke-width="1.5" :variants="plugVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 4px' }" />
            <motion.path d="M10 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cableVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 19.5px' }" />
            <motion.path d="M9 8.5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plugVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 8.5px' }" />
            <motion.path d="M12 13.5C12 13.5 13 13.5 14 15.5C14 15.5 17.1765 10.5 20 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12.5px' }" />
          </svg>
        </div>
</template>
