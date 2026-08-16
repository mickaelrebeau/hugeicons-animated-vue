<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirplayLineIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cast mark rises into the screen and the screen acknowledges it
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const castMarkVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(1)' },
  animate: {
    transform: [
      'translateY(0px) scale(1)',
      'translateY(-2.2px) scale(1.04)',
      'translateY(0.2px) scale(0.99)',
      'translateY(0px) scale(1)',
    ],
    transition: { duration: 0.68, times: [0, 0.38, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M4.5 18C3.96555 17.8228 3.53433 17.5662 3.17157 17.1945C2 15.994 2 14.0618 2 10.1975C2 6.33316 2 4.40099 3.17157 3.2005C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.2005C22 4.40099 22 6.33316 22 10.1975C22 14.0618 22 15.994 20.8284 17.1945C20.4657 17.5662 20.0345 17.8228 19.5 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M8.91499 16.7661C10.1081 15.0762 10.7046 14.2312 11.5143 14.0528C11.8336 13.9824 12.1664 13.9824 12.4857 14.0528C13.2954 14.2312 13.8919 15.0762 15.085 16.7661C16.4811 18.7436 17.1791 19.7324 16.9605 20.5425C16.875 20.8594 16.7031 21.151 16.4611 21.3897C15.8425 22 14.5617 22 12 22C9.43831 22 8.15747 22 7.5389 21.3897C7.29691 21.151 7.12502 20.8594 7.03949 20.5425C6.82085 19.7324 7.5189 18.7436 8.91499 16.7661Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="castMarkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
