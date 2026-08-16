<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AngelIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the halo lifts, both eyes blink, and the smile opens
// authored from scripts/authored
const headVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.12, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const smileVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.12)', 'scaleX(1)'],
    transition: { duration: 0.54, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const haloVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleX(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleX(1)',
      'translateY(-1.2px) scaleX(1.08)',
      'translateY(0.2px) scaleX(0.98)',
      'translateY(0px) scaleX(1)',
    ],
    transition: { duration: 0.64, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const eyesVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M3.07818 7.5C2.38865 8.85588 2 10.39 2 12.0148C2 17.5295 6.47715 22 12 22C17.5228 22 22 17.5295 22 12.0148C22 10.39 21.6114 8.85588 20.9218 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.8px' }" />
            <motion.path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="smileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.ellipse cx="12" cy="4" rx="10" ry="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="haloVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M7 10.5C7 9.67154 7.67157 8.99997 8.5 8.99997C9.32843 8.99997 10 9.67154 10 10.5M14 10.4999C14 9.67151 14.6716 8.99994 15.5 8.99994C16.3284 8.99994 17 9.67151 17 10.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
