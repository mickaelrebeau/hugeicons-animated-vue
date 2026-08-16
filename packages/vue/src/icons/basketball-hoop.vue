<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BasketballHoopIcon' })

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
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.37px) scaleY(0.82)', 'translateY(-3.32px) scaleY(1.08)', 'translateY(0.49px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
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
            <motion.path d="M5 17C4.37188 16.8651 3.87905 16.6488 3.46243 16.3018C3.25989 16.1331 3.07418 15.9446 2.90796 15.7391C2 14.6163 2 12.9481 2 9.61164C2 6.27522 2 4.60701 2.90796 3.48419C3.07418 3.27864 3.25989 3.09016 3.46243 2.92147C4.56878 2 6.21252 2 9.5 2H14.5C17.7875 2 19.4312 2 20.5376 2.92147C20.7401 3.09016 20.9258 3.27864 21.092 3.48419C22 4.60701 22 6.27522 22 9.61164C22 12.9481 22 14.6163 21.092 15.7391C20.9258 15.9446 20.7401 16.1331 20.5376 16.3018C20.1209 16.6488 19.6281 16.8651 19 17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M6 13H7.33333M7.33333 13L8.5 22M7.33333 13H12M18 13H16.6667M16.6667 13L15.5 22M16.6667 13H12M12 13V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M8 10C8.05893 8.04825 9.26181 8 10.9978 8H13.0022C14.7382 8 15.9411 8.04825 16 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M8 16.5H16M8.44444 20H15.5556" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
