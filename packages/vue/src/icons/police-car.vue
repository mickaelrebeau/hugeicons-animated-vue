<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PoliceCarIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the roof siren flashes and rays burst around it
// authored from scripts/authored
const sirenVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 0.15, 1, 1],
    transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const burstVariants: Variants = {
  normal: { transform: 'scale(0.4)', opacity: 0 },
  animate: {
    transform: ['scale(0.4)', 'scale(0.4)', 'scale(1)', 'scale(1.22)'],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.7,
      delay: 0.06,
      times: [0, 0.3, 0.46, 1],
      ease: [
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
            <path d="M2.5 13L4.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M21.5 13.5L19.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8 18.5L8.24567 17.8858C8.61101 16.9725 8.79368 16.5158 9.17461 16.2579C9.55553 16 10.0474 16 11.0311 16H12.9689C13.9526 16 14.4445 16 14.8254 16.2579C15.2063 16.5158 15.389 16.9725 15.7543 17.8858L16 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 18V20.882C2 21.2607 2.24075 21.607 2.62188 21.7764C2.86918 21.8863 3.10538 22 3.39058 22H5.10942C5.39462 22 5.63082 21.8863 5.87812 21.7764C6.25925 21.607 6.5 21.2607 6.5 20.882V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17.5 19V20.882C17.5 21.2607 17.7408 21.607 18.1219 21.7764C18.3692 21.8863 18.6054 22 18.8906 22H20.6094C20.8946 22 21.1308 21.8863 21.3781 21.7764C21.7592 21.607 22 21.2607 22 20.882V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M20 9.5L21 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4 9.5L3 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4.5 10.5L5.5883 7.50716C6.02832 6.29713 6.24832 5.69211 6.7721 5.34606C7.29587 5 7.99159 5 9.38304 5H14.617C16.0084 5 16.7041 5 17.2279 5.34606C17.7517 5.69211 17.9717 6.29713 18.4117 7.50716L19.5 10.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4.5 10.5H19.5C20.4572 11.4572 22 12.7902 22 14.2774V17.5552C22 18.094 21.6205 18.5474 21.1168 18.6104L18 19H6L2.88316 18.6104C2.37955 18.5474 2 18.094 2 17.5552V14.2774C2 12.7902 3.54279 11.4572 4.5 10.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 3.8C10 2.80589 10.5373 2 11.2 2H12H12.8C13.4627 2 14 2.80589 14 3.8C14 4.46274 13.6418 5 13.2 5H10.8C10.3582 5 10 4.46274 10 3.8Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="sirenVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.2 3.5L7.8 3.5M10.6 1.08L9.9 -0.14M13.4 1.08L14.1 -0.14M14.8 3.5L16.2 3.5M13.4 5.92L14.1 7.14M10.6 5.92L9.9 7.14" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="burstVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
