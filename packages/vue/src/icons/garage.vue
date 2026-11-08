<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GarageIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the door rolls up into the frame and comes back down
// authored from scripts/authored
const slatVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -3px)',
      'translate(0px, -3px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.9,
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

const slat2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -3px)',
      'translate(0px, -3px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1, 1],
    transition: {
      duration: 0.9,
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

const lightVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M9.7812 3.09766L5.6718 5.89369C4.3639 6.78359 3.70995 7.22854 3.35498 7.90548C3 8.58242 3 9.38456 3 10.9888V17.9176C3 19.8421 3 20.8043 3.58579 21.4021C4.17157 22 5.11438 22 7 22H17C18.8856 22 19.8284 22 20.4142 21.4021C21 20.8043 21 19.8421 21 17.9176V10.9888C21 9.38456 21 8.58242 20.645 7.90548C20.29 7.22854 19.6361 6.78359 18.3282 5.89369L14.2188 3.09766C13.1433 2.36589 12.6056 2 12 2C11.3944 2 10.8567 2.36589 9.7812 3.09766Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7 22V17C7 15.1144 7 14.1716 7.58579 13.5858C8.17157 13 9.11438 13 11 13H13C14.8856 13 15.8284 13 16.4142 13.5858C17 14.1716 17 15.1144 17 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 16H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M7 19H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slat2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M12.125 7H12M12.25 7C12.25 7.13807 12.1381 7.25 12 7.25C11.8619 7.25 11.75 7.13807 11.75 7C11.75 6.86193 11.8619 6.75 12 6.75C12.1381 6.75 12.25 6.86193 12.25 7Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
