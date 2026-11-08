<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TasbihIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the prayer beads pass one by one around the loop
// authored from scripts/authored
const beadVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bead2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.07,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bead3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
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

const bead4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.21000000000000002,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bead5Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.28,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bead6Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.35000000000000003,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bead7Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.42000000000000004,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bead8Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.49000000000000005,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tasselVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.61px, -0.47px) rotate(10deg)',
      'translate(0.47px, 0.26px) rotate(-7deg)',
      'translate(-0.19px, -0.13px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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
            <motion.path d="M15.7067 3.72847C15.7067 4.68395 14.9328 5.45853 13.9781 5.45853C13.0234 5.45853 12.2495 4.68395 12.2495 3.72847C12.2495 2.77299 13.0234 1.99841 13.9781 1.99841C14.9328 1.99841 15.7067 2.77299 15.7067 3.72847Z" stroke="currentColor" stroke-width="1.5" :variants="beadVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 3.7px' }" />
            <motion.path d="M11.2787 5.55696C11.2787 6.51245 10.5048 7.28702 9.55006 7.28702C8.59537 7.28702 7.82144 6.51245 7.82144 5.55696C7.82144 4.60148 8.59537 3.8269 9.55006 3.8269C10.5048 3.8269 11.2787 4.60148 11.2787 5.55696Z" stroke="currentColor" stroke-width="1.5" :variants="bead2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.6px 5.6px' }" />
            <motion.path d="M9.44748 10.0086C9.44748 10.9641 8.67355 11.7387 7.71886 11.7387C6.76417 11.7387 5.99023 10.9641 5.99023 10.0086C5.99023 9.05314 6.76417 8.27856 7.71886 8.27856C8.67355 8.27856 9.44748 9.05314 9.44748 10.0086Z" stroke="currentColor" stroke-width="1.5" :variants="bead3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.7px 10px' }" />
            <motion.path d="M11.2606 14.4454C11.2606 15.4009 10.4866 16.1754 9.53194 16.1754C8.57725 16.1754 7.80332 15.4009 7.80332 14.4454C7.80332 13.4899 8.57725 12.7153 9.53194 12.7153C10.4866 12.7153 11.2606 13.4899 11.2606 14.4454Z" stroke="currentColor" stroke-width="1.5" :variants="bead4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 14.4px' }" />
            <motion.path d="M15.7106 16.2926C15.7106 17.248 14.9367 18.0226 13.982 18.0226C13.0273 18.0226 12.2534 17.248 12.2534 16.2926C12.2534 15.3371 13.0273 14.5625 13.982 14.5625C14.9367 14.5625 15.7106 15.3371 15.7106 16.2926Z" stroke="currentColor" stroke-width="1.5" :variants="bead5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 16.3px' }" />
            <motion.path d="M20.1611 14.4454C20.1611 15.4009 19.3871 16.1754 18.4324 16.1754C17.4777 16.1754 16.7038 15.4009 16.7038 14.4454C16.7038 13.4899 17.4777 12.7153 18.4324 12.7153C19.3871 12.7153 20.1611 13.4899 20.1611 14.4454Z" stroke="currentColor" stroke-width="1.5" :variants="bead6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.4px 14.4px' }" />
            <motion.path d="M21.9984 10.0086C21.9984 10.9641 21.2244 11.7387 20.2697 11.7387C19.3151 11.7387 18.5411 10.9641 18.5411 10.0086C18.5411 9.05314 19.3151 8.27856 20.2697 8.27856C21.2244 8.27856 21.9984 9.05314 21.9984 10.0086Z" stroke="currentColor" stroke-width="1.5" :variants="bead7Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.3px 10px' }" />
            <motion.path d="M20.1611 5.57146C20.1611 6.52694 19.3871 7.30151 18.4324 7.30151C17.4777 7.30151 16.7038 6.52694 16.7038 5.57146C16.7038 4.61597 17.4777 3.8414 18.4324 3.8414C19.3871 3.8414 20.1611 4.61597 20.1611 5.57146Z" stroke="currentColor" stroke-width="1.5" :variants="bead8Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.4px 5.6px' }" />
            <motion.path d="M7.75863 14.8474L2.88689 17.3014C2.16033 17.6955 1.72616 18.1529 2.20032 18.999C2.40044 19.3688 2.82221 19.9905 3.42986 20.6024M9.1469 16.234L6.69892 21.0911C6.14939 22.1817 5.62307 22.0548 5.19013 21.8996C4.50008 21.5581 3.90754 21.0833 3.42986 20.6024M3.42986 20.6024L5.10533 18.893" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tasselVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.4px 18.5px' }" />
          </svg>
        </div>
</template>
