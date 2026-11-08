<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LockKeyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the key turns in the lock
// authored from scripts/authored
const keyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(3.01px, 0.87px) rotate(-40deg)',
      'translate(2.21px, 0.85px) rotate(-30deg)',
      'translate(2.53px, 0.88px) rotate(-34deg)',
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

const key2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.80px, -1.60px) rotate(-40deg)',
      'translate(-0.50px, -1.26px) rotate(-30deg)',
      'translate(-0.61px, -1.40px) rotate(-34deg)',
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
            <path d="M18 10.9971C17.6078 10.1968 16.5481 9.02153 14.3703 9.07154C14.3703 9.07154 12.6431 8.99652 10.6906 8.99652C8.73815 8.99652 7.82408 9.04224 6.25999 9.07154C5.25872 9.04653 3.35629 9.2716 2.48017 11.3472C1.90444 13.0976 1.87941 16.7736 2.22986 18.6241C2.30495 19.5744 2.80559 20.8998 4.35757 21.6C5.30878 22.1001 6.83573 21.9 7.98719 22.0001M5.98464 8.1963C5.93458 5.82065 5.83445 3.94514 8.58796 2.39472C9.51414 2.01962 10.8909 1.69453 12.5931 2.49475C14.3703 3.57004 14.5917 4.70802 14.7458 4.99543C15.1713 6.12074 14.9461 7.72117 14.9961 8.37135" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15.5 19.7351C15.5 20.9792 14.4911 21.9656 13.2552 21.9656C12.0194 21.9656 11 20.9792 11 19.7351C11 18.4911 12.0194 17.4915 13.2552 17.4915C14.4911 17.4915 15.5 18.4911 15.5 19.7351Z" stroke="currentColor" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 19.7px' }" />
            <motion.path d="M22 15.8482L20.3731 14.3089C19.6 13.5692 18.95 14.2149 18.6264 14.4906L17.2156 15.8482L15.225 17.7909M17.2156 15.8482L18.825 17.3936" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="key2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.6px 15.7px' }" />
          </svg>
        </div>
</template>
