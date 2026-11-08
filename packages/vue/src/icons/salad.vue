<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SaladIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the leaves toss up out of the bowl and the fork stirs
// authored from scripts/authored
const leafVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0.196px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.06,
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

const forkVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.56px, 0.69px) rotate(12deg)',
      'translate(-0.47px, -0.41px) rotate(-8.399999999999999deg)',
      'translate(0.18px, 0.19px) rotate(3.5999999999999996deg)',
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

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const leaf2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0.196px)',
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
            <motion.path d="M20.3872 6.57272C21.1892 5.75419 21.1846 4.44036 20.3728 3.62792C19.5609 2.81548 18.2477 2.81047 17.4298 3.61305C16.613 2.79565 15.2887 2.79565 14.4719 3.61305C14.2166 3.86861 14.0411 4.17381 13.9454 4.49761C13.1593 4.09519 12.172 4.22318 11.5141 4.88166C10.9363 5.45991 10.7676 6.29216 11.0073 7.01913C10.5005 7.03944 9.99957 7.24304 9.61259 7.63031C8.7958 8.44771 8.7958 9.77299 9.61259 10.5904C10.2671 11.2454 10.5137 12.1539 10.3524 13H18.3C18.5997 12.9008 18.8815 12.732 19.12 12.4933C19.7781 11.8347 19.9057 10.8465 19.5033 10.0597C19.827 9.964 20.1322 9.78884 20.3876 9.53322C21.2044 8.71581 21.204 7.39013 20.3872 6.57272Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 7.9px' }" />
            <motion.path d="M17 7L11 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="forkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 10px' }" />
            <motion.path d="M13.8889 21H10.1111C6.18375 21 3 17.8162 3 13.8889C3 13.398 3.39797 13 3.88889 13H20.1111C20.602 13 21 13.398 21 13.8889C21 17.8162 17.8162 21 13.8889 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M5.67133 13C4.65183 12.175 4 10.9136 4 9.5C4 7.01472 6.01472 5 8.5 5C9.42507 5 10.285 5.27914 11 5.75777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leaf2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 9px' }" />
          </svg>
        </div>
</template>
