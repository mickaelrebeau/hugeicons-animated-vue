<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GoldBuyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the coin drops in and the arrow points down into it
// authored from scripts/authored
const stackVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const stack2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.24, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -0.18px)',
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

const coinVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, 4px)', 'translate(0px, -4px)', 'translate(0px, 0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
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
            <motion.path d="M20 13.8475C20.6814 13.0147 21.0166 12.3661 20.9994 11.6409C20.9706 10.432 19.9738 9.48267 17.9802 7.58405L16.0235 5.7206C14.119 3.90687 13.1668 3 12 3C10.8332 3 9.88095 3.90687 7.9765 5.7206L6.01983 7.58405C4.02623 9.48267 3.02944 10.432 3.00064 11.6409C2.97184 12.8497 3.9223 13.8454 5.82322 15.8368L7.77989 17.8866C9.76116 19.9622 10.7518 21 12 21C12.7074 21 13.3321 20.6667 14.1013 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stackVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.1016 14C20.7005 13.2683 21 12.6705 21 12C21 10.7919 20.0278 9.81971 18.0834 7.87531L16.1247 5.9166C14.1803 3.9722 13.2081 3 12 3C10.7919 3 9.81971 3.9722 7.87531 5.9166L5.9166 7.87531C3.9722 9.81971 3 10.7919 3 12C3 13.2081 3.9722 14.1803 5.9166 16.1247L7.87531 18.0834C9.81971 20.0278 10.7919 21 12 21C12.7074 21 13.3339 20.6667 14.1221 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stack2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 21.5V17M21 20L20.5617 20.5769C19.841 21.5256 19.4806 22 19 22C18.5194 22 18.159 21.5256 17.4383 20.5769L17 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 19.5px' }" />
            <motion.circle cx="12" cy="12" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
