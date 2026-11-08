<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Motorbike01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bike pops a wheelie
// authored from scripts/authored
const bikeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.33px, -3.12px) rotate(-12deg)',
      'translate(-0.33px, -3.12px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const bike2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.69px, -2.56px) rotate(-12deg)',
      'translate(-0.69px, -2.56px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const bike3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.09px, -0.94px) rotate(-12deg)',
      'translate(-1.09px, -0.94px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const bike4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.08px, -1.78px) rotate(-12deg)',
      'translate(-2.08px, -1.78px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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
            <motion.circle cx="19.5" cy="16.5" r="2.5" stroke="currentColor" stroke-width="1.5" :variants="bikeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 16.5px' }" />
            <motion.path d="M14.416 18C14.1484 17.3875 14 16.7111 14 16C14 13.2386 16.2386 11 19 11C19.3425 11 19.6769 11.0344 20 11.1" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bike2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 14.5px' }" />
            <circle cx="4.5" cy="16.5" r="2.5" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M6.43023 9.62979H8.15662C8.61216 9.62979 9.05405 9.47428 9.40918 9.18898L11.2373 7.7204C11.4148 7.57776 11.6358 7.5 11.8636 7.5H15L12.2843 12.4789C12.109 12.8001 11.7723 13 11.4064 13H9.5M6.43023 9.62979H4M6.43023 9.62979L9.5 13M9.5 13L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bike3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 11.8px' }" />
            <motion.path d="M17 11L13.9923 5.73649C13.5873 5.02784 13.3849 4.67352 13.0835 4.43408C12.9313 4.31313 12.7622 4.21503 12.5817 4.14287C12.2243 4 11.8162 4 11 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bike4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 7.5px' }" />
          </svg>
        </div>
</template>
