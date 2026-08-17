<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArtificialIntelligence03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// two data packets fly into the robot ear, the lower one first
// authored from scripts/authored
const pipTopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.8px, 0px)',
      'translate(0.25200000000000006px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.1,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pipMidVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.2px, 0px)',
      'translate(0.30800000000000005px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      times: [0, 0.12, 0.62, 1],
      ease: [
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
            <path d="M16 22V21.5C16 20.3954 16.9321 19.5005 17.9223 19.011C18.8846 18.5354 19.6943 17.7511 19.7965 16.8313L20 15L22 14L19.5 10.25C19.5 5.69365 15.8063 2 11.25 2C10.096 2 8.99733 2.23694 8 2.66482M6.5 16.9962V22M6.5 16.9962C5.13927 16.0364 4.08188 14.6752 3.5 13.085M6.5 16.9962C7.25065 17.5257 8.09362 17.9331 9 18.1895" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2.75 3.25L6 5.5H10M3.5 3.25C3.5 3.66421 3.16421 4 2.75 4C2.33579 4 2 3.66421 2 3.25C2 2.83579 2.33579 2.5 2.75 2.5C3.16421 2.5 3.5 2.83579 3.5 3.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pipTopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 4px' }" />
            <motion.path d="M2.75 8.75H10M3.5 8.75C3.5 9.16421 3.16421 9.5 2.75 9.5C2.33579 9.5 2 9.16421 2 8.75C2 8.33579 2.33579 8 2.75 8C3.16421 8 3.5 8.33579 3.5 8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pipMidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 8.8px' }" />
          </svg>
        </div>
</template>
