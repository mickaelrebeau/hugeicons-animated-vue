<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Joystick02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball top tilts the stick on its base
// authored from scripts/authored
const stickVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.34px, 0.33px) rotate(-16deg)',
      'translate(2.06px, 0.25px) rotate(14deg)',
      'translate(-0.59px, 0.02px) rotate(-4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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

const stick2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.69px, 0.10px) rotate(-16deg)',
      'translate(0.60px, 0.07px) rotate(14deg)',
      'translate(-0.17px, 0.01px) rotate(-4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
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
            <motion.path d="M15.5 5.5C15.5 7.433 13.933 9 12 9C10.067 9 8.5 7.433 8.5 5.5C8.5 3.567 10.067 2 12 2C13.933 2 15.5 3.567 15.5 5.5Z" stroke="currentColor" stroke-width="1.5" :variants="stickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.5px' }" />
            <motion.path d="M12 9L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stick2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
            <path d="M16 17H8L8.27758 16.3754C8.79 15.2225 9.04621 14.646 9.54325 14.323C10.0403 14 10.6711 14 11.9328 14H12.0672C13.3289 14 13.9597 14 14.4567 14.323C14.9538 14.646 15.21 15.2225 15.7224 16.3754L16 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17.189 22H6.99519C6.08792 22 5.63428 22 5.37813 21.7472C5.16606 21.538 5.03017 21.223 5.00302 20.8777C4.97022 20.4606 5.20535 19.9541 5.67559 18.941C6.00825 18.2243 6.17458 17.866 6.4039 17.6075C6.59695 17.3899 6.82135 17.2249 7.06392 17.1221C7.35206 17 7.67298 17 8.3148 17H15.845C16.4947 17 16.8196 17 17.1075 17.1219C17.4079 17.249 17.6795 17.4712 17.8982 17.7687C18.1078 18.0537 18.2495 18.4354 18.533 19.1989C18.863 20.0876 19.0281 20.532 18.9961 20.8934C18.963 21.2677 18.8023 21.6026 18.5588 21.8048C18.3237 22 17.9455 22 17.189 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
