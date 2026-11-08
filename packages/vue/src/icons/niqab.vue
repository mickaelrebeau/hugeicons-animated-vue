<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NiqabIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the veil drapes and the eyes blink
// authored from scripts/authored
const veilVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.44px, -0.01px) rotate(-3deg)',
      'translate(-0.29px, -0.01px) rotate(2deg)',
      'translate(0.15px, -0.00px) rotate(-1deg)',
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

const veil2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.8)',
      'translate(0.00px, 0px) scaleX(1.06)',
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
            <path d="M12 5C10.3431 5 9 6.33121 9 7.97334V14.9111C9 16.0413 9.00455 17.2286 10.2346 17.7336C11.1 18.0888 12.9 18.0888 13.7654 17.7336C14.9954 17.2286 15 16.0413 15 14.9111V7.97334C15 6.33121 13.6569 5 12 5Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M17.8022 7.51864C17.8022 4.47078 15.2045 2 12 2C8.79554 2 6.19782 4.47078 6.19782 7.51864C6.19782 9.61659 5.45992 13.4691 3.05841 16.4349C2.31105 17.3578 1.93737 17.8193 2.00859 18.244C2.0798 18.6687 2.48003 18.9288 3.28049 19.4489C8.51571 22.8504 15.4843 22.8504 20.7195 19.4489C21.52 18.9288 21.9202 18.6687 21.9914 18.244C22.0626 17.8193 21.689 17.3578 20.9416 16.4349C18.5401 13.4691 17.8022 9.61659 17.8022 7.51864Z" stroke="currentColor" stroke-width="1.5" :variants="veilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.4px' }" />
            <path d="M9 8H15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M9 11H15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="veil2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
          </svg>
        </div>
</template>
