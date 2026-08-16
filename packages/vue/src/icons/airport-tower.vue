<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirportTowerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mast sweeps its arc over and over while the control cab breathes below it
// authored from scripts/authored
const cabVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.018)', 'scale(1)'],
    transition: {
      duration: 1.1,
      times: [0, 0.42, 1],
      ease: [0.77, 0, 0.175, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const sweepVariants: Variants = {
  normal: { transform: 'scaleX(1)', opacity: 1 },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.3)', 'scaleX(1)'],
    opacity: [1, 0.45, 1],
    transition: {
      duration: 1.1,
      times: [0, 0.46, 1],
      ease: [0.77, 0, 0.175, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const mastVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.9)', 'scaleY(1)'],
    transition: {
      duration: 1.1,
      times: [0, 0.46, 1],
      ease: [0.77, 0, 0.175, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M20.1228 6H3.87715C3.39271 6 3 6.39271 3 6.87715C3 6.95865 3.01136 7.03976 3.03375 7.11812L4.17111 11.0989C4.57006 12.4952 4.76954 13.1934 5.30421 13.5967C5.83888 14 6.56499 14 8.01721 14H15.9828C17.435 14 18.1611 14 18.6958 13.5967C19.2305 13.1934 19.4299 12.4952 19.8289 11.0989L20.9663 7.11812C20.9886 7.03976 21 6.95865 21 6.87715C21 6.39271 20.6073 6 20.1228 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cabVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <path d="M16 6L15 14M9 14L8 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M15 14V22M9 14V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 2H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sweepVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M12 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mastVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
          </svg>
        </div>
</template>
