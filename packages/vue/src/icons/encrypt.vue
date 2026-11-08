<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'EncryptIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bits shuffle and the key turns
// authored from scripts/authored
const bitVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const bit2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, delay: 0.08, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const bit3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, delay: 0.16, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const bit4Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, delay: 0.24, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const keyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.06px, -0.84px) rotate(-8deg)',
      'translate(-0.01px, 0.42px) rotate(4deg)',
      'translate(-0.00px, -0.10px) rotate(-1deg)',
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

const holeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
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
            <motion.path d="M4 3.5V8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 6.5V5.5C8 4.39543 8.89543 3.5 10 3.5C11.1046 3.5 12 4.39543 12 5.5V6.5C12 7.60457 11.1046 8.5 10 8.5C8.89543 8.5 8 7.60457 8 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bit2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 3.5V8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bit3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20 3.5V8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bit4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 16.5C2 18.7091 3.79086 20.5 6 20.5C7.48057 20.5 8.77325 19.6956 9.46487 18.5H13.3739C13.6095 18.5 13.7273 18.5 13.84 18.5265C13.8812 18.5361 13.9217 18.5484 13.9613 18.5632C14.0698 18.6037 14.1678 18.669 14.3638 18.7997L14.4045 18.8268C14.8093 19.0967 15.0118 19.2317 15.2332 19.2646C15.3491 19.2819 15.4671 19.2786 15.5819 19.2549C15.8012 19.2098 15.9958 19.0638 16.3851 18.7719L16.4867 18.6956C16.7997 18.4609 16.9562 18.3435 17.1261 18.2924C17.314 18.2359 17.5144 18.2359 17.7024 18.2924C17.8723 18.3435 18.0287 18.4609 18.3417 18.6956C18.6995 18.9639 18.8784 19.0981 19.0695 19.1476C19.2808 19.2024 19.5042 19.1865 19.7056 19.1024C19.8878 19.0264 20.046 18.8682 20.3622 18.552L21 17.9142C21.6667 17.2475 22 16.9142 22 16.5C22 16.0858 21.6667 15.7525 21 15.0858C20.711 14.7968 20.5665 14.6522 20.3827 14.5761C20.1989 14.5 19.9945 14.5 19.5858 14.5H9.46487C8.77325 13.3044 7.48057 12.5 6 12.5C3.79086 12.5 2 14.2909 2 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
            <motion.path d="M6.125 16.5H6M6.25 16.5C6.25 16.6381 6.13807 16.75 6 16.75C5.86193 16.75 5.75 16.6381 5.75 16.5C5.75 16.3619 5.86193 16.25 6 16.25C6.13807 16.25 6.25 16.3619 6.25 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="holeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 16.5px' }" />
          </svg>
        </div>
</template>
