<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BitcoinWalletIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the whole wallet slides out as one piece, clasp and B riding the body
// authored from scripts/authored
const claspVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.2px, 0px)',
      'translate(-0.26px, 0.00px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M16 13C16 13.8284 16.6716 14.5 17.5 14.5C18.3284 14.5 19 13.8284 19 13C19 12.1716 18.3284 11.5 17.5 11.5C16.6716 11.5 16 12.1716 16 13Z" stroke="currentColor" stroke-width="1.5" :variants="claspVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 13px' }" />
            <motion.path d="M11 19H16C18.8284 19 20.2426 19 21.1213 18.1213C22 17.2426 22 15.8284 22 13V12C22 9.17157 22 7.75736 21.1213 6.87868C20.48 6.23738 19.5534 6.06413 18 6.01732M10 6H16C16.7641 6 17.425 6 18 6.01732M2 10C2 6.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14.9827C15.9308 3 16.4049 3 16.7779 3.15749C17.2579 3.36014 17.6399 3.7421 17.8425 4.22208C18 4.5951 18 5.06917 18 6.01732" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="claspVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M3.125 19.5L3.125 13.5M5 13.5V12M5 21V19.5M3.125 16.5H6.875M6.875 16.5C7.49632 16.5 8 17.0037 8 17.625V18.375C8 18.9963 7.49632 19.5 6.875 19.5H2M6.875 16.5C7.49632 16.5 8 15.9963 8 15.375V14.625C8 14.0037 7.49632 13.5 6.875 13.5H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="claspVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 16.5px' }" />
          </svg>
        </div>
</template>
