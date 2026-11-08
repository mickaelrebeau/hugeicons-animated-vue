<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpatulaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spatula flips something over
// authored from scripts/authored
const spatulaVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.04px, -1.66px) rotate(-12deg)',
      'translate(1.20px, 1.40px) rotate(8.399999999999999deg)',
      'translate(-0.58px, -0.54px) rotate(-3.5999999999999996deg)',
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

const spatula2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.66px, -2.52px) rotate(-12deg)',
      'translate(1.52px, 2.07px) rotate(8.399999999999999deg)',
      'translate(-0.74px, -0.81px) rotate(-3.5999999999999996deg)',
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

const spatula3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.00px, -2.10px) rotate(-12deg)',
      'translate(1.80px, 1.82px) rotate(8.399999999999999deg)',
      'translate(-0.85px, -0.70px) rotate(-3.5999999999999996deg)',
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
            <motion.path d="M16.9883 2.3804L17.7472 2.93078C19.0221 3.85525 20.1429 4.97492 21.0683 6.24847L21.6192 7.00668C22.1959 7.80028 22.1094 8.89493 21.4153 9.58834L16.8845 14.1145C16.41 14.5885 15.7289 14.7927 15.0716 14.6579L13.0341 14.2402C12.3768 14.1054 11.6957 14.3095 11.2212 14.7835L4.64801 21.3501C4.25619 21.7598 3.37487 22.4818 2.42256 21.5305C1.5593 20.6681 2.22016 19.7259 2.63037 19.3344L9.20354 12.7679C9.67802 12.2939 9.88238 11.6135 9.74747 10.9568L9.32928 8.92141C9.19437 8.26476 9.39873 7.58432 9.87321 7.11031L14.404 2.58413C15.0981 1.89071 16.1939 1.80433 16.9883 2.3804Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spatulaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 12.1px' }" />
            <motion.path d="M15.2207 10.686L17.3751 8.53168" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="spatula2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.3px 9.6px' }" />
            <motion.path d="M13.375 8.84143L15.5294 6.68707" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="spatula3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 7.8px' }" />
          </svg>
        </div>
</template>
