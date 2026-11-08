<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InternetAntenna02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arcs broadcast over the stand
// authored from scripts/authored
const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
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

const waveVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.2, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const wave2Variants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.1, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.circle cx="12" cy="12" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="waveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="wave2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <path d="M12 14L12 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M13.2623 19H10.7377C10.4667 19 10.3312 19 10.2019 19.0183C9.94003 19.0552 9.69171 19.1474 9.4774 19.2873C9.37156 19.3564 9.27574 19.4423 9.08411 19.614C8.45381 20.1791 8.13866 20.4616 8.05571 20.6884C7.88399 21.1577 8.12031 21.6692 8.61197 21.8923C8.84946 22 9.29515 22 10.1865 22H13.8135C14.7049 22 15.1505 22 15.388 21.8923C15.8797 21.6692 16.116 21.1577 15.9443 20.6884C15.8613 20.4616 15.5462 20.1791 14.9159 19.614C14.7243 19.4423 14.6284 19.3564 14.5226 19.2873C14.3083 19.1474 14.06 19.0552 13.7981 19.0183C13.6688 19 13.5333 19 13.2623 19Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
