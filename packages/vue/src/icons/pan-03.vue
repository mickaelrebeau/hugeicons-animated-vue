<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Pan03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flames flicker under the pot and the steam curls
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(1.6)', 'scaleY(0.8)', 'scaleY(1.3)', 'scaleY(1)'],
    transition: { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const steamVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 1.6px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const spoonVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.71px, 0.85px) rotate(-10deg)',
      'translate(0.32px, -0.30px) rotate(4deg)',
      'translate(-0.08px, 0.08px) rotate(-1deg)',
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
            <motion.path d="M12 20L12 18.5M16 20V18.5M20 20V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 19.3px' }" />
            <path d="M10 20L22 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M21.5556 11H10.4444C10.199 11 10 11.2487 10 11.5556C10 14.0102 11.5919 16 13.5556 16H18.4444C20.4081 16 22 14.0102 22 11.5556C22 11.2487 21.801 11 21.5556 11Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M13 8C14.652 6.97775 12.348 5.02225 14 4M16 8C17.652 6.97775 15.348 5.02225 17 4M19 8C20.652 6.97775 18.348 5.02225 20 4" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="steamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 6px' }" />
            <path d="M10 11L8 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M3.36797 4.36797C3.85859 3.87734 4.65404 3.87734 5.14466 4.36797L7.63203 6.85534C8.12266 7.34596 8.12266 8.14141 7.63203 8.63203C7.14141 9.12266 6.34596 9.12266 5.85534 8.63203L3.36797 6.14466C2.87734 5.65404 2.87734 4.85859 3.36797 4.36797Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="spoonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 6.5px' }" />
          </svg>
        </div>
</template>
