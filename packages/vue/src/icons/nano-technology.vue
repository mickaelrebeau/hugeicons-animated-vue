<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NanoTechnologyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the atoms pulse out from the hexagon core
// authored from scripts/authored
const atomVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
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

const atom2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
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

const atom3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.26,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const coreVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(12deg)',
      'rotate(42deg)',
      'rotate(61.800000000000004deg)',
      'rotate(60deg)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.circle cx="12" cy="3.5" r="1.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="atomVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <motion.circle cx="12" cy="20.5" r="1.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="atomVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.circle cx="3.5" cy="7.5" r="1.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="atom2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 7.5px' }" />
            <motion.circle cx="20.5" cy="7.5" r="1.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="atom2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 7.5px' }" />
            <motion.circle cx="20.5" cy="16.5" r="1.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="atom3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 16.5px' }" />
            <motion.circle cx="3.5" cy="16.5" r="1.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="atom3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 16.5px' }" />
            <motion.path d="M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="coreVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
