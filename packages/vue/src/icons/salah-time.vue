<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SalahTimeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clock hands sweep round and the figure bows
// authored from scripts/authored
const handsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.15px, -0.18px) rotate(72deg)',
      'translate(0.25px, 1.58px) rotate(252deg)',
      'translate(0.15px, -0.12px) rotate(371deg)',
      'translate(-0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const figureVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.77px, 0.04px) rotate(6deg)',
      'translate(-0.54px, 0.02px) rotate(-4.199999999999999deg)',
      'translate(0.23px, 0.00px) rotate(1.7999999999999998deg)',
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
            <path d="M15.0092 5.00159C13.7435 3.18742 11.3856 2.00044 9.00543 2.00044C5.13698 2.00044 2.00098 5.13565 2.00098 9.00311C2.00098 12.7024 4.87016 15.7493 8.50511 16.0058" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M9.00486 7.00244V9.5034L7.50391 10.5038" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.3px 8.8px' }" />
            <motion.path d="M12.6148 15.5486C11.2537 13.8925 11.0215 12.2295 12.969 10.2102C15.0149 8.38506 16.1931 7.52188 16.507 7.00244C16.8209 7.52188 18.0182 8.38506 20.0641 10.2102C21.9183 11.8643 21.8017 13.8925 20.4405 15.5486M12.6148 15.5486H12.0923M12.6148 15.5486H20.4405M20.4405 15.5486H20.9009M11.0215 15.5486H12.0923M12.0923 15.5486V21.0934C12.1323 21.7611 12.0923 22.0727 13.3035 21.9852H16.4881M20.9009 15.5486H22.0001M20.9009 15.5486V21.1949C21.0177 22.1018 20.2956 21.9427 19.8338 21.9852H16.4881M16.4881 21.9852L16.5235 19.8507" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="figureVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 14.6px' }" />
          </svg>
        </div>
</template>
