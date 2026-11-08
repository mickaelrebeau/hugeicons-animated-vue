<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CassetteTapeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the reels spin and the tape runs between them
// authored from scripts/authored
const tapeVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const spokesVariants: Variants = {
  normal: { transform: 'rotate(0deg)', opacity: 0 },
  animate: {
    transform: ['rotate(0deg)', 'rotate(60deg)', 'rotate(300deg)', 'rotate(360deg)'],
    opacity: [0, 1, 1, 0],
    transition: { duration: 0.8, times: [0, 0.14, 0.84, 1], ease: 'linear' },
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
            <path d="M15 20H9C5.70017 20 4.05025 20 3.02513 18.9749C2 17.9497 2 16.2998 2 13V11C2 7.70017 2 6.05025 3.02513 5.02513C4.05025 4 5.70017 4 9 4H15C18.2998 4 19.9497 4 20.9749 5.02513C22 6.05025 22 7.70017 22 11V13C22 16.2998 22 17.9497 20.9749 18.9749C19.9497 20 18.2998 20 15 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6.0459 19.8164L6.24254 19.0299C6.60632 17.5747 6.78821 16.8472 7.33073 16.4236C7.87326 16 8.62321 16 10.1231 16H13.8769C15.3768 16 16.1268 16 16.6693 16.4236C17.2118 16.8472 17.3937 17.5747 17.7575 19.0299L17.9541 19.8164" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <circle cx="8" cy="10" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <circle cx="16" cy="10" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 12H16M8 8H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 10L8 8.7M8 10L9.13 10.65M8 10L6.87 10.65" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="spokesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 10px' }" />
            <motion.path d="M16 10L16 8.7M16 10L17.13 10.65M16 10L14.87 10.65" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="spokesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 10px' }" />
          </svg>
        </div>
</template>
