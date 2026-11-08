<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SunCloudBigRain01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sun rocks, then the big drop blinks
// authored from scripts/authored
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

const weatherVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 0.15, 1, 1],
    transition: { duration: 0.8, delay: 0.26, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M9 4.65468C8.30552 3.65451 7.15088 3 5.84388 3C3.72096 3 2 4.72674 2 6.85679C2 8.15354 2.63783 9.30081 3.61588 10" stroke="currentColor" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 6.5px' }" />
            <path d="M17.4776 10.0091C17.485 10.0091 17.4925 10.0091 17.5 10.0091C19.9853 10.0091 22 12.0269 22 14.5159C22 16.8512 20.2265 18.7716 17.9548 19M17.4776 10.0091C17.4924 9.8442 17.5 9.67716 17.5 9.50834C17.5 6.46617 15.0376 4 12 4C9.12324 4 6.76233 6.21197 6.52042 9.03032M17.4776 10.0091C17.3753 11.1453 16.9286 12.182 16.2428 13.0136M6.52042 9.03032C3.98398 9.27205 2 11.4116 2 14.0152C2 16.4378 3.71776 18.536 6 19M6.52042 9.03032C6.67826 9.01527 6.83823 9.00758 7 9.00758C8.12582 9.00758 9.16474 9.38023 10.0005 10.0091" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.5 19.5034C9.5 18.2482 10.5532 17.0077 11.2924 16.2917C11.6939 15.9028 12.3061 15.9028 12.7076 16.2917C13.4468 17.0077 14.5 18.2482 14.5 19.5034C14.5 20.7341 13.5533 22 12 22C10.4467 22 9.5 20.7341 9.5 19.5034Z" stroke="currentColor" stroke-width="1.5" :variants="weatherVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
