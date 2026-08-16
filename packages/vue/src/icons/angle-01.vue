<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Angle01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two rays close a little, then the marked angle opens back to its rest
// authored from scripts/authored
const raysVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(1.5deg)', 'rotate(0deg)'],
    transition: { duration: 0.62, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arcVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.82)', 'scale(1.06)', 'scale(1)'],
    transition: { duration: 0.62, delay: 0.04, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M21 20H6.47347C4.36707 20 3.31387 20 3.05177 19.3827C2.78966 18.7654 3.53439 18.0388 5.02384 16.5858L17.9249 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="raysVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 20px' }" />
            <motion.path d="M11 20C11 17.3517 9.77371 15.0655 8 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 17px' }" />
          </svg>
        </div>
</template>
