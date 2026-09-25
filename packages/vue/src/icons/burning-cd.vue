<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BurningCdIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two disc arcs sweep while the case stays shut
// authored from scripts/authored
const discVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.7,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const disc2Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.78,
      delay: 0.08,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
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
            <path d="M15 16.5C15 18.8456 15 20.0184 14.3237 20.8263C14.1496 21.0343 13.9465 21.2205 13.7196 21.3801C12.8382 22 11.5588 22 9 22C6.44119 22 5.16178 22 4.28042 21.3801C4.05351 21.2205 3.85041 21.0343 3.6763 20.8263C3 20.0184 3 18.8456 3 16.5L3 7.5C3 5.15442 3 3.98164 3.6763 3.17372C3.85041 2.96572 4.05351 2.77954 4.28042 2.61994C5.16179 2 6.44119 2 9 2C11.5588 2 12.8382 2 13.7196 2.61994C13.9465 2.77954 14.1496 2.96572 14.3237 3.17372C15 3.98164 15 5.15443 15 7.5L15 16.5Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M12 13.5L12 10.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9" stroke="currentColor" stroke-width="1.5" :variants="discVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 19C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="disc2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
