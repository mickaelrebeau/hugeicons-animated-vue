<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TongueWinkLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the face winks its left eye and the tongue wags
// authored from scripts/authored
const tongueVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.59px, 0.08px) rotate(8deg)',
      'translate(0.41px, -0.11px) rotate(-5.6deg)',
      'translate(-0.18px, 0.03px) rotate(2.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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

const winkVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1)', 'scaleY(1)'],
    transition: { duration: 0.66, times: [0, 0.3, 0.6, 1], ease: [0.77, 0, 0.175, 1] },
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
            <path d="M12 21.9995C17.5228 21.9995 22 17.5223 22 11.9995C22 6.4766 17.5228 1.99945 12 1.99945C6.47715 1.99945 2 6.4766 2 11.9995C2 13.231 2.22261 14.4105 2.62979 15.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6.34103 13.9996C7.1647 16.33 9.38718 17.9996 11.9996 17.9996C14.6121 17.9996 16.8345 16.33 17.6582 13.9996M11 18L9.22695 20.7093C8.52749 21.9435 6.97838 22.3664 5.76689 21.6538C4.55541 20.9412 4.14032 19.363 4.83977 18.1287L6.61283 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tongueVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.9px 18.2px' }" />
            <motion.path d="M10 8.79915C9.65795 8.31337 9.11338 7.99915 8.5 7.99915C7.88662 7.99915 7.34205 8.31337 7 8.79915" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="winkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 8.4px' }" />
            <path d="M16.125 8.38615V8.91564M15.75 8.74915C15.75 8.33493 15.9179 7.99915 16.125 7.99915C16.3321 7.99915 16.5 8.33493 16.5 8.74915C16.5 9.16336 16.3321 9.49915 16.125 9.49915C15.9179 9.49915 15.75 9.16336 15.75 8.74915Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
