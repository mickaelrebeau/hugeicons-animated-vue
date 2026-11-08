<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlimSlateIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clapper snaps shut on the slate
// authored from scripts/authored
const slateVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const clapperVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.74px, 1.72px) rotate(12deg)',
      'translate(-0.16px, -0.27px) rotate(-2deg)',
      'translate(0.05px, 0.08px) rotate(0.6deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.5,
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

const clapper2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.63px, 1.01px) rotate(12deg)',
      'translate(-0.12px, -0.15px) rotate(-2deg)',
      'translate(0.04px, 0.05px) rotate(0.6deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.5,
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

const clapper3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.89px, 2.51px) rotate(12deg)',
      'translate(-0.20px, -0.40px) rotate(-2deg)',
      'translate(0.06px, 0.12px) rotate(0.6deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.5,
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
            <motion.path d="M3.5 10.5H17.9118C19.3676 10.5 20.0955 10.5 20.5477 10.9393C21 11.3787 21 12.0858 21 13.5V15C21 18.2998 21 19.9497 19.9447 20.9749C18.8894 22 17.191 22 13.7941 22H10.7059C7.309 22 5.61055 22 4.55528 20.9749C3.5 19.9497 3.5 18.2998 3.5 15V10.5Z" stroke="currentColor" stroke-width="1.5" :variants="slateVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 16.3px' }" />
            <motion.path d="M3.49827 10.5C3.14118 9.14207 2.96264 8.46311 3.00654 7.86611C3.08518 6.79682 3.63742 5.82221 4.50691 5.21816C4.99236 4.88092 5.6587 4.69899 6.99138 4.33514L14.7321 2.22172C15.0767 2.12763 15.2491 2.08058 15.3977 2.05386C17.0504 1.75694 18.6737 2.71192 19.2477 4.31874C19.2993 4.4633 19.3455 4.63888 19.4378 4.99006C19.4642 5.09039 19.4774 5.14056 19.4849 5.18385C19.5682 5.66498 19.3004 6.13757 18.8498 6.30467C18.8093 6.3197 18.7601 6.33314 18.6616 6.36003L3.49827 10.5Z" stroke="currentColor" stroke-width="1.5" :variants="clapperVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.3px 6.1px' }" />
            <motion.path d="M7 10L9 4" stroke="currentColor" stroke-width="1.5" :variants="clapper2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 7px' }" />
            <motion.path d="M14 8L16 2" stroke="currentColor" stroke-width="1.5" :variants="clapper3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 5px' }" />
            <path d="M8 18H11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
