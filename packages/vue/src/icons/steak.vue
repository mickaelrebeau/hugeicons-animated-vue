<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SteakIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the steak sizzles and the bone pops
// authored from scripts/authored
const steakVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const boneVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.14,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sizzleVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateY(0px)',
      'translateY(0px)',
      'translateY(-1px)',
      'translateY(-1.6px)',
      'translateY(-1.6px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.5, 0.86, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        'linear',
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
            <motion.path d="M17 16C19.7614 16 22 13.7614 22 11C22 9.87418 21.6279 8.83526 21 7.99951C18.8745 5.17054 16 4 12 4C8 4 2 6.86508 2 10.5C2 11.8807 3.11929 13 4.5 13H8C9.32374 12.9675 12 13.5 14.2356 15.167C15.0274 15.6933 15.9779 16 17 16Z" stroke="currentColor" stroke-width="1.5" :variants="steakVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M2 10.5V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17C9.32374 16.9675 12 17.5 14.2356 19.167C15.0274 19.6933 15.9779 20 17 20C19.7614 20 22 17.7614 22 15V11" stroke="currentColor" stroke-width="1.5" :variants="steakVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.3px' }" />
            <motion.path d="M18.5 11C18.5 11.8284 17.8284 12.5 17 12.5C16.1716 12.5 15.5 11.8284 15.5 11C15.5 10.1716 16.1716 9.5 17 9.5C17.8284 9.5 18.5 10.1716 18.5 11Z" stroke="currentColor" stroke-width="1.5" :variants="boneVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 11px' }" />
            <motion.path d="M8 2.5V1M12 2.5V1M16 2.5V1" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="sizzleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
