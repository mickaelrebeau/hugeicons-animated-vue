<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KeyframesDoubleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the front diamond hops over the back one
// authored from scripts/authored
const keyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0px)',
      'translate(0.12px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const key2Variants: Variants = {
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
            <motion.path d="M14.0022 4.5C14.3777 4.16667 14.6984 4 15.0682 4C15.7664 4 16.2898 4.59409 17.3368 5.78228L19.9115 8.70448C21.3038 10.2847 22 11.0747 22 12C22 12.9253 21.3038 13.7153 19.9115 15.2955L17.3368 18.2177C16.2898 19.4059 15.7664 20 15.0682 20C14.6984 20 14.3777 19.8333 14.0022 19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 12px' }" />
            <motion.path d="M6.70914 5.78228C7.76637 4.59409 8.29499 4 9 4C9.70501 4 10.2336 4.59409 11.2909 5.78228L13.891 8.70448C15.297 10.2847 16 11.0747 16 12C16 12.9253 15.297 13.7153 13.891 15.2955L11.2909 18.2177C10.2336 19.4059 9.70501 20 9 20C8.29499 20 7.76637 19.4059 6.70914 18.2177L4.10902 15.2955C2.70301 13.7153 2 12.9253 2 12C2 11.0747 2.70301 10.2847 4.10902 8.70448L6.70914 5.78228Z" stroke="currentColor" stroke-width="1.5" :variants="key2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12px' }" />
          </svg>
        </div>
</template>
