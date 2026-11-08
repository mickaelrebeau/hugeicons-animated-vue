<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorEdit02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the handles hop in turn while the pointer clicks
// authored from scripts/authored
const pointerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scale(1)',
      'translate(-0.7px, -0.7px) scale(0.92)',
      'translate(0.1px, 0.1px) scale(1.02)',
      'translate(0px, 0px) scale(1)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.3, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const hopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const hop2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.16,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const hop3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.08,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M12.791 8.76757L17.4838 10.6039C20.1905 11.663 21.5438 12.1926 21.4989 13.0326C21.454 13.8726 20.0417 14.2578 17.217 15.0282C16.3759 15.2576 15.9554 15.3722 15.6638 15.6638C15.3722 15.9554 15.2576 16.3759 15.0282 17.217C14.2578 20.0417 13.8726 21.454 13.0326 21.4989C12.1926 21.5438 11.663 20.1905 10.6039 17.4838L8.76757 12.791C7.6587 9.95727 7.10427 8.54038 7.82233 7.82233C8.54038 7.10427 9.95727 7.6587 12.791 8.76757Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="pointerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.3px 14.3px' }" />
            <motion.path d="M4.5 2.5H3.5C2.94772 2.5 2.5 2.94772 2.5 3.5V4.5C2.5 5.05228 2.94772 5.5 3.5 5.5H4.5C5.05228 5.5 5.5 5.05228 5.5 4.5V3.5C5.5 2.94772 5.05228 2.5 4.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 4px' }" />
            <motion.path d="M4.5 13.5H3.5C2.94772 13.5 2.5 13.9477 2.5 14.5V15.5C2.5 16.0523 2.94772 16.5 3.5 16.5H4.5C5.05228 16.5 5.5 16.0523 5.5 15.5V14.5C5.5 13.9477 5.05228 13.5 4.5 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hop2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 15px' }" />
            <motion.path d="M15.5 2.5H14.5C13.9477 2.5 13.5 2.94772 13.5 3.5V4.5C13.5 5.05228 13.9477 5.5 14.5 5.5H15.5C16.0523 5.5 16.5 5.05228 16.5 4.5V3.5C16.5 2.94772 16.0523 2.5 15.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hop3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 4px' }" />
            <path d="M13.5 4H5.5M4 5.5V13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
