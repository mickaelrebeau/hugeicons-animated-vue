<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BatteryWarningIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bang stem stretches, the dot answers, the open cell holding
// authored from scripts/authored
const stemVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(-0.8px) scaleY(1.1)',
      'translateY(0.3px) scaleY(0.94)',
      'translateY(0px) scaleY(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const dotVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(1)' },
  animate: {
    transform: [
      'translateY(0px) scale(1)',
      'translateY(0.9px) scale(0.86)',
      'translateY(-1px) scale(1.2)',
      'translateY(0px) scale(1)',
    ],
    transition: { duration: 0.56, delay: 0.04, times: [0, 0.18, 0.48, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M7 6.00171C4.82497 6.01382 3.64706 6.11027 2.87868 6.87865C2 7.75733 2 9.17154 2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.64706 17.8897 4.82497 17.9861 7 17.9982M14 17.9982C16.175 17.9861 17.3529 17.8897 18.1213 17.1213C19 16.2426 19 14.8284 19 12C19 9.17154 19 7.75733 18.1213 6.87865C17.3529 6.11027 16.175 6.01382 14 6.00171" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19 9.49976L20.0272 9.67096C20.7085 9.7845 21.0491 9.84128 21.3076 10.0064C21.5618 10.1688 21.7612 10.4042 21.8796 10.6816C22 10.9637 22 11.3091 22 11.9998C22 12.6904 22 13.0358 21.8796 13.3179C21.7612 13.5953 21.5618 13.8307 21.3076 13.9931C21.0491 14.1582 20.7085 14.215 20.0272 14.3286L19 14.4998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10.5 7.99976V11.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 10px' }" />
            <motion.path d="M10.625 15.7498H10.5M10.75 15.7498C10.75 15.8878 10.6381 15.9998 10.5 15.9998C10.3619 15.9998 10.25 15.8878 10.25 15.7498C10.25 15.6117 10.3619 15.4998 10.5 15.4998C10.6381 15.4998 10.75 15.6117 10.75 15.7498Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 15.7px' }" />
          </svg>
        </div>
</template>
