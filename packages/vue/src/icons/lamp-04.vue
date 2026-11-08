<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Lamp04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pull switch is tugged and the shade lights
// authored from scripts/authored
const pullVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1px)',
      'translate(0px, -0.15px)',
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

const cordVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.50px) scaleY(1.25)',
      'translate(0px, -0.10px) scaleY(0.95)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
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

const shadeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.05)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const burstVariants: Variants = {
  normal: { transform: 'scale(0.4)', opacity: 0 },
  animate: {
    transform: ['scale(0.4)', 'scale(0.4)', 'scale(1)', 'scale(1.22)'],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.7,
      delay: 0.24,
      times: [0, 0.3, 0.46, 1],
      ease: [
        'linear',
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
            <motion.path d="M12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19Z" stroke="currentColor" stroke-width="1.5" :variants="pullVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.5px' }" />
            <motion.path d="M12 16L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cordVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <path d="M12 22V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8 22L16 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.0259 12H8.9741C6.76217 12 5.65621 12 5.18728 11.3145C4.71834 10.6289 5.17219 9.67558 6.07989 7.7689L7.70343 4.35854C8.24854 3.21351 8.52109 2.64099 9.04548 2.3205C9.56986 2 10.234 2 11.5624 2H12.4376C13.766 2 14.4301 2 14.9545 2.3205C15.4789 2.64099 15.7515 3.21351 16.2966 4.35854L17.9201 7.76891C18.8278 9.67558 19.2817 10.6289 18.8127 11.3145C18.3438 12 17.2378 12 15.0259 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shadeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M18.93 11L20.23 11.75M12 15L12 16.5M5.07 11L3.77 11.75M5.07 3L3.77 2.25M12 -1L12 -2.5M18.93 3L20.23 2.25" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="burstVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
