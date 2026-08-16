<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GpuIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the gpu take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.75deg)', 'scale(1.1) rotate(1.9deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.44, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
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
            <motion.path d="M4 21V5C4 4.53501 4 4.30252 3.94889 4.11177C3.81019 3.59413 3.40587 3.18981 2.88823 3.05111C2.69748 3 2.46499 3 2 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M4 5H17C19.357 5 20.5355 5 21.2678 5.73223C22 6.46447 22 7.64298 22 10V14.5C22 16.857 22 18.0355 21.2678 18.7678C20.5355 19.5 19.357 19.5 17 19.5H12.118C11.4328 19.5 10.8064 19.1129 10.5 18.5C10.1936 17.8871 9.56717 17.5 8.88197 17.5H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 12.25px' }" />
            <motion.path d="M19 11.5C19 13.1568 17.6569 14.5 16 14.5C14.3431 14.5 13 13.1568 13 11.5C13 9.84314 14.3431 8.5 16 8.5C17.6569 8.5 19 9.84314 19 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 11.5px' }" />
            <motion.path d="M7.5 8.5H9.5M7.5 11.5H9.5M7.5 14.5H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 11.5px' }" />
          </svg>
        </div>
</template>
