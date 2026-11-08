<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Pen02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pen scribbles from its tip, clip and grip riding along
// authored from scripts/authored
const penVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.82px, -0.75px) rotate(-5deg)',
      'translate(0.53px, 0.57px) rotate(3.5deg)',
      'translate(-0.24px, -0.23px) rotate(-1.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
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

const pen2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.09px, -1.25px) rotate(-5deg)',
      'translate(0.69px, 0.93px) rotate(3.5deg)',
      'translate(-0.31px, -0.39px) rotate(-1.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
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

const pen3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.62px, -0.56px) rotate(-5deg)',
      'translate(0.40px, 0.42px) rotate(3.5deg)',
      'translate(-0.18px, -0.17px) rotate(-1.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
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
            <motion.path d="M3 21L3.85763 17.9983C3.951 17.6715 4.12612 17.3739 4.36646 17.1335L18.2062 3.29289C18.5967 2.90237 19.2299 2.90237 19.6204 3.29289L20.7062 4.37868C21.0967 4.7692 21.0967 5.40237 20.7062 5.79289L6.86646 19.6335C6.62612 19.8739 6.3285 20.049 6.00169 20.1424L3 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="penVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.9999 5.49854L18.3786 7.87722C19.3786 8.87722 19.8786 9.37721 19.8786 9.99854C19.8786 10.6199 19.3786 11.1199 18.3786 12.1199L17.4999 12.9985" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pen2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.9px 9.2px' }" />
            <motion.path d="M8.49994 12.9985L10.9999 15.4985" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pen3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.7px 14.2px' }" />
          </svg>
        </div>
</template>
