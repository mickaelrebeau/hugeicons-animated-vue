<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BombIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spark walks the fuse down to the still charge, eating the wick as it goes
// authored from scripts/authored
const sparkVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-3.5px, 0px)',
      'translate(-8.64px, -3.73px)',
      'translate(-11.45px, -1px)',
      'translate(-11.45px, -1px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.86,
      times: [0, 0.14, 0.34, 0.52, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const fuseVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.82, 0.45, 0.12, 0.12, 1],
    pathOffset: [0, 0.18, 0.55, 0.88, 0.88, 0],
    transition: {
      duration: 0.86,
      times: [0, 0.14, 0.34, 0.52, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <path d="M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M12 8.5L11.4685 7.17126C11.3094 6.77352 11.2299 6.57465 11.1227 6.40981C10.8287 5.95761 10.3645 5.64333 9.83543 5.53829C9.64256 5.5 9.42838 5.5 9 5.5C8.57162 5.5 8.35744 5.5 8.16457 5.53829C7.63553 5.64333 7.17133 5.95761 6.87732 6.40981C6.77014 6.57465 6.69059 6.77352 6.5315 7.17126L6 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M22 7.5L20.5 6M20.5 6L19 4.5M20.5 6L19 7.5M20.5 6L22 4.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 6px' }" />
            <motion.path d="M17 5.99993C14 5.99993 14.4095 3.43983 11.8598 2.26722C9.61977 1.23706 8.77077 3.40757 9.05199 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fuseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.9px 3.6px' }" />
          </svg>
        </div>
</template>
