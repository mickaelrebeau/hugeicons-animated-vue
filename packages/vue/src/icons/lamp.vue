<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LampIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shade tilts on its stand and the light pops
// authored from scripts/authored
const shadeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.96px, 0.08px) rotate(-10deg)',
      'translate(0.57px, 0.03px) rotate(6deg)',
      'translate(-0.19px, 0.00px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const baseVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const burstVariants: Variants = {
  normal: { transform: 'scale(0.4)', opacity: 0 },
  animate: {
    transform: ['scale(0.4)', 'scale(0.4)', 'scale(1)', 'scale(1.22)'],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.7,
      delay: 0.2,
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
            <motion.path d="M12 2C13.6348 2 14.4522 2 15.1648 2.28954C15.5483 2.44535 15.9052 2.66072 16.2227 2.92783C16.8128 3.42423 17.1996 4.15077 17.9732 5.60384L18.7735 7.10708C20.174 9.73759 20.8743 11.0528 20.2973 12.0264C19.7203 13 18.2406 13 15.2811 13H8.71885C5.75941 13 4.27968 13 3.7027 12.0264C3.12572 11.0528 3.82597 9.73758 5.22647 7.10708L6.02681 5.60384C6.80043 4.15076 7.18725 3.42423 7.77728 2.92783C8.09479 2.66072 8.45174 2.44535 8.83521 2.28954C9.54784 2 10.3652 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shadeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
            <path d="M12 13V19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M9.45585 20.2991C9.72509 19.8443 9.85972 19.6168 10.0568 19.4477C10.2568 19.276 10.5028 19.1476 10.7739 19.0733C11.0411 19 11.3421 19 11.944 19H12.0562C12.6582 19 12.9592 19 13.2263 19.0733C13.4976 19.1476 13.7436 19.2761 13.9437 19.4479C14.1407 19.617 14.2753 19.8445 14.5444 20.2994C14.8656 20.8422 15.0262 21.1136 14.9965 21.3346C14.9666 21.5571 14.8206 21.7567 14.5984 21.8787C14.3777 22 14.0186 22 13.3003 22H10.6999C9.98144 22 9.6222 22 9.40146 21.8787C9.17933 21.7566 9.03337 21.557 9.00349 21.3346C8.97379 21.1135 9.13448 20.8421 9.45585 20.2991Z" stroke="currentColor" stroke-width="1.5" :variants="baseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M13.73 16L15.03 16.75M12 17L12 18.5M10.27 16L8.97 16.75M10.27 14L8.97 13.25M12 13L12 11.5M13.73 14L15.03 13.25" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="burstVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
