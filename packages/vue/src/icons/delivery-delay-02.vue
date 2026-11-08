<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DeliveryDelay02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the delay clock rattles over the truck
// authored from scripts/authored
const clockVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M19.5 19.5C19.5 20.8807 18.3807 22 17 22C15.6193 22 14.5 20.8807 14.5 19.5C14.5 18.1193 15.6193 17 17 17C18.3807 17 19.5 18.1193 19.5 19.5Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M9.5 19.5C9.5 20.8807 8.38071 22 7 22C5.61929 22 4.5 20.8807 4.5 19.5C4.5 18.1193 5.61929 17 7 17C8.38071 17 9.5 18.1193 9.5 19.5Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M2 12V17C2 17.9346 2 18.4019 2.20096 18.75C2.33261 18.978 2.52197 19.1674 2.75 19.299C3.09808 19.5 3.56538 19.5 4.5 19.5M14.5 19.5H9.5M15 17.5V9C15 7.58579 15 6.87868 14.5607 6.43934C14.1213 6 13.4142 6 12 6H11M15.5 8.5H17.3014C18.1311 8.5 18.5459 8.5 18.8898 8.6947C19.2336 8.8894 19.4471 9.2451 19.8739 9.95651L21.5725 12.7875C21.7849 13.1415 21.8911 13.3186 21.9456 13.5151C22 13.7116 22 13.918 22 14.331V17C22 17.9346 22 18.4019 21.799 18.75C21.6674 18.978 21.478 19.1674 21.25 19.299C20.9019 19.5 20.4346 19.5 19.5 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7.85 7.85L6.5 6.95V4.7M2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="clockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 6.5px' }" />
          </svg>
        </div>
</template>
