<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PointingLeft05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the fingertip commits toward the direction it already points
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.77px) scaleX(0.9) scaleY(1.04)', 'translateX(1.93px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M8 13.0004L8 14.0004C8 15.105 8.89543 16.0004 10 16.0004M10 16.0004L11 16.0004M10 16.0004C9.44771 16.0004 9 16.4481 9 17.0004C9 18.105 9.89543 19.0004 11 19.0004M11 19.0004L12 19.0004M11 19.0004C10.4765 19.0004 10.0783 19.4705 10.1644 19.9868L10.2215 20.3292C10.3822 21.2936 11.2166 22.0004 12.1943 22.0004L13.6668 22C15.8402 22 16.9269 22 17.792 21.6689C18.2939 21.4769 18.9339 20.9703 19.3964 20.5652C19.7964 20.2148 20.3038 20 20.8356 20L22.0002 20M10 13.0002L3.5 13.0002C2.67157 13.0002 2 12.3286 2 11.5002C2 10.6718 2.67157 10.0002 3.5 10.0002L13.4624 10L11.837 8.3797C11.1239 7.66877 11.1889 6.49772 11.9765 5.86965C12.5791 5.38907 13.4315 5.3758 14.0489 5.83738L18.6471 9.43707C19.5269 10.1258 20.8829 10.5 22.0002 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 13.69px' }" />
            <motion.path d="M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 13.69px' }" />
          </svg>
        </div>
</template>
