<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DiscountTagIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash writes on the tag and its dots pop
// authored from scripts/authored
const slashVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const dot2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M17.2426 6.24264L13.7071 2.70711C13.2544 2.25435 12.6403 2 12 2C11.3597 2 10.7456 2.25435 10.2929 2.70711L6.75736 6.24264C5.89027 7.10973 5.45672 7.54328 5.22836 8.09459C5 8.6459 5 9.25903 5 10.4853V16C5 18.8284 5 20.2426 5.87868 21.1213C6.75736 22 8.17157 22 11 22H13C15.8284 22 17.2426 22 18.1213 21.1213C19 20.2426 19 18.8284 19 16V10.4853C19 9.25903 19 8.6459 18.7716 8.09459C18.5433 7.54328 18.1097 7.10973 17.2426 6.24264Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12.25 7H12M12.5 7C12.5 7.27614 12.2761 7.5 12 7.5C11.7239 7.5 11.5 7.27614 11.5 7C11.5 6.72386 11.7239 6.5 12 6.5C12.2761 6.5 12.5 6.72386 12.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.5 13L9.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.875 13.25H9.75M10 13.25C10 13.3881 9.88807 13.5 9.75 13.5C9.61193 13.5 9.5 13.3881 9.5 13.25C9.5 13.1119 9.61193 13 9.75 13C9.88807 13 10 13.1119 10 13.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.8px 13.3px' }" />
            <motion.path d="M14.375 17.75H14.25M14.5 17.75C14.5 17.8881 14.3881 18 14.25 18C14.1119 18 14 17.8881 14 17.75C14 17.6119 14.1119 17.5 14.25 17.5C14.3881 17.5 14.5 17.6119 14.5 17.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dot2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.3px 17.8px' }" />
          </svg>
        </div>
</template>
