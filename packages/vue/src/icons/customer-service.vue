<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CustomerServiceIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the customer profile acknowledges with a short nod
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.51,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const personVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-1.53px) scale(1.03)', 'translateY(0.51px) scale(0.98)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.96px 12.04px' }" />
            <motion.path d="M12 7H12.8571C13.2612 7 13.4632 7 13.5888 7.12204C13.7143 7.24408 13.7143 7.4405 13.7143 7.83333C13.7143 8.61901 13.7143 9.01184 13.4632 9.25592C13.2723 9.44155 12.9929 9.486 12.5145 9.49665C12.2692 9.50211 12.1465 9.50484 12.0732 9.5777C12 9.65056 12 9.76704 12 10V11.1667C12 11.5595 12 11.7559 12.1255 11.878C12.2511 12 12.4531 12 12.8571 12H13.7143M18 7V9.5M18 9.5H16.5429C16.2196 9.5 16.058 9.5 15.9576 9.40237C15.8571 9.30474 15.8571 9.1476 15.8571 8.83333V7M18 9.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 9.5px' }" />
            <motion.path d="M10 4.30518C10.089 4.20518 10.1815 4.10717 10.2774 4.01129C12.9591 1.32957 17.307 1.32957 19.9887 4.01129C22.6704 6.693 22.6704 11.0409 19.9887 13.7226C19.8928 13.8185 19.7948 13.911 19.6948 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.34px 7.66px' }" />
          </svg>
        </div>
</template>
