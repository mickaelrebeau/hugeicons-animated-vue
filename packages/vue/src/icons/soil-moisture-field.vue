<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SoilMoistureFieldIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sprout lifts and the water drop falls into the soil
// authored from scripts/authored
const leafVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.48px, 0.57px) rotate(-10deg)',
      'translate(0.39px, -0.34px) rotate(7deg)',
      'translate(-0.15px, 0.16px) rotate(-3deg)',
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

const leaf2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.32px, 0.38px) rotate(10deg)',
      'translate(-0.26px, -0.23px) rotate(-7deg)',
      'translate(0.10px, 0.11px) rotate(3deg)',
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

const lineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line2Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.28,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line3Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.36,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dropVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.4px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M2 3C3.86377 3 4.79565 3 5.53073 3.30448C6.51085 3.71046 7.28954 4.48915 7.69552 5.46927C8 6.20435 8 7.13623 8 9C6.13623 9 5.20435 9 4.46927 8.69552C3.48915 8.28954 2.71046 7.51085 2.30448 6.53073C2 5.79565 2 4.86377 2 3Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 6px' }" />
            <motion.path d="M12 5C10.7575 5 10.1362 5 9.64618 5.20299C8.99277 5.47364 8.47364 5.99277 8.20299 6.64618C8 7.13623 8 7.75749 8 9C9.24251 9 9.86377 9 10.3538 8.79701C11.0072 8.52636 11.5264 8.00723 11.797 7.35382C12 6.86377 12 6.24251 12 5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="leaf2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 7px' }" />
            <path d="M8 9V14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M12 14L2 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 17L2 17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="line2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 20L2 20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="line3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 18.5034C16 17.2482 17.0532 16.0077 17.7924 15.2917C18.1939 14.9028 18.8061 14.9028 19.2076 15.2917C19.9468 16.0077 21 17.2482 21 18.5034C21 19.7341 20.0533 21 18.5 21C16.9467 21 16 19.7341 16 18.5034Z" stroke="currentColor" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18px' }" />
          </svg>
        </div>
</template>
