<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BodyPartLegIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// thigh, calf and crease kick from the hip as one limb
// authored from scripts/authored
const thighVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.25px, 1.36px) rotate(12deg)',
      'translate(1.00px, -0.85px) rotate(-6deg)',
      'translate(-0.35px, 0.26px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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

const calfVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.18px, 0.30px) rotate(12deg)',
      'translate(1.55px, -0.40px) rotate(-6deg)',
      'translate(-0.53px, 0.10px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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

const creaseVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.43px, 0.59px) rotate(12deg)',
      'translate(0.66px, -0.40px) rotate(-6deg)',
      'translate(-0.23px, 0.12px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
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
            <motion.path d="M5.00183 2C7.69316 2.31359 13.8994 3.89572 16.6428 7.74552C16.9785 8.21643 17.3319 8.54976 17.9113 8.69637C18.6361 8.87638 19.2359 9.36245 19.4537 10.0961C19.6856 10.8944 20.1138 11.7364 19.9778 12.5901C19.9257 12.9169 19.7657 13.218 19.4457 13.82L15.0988 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="thighVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.6px 12px' }" />
            <motion.path d="M4.00183 12C5.00183 13.7264 8.16622 14.5959 12.0018 13.7264C11.4156 14.0677 10.4146 14.6835 9.31712 15.9511C8.75814 16.5968 8.51959 17.4954 8.48067 18.4026C8.42865 19.615 8.24879 20.9338 7.62683 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="calfVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 17px' }" />
            <motion.path d="M5.00183 7C5.00183 7 6.9608 7.28919 8.50183 8.5C9.50183 9.28571 11.4185 9.80952 12.0018 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="creaseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 8.5px' }" />
          </svg>
        </div>
</template>
