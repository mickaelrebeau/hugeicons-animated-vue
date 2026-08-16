<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GolfBatIcon' })

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
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.36px) scaleY(0.82)', 'translateY(-3.31px) scaleY(1.08)', 'translateY(0.49px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.66,
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
            <motion.path d="M7.47095 17.263L12 20.9742C11.6197 21.3637 11.255 21.7646 10.7178 21.9214C10.4486 22 10.1597 22 9.58202 22H6.64577C5.12431 22 3.69593 21.514 3.15891 19.9348C2.65447 18.4514 3.35188 15.9891 5.23816 16C5.93452 16.0041 6.44666 16.4237 7.47095 17.263Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.33px 22px' }" />
            <motion.path d="M12 21L16.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.33px 22px' }" />
            <motion.path d="M17.6206 3.42288L16.1333 9.00001C16.0557 9.29111 16.1934 9.59668 16.4628 9.73142C16.7642 9.8821 17.1308 9.77111 17.298 9.47856L20.1617 4.46705C20.5954 3.70809 20.2263 2.7421 19.397 2.46568C18.6397 2.21323 17.8263 2.65152 17.6206 3.42288Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.33px 22px' }" />
          </svg>
        </div>
</template>
