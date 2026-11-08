<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SmartPhone04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the side signal arc pulses out of the phone
// authored from scripts/authored
const signalVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M19.0483 16.4922C20.2541 15.3405 21 13.7495 21 11.9922C21 10.2348 20.2541 8.64384 19.0483 7.49219M17 9.74219C17.6029 10.318 17.9759 11.1135 17.9759 11.9922C17.9759 12.8709 17.6029 13.6664 17 14.2422" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="signalVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12px' }" />
            <motion.path d="M16 7C16 4.64298 16 3.46447 15.2678 2.73223C14.5355 2 13.357 2 11 2H8C5.64298 2 4.46447 2 3.73223 2.73223C3 3.46447 3 4.64298 3 7V17C3 19.357 3 20.5355 3.73223 21.2678C4.46447 22 5.64298 22 8 22H11C13.357 22 14.5355 22 15.2678 21.2678C16 20.5355 16 19.357 16 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 12px' }" />
            <path d="M11.5 2H7.5L8 3H11L11.5 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
