<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HockeyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the ball loads on the ground and comes back up with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.54px) scaleY(0.82)', 'translateY(-3.73px) scaleY(1.08)', 'translateY(0.55px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.72,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M11.8614 19.224L20.8481 3.72126C21.1689 3.16783 20.9654 2.47169 20.3905 2.15561C19.8259 1.8452 19.1047 2.01295 18.754 2.53628L8.61227 17.6689C8.23552 18.2311 7.46084 18.4113 6.85433 18.0778C6.04998 17.6356 6.17032 16.8476 6.44582 16.1473C6.70887 15.4787 6.42574 14.727 5.77639 14.37C4.91469 13.8963 4.03029 14.3288 3.57111 15.0861C2.25235 17.2611 3.35339 20.3548 5.48365 21.526C7.75091 22.7724 10.5962 21.4065 11.8614 19.224Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.71px 22.77px' }" />
            <motion.circle cx="18.5" cy="19.5" r="2.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.71px 22.77px' }" />
            <motion.path d="M16 7L18 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.71px 22.77px' }" />
          </svg>
        </div>
</template>
