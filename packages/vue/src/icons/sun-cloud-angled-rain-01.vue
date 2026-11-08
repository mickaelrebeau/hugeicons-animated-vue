<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SunCloudAngledRain01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sun rocks, then the slanted rain blinks
// authored from scripts/authored
const weatherVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 0.15, 1, 1],
    transition: { duration: 0.8, delay: 0.26, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const sunVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(18deg)',
      'translate(0.00px, 0.00px) rotate(-12.6deg)',
      'translate(0.00px, 0.00px) rotate(5.3999999999999995deg)',
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
            <motion.path d="M12.5 16L11.5 18M17 16L16 18M13.5 20L12.5 22M8 16L7 18M9 20L8 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="weatherVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M17.4776 8.89801L17.5 8.89795C19.9853 8.89795 22 10.8784 22 13.3214C22 14.8551 21.206 16.2065 20 17M17.4776 8.89801C17.4924 8.73611 17.5 8.57216 17.5 8.40646C17.5 5.42055 15.0376 3 12 3C9.12324 3 6.76233 5.17106 6.52042 7.93728M17.4776 8.89801C17.3753 10.0132 16.9286 11.0307 16.2428 11.8469M6.52042 7.93728C3.98398 8.17454 2 10.2745 2 12.8299C2 14.4378 2.78565 15.8652 4 16.7619M6.52042 7.93728C6.67826 7.92251 6.83823 7.91496 7 7.91496C8.12582 7.91496 9.16474 8.28072 10.0005 8.89795" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9" stroke="currentColor" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 5.5px' }" />
          </svg>
        </div>
</template>
