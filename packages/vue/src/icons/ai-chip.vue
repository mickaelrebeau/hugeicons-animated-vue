<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiChipIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the core turns a quarter onto its next face while the pins flicker with current
// authored from scripts/authored
const dieVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.58, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const pinsVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.045)', 'scale(1)'],
    opacity: [1, 0.45, 1],
    transition: { duration: 0.66, delay: 0.06, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const coreVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(48deg) scale(1.1)', 'rotate(90deg) scale(1)'],
    transition: { duration: 0.78, times: [0, 0.52, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dieVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 2V4M16 2V4M12 2V4M8 20V22M12 20V22M16 20V22M22 16H20M4 8H2M4 16H2M4 12H2M22 8H20M22 12H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.4802 7.86193C11.6587 7.37936 12.3413 7.37936 12.5198 7.86193L13.3202 10.0248C13.4325 10.3283 13.6717 10.5675 13.9752 10.6798L16.1381 11.4802C16.6206 11.6587 16.6206 12.3413 16.1381 12.5198L13.9752 13.3202C13.6717 13.4325 13.4325 13.6717 13.3202 13.9752L12.5198 16.1381C12.3413 16.6206 11.6587 16.6206 11.4802 16.1381L10.6798 13.9752C10.5675 13.6717 10.3283 13.4325 10.0248 13.3202L7.86193 12.5198C7.37936 12.3413 7.37936 11.6587 7.86193 11.4802L10.0248 10.6798C10.3283 10.5675 10.5675 10.3283 10.6798 10.0248L11.4802 7.86193Z" stroke="currentColor" stroke-width="1.5" :variants="coreVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
