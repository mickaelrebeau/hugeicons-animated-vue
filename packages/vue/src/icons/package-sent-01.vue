<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PackageSent01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sent: it pulls back, banks, and leaves toward the top-right
// generated from @hugeicons/core-free-icons
const planeVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.98px, -0.6px) rotate(-0.99deg)', 'translate(7.93px, -4.96px) rotate(-5.95deg)', 'translate(15.87px, -11.9px) rotate(-10.91deg)', 'translate(25.79px, -17.85px) rotate(-12.89deg)', 'translate(-21.82px, 11.9px) rotate(11.9deg)', 'translate(-7.93px, 3.97px) rotate(3.97deg)', 'translate(0px, 0px) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible', 'visible', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 1.42,
      times: [0, 0.08, 0.2, 0.36, 0.48, 0.52, 0.78, 1],
      ease: [
        'easeIn',
        'easeIn',
        'easeIn',
        'linear',
        'linear',
        'easeOut',
        [0.23, 1, 0.32, 1],
      ],
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
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="hidden">
            <motion.path d="M2.5 7.5V13.5C2.5 17.2712 2.5 19.1569 3.67157 20.3284C4.84315 21.5 6.72876 21.5 10.5 21.5H14M21.5 12V7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M3.86909 5.31461L2.5 7.5H21.5L20.2478 5.41303C19.3941 3.99021 18.9673 3.2788 18.2795 2.8894C17.5918 2.5 16.7621 2.5 15.1029 2.5H8.95371C7.32998 2.5 6.51812 2.5 5.84013 2.8753C5.16215 3.2506 4.73113 3.93861 3.86909 5.31461Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <motion.path d="M12 7.5V2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <path d="M10 10.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21.5 17.5C21.5 17.5 19.2905 14.5 18.5 14.5C17.7094 14.5 15.5 17.5 15.5 17.5M18.5 15V21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18px' }" />
          </svg>
        </div>
</template>
