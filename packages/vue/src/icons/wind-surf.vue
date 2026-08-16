<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WindSurfIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud: it rides the swell and finds the waterline again
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.36px) rotate(-2.91deg)', 'translateY(0.97px) rotate(2.42deg)', 'translateY(-0.39px) rotate(-0.97deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.85,
      ease: 'easeInOut',
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
            <motion.path d="M8 21L7 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.92px' }" />
            <motion.path d="M22 19H2C7 20.7143 12.9751 22 17 22C20 22 22 19.7347 22 19Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.92px' }" />
            <motion.path d="M16.0103 2C18.1781 7 16.2964 16.3438 15 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.92px' }" />
            <motion.path d="M15.0929 16.9358C9.3081 15.5156 8.37003 12.6904 7.79688 10.911C8.80901 10.0524 11.6989 6.5487 12.9641 4.88797C13.9629 3.41804 14.0749 2.89451 14.9351 3.00177C15.0113 3.01128 15.8034 3.54155 16.2029 3.91879M7.79688 10.911C9.07691 12.6395 13.9342 13.0313 16.2029 13.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.92px' }" />
          </svg>
        </div>
</template>
