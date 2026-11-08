<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'JokerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the jester hat bells jingle on their tips
// authored from scripts/authored
const bellVariants: Variants = {
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

const bell2Variants: Variants = {
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
      delay: 0.1,
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

const pointVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.81px, 0.38px) rotate(-8deg)',
      'translate(0.64px, -0.21px) rotate(6deg)',
      'translate(-0.21px, 0.08px) rotate(-2deg)',
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

const point2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.73px, 0.43px) rotate(8deg)',
      'translate(-0.58px, -0.25px) rotate(-6deg)',
      'translate(0.19px, 0.10px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.06,
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
            <motion.path d="M4 7C5.10457 7 6 6.10457 6 5C6 3.89543 5.10457 3 4 3C2.89543 3 2 3.89543 2 5C2 6.10457 2.89543 7 4 7Z" stroke="currentColor" stroke-width="1.5" :variants="bellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 5px' }" />
            <motion.path d="M20 9C21.1046 9 22 8.10457 22 7C22 5.89543 21.1046 5 20 5C18.8954 5 18 5.89543 18 7C18 8.10457 18.8954 9 20 9Z" stroke="currentColor" stroke-width="1.5" :variants="bell2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 7px' }" />
            <motion.path d="M4.96694 17C1.44331 11.5 8.98977 11 4.95922 7M6.37859 5C7.48264 5 9.99986 6 9.99986 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pointVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.7px 11px' }" />
            <path d="M5 17C10.2172 18.4523 13.3284 18.2088 19 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4 20C9.96256 21.4523 13.5182 21.2088 20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18.0289 6.04492C15.664 6.47929 10.2102 9.78535 11.0499 17.2385M18.2511 8.0892C17.0361 8.66181 15.1252 9.88778 17.5983 12.9129C18.3787 13.8676 19.2858 15.88 18.951 16.8691" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="point2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.7px 11.6px' }" />
          </svg>
        </div>
</template>
