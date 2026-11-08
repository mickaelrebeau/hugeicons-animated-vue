<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Car01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the headlights flash twice and throw light out to both sides
// authored from scripts/authored
const beamVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.4)', 'scale(1)', 'scale(1.4)', 'scale(1)', 'scale(1)'],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.86, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const shineVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(-0.3px)',
      'translateX(0px)',
      'translateX(-0.3px)',
      'translateX(0px)',
      'translateX(0px)',
    ],
    opacity: [0, 1, 0, 1, 0, 0],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.86, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const shine2Variants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(0.3px)',
      'translateX(0px)',
      'translateX(0.3px)',
      'translateX(0px)',
      'translateX(0px)',
    ],
    opacity: [0, 1, 0, 1, 0, 0],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.86, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M2.5 12L4.5 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12.5px' }" />
            <motion.path d="M21.5 12.5L19.5 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 12.8px' }" />
            <path d="M8 17.5L8.24567 16.8858C8.61101 15.9725 8.79368 15.5158 9.17461 15.2579C9.55553 15 10.0474 15 11.0311 15H12.9689C13.9526 15 14.4445 15 14.8254 15.2579C15.2063 15.5158 15.389 15.9725 15.7543 16.8858L16 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 17V19.882C2 20.2607 2.24075 20.607 2.62188 20.7764C2.86918 20.8863 3.10538 21 3.39058 21H5.10942C5.39462 21 5.63082 20.8863 5.87812 20.7764C6.25925 20.607 6.5 20.2607 6.5 19.882V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17.5 18V19.882C17.5 20.2607 17.7408 20.607 18.1219 20.7764C18.3692 20.8863 18.6054 21 18.8906 21H20.6094C20.8946 21 21.1308 20.8863 21.3781 20.7764C21.7592 20.607 22 20.2607 22 19.882V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M20 8.5L21 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4 8.5L3 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4.5 9L5.5883 5.73509C6.02832 4.41505 6.24832 3.75503 6.7721 3.37752C7.29587 3 7.99159 3 9.38304 3H14.617C16.0084 3 16.7041 3 17.2279 3.37752C17.7517 3.75503 17.9717 4.41505 18.4117 5.73509L19.5 9" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4.5 9H19.5C20.4572 10.0135 22 11.4249 22 12.9996V16.4702C22 17.0407 21.6205 17.5208 21.1168 17.5875L18 18H6L2.88316 17.5875C2.37955 17.5208 2 17.0407 2 16.4702V12.9996C2 11.4249 3.54279 10.0135 4.5 9Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M1.3 11.3L0.5 10.8M1.3 12.8H0.3M1.3 14.3L0.5 14.8" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="shineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22.7 11.3L23.5 10.8M22.7 12.8H23.7M22.7 14.3L23.5 14.8" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="shine2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
