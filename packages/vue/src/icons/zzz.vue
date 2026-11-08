<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ZzzIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the Zs float up and fade in turn
// authored from scripts/authored
const zVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(1.2px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.8,
      delay: 0,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeOut',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const z2Variants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(1.2px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.8,
      delay: 0.24,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeOut',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const z3Variants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(1.2px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.8,
      delay: 0.12,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeOut',
        'linear',
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
            <motion.path d="M6 16H10L6 20H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="zVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 18px' }" />
            <motion.path d="M4 4H11L4 12H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="z2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 8px' }" />
            <motion.path d="M14 9H20L14 15H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="z3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
          </svg>
        </div>
</template>
