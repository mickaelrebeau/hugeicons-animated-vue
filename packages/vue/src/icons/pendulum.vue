<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PendulumIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the right ball swings in, knocks the left ball out, and it swings back
// authored from scripts/authored
const leftVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.35px, -0.14px) rotate(12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: { duration: 1.1, times: [0, 0.25, 0.5, 0.75, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const left2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.22px, -0.34px) rotate(12deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: { duration: 1.1, times: [0, 0.25, 0.5, 0.75, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const rightVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.00px, 0.19px) rotate(11deg)',
      'translate(-3.00px, 0.19px) rotate(11deg)',
      'translate(-3.00px, 0.19px) rotate(11deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: { duration: 1.1, times: [0, 0.25, 0.5, 0.75, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const right2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.26px, 0.13px) rotate(11deg)',
      'translate(-1.26px, 0.13px) rotate(11deg)',
      'translate(-1.26px, 0.13px) rotate(11deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: { duration: 1.1, times: [0, 0.25, 0.5, 0.75, 1], ease: [0.77, 0, 0.175, 1] },
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
            <path d="M2 3L20 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6.5 3V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 9.5px' }" />
            <path d="M11.5 3V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.circle cx="6.5" cy="18.5" r="2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="left2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 18.5px' }" />
            <circle cx="11.5" cy="18.5" r="2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.circle cx="19.5" cy="18.5" r="2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 18.5px' }" />
            <motion.path d="M19.5 16L17 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="right2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.3px 9.5px' }" />
          </svg>
        </div>
</template>
