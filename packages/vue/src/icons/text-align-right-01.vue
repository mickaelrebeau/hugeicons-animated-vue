<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TextAlignRight01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lines shrink back to the right margin bar, which nods
// authored from scripts/authored
const lineVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(2.75px, 0px) scaleX(0.45)',
      'translate(-0.25px, 0px) scaleX(1.05)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0,
      times: [0, 0.3, 0.64, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(1.38px, 0px) scaleX(0.45)',
      'translate(-0.13px, 0px) scaleX(1.05)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.08,
      times: [0, 0.3, 0.64, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(2.75px, 0px) scaleX(0.45)',
      'translate(-0.25px, 0px) scaleX(1.05)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.16,
      times: [0, 0.3, 0.64, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const line4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(1.38px, 0px) scaleX(0.45)',
      'translate(-0.13px, 0px) scaleX(1.05)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.24,
      times: [0, 0.3, 0.64, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const marginVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(0.9)',
      'translate(0px, 0.00px) scaleY(1.04)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M5 4.5H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 4.5px' }" />
            <motion.path d="M10 9.5H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="line2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 9.5px' }" />
            <motion.path d="M5 14.5H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="line3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 14.5px' }" />
            <motion.path d="M10 19.5H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="line4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 19.5px' }" />
            <motion.path d="M19 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="marginVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12px' }" />
          </svg>
        </div>
</template>
