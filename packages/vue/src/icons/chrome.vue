<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChromeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three blades whirl a full turn around the inner circle
// authored from scripts/authored
const bladeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(5.84px, -4.04px) rotate(72deg)',
      'translate(5.56px, 8.04px) rotate(252deg)',
      'translate(0.48px, -1.03px) rotate(370.8deg)',
      'translate(-0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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

const blade2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-6.55px, -2.58px) rotate(72deg)',
      'translate(3.55px, -9.02px) rotate(252deg)',
      'translate(-1.11px, 0.18px) rotate(370.8deg)',
      'translate(0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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

const blade3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.69px, 7.04px) rotate(72deg)',
      'translate(-9.69px, 0.96px) rotate(252deg)',
      'translate(0.67px, 0.91px) rotate(370.8deg)',
      'translate(-0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M8.53448 14L4.0332 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bladeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.3px 10px' }" />
            <motion.path d="M11.5 21.5L15.5 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="blade2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 17.8px' }" />
            <motion.path d="M12 8H21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="blade3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 8px' }" />
          </svg>
        </div>
</template>
