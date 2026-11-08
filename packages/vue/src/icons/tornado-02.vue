<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tornado02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the funnel strokes whip side to side from the top down
// authored from scripts/authored
const bandVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const band2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.06, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const band3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.24, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const band4Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.12, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const band5Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.18, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M9.01654 6.15879C10.9944 4.77262 17.9171 3.55944 18.906 6.15879C20.3862 10.0497 3.87743 12.3805 5.06077 6.15849C5.55508 3.55944 10.5002 2 12.9725 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 7.2px' }" />
            <motion.path d="M18 11.1934C15.423 13.0706 8.5771 13.8244 6 11.7816" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="band2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M14.0219 21.6941C13.0436 21.8816 12.0077 21.989 11 21.9995" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="band3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 21.8px' }" />
            <motion.path d="M7 15.166C9.07731 16.0444 12.3835 15.9574 15 15.2812" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="band4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 15.6px' }" />
            <motion.path d="M8.03906 18.5039C9.49304 18.8598 11.2867 18.8854 12.9988 18.6635" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="band5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 18.7px' }" />
          </svg>
        </div>
</template>
