<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HijabIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the scarf drapes and the face nods
// authored from scripts/authored
const faceVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.42px, 0.02px) rotate(6deg)',
      'translate(-0.21px, 0.01px) rotate(-3deg)',
      'translate(0.07px, 0.00px) rotate(1deg)',
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

const drapeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.58px, 0.07px) rotate(-6deg)',
      'translate(-0.38px, -0.08px) rotate(4deg)',
      'translate(0.10px, 0.02px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.06,
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

const face2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.52px, 0.03px) rotate(6deg)',
      'translate(-0.26px, 0.01px) rotate(-3deg)',
      'translate(0.09px, 0.00px) rotate(1deg)',
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
            <motion.path d="M12 5C10.3431 5 9 6.34315 9 8V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V8C15 6.34315 13.6569 5 12 5Z" stroke="currentColor" stroke-width="1.5" :variants="faceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M15 10C15 12.5 14.68 14.4 11.2667 16C7.85333 17.6 7 19.8333 7 21" stroke="currentColor" stroke-width="1.5" :variants="drapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 15.5px' }" />
            <motion.path d="M9 8H15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="face2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <path d="M17.8022 7.51864C17.8022 4.47078 15.2045 2 12 2C8.79554 2 6.19782 4.47078 6.19782 7.51864C6.19782 9.61659 5.45992 13.4691 3.05841 16.4349C2.31105 17.3578 1.93737 17.8193 2.00859 18.244C2.0798 18.6687 2.48003 18.9288 3.28049 19.4489C8.51571 22.8504 15.4843 22.8504 20.7195 19.4489C21.52 18.9288 21.9202 18.6687 21.9914 18.244C22.0626 17.8193 21.689 17.3578 20.9416 16.4349C18.5401 13.4691 17.8022 9.61659 17.8022 7.51864Z" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
