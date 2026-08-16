<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirplaneSeat02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the seat back reclines on its base and the headrest follows it down
// authored from scripts/authored
const headrestVariants: Variants = {
  normal: { transform: 'rotate(0deg) translateY(0px)' },
  animate: {
    transform: [
      'rotate(0deg) translateY(0px)',
      'rotate(-3.6deg) translateY(-0.4px)',
      'rotate(0.9deg) translateY(0.1px)',
      'rotate(0deg) translateY(0px)',
    ],
    transition: { duration: 0.76, delay: 0.05, times: [0, 0.38, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const seatBackVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-3.6deg)', 'rotate(0.9deg)', 'rotate(0deg)'],
    transition: { duration: 0.76, times: [0, 0.38, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M19.5 7H4.5C5.08771 4.64917 7.19993 3 9.62311 3H14.3769C16.8001 3 18.9123 4.64917 19.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headrestVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <path d="M18 16.5V7H20C20.5523 7 21 7.44772 21 8V16.5C21 17.3284 20.3284 18 19.5 18C18.6716 18 18 17.3284 18 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6 19V7H18V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatBackVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <path d="M3 16.5V8C3 7.44772 3.44772 7 4 7H6V16.5C6 17.3284 5.32843 18 4.5 18C3.67157 18 3 17.3284 3 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
