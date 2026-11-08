<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlameKindlingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame flickers over the crossed sticks
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1) skewX(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
      'translate(0px, -0.52px) scaleY(1.08) skewX(-4deg)',
      'translate(0px, 0.39px) scaleY(0.94) skewX(3deg)',
      'translate(0px, -0.33px) scaleY(1.05) skewX(-2deg)',
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const stickVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.4px)',
      'translate(0px, -0.048px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M12 15C14.7614 15 17 12.8174 17 10.125C17 9.475 17 8.175 15.6667 6.55C15.6667 6.55 15.6003 8.40484 14.2842 8.13653C12.1554 7.70256 14.9034 3.62692 11 2C11 5.25 7 6.225 7 10.125C7 12.8174 9.23858 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
            <motion.path d="M4 22L20 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
            <motion.path d="M20 22L3.99997 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
          </svg>
        </div>
</template>
