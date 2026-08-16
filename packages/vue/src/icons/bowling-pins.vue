<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BowlingPinsIcon' })

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
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.45px) scaleY(0.82)', 'translateY(-3.52px) scaleY(1.08)', 'translateY(0.52px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.69,
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
            <motion.path d="M12.5 10.544C13.2611 10.1947 14.1078 10 15 10C18.3137 10 21 12.6863 21 16C21 19.3137 18.3137 22 15 22C14.4821 22 13.9794 21.9344 13.5 21.811" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 22.03px' }" />
            <motion.path d="M17.991 15H18M15 15H15.009M16.4955 13L16.5045 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 22.03px' }" />
            <motion.path d="M5.88423 6.56062L5.45498 4.45142C5.19688 3.18322 6.18394 2 7.5 2C8.81606 2 9.80312 3.18322 9.54502 4.45142L9.11577 6.56062C8.47015 9.73293 10.2277 11.6357 11.4499 14.2704C11.9824 15.4182 12.1332 16.7017 11.8809 17.9385C11.6648 18.998 11.3245 20.6686 10.6053 21.4829C10.1239 22.0281 9.44033 21.9997 8.76023 21.9997H6.23977C5.55967 21.9997 4.87609 22.0281 4.39466 21.4829C3.67546 20.6686 3.33521 18.998 3.11909 17.9385C2.86681 16.7017 3.01761 15.4182 3.55006 14.2704C4.77234 11.6357 6.52985 9.73293 5.88423 6.56062Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 22.03px' }" />
            <motion.path d="M6 9H9" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 22.03px' }" />
          </svg>
        </div>
</template>
