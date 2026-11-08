<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailEdit02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the inner flap redraws and the pen scribbles
// authored from scripts/authored
const flapVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.56,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const penVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0.6px)',
      'translate(0.6px, -0.3px)',
      'translate(-0.4px, 0.3px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.22,
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
            <motion.path d="M7.00235 7.75L9.94437 9.48943C11.6596 10.5035 12.3451 10.5035 14.0603 9.48943L17.0023 7.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M21.9977 10.75V9.77844C21.9323 6.71114 21.8996 5.17749 20.7679 4.04141C19.6361 2.90532 18.061 2.86574 14.9107 2.78659C12.9692 2.73781 11.0467 2.7378 9.10511 2.78658C5.95487 2.86573 4.37975 2.9053 3.24799 4.04139C2.11624 5.17748 2.08353 6.71113 2.01812 9.77843C1.99709 10.7647 1.99709 11.7451 2.01812 12.7314C2.08354 15.7987 2.11624 17.3323 3.248 18.4684C4.37975 19.6045 5.95487 19.6441 9.10512 19.7232C9.57337 19.735 10.5358 19.7439 11.0024 19.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.8546 13.6893L21.547 14.3817C22.1327 14.9675 22.1327 15.9172 21.547 16.503L17.9196 20.1987C17.6342 20.484 17.2692 20.6764 16.8725 20.7505L14.6244 21.2385C14.2694 21.3156 13.9533 21.0004 14.0294 20.6452L14.5079 18.4099C14.582 18.0132 14.7743 17.6482 15.0597 17.3629L18.7333 13.6893C19.3191 13.1036 20.2688 13.1036 20.8546 13.6893Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="penVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17px' }" />
          </svg>
        </div>
</template>
