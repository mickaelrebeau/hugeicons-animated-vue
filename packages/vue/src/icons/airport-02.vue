<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Airport02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: a small craft banks past the tower, then the building settles
// generated from @hugeicons/core-free-icons
const planeVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.48px, -1.3px) rotate(-6.49deg)', 'translate(2.97px, -0.46px) rotate(-1.86deg)', 'translate(0.37px, 0.32px) rotate(1.11deg)', 'translate(0px, 0px) rotate(0deg)'],
    transition: {
      duration: 0.98,
      times: [0, 0.28, 0.55, 0.8, 1],
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M18.5 15H5.5C4.09554 15 3.39331 15 2.88886 15.3371C2.67048 15.483 2.48298 15.6705 2.33706 15.8889C2 16.3933 2 17.0955 2 18.5C2 19.9045 2 20.6067 2.33706 21.1111C2.48298 21.3295 2.67048 21.517 2.88886 21.6629C3.39331 22 4.09554 22 5.5 22H18.5C19.9045 22 20.6067 22 21.1111 21.6629C21.3295 21.517 21.517 21.3295 21.6629 21.1111C22 20.6067 22 19.9045 22 18.5C22 17.0955 22 16.3933 21.6629 15.8889C21.517 15.6705 21.3295 15.483 21.1111 15.3371C20.6067 15 19.9045 15 18.5 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.5px' }" />
            <motion.path d="M18 18.5V18.51" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18.51px' }" />
            <motion.path d="M14 18.5V18.51" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 18.51px' }" />
            <motion.path d="M10 18.5V18.51" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 18.51px' }" />
            <motion.path d="M6 18.5V18.51" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 18.51px' }" />
            <motion.path d="M20 15V14.5C20 13.0955 20 12.3933 19.6629 11.8889C19.517 11.6705 19.3295 11.483 19.1111 11.3371C18.6067 11 17.9045 11 16.5 11C15.0955 11 14.3933 11 13.8889 11.3371C13.6705 11.483 13.483 11.6705 13.3371 11.8889C13 12.3933 13 13.0955 13 14.5V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 13px' }" />
            <motion.path d="M9 15V8H5V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 11.5px' }" />
            <motion.path d="M11.191 4H2.80902C2.36221 4 2 4.36221 2 4.80902C2 4.93461 2.02924 5.05848 2.08541 5.17082L2.67082 6.34164C3.07426 7.14852 3.27598 7.55195 3.63845 7.77598C4.00093 8 4.45199 8 5.3541 8H8.6459C9.54801 8 9.99907 8 10.3615 7.77598C10.724 7.55195 10.9257 7.14852 11.3292 6.34164L11.9146 5.17082C11.9708 5.05848 12 4.93461 12 4.80902C12 4.36221 11.6378 4 11.191 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 6px' }" />
            <motion.path d="M7 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 3px' }" />
          </svg>
        </div>
</template>
