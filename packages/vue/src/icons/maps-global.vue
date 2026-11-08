<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MapsGlobalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the globe orbit line swings as the pin dot pops
// authored from scripts/authored
const orbitVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.8)',
      'translate(0.00px, 0px) scaleX(1.06)',
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

const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.4)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.14,
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
            <path d="M10.0808 2C5.47023 2.9359 2 7.01218 2 11.899C2 17.4776 6.52238 22 12.101 22C16.9878 22 21.0641 18.5298 22 13.9192" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M18.9375 18C19.3216 17.9166 19.6771 17.784 20 17.603M14.6875 17.3406C15.2831 17.6015 15.8576 17.7948 16.4051 17.9218M10.8546 14.9477C11.2681 15.238 11.71 15.5861 12.1403 15.8865M3 13.825C3.32234 13.6675 3.67031 13.4868 4.0625 13.3321M6.45105 13C7.01293 13.0624 7.64301 13.2226 8.35743 13.5232" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="orbitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 15.5px' }" />
            <motion.path d="M18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9C17.3284 9 18 8.32843 18 7.5Z" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 7.5px' }" />
            <path d="M17.488 13.6202C17.223 13.8638 16.8687 14 16.5001 14C16.1315 14 15.7773 13.8638 15.5123 13.6202C13.0855 11.3756 9.83336 8.86815 11.4193 5.2278C12.2769 3.25949 14.3353 2 16.5001 2C18.6649 2 20.7234 3.25949 21.5809 5.2278C23.1649 8.86356 19.9207 11.3833 17.488 13.6202Z" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
