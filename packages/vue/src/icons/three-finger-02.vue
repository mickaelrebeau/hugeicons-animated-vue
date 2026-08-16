<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ThreeFinger02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the fingertip presses and releases the target
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.87px) scaleX(0.9) scaleY(1.04)', 'translateX(2.16px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M7.75971 13.4795L7.74145 5.02886C7.73965 4.1996 8.41205 3.52639 9.2421 3.52639C10.0709 3.52639 10.7428 4.19762 10.7428 5.02563M10.7428 5.02563V10.0056M10.7428 5.02563L10.7428 3.49728C10.7428 2.66928 11.4146 1.99805 12.2434 1.99805C13.0735 1.99805 13.7459 2.67125 13.7441 3.50051L13.7441 11.0103M16.7454 11.9977V10.1448M16.7454 10.1448V5.48285C16.7472 4.65359 16.0748 3.98039 15.2448 3.98039C14.416 3.98039 13.7441 4.65162 13.7441 5.47962M16.7454 10.1448C17.552 10.024 19.5243 10.1448 19.7475 12.0023V15.684C19.7475 17.0435 19.5178 18.1434 18.1285 19.7409C17.6131 20.4161 17.6846 21.0947 17.6846 22.002M7.75002 8.9992C7.11294 9.55515 5.50173 11.0778 4.59852 12.4555C3.34405 14.369 5.82174 16.8627 6.84695 18.2521C8.36321 20.0648 8.26197 20.0142 8.26197 21.9951" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.34px 12px' }" />
          </svg>
        </div>
</template>
