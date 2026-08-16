<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'IceHockeyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the ball loads on the ground and comes back up with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.41px) scaleY(0.82)', 'translateY(-3.43px) scaleY(1.08)', 'translateY(0.5px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.67,
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
            <motion.path d="M14.6341 16.5168L22 3M17.5475 3L12.3738 12.7865C11.7391 13.9871 11.3456 14.149 10.0348 13.749C8.36082 13.2381 5.01415 11.4686 3.34756 12.2423C1.6805 13.0162 1.54011 18.1781 3.03845 19.2361C4.71629 20.4208 9.68674 19.9937 11.7961 19.5103" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.77px 20.42px' }" />
            <motion.path d="M8 13L6 20" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.77px 20.42px' }" />
            <motion.path d="M12 19C12 17.3453 12.3453 17 14 17H18C19.6547 17 20 17.3453 20 19C20 20.6547 19.6547 21 18 21H14C12.3453 21 12 20.6547 12 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.77px 20.42px' }" />
          </svg>
        </div>
</template>
