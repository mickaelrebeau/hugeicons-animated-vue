<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VolleyballIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball spins once
// authored from scripts/authored
const spinVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.18px, 2.68px) rotate(70deg)',
      'translate(-3.82px, -1.68px) rotate(250deg)',
      'translate(0.05px, 0.35px) rotate(368deg)',
      'translate(-0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const spin2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(3.23px, 6.18px) rotate(70deg)',
      'translate(-8.83px, 4.62px) rotate(250deg)',
      'translate(0.72px, 0.44px) rotate(368deg)',
      'translate(-0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const spin3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-6.01px, -0.42px) rotate(70deg)',
      'translate(0.61px, -8.58px) rotate(250deg)',
      'translate(-0.65px, 0.33px) rotate(368deg)',
      'translate(0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const spin4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(3.76px, -4.37px) rotate(70deg)',
      'translate(6.24px, 5.37px) rotate(250deg)',
      'translate(0.12px, -0.69px) rotate(368deg)',
      'translate(-0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M8.12046 3C7.67458 4.61905 7.76376 8.58571 11.6875 11.5M11.6875 11.5C16.6295 10.17 20.125 10.65 22 12.3498M11.6875 11.5C12.2525 16.1881 8.875 19.15 7 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 11.5px' }" />
            <motion.path d="M9 8C11.087 6.11368 16.3261 5.12819 20.5 7.01432" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="spin2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 6.6px' }" />
            <motion.path d="M16.8885 11C17.4777 13.8947 15.7144 19.1883 12 22" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="spin3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.7px 16.5px' }" />
            <motion.path d="M10 17C7.37458 15.7396 4.15837 10.9595 4 6" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="spin4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 11.5px' }" />
          </svg>
        </div>
</template>
