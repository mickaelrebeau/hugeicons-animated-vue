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

// after grid-view: the pieces of the heart handshake take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.83px) rotate(-2.15deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.06deg)', 'scale(1.1) rotate(2.03deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

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
            <motion.path d="M19.6692 14.1693C21.01 12.463 22 10.5686 22 8.69451C22 5.82569 19.8947 3.50006 17 3.50006C15.5 3.50006 14 4.00006 12 6.00006C10 4.00006 8.5 3.50006 7 3.50006C4.10526 3.50006 2 5.82569 2 8.69451C2 13.7667 9.25143 18.9873 11.0835 20.2253C11.3541 20.4082 11.6734 20.5001 12 20.5001C12.3266 20.5001 12.6459 20.4082 12.9165 20.2253C13.0217 20.1542 13.1449 20.0699 13.2835 19.9733C14.2796 19.2789 14.3586 17.8586 13.5 17.0001" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.5 10.5001L19.49 11.4901C20.1988 12.1989 20.3483 13.295 19.7336 14.0868C18.9878 15.0475 17.5632 15.0633 16.7032 14.2033L16.5 14.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18.42px 12.78px' }" />
            <motion.path d="M16.5 14.0001L16.6942 14.1943C17.5691 15.0692 17.51 16.5613 16.5833 17.3812C15.7193 18.1455 14.4965 17.9966 13.6808 17.1808L13.5 17.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '15.53px 16.07px' }" />
            <motion.path d="M12 6.00006L9.25001 8.75006C8.55965 9.44042 8.55965 10.5597 9.25001 11.2501C9.94036 11.9404 11.0597 11.9404 11.75 11.2501L13.5 9.50006C14.0453 8.95481 14.3179 8.68219 14.612 8.53645C15.1715 8.25917 15.8285 8.25917 16.388 8.53645C16.6821 8.68219 16.9548 8.95481 17.5 9.50006L19 11.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
