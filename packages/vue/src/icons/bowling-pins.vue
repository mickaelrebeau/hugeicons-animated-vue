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

// the ball rolls into the pin, which wobbles on its base
// authored from scripts/authored
const ballVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.2px)', 'translateX(-0.7px)', 'translateX(0px)'],
    transition: {
      duration: 0.62,
      times: [0, 0.3, 0.55, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'easeIn',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pinVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.56px, 0.12px) rotate(-9deg)',
      'translate(1.05px, 0.05px) rotate(6deg)',
      'translate(-0.35px, 0.01px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
      delay: 0.2,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const neckVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.03px, 0.16px) rotate(-9deg)',
      'translate(1.36px, 0.07px) rotate(6deg)',
      'translate(-0.45px, 0.01px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
      delay: 0.2,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <motion.path d="M12.5 10.544C13.2611 10.1947 14.1078 10 15 10C18.3137 10 21 12.6863 21 16C21 19.3137 18.3137 22 15 22C14.4821 22 13.9794 21.9344 13.5 21.811" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.8px 16px' }" />
            <motion.path d="M17.991 15H18M15 15H15.009M16.4955 13L16.5045 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 14px' }" />
            <motion.path d="M5.88423 6.56062L5.45498 4.45142C5.19688 3.18322 6.18394 2 7.5 2C8.81606 2 9.80312 3.18322 9.54502 4.45142L9.11577 6.56062C8.47015 9.73293 10.2277 11.6357 11.4499 14.2704C11.9824 15.4182 12.1332 16.7017 11.8809 17.9385C11.6648 18.998 11.3245 20.6686 10.6053 21.4829C10.1239 22.0281 9.44033 21.9997 8.76023 21.9997H6.23977C5.55967 21.9997 4.87609 22.0281 4.39466 21.4829C3.67546 20.6686 3.33521 18.998 3.11909 17.9385C2.86681 16.7017 3.01761 15.4182 3.55006 14.2704C4.77234 11.6357 6.52985 9.73293 5.88423 6.56062Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 12px' }" />
            <motion.path d="M6 9H9" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="neckVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 9px' }" />
          </svg>
        </div>
</template>
