<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SelfTransferIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the walker strides forward, head bobbing
// authored from scripts/authored
const legVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.54px, -0.19px) rotate(10deg)',
      'translate(0.40px, 0.07px) rotate(-7deg)',
      'translate(-0.17px, -0.05px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, 0px)',
      'translate(-0.09px, 0px)',
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

const leg2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.35px, -0.35px) rotate(-10deg)',
      'translate(-0.28px, 0.20px) rotate(7deg)',
      'translate(0.11px, -0.10px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
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
            <motion.path d="M9 14.998L5 21.498M7.87727 16.5656L6.40433 15.6455C5.94859 15.3608 5.3499 15.5008 5.06561 15.9586L3.64806 18.2413C3.3688 18.691 3.49579 19.2827 3.93458 19.5763L5.50721 20.6285" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="legVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.2px 18.2px' }" />
            <motion.path d="M10.0001 12.998L11.6709 9.65641C12.1791 8.64006 13.2179 7.99805 14.3542 7.99805H14.8946C15.8976 7.99805 16.8343 8.49935 17.3907 9.33395L18.5001 10.998L20.5001 12.498M16.0001 8.49805V13.867C16.0001 13.954 16.0115 14.0406 16.0339 14.1247L18.0001 21.498L13.504 14.7538C13.1754 14.261 13.0001 13.682 13.0001 13.0897V8.49805" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.3px 14.7px' }" />
            <motion.path d="M14.5 16.9531L12 21.5L15.5 17.4994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leg2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.8px 19.2px' }" />
            <motion.path d="M14.5 5.49805C15.3284 5.49805 16 4.82647 16 3.99805C16 3.16962 15.3284 2.49805 14.5 2.49805C13.6716 2.49805 13 3.16962 13 3.99805C13 4.82647 13.6716 5.49805 14.5 5.49805Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 4px' }" />
          </svg>
        </div>
</template>
