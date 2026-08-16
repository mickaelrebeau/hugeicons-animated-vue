<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirplaneSeatIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the seat back tips away and the belt draws tight across the lap
// authored from scripts/authored
const seatBackVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-4.2deg)', 'rotate(1.1deg)', 'rotate(0deg)'],
    transition: { duration: 0.78, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const beltVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(1)'],
    transition: { duration: 0.6, delay: 0.14, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M8.48169 18H17.9722C19.0921 18 20 17.1077 20 16.0071C20 14.5 17.9722 14.0141 17.9722 14.0141C17.9722 14.0141 14.2844 12.5964 10 14C10 14 9.86099 8.87274 7.70985 3.17067C7.28543 2.04566 5.90119 1.66155 4.88539 2.3271C4.21507 2.7663 3.8807 3.55966 4.0387 4.33605L6.49327 16.3979C6.68283 17.3295 7.51507 18 8.48169 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatBackVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 18px' }" />
            <motion.path d="M12.5 10.5H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 10.5px' }" />
            <path d="M16 18L13 22M13 22H8M13 22H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
