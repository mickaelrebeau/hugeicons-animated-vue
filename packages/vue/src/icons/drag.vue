<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DragIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the grabbed object pulls away, carries momentum, and returns
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.5px) rotate(4.37deg)', 'translateX(-0.44px) rotate(-1.09deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.65,
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
            <motion.path d="M20.964 4H16.9719M20.964 4C20.964 4.56018 19.4727 5.60678 18.9679 6M20.964 4C20.964 3.43982 19.4727 2.39322 18.9679 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.38px 22px' }" />
            <motion.path d="M2.99921 4H6.99136M2.99921 4C2.99921 3.43982 4.49058 2.39322 4.99529 2M2.99921 4C2.99921 4.56018 4.49058 5.60678 4.99529 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.38px 22px' }" />
            <motion.path d="M9.81505 22.0006V21.0595C9.81505 20.4116 9.60526 19.781 9.21707 19.2622L5.39435 14.1534C5.07668 13.7288 4.83978 13.2141 4.98565 12.7043C5.34585 11.4454 6.76792 10.3261 8.35901 12.2974L9.95917 14.0049V3.59381C10.0573 1.76459 13.1325 1.18685 13.4504 3.59381V9.52698C14.933 9.33608 21.9162 10.378 20.9003 14.7917C20.8517 15.0026 20.8032 15.2167 20.7557 15.4279C20.5493 16.346 19.9407 17.98 19.2696 18.9355C18.5705 19.9309 18.897 21.5353 18.8172 22.0019" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.38px 22px' }" />
          </svg>
        </div>
</template>
