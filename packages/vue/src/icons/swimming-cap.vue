<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwimmingCapIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cap stretches on and the goggles snap down
// authored from scripts/authored
const capVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.4px, 0px)',
      'translate(0.06px, 0px)',
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

const cap2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.4px, 0px)',
      'translate(-0.06px, 0px)',
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

const cap3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1.06)',
      'translate(0.00px, 0px) scaleX(0.98)',
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

const gogglesVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.14,
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
            <motion.path d="M5.2057 13.5C6.61724 10.9057 6.10634 7.50433 4 5.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="capVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.3px 9.5px' }" />
            <motion.path d="M18.7943 13.5C17.3828 10.9057 17.8937 7.50433 20 5.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cap2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.7px 9.5px' }" />
            <motion.path d="M3.84563 13.5H20.1544C21.6152 13.5 22.1108 13.1856 21.9799 11.6907C21.5401 6.67031 17.2341 2.5 12 2.5C6.76593 2.5 2.45986 6.67031 2.02015 11.6907C1.88922 13.1856 2.38484 13.5 3.84563 13.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cap3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M4 19C4 17.4634 6.1186 17.1143 7.23329 16.6688C8.80778 16.0396 10.5 17.2472 10.5 19C10.5 20.7528 8.80778 21.9604 7.23329 21.3312C6.1186 20.8857 4 20.5366 4 19ZM4 19L2 19M20 19C20 17.4634 17.8814 17.1143 16.7667 16.6688C15.1922 16.0396 13.5 17.2472 13.5 19C13.5 20.7528 15.1922 21.9604 16.7667 21.3312C17.8814 20.8857 20 20.5366 20 19ZM20 19L22 19M10.5 18.5C10.7994 17.9022 11.359 17.5 12 17.5C12.641 17.5 13.2006 17.9022 13.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="gogglesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
