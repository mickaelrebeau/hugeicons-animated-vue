<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BadmintonShuttleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cork hits first, then the skirt feathers splay and recover
// authored from scripts/authored
const skirtVariants: Variants = {
  normal: { transform: 'scaleY(1) scaleX(1)' },
  animate: {
    transform: [
      'scaleY(1) scaleX(1)',
      'scaleY(0.9) scaleX(1.08)',
      'scaleY(1.08) scaleX(0.94)',
      'scaleY(1) scaleX(1)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.08,
      times: [0, 0.28, 0.64, 1],
      ease: [
        [0.18, 0.9, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const vanesVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.22)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.14, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bandVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.94)', 'scaleX(1)'],
    transition: {
      duration: 0.56,
      delay: 0.06,
      times: [0, 0.32, 0.68, 1],
      ease: [
        [0.18, 0.9, 0.32, 1],
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
            <motion.path d="M3.92723 4.37944C5.01307 3.80898 6.45414 3.52865 7.89521 4.2222C9.94761 1.25927 14.0524 1.25926 16.1048 4.2222C17.5458 3.52867 18.9868 3.80902 20.0727 4.37943C20.575 4.64333 20.8262 4.77528 20.9545 5.15246C21.0827 5.52964 20.9298 5.84896 20.6241 6.48759L16.2167 15.6944C16.0084 16.1294 15.9043 16.347 15.8558 16.5489C15.8073 16.7508 15.794 17.3092 15.7674 18.4261C15.7215 20.3525 14.4794 22 12 22C9.52061 22 8.27855 20.3525 8.23262 18.4261C8.20598 17.3092 8.19267 16.7508 8.14418 16.5489C8.0957 16.347 7.99157 16.1294 7.7833 15.6944L3.37585 6.48751C3.07015 5.84891 2.9173 5.52962 3.04553 5.15244C3.17377 4.77527 3.42492 4.64333 3.92723 4.37944Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="skirtVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <path d="M8 17H16" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 4L11 17M16 4L13 17" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="vanesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M6 12C7.2 13.3333 8.8 13.3334 10 12C11.2 13.3333 12.8 13.3334 14 12C15.2 13.3333 16.8 13.3334 18 12" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.7px' }" />
          </svg>
        </div>
</template>
