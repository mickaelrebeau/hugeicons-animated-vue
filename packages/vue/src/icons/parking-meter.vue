<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ParkingMeterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the needle sweeps on the meter
// authored from scripts/authored
const needleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.30px, 0.75px) rotate(-60deg)',
      'translate(0.51px, 0.09px) rotate(20deg)',
      'translate(-0.16px, 0.01px) rotate(-6deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const dialVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M12 2C8.13398 2 4.99997 5.13401 4.99997 9C4.99997 10.5151 5.48133 11.9178 6.29947 13.0635C6.55866 13.4264 6.68827 13.608 6.73978 13.6988C6.90985 13.9988 6.95318 14.134 6.98909 14.4769C6.99997 14.5808 6.99997 14.7173 6.99997 14.9904C6.99997 15.9293 6.99997 16.3988 7.10416 16.7838C7.38276 17.8131 8.18685 18.6172 9.21621 18.8958C9.60116 19 10.0706 19 11.0096 19H12.9903C13.9293 19 14.3988 19 14.7837 18.8958C15.8131 18.6172 16.6172 17.8131 16.8958 16.7838C17 16.3988 17 15.9293 17 14.9904C17 14.7173 17 14.5808 17.0108 14.4769C17.0468 14.134 17.0901 13.9988 17.2602 13.6988C17.3117 13.6079 17.4413 13.4265 17.7005 13.0635C18.5186 11.9178 19 10.5151 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M11 15H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 15V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="needleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
            <path d="M12 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dialVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
