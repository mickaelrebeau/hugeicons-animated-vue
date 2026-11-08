<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OfficeChairIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the chair spins on its base
// authored from scripts/authored
const seatVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.3)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 0.6, 0.85, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const armVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-4.90px, 0px) scaleX(0.3)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 0.6, 0.85, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arm2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(4.90px, 0px) scaleX(0.3)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 0.6, 0.85, 1],
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
            <path d="M16 22C14.934 20.7553 13.5337 20 12 20C10.4663 20 9.06603 20.7553 8 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M12 13C10.7319 13 9.39109 13.2193 8.34002 13.5128C7.54859 13.7338 6.91195 14.7415 7.00999 15.5596C7.04632 15.8627 7.30731 16 7.58173 16H16.4183C16.6927 16 16.9537 15.8627 16.99 15.5596C17.0881 14.7415 16.4514 13.7338 15.66 13.5128C14.6089 13.2193 13.2681 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M21 10C19.8954 10 19 10.8954 19 12V13C19 14.1046 18.1046 15 17 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12.5px' }" />
            <motion.path d="M3 10C4.10457 10 5 10.8954 5 12V13C5 14.1046 5.89543 15 7 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arm2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 12.5px' }" />
            <path d="M12 16V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12.8197 10H11.1803C9.77811 10 9.07704 10 8.56988 9.57641C8.06272 9.15282 7.89268 8.42526 7.55261 6.97014C7.01792 4.68228 6.75058 3.53835 7.31199 2.76918C7.87341 2 8.97569 2 11.1803 2H12.8197C15.0243 2 16.1266 2 16.688 2.76918C17.2494 3.53835 16.9821 4.68228 16.4474 6.97014C16.1073 8.42526 15.9373 9.15282 15.4301 9.57641C14.923 10 14.2219 10 12.8197 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
            <path d="M12 10V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
