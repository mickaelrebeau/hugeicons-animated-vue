<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BalloonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the balloon sways from the held end of its string, skin glint and tail locked together
// authored from scripts/authored
const skinVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.81px, -0.85px) rotate(-8deg)',
      'translate(1.47px, 0.95px) rotate(7deg)',
      'translate(-0.55px, -0.29px) rotate(-2.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.78,
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

const glintVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.17px, -0.97px) rotate(-8deg)',
      'translate(1.77px, 1.09px) rotate(7deg)',
      'translate(-0.66px, -0.33px) rotate(-2.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.78,
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

const tailVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.38px, -0.46px) rotate(-8deg)',
      'translate(0.28px, 0.45px) rotate(7deg)',
      'translate(-0.11px, -0.15px) rotate(-2.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.78,
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
            <motion.path d="M12.5 17C14.5 17 18.5 12.5 18.5 8C18.5 4.68629 15.8137 2 12.5 2C9.18629 2 6.5 4.68629 6.5 8C6.5 12.5 10.5 17 12.5 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="skinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 9.5px' }" />
            <motion.path d="M14.5 8C14.5 6.89543 13.6046 6 12.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="glintVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 7px' }" />
            <motion.path d="M5.5 22C5.5 20.8954 6.39543 20 7.5 20H9.5C10.4319 20 10.8978 20 11.2654 19.8478C11.7554 19.6448 12.1448 19.2554 12.3478 18.7654C12.5 18.3978 12.5 17.9319 12.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 19.5px' }" />
          </svg>
        </div>
</template>
