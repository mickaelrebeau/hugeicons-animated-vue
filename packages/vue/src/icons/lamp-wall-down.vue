<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LampWallDownIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wall lamp light beams downward
// authored from scripts/authored
const shadeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.05)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const glowVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1.2)',
      'translate(0.00px, 0px) scaleX(0.95)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
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

const beamVariants: Variants = {
  normal: { transform: 'translateY(-1px)', opacity: 0 },
  animate: {
    transform: ['translateY(-1px)', 'translateY(-1px)', 'translateY(0px)', 'translateY(0.6px)'],
    opacity: [0, 0, 1, 0],
    transition: { duration: 0.8, times: [0, 0.2, 0.5, 1], ease: 'easeOut' },
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
            <motion.path d="M8.65938 21H19.3406C20.257 21 21 20.2571 21 19.3406C21 19.1159 20.9543 18.8935 20.8658 18.6869L19.039 14.4243C18.5351 13.2485 18.2831 12.6606 17.7822 12.3303C17.2812 12 16.6416 12 15.3624 12H12.6376C11.3583 12 10.7187 12 10.2178 12.3303C9.71686 12.6606 9.4649 13.2485 8.96099 14.4243L7.13416 18.6869C7.04563 18.8935 6.99998 19.1159 6.99998 19.3406C6.99998 20.2571 7.74292 21 8.65938 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shadeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 16.5px' }" />
            <motion.path d="M8.99998 16H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="glowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 16px' }" />
            <path d="M2.99995 7.66667V4.33333C2.99995 4.02334 2.99995 3.86835 3.03403 3.74118C3.1265 3.39609 3.39604 3.12654 3.74114 3.03407C3.8683 3 4.0233 3 4.33329 3C4.95327 3 5.26326 3 5.51759 3.06815C6.20778 3.25308 6.74687 3.79218 6.93181 4.48236C6.99995 4.73669 6.99995 5.04669 6.99995 5.66667V6.33333C6.99995 6.95331 6.99995 7.26331 6.93181 7.51764C6.74687 8.20782 6.20778 8.74692 5.51759 8.93185C5.26326 9 4.95327 9 4.33329 9C4.0233 9 3.8683 9 3.74114 8.96593C3.39604 8.87346 3.1265 8.60391 3.03403 8.25882C2.99995 8.13165 2.99995 7.97666 2.99995 7.66667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6.99998 6H7.99998C10.8284 6 12.2426 6 13.1213 6.87868C14 7.75736 14 9.17157 14 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11 19L10 22M14 19V22M17 19L18 22" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="beamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
