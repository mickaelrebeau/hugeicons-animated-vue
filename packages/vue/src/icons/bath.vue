<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BathIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the faucet drips twice, the spout riding the tap, the tub holding
// authored from scripts/authored
const tapVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.58px, -0.31px) rotate(-8deg)',
      'translate(0.40px, 0.28px) rotate(6deg)',
      'translate(-0.14px, -0.08px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const spoutVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.88px, -0.64px) rotate(-8deg)',
      'translate(0.60px, 0.56px) rotate(6deg)',
      'translate(-0.21px, -0.17px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <path d="M19.4 11H4.6C4.50715 11 4.46072 11 4.4215 11.0021C3.65482 11.0422 3.04224 11.6548 3.00206 12.4215C3 12.4607 3 12.5071 3 12.6C3 12.9714 3 13.1571 3.00822 13.314C3.16894 16.3807 5.61928 18.8311 8.68598 18.9918C8.84288 19 9.02859 19 9.4 19H14.6C14.9714 19 15.1571 19 15.314 18.9918C18.3807 18.8311 20.8311 16.3807 20.9918 13.314C21 13.1571 21 12.9714 21 12.6C21 12.5071 21 12.4607 20.9979 12.4215C20.9578 11.6548 20.3452 11.0422 19.5785 11.0021C19.5393 11 19.4929 11 19.4 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5 11V5.12132C5 5.00867 5 4.95235 5.00227 4.90475C5.05136 3.87506 5.87506 3.05136 6.90475 3.00227C6.95235 3 7.00867 3 7.12132 3C7.1707 3 7.1954 3 7.21921 3.00057C7.71656 3.01242 8.19164 3.2092 8.5517 3.5525C8.56894 3.56894 8.5864 3.5864 8.62132 3.62132L10 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 7px' }" />
            <motion.path d="M9 6L11 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spoutVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 5px' }" />
            <path d="M7 19L6 21M17 19L18 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
