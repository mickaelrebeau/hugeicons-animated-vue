<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiSearch02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after search-01: the lens leans in, scans, and settles back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg) scale(1)', 'translate(1.29px, -0.57px) rotate(14.49deg) scale(0.78)', 'translate(0.41px, -0.83px) rotate(6.21deg) scale(0.76)', 'translate(-0.67px, 0.26px) rotate(-8.28deg) scale(0.8)', 'translate(-0.16px, 0.1px) rotate(-2.59deg) scale(1.08)', 'translate(0px, 0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 1.25,
      times: [0, 0.32, 0.48, 0.64, 0.84, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
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
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M16.0001 16.5L20 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 11.5px' }" />
            <motion.path d="M18 11.5C18 15.366 14.866 18.5 11 18.5C7.13401 18.5 4 15.366 4 11.5C4 7.63404 7.13401 4.50003 11 4.50003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 11.5px' }" />
            <motion.path d="M15.5 3.50003L15.7579 4.19706C16.0961 5.11105 16.2652 5.56805 16.5986 5.90142C16.932 6.2348 17.389 6.4039 18.303 6.74211L19 7.00003L18.303 7.25795C17.389 7.59616 16.932 7.76527 16.5986 8.09864C16.2652 8.43201 16.0961 8.88901 15.7579 9.803L15.5 10.5L15.2421 9.803C14.9039 8.88901 14.7348 8.43201 14.4014 8.09864C14.068 7.76527 13.611 7.59616 12.697 7.25795L12 7.00003L12.697 6.74211C13.611 6.4039 14.068 6.2348 14.4014 5.90142C14.7348 5.56805 14.9039 5.11105 15.2421 4.19706L15.5 3.50003Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 11.5px' }" />
          </svg>
        </div>
</template>
