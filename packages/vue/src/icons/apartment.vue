<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ApartmentIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the left tower lights floor by floor, then the right wing answers
// authored from scripts/authored
const towerLeftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.92)', 'scaleY(1.02)', 'scaleY(1)'],
    transition: { duration: 0.58, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const windowsLeftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.15)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.56, delay: 0.06, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const doorVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.16, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const wingRightVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.88)', 'scaleY(1.03)', 'scaleY(1)'],
    transition: { duration: 0.58, delay: 0.1, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const windowsRightVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.15)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.56, delay: 0.18, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M9.5 2.5H6.5C4.61438 2.5 3.67157 2.5 3.08579 3.08579C2.5 3.67157 2.5 4.61438 2.5 6.5V17.5C2.5 19.3856 2.5 20.3284 3.08579 20.9142C3.67157 21.5 4.61438 21.5 6.5 21.5H13.5V6.5C13.5 4.61438 13.5 3.67157 12.9142 3.08579C12.3284 2.5 11.3856 2.5 9.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="towerLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 21.5px' }" />
            <motion.path d="M5.5 5.5H6.5M9.5 5.5H10.5M5.5 8.5H6.5M9.5 8.5H10.5M5.5 11.5H6.5M9.5 11.5H10.5M5.5 14.5H6.5M9.5 14.5H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowsLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 10px' }" />
            <motion.path d="M8 21.5V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="doorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 21.5px' }" />
            <motion.path d="M17.5 7.5H13.5V21.5H17.5C19.3856 21.5 20.3284 21.5 20.9142 20.9142C21.5 20.3284 21.5 19.3856 21.5 17.5V11.5C21.5 9.61438 21.5 8.67157 20.9142 8.08579C20.3284 7.5 19.3856 7.5 17.5 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wingRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 21.5px' }" />
            <motion.path d="M17 10.5H18M17 13.5H18M17 16.5H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowsRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 13.5px' }" />
          </svg>
        </div>
</template>
