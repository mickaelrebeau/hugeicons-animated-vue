<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cash01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the coin in the note flips twice and a glint runs off the corner
// authored from scripts/authored
const coinVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.9199999999999999, times: [0, 0.25, 0.5, 0.75, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const glintVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(0.2)', opacity: 0 },
  animate: {
    transform: [
      'rotate(0deg) scale(0.2)',
      'rotate(0deg) scale(0.2)',
      'rotate(45deg) scale(1.1)',
      'rotate(90deg) scale(0.2)',
    ],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.8,
      delay: 0.3,
      times: [0, 0.3, 0.6, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
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
            <path d="M2.01709 13.5C4.21666 13.5 5.99977 15.2831 5.99977 17.4827" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 17.4827V17.3908C18 15.242 19.742 13.5 21.8908 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M5.99977 3.51562C5.99977 5.7152 4.21666 7.4983 2.01709 7.4983" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 3.51562C18 5.69594 19.769 7.46705 21.9423 7.49789" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 3.5H8C5.17157 3.5 3.75736 3.5 2.87868 4.37868C2 5.25736 2 6.67157 2 9.5V11.5C2 14.3284 2 15.7426 2.87868 16.6213C3.75736 17.5 5.17157 17.5 8 17.5H16C18.8284 17.5 20.2426 17.5 21.1213 16.6213C22 15.7426 22 14.3284 22 11.5V9.5C22 6.67157 22 5.25736 21.1213 4.37868C20.2426 3.5 18.8284 3.5 16 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M5 20.5H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
            <motion.path d="M20.4 1.2V3.2M19.4 2.2H21.4" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="glintVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
