<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwipeRight02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the gesture gathers momentum, crosses the surface, and eases out
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.16px) rotate(3.95deg)', 'translateX(-0.39px) rotate(-0.99deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M21 4.5H15M21 4.5C21 3.79977 19.0057 2.49153 18.5 2M21 4.5C21 5.20023 19.0057 6.50847 18.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 22px' }" />
            <motion.path d="M15.3913 21.998C15.3395 20.084 15.4684 19.8535 15.6052 19.4277C15.7419 19.002 16.6982 17.4665 17.0366 16.3695C18.1313 12.8202 17.111 12.0653 15.7507 11.0588C14.2422 9.94257 11.3968 9.37728 9.98573 9.49966V3.7462C9.98573 2.78288 9.20481 2.00195 8.24148 2.00195C7.27816 2.00195 6.49723 2.78288 6.49723 3.7462V9.96607M6.49774 21.9988V20.9854C6.43328 20.041 5.49529 18.9235 4.32672 17.3166C3.12509 15.576 2.86688 14.6973 3.05591 13.8848C3.15329 13.4694 3.40594 12.7832 4.64647 11.6104L6.49723 9.96607M6.49723 14.0323V9.96607" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 22px' }" />
          </svg>
        </div>
</template>
