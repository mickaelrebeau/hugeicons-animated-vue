<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KidneysIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the kidneys take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.12deg)', 'scale(1.1) rotate(2.05deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.84px) rotate(-2.17deg)', 'translateY(0.43px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M9.98556 6C10.1428 4.59395 9.00449 3 6.57134 3C4.04666 3 1.99999 5.46243 1.99999 8.5C1.99999 11.5376 3.53887 14 6.06355 14C7.67995 14 8.53551 12.7459 8.35578 11.6589" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6.07px 8.5px' }" />
            <motion.path d="M7 8C8.50006 7.9996 10.4999 8.4957 10.4999 11.64C10.4999 15.8 8.49942 17.36 10.0005 21M17 8C15.4999 7.9996 13.5001 8.4957 13.5001 11.64C13.5001 15.8 15.5006 17.36 13.9995 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M6.61035 6C6.81406 6.57143 7.16038 7.94286 6.91592 8.85714C6.81407 9.2381 6.48829 10 6 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.0144 6C13.8572 4.59395 14.9955 3 17.4287 3C19.9533 3 22 5.46243 22 8.5C22 11.5376 20.4611 14 17.9364 14C16.2406 14 15.3822 12.6196 15.6783 11.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '17.93px 8.5px' }" />
            <motion.path d="M17.3897 6C17.1859 6.57143 16.8396 7.94286 17.0841 8.85714C17.1859 9.2381 17.5117 10 18 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
