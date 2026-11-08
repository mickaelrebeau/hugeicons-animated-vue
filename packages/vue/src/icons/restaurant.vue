<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RestaurantIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the awning ripples and the chairs slide out from the table
// authored from scripts/authored
const chairVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0px)',
      'translate(0.12px, 0px)',
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

const awningVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const chair2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, 0px)',
      'translate(-0.12px, 0px)',
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
            <motion.path d="M3 12V17M3 17H5C6.41421 17 7.12132 17 7.56066 17.4393C8 17.8787 8 18.5858 8 20V21M3 17V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chairVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 16.5px' }" />
            <motion.path d="M4 7L9.31672 4.08345C10.6334 3.36115 11.2918 3 12 3C12.7082 3 13.3666 3.36115 14.6833 4.08345L20 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="awningVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <path d="M18 6V10M6 6V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21 12V17M21 17H19C17.5858 17 16.8787 17 16.4393 17.4393C16 17.8787 16 18.5858 16 20V21M21 17V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chair2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 16.5px' }" />
            <path d="M7 14H12M17 14H12M12 14V21M12 21H11M12 21H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
