<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MapPinHouseIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the little house hops beside the pin
// authored from scripts/authored
const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
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

const houseVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
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
            <motion.path d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 10px' }" />
            <motion.path d="M21.3547 16.4469L18.8796 14.3254C18.6347 14.1154 18.3226 14 18 14C17.6774 14 17.3653 14.1154 17.1204 14.3254L14.6453 16.4469C14.2357 16.7979 14 17.3105 14 17.8499V18.5752C14 19.9081 14 20.5746 14.305 21.0616C14.4655 21.3179 14.6821 21.5345 14.9384 21.695C15.4254 22 16.0919 22 17.4248 22H18.5752C19.9081 22 20.5746 22 21.0616 21.695C21.3179 21.5345 21.5345 21.3179 21.695 21.0616C22 20.5746 22 19.9081 22 18.5752V17.8499C22 17.3105 21.7643 16.7979 21.3547 16.4469Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="houseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18px' }" />
            <motion.path d="M18 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="houseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 20.5px' }" />
            <path d="M18 10.0355C18 5.59762 14.4183 2 10 2C5.58172 2 2 5.59762 2 10.0355C2 12.5731 3 14.5462 5 16.3086C6.07535 17.2562 7.82291 19.0316 9.04653 20.5628C9.27943 20.8543 9.63972 21 10 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
