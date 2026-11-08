<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mosque02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the crescent tips on the dome and the minaret answers
// authored from scripts/authored
const minaretVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.14,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const crescentVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.03px, 0.18px) rotate(-20deg)',
      'translate(0.62px, 0.07px) rotate(12deg)',
      'translate(-0.21px, 0.01px) rotate(-4deg)',
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
            <path d="M5.46474 13C2.34824 9.5 7.66448 7.75 9 6C10.3357 7.75 15.652 9.5 12.5354 13H5.46474Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17.7631 7C15.704 4.5 18.3676 3.25 19.25 2C20.1325 3.25 22.796 4.5 20.7369 7H17.7631Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="minaretVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.3px 4.5px' }" />
            <motion.path d="M10 3.65685C9.78799 3.86887 9.49509 4 9.17157 4C8.52453 4 8 3.47547 8 2.82843C8 2.50491 8.13113 2.21201 8.34315 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="crescentVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 3px' }" />
            <path d="M9 4V5V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17 17V22H4.14286C3.1327 22 2.62763 22 2.31381 21.7071C2 21.4142 2 20.9428 2 20V17C2 15.1144 2 14.1716 2.62763 13.5858C3.25526 13 4.26541 13 6.28571 13H12.7143C14.7346 13 15.7447 13 16.3724 13.5858C17 14.1716 17 15.1144 17 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M15 22H17.6871C19.8378 22 20.9131 22 21.5333 21.342C22.1535 20.684 22.0465 19.6567 21.8325 17.602L20.7283 7H17.6038L16.6317 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7.00009 22V20C6.98279 17 9.5 16 9.5 16C9.5 16 12.0172 17 11.9999 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
