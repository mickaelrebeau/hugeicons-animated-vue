<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OnlineLearning04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the status signal expands from source to outer ring
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.88px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const sourceVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 0.92,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M6 6C4.90328 6.05476 4.2191 6.21819 3.73223 6.7059C3 7.43939 3 8.61994 3 10.981V16.9914C3 19.3525 3 20.533 3.73223 21.2665C4.46447 22 5.64298 22 8 22H9C11.357 22 12.5355 22 13.2678 21.2665C14 20.533 14 19.3525 14 16.9914V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 19px' }" />
            <motion.path d="M15 4V11.5M9.77631 2.08242C13.178 1.58922 15 3.47059 15 3.47059C15 3.47059 16.822 1.58922 20.2237 2.08242C20.6819 2.14885 21 2.55824 21 3.02124V9.49465C21 10.1407 20.3935 10.6121 19.7499 10.5572C16.6531 10.293 15 12 15 12C15 12 13.3469 10.293 10.2501 10.5572C9.60646 10.6121 9 10.1407 9 9.49465V3.02124C9 2.55824 9.3181 2.14885 9.77631 2.08242Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 19px' }" />
            <motion.path d="M8.625 19H8.5M8.75 19C8.75 19.1381 8.63807 19.25 8.5 19.25C8.36193 19.25 8.25 19.1381 8.25 19C8.25 18.8619 8.36193 18.75 8.5 18.75C8.63807 18.75 8.75 18.8619 8.75 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sourceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 19px' }" />
          </svg>
        </div>
</template>
