<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiChemistry02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after coffee-02: the vessel tips, decants, and rights itself
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(16.65deg)', 'rotate(20.36deg)', 'rotate(-1.85deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.83,
      times: [0, 0.28, 0.55, 0.82, 1],
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
            <motion.path d="M14.9998 22H6.40743C5.07774 22 3.99982 20.9221 3.99982 19.5924C3.99982 19.2033 4.09413 18.8199 4.27469 18.4752L9.49982 8.5V2H14.4998V8.5L16.4998 12.3181" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.25px 22px' }" />
            <motion.path d="M7.99991 2H15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.25px 22px' }" />
            <motion.path d="M7.99991 11.5H15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.25px 22px' }" />
            <motion.path d="M18.4999 15L18.242 15.697C17.9038 16.611 17.7347 17.068 17.4013 17.4014C17.0679 17.7348 16.6109 17.9039 15.6969 18.2421L14.9999 18.5L15.6969 18.7579C16.6109 19.0961 17.0679 19.2652 17.4013 19.5986C17.7347 19.932 17.9038 20.389 18.242 21.303L18.4999 22L18.7578 21.303C19.096 20.389 19.2651 19.932 19.5985 19.5986C19.9319 19.2652 20.3889 19.0961 21.3029 18.7579L21.9999 18.5L21.3029 18.2421C20.3889 17.9039 19.9319 17.7348 19.5985 17.4014C19.2651 17.068 19.096 16.611 18.7578 15.697L18.4999 15Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.25px 22px' }" />
          </svg>
        </div>
</template>
