<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Playlist02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the back card slides out and the note bounces
// authored from scripts/authored
const cardVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, 1px)',
      'translate(-0.15px, -0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const noteVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.3px)',
      'translate(0px, 0.18200000000000002px)',
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
            <path d="M2 9C2 5.70017 2 4.05025 3.02513 3.02513C4.05025 2 5.70017 2 9 2H11C14.2998 2 15.9497 2 16.9749 3.02513C18 4.05025 18 5.70017 18 9V11C18 14.2998 18 15.9497 16.9749 16.9749C15.9497 18 14.2998 18 11 18H9C5.70017 18 4.05025 18 3.02513 16.9749C2 15.9497 2 14.2998 2 11V9Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M18.2383 7C19.5732 7.08138 20.4232 7.30467 21.036 7.91738C22 8.88143 22 10.433 22 13.5363V15.4171C22 18.5203 22 20.0719 21.036 21.036C20.0719 22 18.5203 22 15.4171 22H13.5363C10.433 22 8.88143 22 7.91738 21.036C7.30467 20.4232 7.08138 19.5732 7 18.2383" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cardVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 14.5px' }" />
            <motion.path d="M11 12V6C11.2222 6.4 11.4 8.08 13 8.4M11 12C11 13.1046 10.1046 14 9 14C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10C10.1046 10 11 10.8954 11 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="noteVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 10px' }" />
          </svg>
        </div>
</template>
