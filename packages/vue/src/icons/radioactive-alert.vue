<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RadioactiveAlertIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three blades push outward from the core and snap back
// authored from scripts/authored
const bladeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.9px)',
      'translate(0px, 0.135px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, 0.5px)',
      'translate(-0.12px, -0.075px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0.5px)',
      'translate(0.12px, -0.075px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M9 3C7.78555 3.91217 7 5.36445 7 7.0002C7 9.76151 9.23858 12 12 12C14.7614 12 17 9.76151 17 7.0002C17 5.36445 16.2144 3.91217 15 3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bladeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
            <motion.path d="M21 13C20.0878 11.7856 18.6355 11 16.9998 11C14.2385 11 12 13.2386 12 16C12 18.7614 14.2385 21 16.9998 21C18.6355 21 20.0878 20.2144 21 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="blade2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 16px' }" />
            <motion.path d="M3 13C3.91221 11.7857 5.36426 11 7 11C9.76142 11 12 13.2386 12 16C12 18.7614 9.76142 21 7 21C5.3644 21 3.91223 20.2147 3 19.0005" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="blade3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 16px' }" />
          </svg>
        </div>
</template>
