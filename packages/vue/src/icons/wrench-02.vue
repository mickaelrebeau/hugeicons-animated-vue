<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Wrench02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wrench rocks to turn a bolt
// authored from scripts/authored
const wrenchVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(18deg)',
      'translate(0.00px, 0.00px) rotate(-12.6deg)',
      'translate(0.00px, 0.00px) rotate(5.3999999999999995deg)',
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

const wrench2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.90px, -0.46px) rotate(18deg)',
      'translate(2.05px, -0.23px) rotate(-12.6deg)',
      'translate(-0.88px, -0.04px) rotate(5.3999999999999995deg)',
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

const wrench3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.52px, -0.56px) rotate(18deg)',
      'translate(2.49px, -0.27px) rotate(-12.6deg)',
      'translate(-1.07px, -0.05px) rotate(5.3999999999999995deg)',
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
            <motion.path d="M18 7.10593C17.9999 8.55778 16.5891 9.89558 14.4697 11.9901C13.1062 13.3376 10.8936 13.336 9.52937 11.9892C7.41145 9.8961 5.99988 8.55754 6 7.10568C6.00012 5.65383 6.3543 5.36258 9.60848 2.14658C9.92161 1.83445 10.4602 2.05389 10.4602 2.49338L10.4604 5.80524C10.4604 6.64587 11.1488 7.32849 11.9994 7.32842C12.85 7.32835 13.5396 6.64688 13.5398 5.80625L13.5405 2.49435C13.5406 2.05485 14.0793 1.83532 14.3924 2.14739C17.646 5.36287 18.0001 5.65408 18 7.10593Z" stroke="currentColor" stroke-width="1.5" :variants="wrenchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.6px' }" />
            <motion.path d="M15 12L15 19.1652C15 20.7308 13.6569 22 12 22C10.3431 22 9 20.7308 9 19.1652L9 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="wrench2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M12.0063 18.9995L12 19.0059" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :variants="wrench3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
