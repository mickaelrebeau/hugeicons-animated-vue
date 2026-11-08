<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScissorIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the blades snip shut and open twice
// authored from scripts/authored
const bladeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.32px, -0.44px) rotate(8deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.32px, -0.44px) rotate(8deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'easeInOut' },
  },
};

const blade2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.41px, -0.17px) rotate(-8deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.41px, -0.17px) rotate(-8deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'easeInOut' },
  },
};

const blade3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.43px, 0.90px) rotate(-8deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.43px, 0.90px) rotate(-8deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'easeInOut' },
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
            <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M15 8L3 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bladeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 13.5px' }" />
            <motion.path d="M15.0003 16L11 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="blade2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 14px' }" />
            <motion.path d="M3 5.00011L8.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="blade3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.8px 7.5px' }" />
          </svg>
        </div>
</template>
