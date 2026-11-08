<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ImageCompositionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the curved frame flexes like a lens
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.94)',
      'translate(0.00px, 0px) scaleX(1.03)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
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

const hillVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 1.16px) scaleY(0.8)',
      'translate(0px, -0.35px) scaleY(1.06)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.16,
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

const sunVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M7.07523 3.88403C10.2874 4.8348 13.7126 4.8348 16.9248 3.88403C19.517 3.11677 20.813 2.73313 21.4065 3.20921C22 3.68529 22 4.90772 22 7.35256V16.6474C22 19.0923 22 20.3147 21.4065 20.7908C20.813 21.2669 19.5169 20.8832 16.9248 20.116C13.7126 19.1652 10.2874 19.1652 7.07523 20.116C4.48305 20.8832 3.18696 21.2669 2.59348 20.7908C2 20.3147 2 19.0923 2 16.6474V7.35256C2 4.90772 2 3.68529 2.59348 3.20921C3.18696 2.73313 4.48305 3.11677 7.07523 3.88403Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 20C10.9469 15.8426 15.3824 10.3291 22 14.4643" stroke="currentColor" stroke-width="1.5" :variants="hillVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 15.2px' }" />
            <motion.path d="M9 8.5C9 9.32843 8.32843 10 7.5 10C6.67157 10 6 9.32843 6 8.5C6 7.67157 6.67157 7 7.5 7C8.32843 7 9 7.67157 9 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 8.5px' }" />
          </svg>
        </div>
</template>
