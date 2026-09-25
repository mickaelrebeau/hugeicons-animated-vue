<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Bug02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the legs splay and the shell crouches, unlike the crawling bug-01
// authored from scripts/authored
const legVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.2px, -0.8px)',
      'translate(0.144px, 0.096px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leg2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, -0.8px)',
      'translate(-0.144px, 0.096px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leg3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, 0.6px)',
      'translate(-0.144px, -0.072px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leg4Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.2px, 0.6px)',
      'translate(0.144px, -0.072px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shellVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.94)', 'scale(0.94)', 'scale(1)'],
    transition: {
      duration: 0.6,
      times: [0, 0.26, 0.72, 1],
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
            <motion.path d="M3.01206 6.59744C2.89214 7.65674 3.6584 10.1951 5.87693 10.255" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="legVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.4px 8.4px' }" />
            <motion.path d="M18.2891 10.195C19.3684 10.255 20.9873 8.99582 20.9873 6.59741" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="leg2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.6px 8.4px' }" />
            <motion.path d="M20.0876 20.9879C20.1476 19.6088 19.2482 17.4742 17.5093 17.4142" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="leg3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.8px 19.2px' }" />
            <motion.path d="M3.90138 20.9881C3.84009 19.5998 4.7594 17.4509 6.53675 17.3905" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="leg4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.2px 19.2px' }" />
            <path d="M3.01227 13.7926H5.21757" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M21 13.7926L18.8282 13.7926" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M11.9932 13.7926V10.8546M16.4902 2.99982L14.6914 4.79862M7.49615 2.99982L9.29496 4.79862" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6.95612 8.61209C8.57504 9.77532 12.5924 11.4542 16.9695 8.68404" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M16.826 7.6767C13.2523 2.7 8.69536 5.09841 7.07644 7.8206C6.02093 9.59542 4.37823 13.8886 7.49616 18.5655C10.8539 22.6667 14.8113 20.808 16.4302 18.6494C17.9892 16.7906 19.5242 11.9938 16.826 7.6767Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.7px' }" />
          </svg>
        </div>
</template>
