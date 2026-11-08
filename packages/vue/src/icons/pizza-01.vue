<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Pizza01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the toppings pop one after another across the slice
// authored from scripts/authored
const toppingVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const topping2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.12,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const topping3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.24,
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
            <path d="M10.2201 18.821L18.6793 13.1312C20.1246 12.159 20.8472 11.673 20.9785 10.7879C21.1098 9.90283 20.6352 9.30806 19.686 8.11852C17.5076 5.3886 14.548 3.35345 11.1624 2.38141C9.87428 2.01158 9.23023 1.82667 8.53978 2.2186C7.84933 2.61053 7.62404 3.37564 7.17348 4.90586L4.40648 14.3032C3.11201 18.6995 2.46477 20.8977 3.54764 21.7392C4.63051 22.5807 6.49371 21.3275 10.2201 18.821Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M7.5 5C7.5 5 8.03795 5.1182 8.90014 5.38146C11.6322 6.21565 14.0691 7.83278 16 10.0001" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M6.4203 7.95312C7.49617 8.24808 8.18093 9.23142 8.18093 10.4264C8.18093 12.0936 6.56098 13.3678 4.96094 12.9134" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="toppingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.6px 10.7px' }" />
            <motion.path d="M12.8361 16.7619C12.5399 15.6169 11.6875 15.0625 10.5384 15.0625C9.15372 15.0625 8.03125 16.2813 8.03125 17.7848C8.03125 18.5814 8.21305 19.1322 8.71526 19.63" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="topping2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.4px 17.3px' }" />
            <motion.path d="M13.125 11H13M13.25 11C13.25 11.1381 13.1381 11.25 13 11.25C12.8619 11.25 12.75 11.1381 12.75 11C12.75 10.8619 12.8619 10.75 13 10.75C13.1381 10.75 13.25 10.8619 13.25 11Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="topping3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 11px' }" />
          </svg>
        </div>
</template>
