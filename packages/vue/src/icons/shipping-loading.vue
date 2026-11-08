<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShippingLoadingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the parcel hops on the conveyor as the rollers spin
// authored from scripts/authored
const parcelVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rollerVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 0.1, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const roller2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 0.1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const roller3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 0.1, 1, 1],
    transition: { duration: 0.8, delay: 0.05, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M4 9.87755V6H18V9.87755C18 12.7637 18 14.2068 17.0888 15.1034C16.1776 16 14.711 16 11.7778 16H10.2222C7.28904 16 5.82245 16 4.91122 15.1034C4 14.2068 4 12.7637 4 9.87755Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="parcelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 11px' }" />
            <motion.path d="M4 6L4.67308 4.46154C5.19508 3.26838 5.45609 2.6718 5.98513 2.3359C6.51417 2 7.19278 2 8.55 2H13.45C14.8072 2 15.4858 2 16.0149 2.3359C16.5439 2.6718 16.8049 3.26838 17.3269 4.46154L18 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="parcelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 4px' }" />
            <motion.path d="M9.5 9H12.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="parcelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 9px' }" />
            <path d="M3 16H18C19.6569 16 21 17.3431 21 19C21 20.6569 19.6569 22 18 22H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11.125 19H11M11.25 19C11.25 19.1381 11.1381 19.25 11 19.25C10.8619 19.25 10.75 19.1381 10.75 19C10.75 18.8619 10.8619 18.75 11 18.75C11.1381 18.75 11.25 18.8619 11.25 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rollerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.125 19H17M17.25 19C17.25 19.1381 17.1381 19.25 17 19.25C16.8619 19.25 16.75 19.1381 16.75 19C16.75 18.8619 16.8619 18.75 17 18.75C17.1381 18.75 17.25 18.8619 17.25 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="roller2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.125 19H5M5.25 19C5.25 19.1381 5.13807 19.25 5 19.25C4.86193 19.25 4.75 19.1381 4.75 19C4.75 18.8619 4.86193 18.75 5 18.75C5.13807 18.75 5.25 18.8619 5.25 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="roller3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
