<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Dress03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the skirt flares and the straps tug
// authored from scripts/authored
const strapVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
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

const strap2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
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

const skirtVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1.1)',
      'translate(0.00px, 0px) scaleX(0.96)',
      'translate(0.00px, 0px) scaleX(1.02)',
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

const skirt2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1.12)',
      'translate(0.00px, 0px) scaleX(0.96)',
      'translate(0.00px, 0px) scaleX(1.02)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.06,
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
            <path d="M15 4L12 6L9 4C8.41425 4.50941 7.07071 5.29343 7.00348 6.14565C6.97434 6.51512 7.12883 6.71716 7.43782 7.12122C8.11164 8.00239 9 8.52009 9 10H15C15 8.52009 15.8884 8.00239 16.5622 7.12122C16.8712 6.71716 17.0257 6.51512 16.9965 6.14565C16.9293 5.29343 15.5858 4.50941 15 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="strapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 3px' }" />
            <motion.path d="M15 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="strap2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 3px' }" />
            <path d="M9.5 10H14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 19C20 19 21 16.8272 21 16.8272C18.1754 14.9906 16.4999 12.8338 15.5872 11.2048C15.2397 10.5845 15.066 10.2744 14.8318 10.1372C14.5977 10 14.2846 10 13.6586 10H10.3414C9.71537 10 9.40234 10 9.16817 10.1372C8.93401 10.2744 8.76026 10.5845 8.41278 11.2048C7.50006 12.8338 5.82461 14.9906 3 16.8272C3 16.8272 4 19 6 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="skirtVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M13.7055 14C14.0451 14.7964 15.5206 16.6712 17.1412 18.3109C17.7382 18.9149 18.0367 19.2169 17.9964 19.7296C17.956 20.2423 17.7063 20.4131 17.2067 20.7546C16.0705 21.5314 14.335 22 12 22C9.66504 22 7.92947 21.5314 6.79328 20.7546C6.29373 20.4131 6.04395 20.2423 6.00361 19.7296C5.96327 19.2169 6.26178 18.9149 6.85882 18.3109C8.4794 16.6712 9.95491 14.7964 10.2945 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="skirt2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
