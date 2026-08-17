<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AstronautIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the visor blinks in zero-g, the helmet drifts a half-turn, and the star-glints rewrite themselves
// authored from scripts/authored
const visorVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg) scaleY(1)',
      'translate(-0.6px, -1.1px) rotate(-6deg) scaleY(0.28)',
      'translate(0.8px, -1.8px) rotate(5deg) scaleY(1.08)',
      'translate(-0.2px, -0.4px) rotate(-1.5deg) scaleY(1)',
      'translate(0px, 0px) rotate(0deg) scaleY(1)',
    ],
    transition: {
      duration: 0.88,
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

const helmetVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg)',
      'translate(-0.6px, -1.1px) rotate(-6deg)',
      'translate(0.8px, -1.8px) rotate(5deg)',
      'translate(-0.2px, -0.4px) rotate(-1.5deg)',
      'translate(0px, 0px) rotate(0deg)',
    ],
    transition: {
      duration: 0.88,
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

const glintsVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.6px, -1.1px)',
      'translate(0.8px, -1.8px)',
      'translate(-0.2px, -0.4px)',
      'translate(0px, 0px)',
    ],
    pathLength: [1, 0.001, 0.001, 1, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.88,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        'linear',
        'linear',
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
            <motion.circle cx="12" cy="11" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="visorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M17.6573 18C19.6963 16.35 21 13.8273 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="helmetVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M18.4998 17.5L14.1211 13.1213M17.9998 5L14.1211 8.87868" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="glintsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.3px 11.3px' }" />
            <path d="M18 18H5C4.05719 18 3.58579 18 3.29289 18.2929C3 18.5858 3 19.0572 3 20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H20C20.5523 22 21 21.5523 21 21C21 19.3431 19.6569 18 18 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
