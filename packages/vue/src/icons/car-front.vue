<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CarFrontIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wipers sweep across the windshield, back and forth, and the lights blink once
// authored from scripts/authored
const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1],
    transition: { duration: 0.5, delay: 0.5, times: [0, 0.5, 1], ease: 'linear' },
  },
};

const wiperVariants: Variants = {
  normal: { transform: 'translate(-2.03px, 1.22px) rotate(-62deg)', opacity: 0 },
  animate: {
    transform: [
      'translate(-2.03px, 1.22px) rotate(-62deg)',
      'translate(1.95px, 1.08px) rotate(58deg)',
      'translate(-1.95px, 1.08px) rotate(-58deg)',
      'translate(1.95px, 1.08px) rotate(58deg)',
      'translate(-2.03px, 1.22px) rotate(-62deg)',
    ],
    opacity: [0, 1, 1, 1, 0],
    transition: { duration: 0.9, times: [0, 0.25, 0.5, 0.75, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const wiper2Variants: Variants = {
  normal: { transform: 'translate(-2.03px, 1.22px) rotate(-62deg)', opacity: 0 },
  animate: {
    transform: [
      'translate(-2.03px, 1.22px) rotate(-62deg)',
      'translate(1.95px, 1.08px) rotate(58deg)',
      'translate(-1.95px, 1.08px) rotate(-58deg)',
      'translate(1.95px, 1.08px) rotate(58deg)',
      'translate(-2.03px, 1.22px) rotate(-62deg)',
    ],
    opacity: [0, 1, 1, 1, 0],
    transition: { duration: 0.9, delay: 0.04, times: [0, 0.25, 0.5, 0.75, 1], ease: [0.77, 0, 0.175, 1] },
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
            <path d="M3 17V12.8885C3 11.9485 3 11.4785 3.107 11.0253C3.21401 10.572 3.4242 10.1516 3.84458 9.31084L4.89443 7.21115C5.43234 6.13531 5.7013 5.5974 6.18461 5.2987C6.66791 5 7.26932 5 8.47214 5H15.5279C16.7307 5 17.3321 5 17.8154 5.2987C18.2987 5.5974 18.5677 6.13531 19.1056 7.21114L20.1554 9.31083C20.5758 10.1516 20.786 10.572 20.893 11.0253C21 11.4785 21 11.9485 21 12.8885V17C21 17.9428 21 18.4142 20.7071 18.7071C20.4142 19 19.9428 19 19 19C18.0572 19 17.5858 19 17.2929 18.7071C17 18.4142 17 17.9428 17 17H7C7 17.9428 7 18.4142 6.70711 18.7071C6.41421 19 5.94281 19 5 19C4.05719 19 3.58579 19 3.29289 18.7071C3 18.4142 3 17.9428 3 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M21 11L23 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 11L1 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 11H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6 14H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 14H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.5 11V6.4" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="wiperVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 8.7px' }" />
            <motion.path d="M14.5 11V6.4" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="wiper2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 8.7px' }" />
          </svg>
        </div>
</template>
