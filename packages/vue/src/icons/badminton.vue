<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BadmintonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// racket and shuttle swing from the grip as one piece, then settle
// authored from scripts/authored
const shuttleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.60px, 0.48px) rotate(-12deg)',
      'translate(-0.34px, -0.39px) rotate(8deg)',
      'translate(0.14px, 0.13px) rotate(-3deg)',
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

const shaftVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.51px, -0.43px) rotate(-12deg)',
      'translate(0.28px, 0.34px) rotate(8deg)',
      'translate(-0.12px, -0.12px) rotate(-3deg)',
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

const headVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.11px, -1.71px) rotate(-12deg)',
      'translate(1.19px, 1.37px) rotate(8deg)',
      'translate(-0.49px, -0.47px) rotate(-3deg)',
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
            <motion.path d="M2.39114 21.6387C1.81409 21.0816 1.8854 20.1398 2.53981 19.6752L6.17145 17.097C6.38333 16.9465 6.6739 16.9737 6.85404 17.1607C7.02764 17.3409 7.0488 17.6183 6.90454 17.8226L4.3387 21.4558C3.88384 22.0999 2.95883 22.1867 2.39114 21.6387Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shuttleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.4px 19.6px' }" />
            <motion.path d="M11.5 12.5L7 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.3px 14.8px' }" />
            <motion.path d="M19.4291 12.5774C17.534 14.4725 13.869 14.5529 11.6581 12.3419C9.44711 10.131 9.52748 6.46597 11.4226 4.57087C13.912 2.08144 18.5975 0.980641 20.8084 3.19159C23.0194 5.40254 21.9186 10.088 19.4291 12.5774Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.2px 7.8px' }" />
          </svg>
        </div>
</template>
