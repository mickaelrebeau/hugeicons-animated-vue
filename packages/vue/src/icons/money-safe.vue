<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneySafeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dial spins and the handle turns
// authored from scripts/authored
const handleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, 0px)',
      'translate(-0.09px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.3,
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

const dialVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <path d="M13 2H11C6.75736 2 4.63604 2 3.31802 3.31802C2 4.63604 2 6.75736 2 11C2 15.2426 2 17.364 3.31802 18.682C4.63604 20 6.75736 20 11 20H13C17.2426 20 19.364 20 20.682 18.682C22 17.364 22 15.2426 22 11C22 6.75736 22 4.63604 20.682 3.31802C19.364 2 17.2426 2 13 2Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M17 15C18 14.4692 18 13.6148 18 11.9062V10.0938C18 8.38516 18 7.53082 17 7" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 11px' }" />
            <path d="M18 22V20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6 22V20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M9.49983 13C10.6158 13 11.5205 12.1046 11.5205 11C11.5205 9.89543 10.6158 9 9.49983 9M9.49983 13C8.38384 13 7.47914 12.1046 7.47914 11C7.47914 9.89543 8.38384 9 9.49983 9M9.49983 13V15M9.49983 9V7M7.74987 12L5.9999 13M12.9998 9L11.2498 10M11.2499 12L12.9999 13M6 9L7.74997 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dialVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 11px' }" />
          </svg>
        </div>
</template>
