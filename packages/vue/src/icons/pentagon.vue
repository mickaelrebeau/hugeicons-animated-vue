<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PentagonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the pentagon loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.52px) scaleY(0.82)', 'translateY(-3.69px) scaleY(1.08)', 'translateY(0.54px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.71,
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
            <motion.path d="M6.20832 5.4051C8.97801 3.13503 10.3629 2 12 2C13.6371 2 15.022 3.13503 17.7917 5.4051L18.0484 5.61553C20.334 7.48877 21.4767 8.42539 21.8628 9.74129C22.2488 11.0572 21.7895 12.4503 20.8709 15.2364L20.6883 15.7901C19.7073 18.7654 19.2169 20.2531 18.0264 21.1054C16.3758 22.2872 13.9003 21.9578 12 21.9578C8.82548 21.9578 7.16404 21.9578 5.97359 21.1054C4.78315 20.2531 4.29266 18.7654 3.31167 15.7901L3.12909 15.2364C2.21048 12.4503 1.75117 11.0572 2.13722 9.74129C2.52326 8.42539 3.66603 7.48877 5.95157 5.61553L6.20832 5.4051Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.29px' }" />
          </svg>
        </div>
</template>
