<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwipeLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand swipes left trailing speed lines and the arrow leads
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.2px, 0px)',
      'translate(0.144px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.08,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.6px, 0px)',
      'translate(0.24px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
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

const trailVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(0px)',
      'translateX(0.5599999999999999px)',
      'translateX(1.4px)',
      'translateX(1.4px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.2, 0.46, 0.86, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
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
            <motion.path d="M15.0039 4.49902H21.0029M15.0039 4.49902C15.0039 3.79906 16.9979 2.49134 17.5035 2M15.0039 4.49902C15.0039 5.19898 16.9979 6.5067 17.5035 6.99804" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 4.5px' }" />
            <motion.path d="M16.8899 21.9882C16.8382 20.0749 16.9671 19.8446 17.1038 19.419C17.2405 18.9933 18.1967 17.4585 18.535 16.3619C19.6295 12.814 18.6094 12.0594 17.2493 11.0533C15.741 9.93751 12.8962 9.37244 11.4853 9.49477V3.74357C11.4853 2.78062 10.7045 2 9.74133 2C8.77816 2 7.99736 2.78062 7.99736 3.74357V14.0031L5.93753 11.8236C5.29802 11.1302 4.27027 11.0599 3.56885 11.6907C2.90415 12.2885 2.80714 13.2952 3.34548 14.0089L4.63762 15.7218M7.86803 22L7.8485 20.9496C7.89144 19.7183 6.99559 18.9149 5.8272 17.3087C5.74302 17.193 5.66111 17.0811 5.58135 16.9729M5.58135 16.9729C5.22735 16.4924 4.91587 16.0831 4.63762 15.7218M5.58135 16.9729L6.75058 18.5229M5.58135 16.9729L4.63762 15.7218M4.63762 15.7218C4.06634 14.9801 3.63509 14.441 3.26331 13.9055" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.2px 12px' }" />
            <motion.path d="M22 13H20.5M22 16H21" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="trailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
