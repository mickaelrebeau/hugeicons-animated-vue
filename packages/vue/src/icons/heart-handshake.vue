<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HeartHandshakeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hands inside the heart shake
// authored from scripts/authored
const heartVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.04)', 'scale(0.98)', 'scale(1.024)', 'scale(1)'],
    transition: { duration: 0.72, delay: 0.3, times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut' },
  },
};

const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.6px)',
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
            <motion.path d="M19.6692 14.1693C21.01 12.463 22 10.5686 22 8.69451C22 5.82569 19.8947 3.50006 17 3.50006C15.5 3.50006 14 4.00006 12 6.00006C10 4.00006 8.5 3.50006 7 3.50006C4.10526 3.50006 2 5.82569 2 8.69451C2 13.7667 9.25143 18.9873 11.0835 20.2253C11.3541 20.4082 11.6734 20.5001 12 20.5001C12.3266 20.5001 12.6459 20.4082 12.9165 20.2253C13.0217 20.1542 13.1449 20.0699 13.2835 19.9733C14.2796 19.2789 14.3586 17.8586 13.5 17.0001" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.1px' }" />
            <motion.path d="M18.5 10.5001L19.49 11.4901C20.1988 12.1989 20.3483 13.295 19.7336 14.0868C18.9878 15.0475 17.5632 15.0633 16.7032 14.2033L16.5 14.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.4px 12.8px' }" />
            <motion.path d="M16.5 14.0001L16.6942 14.1943C17.5691 15.0692 17.51 16.5613 16.5833 17.3812C15.7193 18.1455 14.4965 17.9966 13.6808 17.1808L13.5 17.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 16.1px' }" />
            <motion.path d="M12 6.00006L9.25001 8.75006C8.55965 9.44042 8.55965 10.5597 9.25001 11.2501C9.94036 11.9404 11.0597 11.9404 11.75 11.2501L13.5 9.50006C14.0453 8.95481 14.3179 8.68219 14.612 8.53645C15.1715 8.25917 15.8285 8.25917 16.388 8.53645C16.6821 8.68219 16.9548 8.95481 17.5 9.50006L19 11.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.8px 9px' }" />
          </svg>
        </div>
</template>
