<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RotateLeft02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the device swings left and the arrow pushes along
// authored from scripts/authored
const deviceVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-18deg)',
      'translate(0.00px, 0.00px) rotate(12.6deg)',
      'translate(0.00px, 0.00px) rotate(-5.3999999999999995deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.2px, 0px)',
      'translate(0.18px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M13.6394 8.72685L14.1363 11.35L6.02118 6.72095C5.21674 6.26208 4.18811 6.53439 3.72366 7.32917C3.25922 8.12396 3.53484 9.14025 4.33928 9.59912L8.70898 12.0917L7.67067 14.7754C6.98467 16.4988 6.64167 17.3604 6.65396 18.1122C6.67425 19.354 7.12381 20.5016 8.35033 21.2012C9.20462 21.6886 9.89966 21.8069 11.7359 22.1781C12.901 22.4137 13.4836 22.5315 14.0237 22.4897C14.9128 22.4209 15.7501 22.0488 16.3921 21.4372C16.782 21.0657 17.0793 20.5569 17.674 19.5393L18.1781 18.6767C18.9686 17.3238 19.3639 16.6474 19.4646 15.9019C19.4826 15.7682 19.4935 15.6336 19.497 15.4988C19.5169 14.7469 19.2348 14.0173 18.6706 12.5579L16.844 7.83366C16.5633 7.10768 15.8084 6.67325 15.0308 6.79026C14.0961 6.9309 13.4654 7.80872 13.6394 8.72685Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="deviceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.4px 14.4px' }" />
            <motion.path d="M8.86287 4.46465C9.25977 4.8603 10.9864 4.74616 11.6233 4.66671M8.86287 4.46465C8.46598 4.06901 8.45462 2.13697 8.53431 1.50208M8.86287 4.46465C9.88394 2.69642 13.9435 -0.124125 17.9719 2.69642C19.9185 4.05942 20.1932 4.91838 20.5011 5.49381" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
          </svg>
        </div>
</template>
