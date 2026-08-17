<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BackpackIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the waist zip redraws, then both hip straps clip onto the still bag
// authored from scripts/authored
const zipVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.62,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const handleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0.16799999999999998px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.08,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const strapLVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.4px, 0px)',
      'translate(0.196px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.16,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const strapRVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 0px)',
      'translate(-0.196px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.22,
      times: [0, 0.12, 0.62, 1],
      ease: [
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
            <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V16.3333C19 17.8847 19 18.6604 18.7877 19.2858C18.388 20.4633 17.4633 21.388 16.2858 21.7877C15.6604 22 14.8847 22 13.3333 22H10.6667C9.11529 22 8.3396 22 7.71424 21.7877C6.53668 21.388 5.61201 20.4633 5.21228 19.2858C5 18.6604 5 17.8847 5 16.3333V12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5 17C6.64996 15.17 9.17273 14 12 14C14.8273 14 17.35 15.17 19 17" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="zipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
            <path d="M11 10H13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M9 6V5C9 4.06812 9 3.60218 9.15224 3.23463C9.35523 2.74458 9.74458 2.35523 10.2346 2.15224C10.6022 2 11.0681 2 12 2C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5V6" stroke="currentColor" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M5 19H3.71429C2.76751 19 2 18.2325 2 17.2857L2 16C2 14.3431 3.34315 13 5 13" stroke="currentColor" stroke-width="1.5" :variants="strapLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 16px' }" />
            <motion.path d="M19 19H20.2857C21.2325 19 22 18.2325 22 17.2857L22 16C22 14.3431 20.6569 13 19 13" stroke="currentColor" stroke-width="1.5" :variants="strapRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 16px' }" />
          </svg>
        </div>
</template>
