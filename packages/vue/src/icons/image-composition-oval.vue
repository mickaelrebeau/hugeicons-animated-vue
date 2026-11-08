<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ImageCompositionOvalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the oval frame breathes and the sun pops
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1.04)',
      'translate(0.00px, 0.00px) scale(0.98)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
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
      'translate(0px, 1.60px) scaleY(0.8)',
      'translate(0px, -0.48px) scaleY(1.06)',
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
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
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
            <motion.path d="M18.0518 4.06314C14.0896 2.64561 9.91046 2.64563 5.94823 4.06315C4.28902 4.65674 3.45942 4.95354 2.72971 5.9896C2 7.02566 2 8.1524 2 10.4059V13.5941C2 15.8476 2 16.9743 2.72971 18.0104C3.45942 19.0465 4.28902 19.3433 5.94823 19.9369C9.91046 21.3544 14.0896 21.3544 18.0518 19.9369C19.711 19.3433 20.5406 19.0465 21.2703 18.0104C22 16.9744 22 15.8476 22 13.5942V10.4058C22 8.15236 22 7.02564 21.2703 5.98958C20.5406 4.95352 19.711 4.65673 18.0518 4.06314Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2.5 15.5L7.46967 10.5303C7.80923 10.1908 8.26978 10 8.75 10C9.23022 10 9.69077 10.1908 10.0303 10.5303L14 14.5M15.5 16L14 14.5M21.5 15.5L18.5303 12.5303C18.1908 12.1908 17.7302 12 17.25 12C16.7698 12 16.3092 12.1908 15.9697 12.5303L14 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hillVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M14.5 8C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7M14.5 8C14.2239 8 14 7.77614 14 7.5C14 7.22386 14.2239 7 14.5 7M14.5 8V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 7.5px' }" />
          </svg>
        </div>
</template>
