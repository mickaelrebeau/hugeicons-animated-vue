<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PenToolAddIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the existing shape makes room and the new mark stamps into place
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.49,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-10.11deg) scale(0.82)', 'rotate(3.03deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.42,
      delay: 0.04,
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
            <motion.path d="M14.5995 20.4737L7.63427 21.7672C6.2983 22.0153 5.63031 22.1393 5.24549 21.7545C4.86067 21.3697 4.98471 20.7016 5.2328 19.3656L6.52621 12.4001C6.73362 11.2831 6.83732 10.7246 7.20549 10.3872C7.57365 10.0497 8.24697 9.98389 9.59359 9.85218C10.8915 9.72524 12.1197 9.28032 13.4 8L19 13.6005C17.7197 14.8808 17.2746 16.1083 17.1474 17.4062C17.0155 18.753 16.9495 19.4264 16.6121 19.7945C16.2747 20.1626 15.7163 20.2663 14.5995 20.4737Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.93px 15.07px' }" />
            <motion.path d="M13 16.2105C12.4405 16.1197 11.9289 15.8763 11.5263 15.4737M11.5263 15.4737C11.1237 15.0711 10.8803 14.5595 10.7895 14M11.5263 15.4737L6 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 17.5px' }" />
            <motion.path d="M13.5 8C14.1332 7.06586 15.4907 5.16107 16.7613 5.00976C17.6287 4.90648 18.3472 5.62499 19.7842 7.06202L19.938 7.2158C21.375 8.65283 22.0935 9.37135 21.9902 10.2387C21.8389 11.5092 19.9341 12.8668 19 13.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 9.2px' }" />
            <motion.path d="M5 8L5 2M2 5H8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 5px' }" />
          </svg>
        </div>
</template>
