<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShieldKeyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shield-02: the shield absorbs a centered impact and returns to shape
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.94)', 'scale(1.08)', 'scale(1)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M18.7088 3.49534C16.8164 2.55382 14.5008 2 11.9999 2C9.49904 2 7.18344 2.55382 5.2911 3.49534C4.36312 3.95706 3.89913 4.18792 3.44954 4.91378C2.99994 5.63965 2.99994 6.34248 2.99994 7.74814V11.2371C2.99994 16.9205 7.54229 20.0804 10.173 21.4338C10.9066 21.8113 11.2734 22 11.9999 22C12.7264 22 13.0932 21.8113 13.8269 21.4338C16.4576 20.0804 20.9999 16.9205 20.9999 11.2371L20.9999 7.74814C20.9999 6.34249 20.9999 5.63966 20.5503 4.91378C20.1007 4.18791 19.6367 3.95706 18.7088 3.49534Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 7.89543 13.1045 7 11.9999 7C10.8954 7 9.99994 7.89543 9.99994 9C9.99994 10.1046 10.8954 11 11.9999 11ZM11.9999 11V13.5M13.9999 16H12.9999C12.4477 16 11.9999 15.5523 11.9999 15V13.5M11.9999 13.5H13.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
