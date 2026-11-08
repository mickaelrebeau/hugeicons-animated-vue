<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MagicWand05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wand swings and its sparkles twinkle
// authored from scripts/authored
const wandVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.34px, -1.16px) rotate(-8deg)',
      'translate(0.61px, 0.65px) rotate(4deg)',
      'translate(-0.16px, -0.16px) rotate(-1deg)',
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

const sparkleVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.14,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sparkle2Variants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.24,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M14.1972 7.30833L3.51662 17.9889C2.82779 18.6777 2.82779 19.7946 3.51662 20.4834C4.20545 21.1722 5.32225 21.1722 6.01108 20.4834L16.6917 9.80279L18.4834 8.01108C19.1722 7.32225 19.1722 6.20545 18.4834 5.51662C17.7946 4.82779 16.6777 4.82779 15.9889 5.51662L14.1972 7.30833ZM16.6917 9.80279L14.1972 7.30833" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="wandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.9737 14.0215C17.9795 13.9928 18.0205 13.9928 18.0263 14.0215C18.3302 15.5081 19.4919 16.6698 20.9785 16.9737C21.0072 16.9795 21.0072 17.0205 20.9785 17.0263C19.4919 17.3302 18.3302 18.4919 18.0263 19.9785C18.0205 20.0072 17.9795 20.0072 17.9737 19.9785C17.6698 18.4919 16.5081 17.3302 15.0215 17.0263C14.9928 17.0205 14.9928 16.9795 15.0215 16.9737C16.5081 16.6698 17.6698 15.5081 17.9737 14.0215Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="sparkleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17px' }" />
            <motion.path d="M8.12063 3.30967C8.20503 2.89678 8.79497 2.89678 8.87937 3.30967C9.06576 4.22159 9.77841 4.93424 10.6903 5.12063C11.1032 5.20503 11.1032 5.79497 10.6903 5.87937C9.77841 6.06576 9.06576 6.77841 8.87937 7.69033C8.79497 8.10322 8.20503 8.10322 8.12063 7.69033C7.93424 6.77841 7.22159 6.06576 6.30967 5.87937C5.89678 5.79497 5.89678 5.20503 6.30967 5.12063C7.22159 4.93424 7.93424 4.22159 8.12063 3.30967Z" fill="currentColor" :variants="sparkle2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 5.5px' }" />
          </svg>
        </div>
</template>
